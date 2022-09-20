// Code generated by go-swagger; DO NOT EDIT.

package identity

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/openziti-test-kitchen/zrok/rest_model_zrok"
)

// RegisterReader is a Reader for the Register structure.
type RegisterReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *RegisterReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewRegisterOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 404:
		result := NewRegisterNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewRegisterInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("response status code does not match any response statuses defined for this endpoint in the swagger spec", response, response.Code())
	}
}

// NewRegisterOK creates a RegisterOK with default headers values
func NewRegisterOK() *RegisterOK {
	return &RegisterOK{}
}

/*
RegisterOK describes a response with status code 200, with default header values.

account created
*/
type RegisterOK struct {
}

// IsSuccess returns true when this register o k response has a 2xx status code
func (o *RegisterOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this register o k response has a 3xx status code
func (o *RegisterOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this register o k response has a 4xx status code
func (o *RegisterOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this register o k response has a 5xx status code
func (o *RegisterOK) IsServerError() bool {
	return false
}

// IsCode returns true when this register o k response a status code equal to that given
func (o *RegisterOK) IsCode(code int) bool {
	return code == 200
}

func (o *RegisterOK) Error() string {
	return fmt.Sprintf("[POST /register][%d] registerOK ", 200)
}

func (o *RegisterOK) String() string {
	return fmt.Sprintf("[POST /register][%d] registerOK ", 200)
}

func (o *RegisterOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewRegisterNotFound creates a RegisterNotFound with default headers values
func NewRegisterNotFound() *RegisterNotFound {
	return &RegisterNotFound{}
}

/*
RegisterNotFound describes a response with status code 404, with default header values.

request not found
*/
type RegisterNotFound struct {
}

// IsSuccess returns true when this register not found response has a 2xx status code
func (o *RegisterNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this register not found response has a 3xx status code
func (o *RegisterNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this register not found response has a 4xx status code
func (o *RegisterNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this register not found response has a 5xx status code
func (o *RegisterNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this register not found response a status code equal to that given
func (o *RegisterNotFound) IsCode(code int) bool {
	return code == 404
}

func (o *RegisterNotFound) Error() string {
	return fmt.Sprintf("[POST /register][%d] registerNotFound ", 404)
}

func (o *RegisterNotFound) String() string {
	return fmt.Sprintf("[POST /register][%d] registerNotFound ", 404)
}

func (o *RegisterNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewRegisterInternalServerError creates a RegisterInternalServerError with default headers values
func NewRegisterInternalServerError() *RegisterInternalServerError {
	return &RegisterInternalServerError{}
}

/*
RegisterInternalServerError describes a response with status code 500, with default header values.

internal server error
*/
type RegisterInternalServerError struct {
	Payload rest_model_zrok.ErrorMessage
}

// IsSuccess returns true when this register internal server error response has a 2xx status code
func (o *RegisterInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this register internal server error response has a 3xx status code
func (o *RegisterInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this register internal server error response has a 4xx status code
func (o *RegisterInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this register internal server error response has a 5xx status code
func (o *RegisterInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this register internal server error response a status code equal to that given
func (o *RegisterInternalServerError) IsCode(code int) bool {
	return code == 500
}

func (o *RegisterInternalServerError) Error() string {
	return fmt.Sprintf("[POST /register][%d] registerInternalServerError  %+v", 500, o.Payload)
}

func (o *RegisterInternalServerError) String() string {
	return fmt.Sprintf("[POST /register][%d] registerInternalServerError  %+v", 500, o.Payload)
}

func (o *RegisterInternalServerError) GetPayload() rest_model_zrok.ErrorMessage {
	return o.Payload
}

func (o *RegisterInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
