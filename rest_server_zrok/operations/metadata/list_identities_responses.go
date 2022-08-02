// Code generated by go-swagger; DO NOT EDIT.

package metadata

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/openziti-test-kitchen/zrok/rest_model_zrok"
)

// ListIdentitiesOKCode is the HTTP code returned for type ListIdentitiesOK
const ListIdentitiesOKCode int = 200

/*ListIdentitiesOK success

swagger:response listIdentitiesOK
*/
type ListIdentitiesOK struct {

	/*
	  In: Body
	*/
	Payload rest_model_zrok.Identities `json:"body,omitempty"`
}

// NewListIdentitiesOK creates ListIdentitiesOK with default headers values
func NewListIdentitiesOK() *ListIdentitiesOK {

	return &ListIdentitiesOK{}
}

// WithPayload adds the payload to the list identities o k response
func (o *ListIdentitiesOK) WithPayload(payload rest_model_zrok.Identities) *ListIdentitiesOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the list identities o k response
func (o *ListIdentitiesOK) SetPayload(payload rest_model_zrok.Identities) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ListIdentitiesOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	payload := o.Payload
	if payload == nil {
		// return empty array
		payload = rest_model_zrok.Identities{}
	}

	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}

// ListIdentitiesInternalServerErrorCode is the HTTP code returned for type ListIdentitiesInternalServerError
const ListIdentitiesInternalServerErrorCode int = 500

/*ListIdentitiesInternalServerError internal server error

swagger:response listIdentitiesInternalServerError
*/
type ListIdentitiesInternalServerError struct {

	/*
	  In: Body
	*/
	Payload rest_model_zrok.ErrorMessage `json:"body,omitempty"`
}

// NewListIdentitiesInternalServerError creates ListIdentitiesInternalServerError with default headers values
func NewListIdentitiesInternalServerError() *ListIdentitiesInternalServerError {

	return &ListIdentitiesInternalServerError{}
}

// WithPayload adds the payload to the list identities internal server error response
func (o *ListIdentitiesInternalServerError) WithPayload(payload rest_model_zrok.ErrorMessage) *ListIdentitiesInternalServerError {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the list identities internal server error response
func (o *ListIdentitiesInternalServerError) SetPayload(payload rest_model_zrok.ErrorMessage) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ListIdentitiesInternalServerError) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(500)
	payload := o.Payload
	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}