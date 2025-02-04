// Code generated by go-swagger; DO NOT EDIT.

package account

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"
)

// VerifyOKCode is the HTTP code returned for type VerifyOK
const VerifyOKCode int = 200

/*
VerifyOK registration token ready

swagger:response verifyOK
*/
type VerifyOK struct {

	/*
	  In: Body
	*/
	Payload *VerifyOKBody `json:"body,omitempty"`
}

// NewVerifyOK creates VerifyOK with default headers values
func NewVerifyOK() *VerifyOK {

	return &VerifyOK{}
}

// WithPayload adds the payload to the verify o k response
func (o *VerifyOK) WithPayload(payload *VerifyOKBody) *VerifyOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the verify o k response
func (o *VerifyOK) SetPayload(payload *VerifyOKBody) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *VerifyOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

// VerifyNotFoundCode is the HTTP code returned for type VerifyNotFound
const VerifyNotFoundCode int = 404

/*
VerifyNotFound registration token not found

swagger:response verifyNotFound
*/
type VerifyNotFound struct {
}

// NewVerifyNotFound creates VerifyNotFound with default headers values
func NewVerifyNotFound() *VerifyNotFound {

	return &VerifyNotFound{}
}

// WriteResponse to the client
func (o *VerifyNotFound) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(404)
}

// VerifyInternalServerErrorCode is the HTTP code returned for type VerifyInternalServerError
const VerifyInternalServerErrorCode int = 500

/*
VerifyInternalServerError internal server error

swagger:response verifyInternalServerError
*/
type VerifyInternalServerError struct {
}

// NewVerifyInternalServerError creates VerifyInternalServerError with default headers values
func NewVerifyInternalServerError() *VerifyInternalServerError {

	return &VerifyInternalServerError{}
}

// WriteResponse to the client
func (o *VerifyInternalServerError) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(500)
}
