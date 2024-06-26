/* tslint:disable */
/* eslint-disable */
/**
 * zrok
 * zrok client access
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AuthUser
 */
export interface AuthUser {
    /**
     * 
     * @type {string}
     * @memberof AuthUser
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthUser
     */
    password?: string;
}

/**
 * Check if a given object implements the AuthUser interface.
 */
export function instanceOfAuthUser(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthUserFromJSON(json: any): AuthUser {
    return AuthUserFromJSONTyped(json, false);
}

export function AuthUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': !exists(json, 'username') ? undefined : json['username'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function AuthUserToJSON(value?: AuthUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'password': value.password,
    };
}

