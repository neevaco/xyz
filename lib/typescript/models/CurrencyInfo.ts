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

import { MediaPreview } from './MediaPreview';
import { HttpFile } from '../http/http';

export class CurrencyInfo {
    'contractAddress'?: string;
    /**
    * The base value for a given token. For Ethereum this would be 18. This would yield an equation such as 890000000000000000wei / 10^18 = 0.89 ETH.
    */
    'decimals'?: number;
    /**
    * The total value of this token in fiat currency.
    */
    'fiat'?: Array<CurrencyInfo>;
    'name'?: string;
    /**
    * A formatted, human-friendly representation of the transaction value, e.g. the value in Ether, possibly with localized thousands separator and radix character.
    */
    'pretty'?: string;
    'symbol'?: string;
    /**
    * Logo images associated with the token for a given currency.
    */
    'symbolLogos'?: Array<MediaPreview>;
    /**
    * Transaction value as a float representing the amount of tokens, e.g. 0.89 would be 89% of a token.
    */
    'tokenValue'?: number;
    /**
    * Transaction value as a string-encoded bigint in the base unit for a given blockchain (e.g. wei for Ethereum) or fiat currency (e.g. US Dollars).
    */
    'value'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contractAddress",
            "baseName": "contractAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "decimals",
            "baseName": "decimals",
            "type": "number",
            "format": ""
        },
        {
            "name": "fiat",
            "baseName": "fiat",
            "type": "Array<CurrencyInfo>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "pretty",
            "baseName": "pretty",
            "type": "string",
            "format": ""
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "symbolLogos",
            "baseName": "symbolLogos",
            "type": "Array<MediaPreview>",
            "format": ""
        },
        {
            "name": "tokenValue",
            "baseName": "tokenValue",
            "type": "number",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CurrencyInfo.attributeTypeMap;
    }

    public constructor() {
    }
}
