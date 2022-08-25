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

import { HttpFile } from '../http/http';

export class ExchangeEvent {
    /**
    * Human-readable, machine parsable, event descriptions for token exchange-related contract events
    */
    'event'?: ExchangeEventEventEnum;
    /**
    * Brand or identifier closely associated with a contract
    */
    'protocol'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "event",
            "baseName": "event",
            "type": "ExchangeEventEventEnum",
            "format": ""
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ExchangeEvent.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ExchangeEventEventEnum = "Swap" | "Mint" | "Burn" | "Collect Fees" | "Create Pool" ;

