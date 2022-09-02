// Code generated by go-swagger; DO NOT EDIT.

package identity

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"

	"github.com/openziti-test-kitchen/zrok/rest_model_zrok"
)

// NewDisableParams creates a new DisableParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewDisableParams() *DisableParams {
	return &DisableParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewDisableParamsWithTimeout creates a new DisableParams object
// with the ability to set a timeout on a request.
func NewDisableParamsWithTimeout(timeout time.Duration) *DisableParams {
	return &DisableParams{
		timeout: timeout,
	}
}

// NewDisableParamsWithContext creates a new DisableParams object
// with the ability to set a context for a request.
func NewDisableParamsWithContext(ctx context.Context) *DisableParams {
	return &DisableParams{
		Context: ctx,
	}
}

// NewDisableParamsWithHTTPClient creates a new DisableParams object
// with the ability to set a custom HTTPClient for a request.
func NewDisableParamsWithHTTPClient(client *http.Client) *DisableParams {
	return &DisableParams{
		HTTPClient: client,
	}
}

/*
DisableParams contains all the parameters to send to the API endpoint

	for the disable operation.

	Typically these are written to a http.Request.
*/
type DisableParams struct {

	// Body.
	Body *rest_model_zrok.DisableRequest

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the disable params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *DisableParams) WithDefaults() *DisableParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the disable params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *DisableParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the disable params
func (o *DisableParams) WithTimeout(timeout time.Duration) *DisableParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the disable params
func (o *DisableParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the disable params
func (o *DisableParams) WithContext(ctx context.Context) *DisableParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the disable params
func (o *DisableParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the disable params
func (o *DisableParams) WithHTTPClient(client *http.Client) *DisableParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the disable params
func (o *DisableParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the disable params
func (o *DisableParams) WithBody(body *rest_model_zrok.DisableRequest) *DisableParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the disable params
func (o *DisableParams) SetBody(body *rest_model_zrok.DisableRequest) {
	o.Body = body
}

// WriteToRequest writes these params to a swagger request
func (o *DisableParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error
	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}