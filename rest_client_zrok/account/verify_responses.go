// Code generated by go-swagger; DO NOT EDIT.

package account

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// VerifyReader is a Reader for the Verify structure.
type VerifyReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *VerifyReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewVerifyOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 404:
		result := NewVerifyNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewVerifyInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[POST /verify] verify", response, response.Code())
	}
}

// NewVerifyOK creates a VerifyOK with default headers values
func NewVerifyOK() *VerifyOK {
	return &VerifyOK{}
}

/*
VerifyOK describes a response with status code 200, with default header values.

registration token ready
*/
type VerifyOK struct {
	Payload *VerifyOKBody
}

// IsSuccess returns true when this verify o k response has a 2xx status code
func (o *VerifyOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this verify o k response has a 3xx status code
func (o *VerifyOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this verify o k response has a 4xx status code
func (o *VerifyOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this verify o k response has a 5xx status code
func (o *VerifyOK) IsServerError() bool {
	return false
}

// IsCode returns true when this verify o k response a status code equal to that given
func (o *VerifyOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the verify o k response
func (o *VerifyOK) Code() int {
	return 200
}

func (o *VerifyOK) Error() string {
	return fmt.Sprintf("[POST /verify][%d] verifyOK  %+v", 200, o.Payload)
}

func (o *VerifyOK) String() string {
	return fmt.Sprintf("[POST /verify][%d] verifyOK  %+v", 200, o.Payload)
}

func (o *VerifyOK) GetPayload() *VerifyOKBody {
	return o.Payload
}

func (o *VerifyOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(VerifyOKBody)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewVerifyNotFound creates a VerifyNotFound with default headers values
func NewVerifyNotFound() *VerifyNotFound {
	return &VerifyNotFound{}
}

/*
VerifyNotFound describes a response with status code 404, with default header values.

registration token not found
*/
type VerifyNotFound struct {
}

// IsSuccess returns true when this verify not found response has a 2xx status code
func (o *VerifyNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this verify not found response has a 3xx status code
func (o *VerifyNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this verify not found response has a 4xx status code
func (o *VerifyNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this verify not found response has a 5xx status code
func (o *VerifyNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this verify not found response a status code equal to that given
func (o *VerifyNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the verify not found response
func (o *VerifyNotFound) Code() int {
	return 404
}

func (o *VerifyNotFound) Error() string {
	return fmt.Sprintf("[POST /verify][%d] verifyNotFound ", 404)
}

func (o *VerifyNotFound) String() string {
	return fmt.Sprintf("[POST /verify][%d] verifyNotFound ", 404)
}

func (o *VerifyNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewVerifyInternalServerError creates a VerifyInternalServerError with default headers values
func NewVerifyInternalServerError() *VerifyInternalServerError {
	return &VerifyInternalServerError{}
}

/*
VerifyInternalServerError describes a response with status code 500, with default header values.

internal server error
*/
type VerifyInternalServerError struct {
}

// IsSuccess returns true when this verify internal server error response has a 2xx status code
func (o *VerifyInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this verify internal server error response has a 3xx status code
func (o *VerifyInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this verify internal server error response has a 4xx status code
func (o *VerifyInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this verify internal server error response has a 5xx status code
func (o *VerifyInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this verify internal server error response a status code equal to that given
func (o *VerifyInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the verify internal server error response
func (o *VerifyInternalServerError) Code() int {
	return 500
}

func (o *VerifyInternalServerError) Error() string {
	return fmt.Sprintf("[POST /verify][%d] verifyInternalServerError ", 500)
}

func (o *VerifyInternalServerError) String() string {
	return fmt.Sprintf("[POST /verify][%d] verifyInternalServerError ", 500)
}

func (o *VerifyInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

/*
VerifyBody verify body
swagger:model VerifyBody
*/
type VerifyBody struct {

	// registration token
	RegistrationToken string `json:"registrationToken,omitempty"`
}

// Validate validates this verify body
func (o *VerifyBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this verify body based on context it is used
func (o *VerifyBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *VerifyBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *VerifyBody) UnmarshalBinary(b []byte) error {
	var res VerifyBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}

/*
VerifyOKBody verify o k body
swagger:model VerifyOKBody
*/
type VerifyOKBody struct {

	// email
	Email string `json:"email,omitempty"`
}

// Validate validates this verify o k body
func (o *VerifyOKBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this verify o k body based on context it is used
func (o *VerifyOKBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *VerifyOKBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *VerifyOKBody) UnmarshalBinary(b []byte) error {
	var res VerifyOKBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}
