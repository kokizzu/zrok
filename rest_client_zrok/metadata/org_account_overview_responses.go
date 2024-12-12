// Code generated by go-swagger; DO NOT EDIT.

package metadata

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/openziti/zrok/rest_model_zrok"
)

// OrgAccountOverviewReader is a Reader for the OrgAccountOverview structure.
type OrgAccountOverviewReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *OrgAccountOverviewReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewOrgAccountOverviewOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 404:
		result := NewOrgAccountOverviewNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewOrgAccountOverviewInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[GET /overview/{organizationToken}/{accountEmail}] orgAccountOverview", response, response.Code())
	}
}

// NewOrgAccountOverviewOK creates a OrgAccountOverviewOK with default headers values
func NewOrgAccountOverviewOK() *OrgAccountOverviewOK {
	return &OrgAccountOverviewOK{}
}

/*
OrgAccountOverviewOK describes a response with status code 200, with default header values.

ok
*/
type OrgAccountOverviewOK struct {
	Payload *rest_model_zrok.Overview
}

// IsSuccess returns true when this org account overview o k response has a 2xx status code
func (o *OrgAccountOverviewOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this org account overview o k response has a 3xx status code
func (o *OrgAccountOverviewOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this org account overview o k response has a 4xx status code
func (o *OrgAccountOverviewOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this org account overview o k response has a 5xx status code
func (o *OrgAccountOverviewOK) IsServerError() bool {
	return false
}

// IsCode returns true when this org account overview o k response a status code equal to that given
func (o *OrgAccountOverviewOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the org account overview o k response
func (o *OrgAccountOverviewOK) Code() int {
	return 200
}

func (o *OrgAccountOverviewOK) Error() string {
	return fmt.Sprintf("[GET /overview/{organizationToken}/{accountEmail}][%d] orgAccountOverviewOK  %+v", 200, o.Payload)
}

func (o *OrgAccountOverviewOK) String() string {
	return fmt.Sprintf("[GET /overview/{organizationToken}/{accountEmail}][%d] orgAccountOverviewOK  %+v", 200, o.Payload)
}

func (o *OrgAccountOverviewOK) GetPayload() *rest_model_zrok.Overview {
	return o.Payload
}

func (o *OrgAccountOverviewOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(rest_model_zrok.Overview)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewOrgAccountOverviewNotFound creates a OrgAccountOverviewNotFound with default headers values
func NewOrgAccountOverviewNotFound() *OrgAccountOverviewNotFound {
	return &OrgAccountOverviewNotFound{}
}

/*
OrgAccountOverviewNotFound describes a response with status code 404, with default header values.

not found
*/
type OrgAccountOverviewNotFound struct {
}

// IsSuccess returns true when this org account overview not found response has a 2xx status code
func (o *OrgAccountOverviewNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this org account overview not found response has a 3xx status code
func (o *OrgAccountOverviewNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this org account overview not found response has a 4xx status code
func (o *OrgAccountOverviewNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this org account overview not found response has a 5xx status code
func (o *OrgAccountOverviewNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this org account overview not found response a status code equal to that given
func (o *OrgAccountOverviewNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the org account overview not found response
func (o *OrgAccountOverviewNotFound) Code() int {
	return 404
}

func (o *OrgAccountOverviewNotFound) Error() string {
	return fmt.Sprintf("[GET /overview/{organizationToken}/{accountEmail}][%d] orgAccountOverviewNotFound ", 404)
}

func (o *OrgAccountOverviewNotFound) String() string {
	return fmt.Sprintf("[GET /overview/{organizationToken}/{accountEmail}][%d] orgAccountOverviewNotFound ", 404)
}

func (o *OrgAccountOverviewNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewOrgAccountOverviewInternalServerError creates a OrgAccountOverviewInternalServerError with default headers values
func NewOrgAccountOverviewInternalServerError() *OrgAccountOverviewInternalServerError {
	return &OrgAccountOverviewInternalServerError{}
}

/*
OrgAccountOverviewInternalServerError describes a response with status code 500, with default header values.

internal server error
*/
type OrgAccountOverviewInternalServerError struct {
}

// IsSuccess returns true when this org account overview internal server error response has a 2xx status code
func (o *OrgAccountOverviewInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this org account overview internal server error response has a 3xx status code
func (o *OrgAccountOverviewInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this org account overview internal server error response has a 4xx status code
func (o *OrgAccountOverviewInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this org account overview internal server error response has a 5xx status code
func (o *OrgAccountOverviewInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this org account overview internal server error response a status code equal to that given
func (o *OrgAccountOverviewInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the org account overview internal server error response
func (o *OrgAccountOverviewInternalServerError) Code() int {
	return 500
}

func (o *OrgAccountOverviewInternalServerError) Error() string {
	return fmt.Sprintf("[GET /overview/{organizationToken}/{accountEmail}][%d] orgAccountOverviewInternalServerError ", 500)
}

func (o *OrgAccountOverviewInternalServerError) String() string {
	return fmt.Sprintf("[GET /overview/{organizationToken}/{accountEmail}][%d] orgAccountOverviewInternalServerError ", 500)
}

func (o *OrgAccountOverviewInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}
