/**
 * n.xyz REST API
 * REST API for blockchain data.
 *
 * OpenAPI spec version: 0.18.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ENS {
    /**
    * Date the ENS registration expires.
    */
    'expires'?: Date;
    /**
    * A wallet address can have multiple ENS records. The primary ENS name represents a \"cross-platform web3 username and profile.\" A wallet address can only have one primary name, and it can change at any time.
    */
    'isPrimary'?: boolean;
    /**
    * The ENS or domain name.
    */
    'name'?: string;
    /**
    * The address the ENS record points to.
    */
    'pointsTo'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "expires",
            "baseName": "expires",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "isPrimary",
            "baseName": "isPrimary",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "pointsTo",
            "baseName": "pointsTo",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ENS.attributeTypeMap;
    }

    public constructor() {
    }
}

