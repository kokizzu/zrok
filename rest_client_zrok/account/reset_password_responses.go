// Code generated by go-swagger; DO NOT EDIT.

package account

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"encoding/json"
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"

	"github.com/openziti/zrok/rest_model_zrok"
)

// ResetPasswordReader is a Reader for the ResetPassword structure.
type ResetPasswordReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ResetPasswordReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewResetPasswordOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 404:
		result := NewResetPasswordNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 422:
		result := NewResetPasswordUnprocessableEntity()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewResetPasswordInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[POST /resetPassword] resetPassword", response, response.Code())
	}
}

// NewResetPasswordOK creates a ResetPasswordOK with default headers values
func NewResetPasswordOK() *ResetPasswordOK {
	return &ResetPasswordOK{}
}

/*
ResetPasswordOK describes a response with status code 200, with default header values.

password reset
*/
type ResetPasswordOK struct {
}

// IsSuccess returns true when this reset password o k response has a 2xx status code
func (o *ResetPasswordOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this reset password o k response has a 3xx status code
func (o *ResetPasswordOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this reset password o k response has a 4xx status code
func (o *ResetPasswordOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this reset password o k response has a 5xx status code
func (o *ResetPasswordOK) IsServerError() bool {
	return false
}

// IsCode returns true when this reset password o k response a status code equal to that given
func (o *ResetPasswordOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the reset password o k response
func (o *ResetPasswordOK) Code() int {
	return 200
}

func (o *ResetPasswordOK) Error() string {
	return fmt.Sprintf("[POST /resetPassword][%d] resetPasswordOK", 200)
}

func (o *ResetPasswordOK) String() string {
	return fmt.Sprintf("[POST /resetPassword][%d] resetPasswordOK", 200)
}

func (o *ResetPasswordOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewResetPasswordNotFound creates a ResetPasswordNotFound with default headers values
func NewResetPasswordNotFound() *ResetPasswordNotFound {
	return &ResetPasswordNotFound{}
}

/*
ResetPasswordNotFound describes a response with status code 404, with default header values.

request not found
*/
type ResetPasswordNotFound struct {
}

// IsSuccess returns true when this reset password not found response has a 2xx status code
func (o *ResetPasswordNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this reset password not found response has a 3xx status code
func (o *ResetPasswordNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this reset password not found response has a 4xx status code
func (o *ResetPasswordNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this reset password not found response has a 5xx status code
func (o *ResetPasswordNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this reset password not found response a status code equal to that given
func (o *ResetPasswordNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the reset password not found response
func (o *ResetPasswordNotFound) Code() int {
	return 404
}

func (o *ResetPasswordNotFound) Error() string {
	return fmt.Sprintf("[POST /resetPassword][%d] resetPasswordNotFound", 404)
}

func (o *ResetPasswordNotFound) String() string {
	return fmt.Sprintf("[POST /resetPassword][%d] resetPasswordNotFound", 404)
}

func (o *ResetPasswordNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewResetPasswordUnprocessableEntity creates a ResetPasswordUnprocessableEntity with default headers values
func NewResetPasswordUnprocessableEntity() *ResetPasswordUnprocessableEntity {
	return &ResetPasswordUnprocessableEntity{}
}

/*
ResetPasswordUnprocessableEntity describes a response with status code 422, with default header values.

password validation failure
*/
type ResetPasswordUnprocessableEntity struct {
	Payload rest_model_zrok.ErrorMessage
}

// IsSuccess returns true when this reset password unprocessable entity response has a 2xx status code
func (o *ResetPasswordUnprocessableEntity) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this reset password unprocessable entity response has a 3xx status code
func (o *ResetPasswordUnprocessableEntity) IsRedirect() bool {
	return false
}

// IsClientError returns true when this reset password unprocessable entity response has a 4xx status code
func (o *ResetPasswordUnprocessableEntity) IsClientError() bool {
	return true
}

// IsServerError returns true when this reset password unprocessable entity response has a 5xx status code
func (o *ResetPasswordUnprocessableEntity) IsServerError() bool {
	return false
}

// IsCode returns true when this reset password unprocessable entity response a status code equal to that given
func (o *ResetPasswordUnprocessableEntity) IsCode(code int) bool {
	return code == 422
}

// Code gets the status code for the reset password unprocessable entity response
func (o *ResetPasswordUnprocessableEntity) Code() int {
	return 422
}

func (o *ResetPasswordUnprocessableEntity) Error() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[POST /resetPassword][%d] resetPasswordUnprocessableEntity %s", 422, payload)
}

func (o *ResetPasswordUnprocessableEntity) String() string {
	payload, _ := json.Marshal(o.Payload)
	return fmt.Sprintf("[POST /resetPassword][%d] resetPasswordUnprocessableEntity %s", 422, payload)
}

func (o *ResetPasswordUnprocessableEntity) GetPayload() rest_model_zrok.ErrorMessage {
	return o.Payload
}

func (o *ResetPasswordUnprocessableEntity) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewResetPasswordInternalServerError creates a ResetPasswordInternalServerError with default headers values
func NewResetPasswordInternalServerError() *ResetPasswordInternalServerError {
	return &ResetPasswordInternalServerError{}
}

/*
ResetPasswordInternalServerError describes a response with status code 500, with default header values.

internal server error
*/
type ResetPasswordInternalServerError struct {
}

// IsSuccess returns true when this reset password internal server error response has a 2xx status code
func (o *ResetPasswordInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this reset password internal server error response has a 3xx status code
func (o *ResetPasswordInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this reset password internal server error response has a 4xx status code
func (o *ResetPasswordInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this reset password internal server error response has a 5xx status code
func (o *ResetPasswordInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this reset password internal server error response a status code equal to that given
func (o *ResetPasswordInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the reset password internal server error response
func (o *ResetPasswordInternalServerError) Code() int {
	return 500
}

func (o *ResetPasswordInternalServerError) Error() string {
	return fmt.Sprintf("[POST /resetPassword][%d] resetPasswordInternalServerError", 500)
}

func (o *ResetPasswordInternalServerError) String() string {
	return fmt.Sprintf("[POST /resetPassword][%d] resetPasswordInternalServerError", 500)
}

func (o *ResetPasswordInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

/*
ResetPasswordBody reset password body
swagger:model ResetPasswordBody
*/
type ResetPasswordBody struct {

	// password
	Password string `json:"password,omitempty"`

	// reset token
	ResetToken string `json:"resetToken,omitempty"`
}

// Validate validates this reset password body
func (o *ResetPasswordBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this reset password body based on context it is used
func (o *ResetPasswordBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *ResetPasswordBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *ResetPasswordBody) UnmarshalBinary(b []byte) error {
	var res ResetPasswordBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}
