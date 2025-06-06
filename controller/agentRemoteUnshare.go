package controller

import (
	"context"
	"github.com/go-openapi/runtime/middleware"
	"github.com/openziti/zrok/agent/agentGrpc"
	"github.com/openziti/zrok/controller/agentController"
	"github.com/openziti/zrok/rest_model_zrok"
	"github.com/openziti/zrok/rest_server_zrok/operations/agent"
	"github.com/sirupsen/logrus"
)

type agentRemoteUnshareHandler struct{}

func newAgentRemoteUnshareHandler() *agentRemoteUnshareHandler {
	return &agentRemoteUnshareHandler{}
}

func (h *agentRemoteUnshareHandler) Handle(params agent.RemoteUnshareParams, principal *rest_model_zrok.Principal) middleware.Responder {
	trx, err := str.Begin()
	if err != nil {
		logrus.Errorf("error starting transaction for '%v': %v", principal.Email, err)
		return agent.NewRemoteUnshareInternalServerError()
	}
	defer trx.Rollback()

	env, err := str.FindEnvironmentForAccount(params.Body.EnvZID, int(principal.ID), trx)
	if err != nil {
		logrus.Errorf("error finding environment '%v' for '%v': %v", params.Body.EnvZID, principal.Email, err)
		return agent.NewRemoteUnshareUnauthorized()
	}

	ae, err := str.FindAgentEnrollmentForEnvironment(env.Id, trx)
	if err != nil {
		logrus.Errorf("error finding agent enrollment for environment '%v' (%v): %v", params.Body.EnvZID, principal.Email, err)
		return agent.NewRemoteUnshareBadGateway()
	}
	_ = trx.Rollback() // ...or will block unshare trx on sqlite

	acli, aconn, err := agentController.NewAgentClient(ae.Token, cfg.AgentController)
	if err != nil {
		logrus.Errorf("error creating agent client for '%v' (%v): %v", params.Body.EnvZID, principal.Email, err)
		return agent.NewRemoteUnshareInternalServerError()
	}
	defer aconn.Close()

	req := &agentGrpc.ReleaseShareRequest{Token: params.Body.Token}
	_, err = acli.ReleaseShare(context.Background(), req)
	if err != nil {
		logrus.Errorf("error releasing share '%v' for '%v' (%v): %v", params.Body.Token, params.Body.EnvZID, principal.Email, err)
		return agent.NewRemoteUnshareBadGateway()
	}

	return agent.NewRemoteUnshareOK()
}
