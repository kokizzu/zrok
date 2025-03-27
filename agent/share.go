package agent

import (
	"errors"
	"github.com/michaelquigley/pfxlog"
	"github.com/openziti/zrok/agent/proctree"
	"github.com/openziti/zrok/cmd/zrok/subordinate"
	"github.com/openziti/zrok/sdk/golang/sdk"
	"time"
)

type SharePrivateRequest struct {
	Target       string
	BackendMode  string
	Insecure     bool
	Closed       bool
	AccessGrants []string
}

type SharePublicRequest struct {
	Target                    string
	BasicAuth                 []string
	FrontendSelection         []string
	BackendMode               string
	Insecure                  bool
	OauthProvider             string
	OauthEmailAddressPatterns []string
	OauthCheckInterval        string
	Closed                    bool
	AccessGrants              []string
}

type ShareReservedRequest struct {
	Token            string
	OverrideEndpoint string
	Insecure         bool
}

type ShareReservedResponse struct {
	Token             string
	BackendMode       string
	ShareMode         string
	FrontendEndpoints []string
	Target            string
}

type share struct {
	token                     string
	frontendEndpoints         []string
	target                    string
	basicAuth                 []string
	frontendSelection         []string
	shareMode                 sdk.ShareMode
	backendMode               sdk.BackendMode
	reserved                  bool
	insecure                  bool
	oauthProvider             string
	oauthEmailAddressPatterns []string
	oauthCheckInterval        time.Duration
	closed                    bool
	accessGrants              []string

	request interface{}

	process *proctree.Child
	sub     *subordinate.MessageHandler

	agent *Agent
}

func (s *share) monitor() {
	if err := proctree.WaitChild(s.process); err != nil {
		pfxlog.ChannelLogger(s.token).Error(err)
	}
	s.agent.rmShare <- s
}

func (s *share) bootHandler(msgType string, msg subordinate.Message) error {
	switch msgType {
	case subordinate.BootMessage:
		if v, found := msg["token"]; found {
			if str, ok := v.(string); ok {
				s.token = str
			}
		}
		if v, found := msg["backend_mode"]; found {
			if str, ok := v.(string); ok {
				s.backendMode = sdk.BackendMode(str)
			}
		}
		if v, found := msg["share_mode"]; found {
			if str, ok := v.(string); ok {
				s.shareMode = sdk.ShareMode(str)
			}
		}
		if v, found := msg["frontend_endpoints"]; found {
			if vArr, ok := v.([]interface{}); ok {
				for _, v := range vArr {
					if str, ok := v.(string); ok {
						s.frontendEndpoints = append(s.frontendEndpoints, str)
					}
				}
			}
		}
		if v, found := msg["target"]; found {
			if str, ok := v.(string); ok {
				s.target = str
			}
		}

	case subordinate.ErrorMessage:
		if v, found := msg[subordinate.ErrorMessage]; found {
			if str, ok := v.(string); ok {
				return errors.New(str)
			}
		}
	}

	return nil
}
