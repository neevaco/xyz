/**
 * n.xyz REST API
 * REST API for blockchain data.
 *
 * OpenAPI spec version: 0.37.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Token } from './Token';
import { Transaction } from './Transaction';
import { HttpFile } from '../http/http';

export class TokenEvents {
    /**
    * A list of the events for a token.
    */
    'events'?: Array<Transaction>;
    /**
    * Metadata for the token specified in the request.
    */
    'token'?: Array<Token>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<Transaction>",
            "format": ""
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "Array<Token>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TokenEvents.attributeTypeMap;
    }

    public constructor() {
    }
}

