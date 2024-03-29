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

import { HttpFile } from '../http/http';

export class BlockchainInfo {
    /**
    * A CAIP-2 compliant chain ID. This ID is designed to provide a unique identifier for a given chain.
    */
    'chainID'?: string;
    /**
    * The name of a given chain. This is often a canonical name since a protocol may have multiple chains.
    */
    'name'?: string;
    /**
    * An ID used for a chain in a given ecosystem. This ID is not canonical and may collide with other chains. Do not use this value as a unique identifier.
    */
    'shortChainID'?: string;
    /**
    * The short-hand name for a given chain. Multiple chains (e.g. mainnet and a testnet) may have the same name.
    */
    'shortName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chainID",
            "baseName": "chainID",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortChainID",
            "baseName": "shortChainID",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortName",
            "baseName": "shortName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockchainInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

