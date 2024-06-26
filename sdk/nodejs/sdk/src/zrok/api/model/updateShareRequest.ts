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

import { RequestFile } from './models';

export class UpdateShareRequest {
    'shrToken'?: string;
    'backendProxyEndpoint'?: string;
    'addAccessGrants'?: Array<string>;
    'removeAccessGrants'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "shrToken",
            "baseName": "shrToken",
            "type": "string"
        },
        {
            "name": "backendProxyEndpoint",
            "baseName": "backendProxyEndpoint",
            "type": "string"
        },
        {
            "name": "addAccessGrants",
            "baseName": "addAccessGrants",
            "type": "Array<string>"
        },
        {
            "name": "removeAccessGrants",
            "baseName": "removeAccessGrants",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return UpdateShareRequest.attributeTypeMap;
    }
}

