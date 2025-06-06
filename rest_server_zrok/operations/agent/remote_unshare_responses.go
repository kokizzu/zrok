// Code generated by go-swagger; DO NOT EDIT.

package agent

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"
)

// RemoteUnshareOKCode is the HTTP code returned for type RemoteUnshareOK
const RemoteUnshareOKCode int = 200

/*
RemoteUnshareOK ok

swagger:response remoteUnshareOK
*/
type RemoteUnshareOK struct {
}

// NewRemoteUnshareOK creates RemoteUnshareOK with default headers values
func NewRemoteUnshareOK() *RemoteUnshareOK {

	return &RemoteUnshareOK{}
}

// WriteResponse to the client
func (o *RemoteUnshareOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(200)
}

// RemoteUnshareUnauthorizedCode is the HTTP code returned for type RemoteUnshareUnauthorized
const RemoteUnshareUnauthorizedCode int = 401

/*
RemoteUnshareUnauthorized unauthorized

swagger:response remoteUnshareUnauthorized
*/
type RemoteUnshareUnauthorized struct {
}

// NewRemoteUnshareUnauthorized creates RemoteUnshareUnauthorized with default headers values
func NewRemoteUnshareUnauthorized() *RemoteUnshareUnauthorized {

	return &RemoteUnshareUnauthorized{}
}

// WriteResponse to the client
func (o *RemoteUnshareUnauthorized) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(401)
}

// RemoteUnshareInternalServerErrorCode is the HTTP code returned for type RemoteUnshareInternalServerError
const RemoteUnshareInternalServerErrorCode int = 500

/*
RemoteUnshareInternalServerError internal server error

swagger:response remoteUnshareInternalServerError
*/
type RemoteUnshareInternalServerError struct {
}

// NewRemoteUnshareInternalServerError creates RemoteUnshareInternalServerError with default headers values
func NewRemoteUnshareInternalServerError() *RemoteUnshareInternalServerError {

	return &RemoteUnshareInternalServerError{}
}

// WriteResponse to the client
func (o *RemoteUnshareInternalServerError) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(500)
}

// RemoteUnshareBadGatewayCode is the HTTP code returned for type RemoteUnshareBadGateway
const RemoteUnshareBadGatewayCode int = 502

/*
RemoteUnshareBadGateway bad gateway; agent not reachable

swagger:response remoteUnshareBadGateway
*/
type RemoteUnshareBadGateway struct {
}

// NewRemoteUnshareBadGateway creates RemoteUnshareBadGateway with default headers values
func NewRemoteUnshareBadGateway() *RemoteUnshareBadGateway {

	return &RemoteUnshareBadGateway{}
}

// WriteResponse to the client
func (o *RemoteUnshareBadGateway) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(502)
}
