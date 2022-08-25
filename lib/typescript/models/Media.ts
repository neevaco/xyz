/**
 * n.xyz REST API
 * REST API for blockchain data.
 *
 * OpenAPI spec version: 0.23.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MediaVersion } from './MediaVersion';
import { HttpFile } from '../http/http';

export class Media {
    /**
    * URI for the image asset.
    */
    'URI'?: string;
    'key': string;
    'version'?: Array<MediaVersion>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "URI",
            "baseName": "URI",
            "type": "string",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "Array<MediaVersion>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Media.attributeTypeMap;
    }

    public constructor() {
    }
}

