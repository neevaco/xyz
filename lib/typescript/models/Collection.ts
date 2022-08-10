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

import { BlockchainInfo } from './BlockchainInfo';
import { CurrencyInfo } from './CurrencyInfo';
import { Media } from './Media';
import { SocialMedia } from './SocialMedia';
import { URL } from './URL';
import { HttpFile } from '../http/http';

export class Collection {
    'bannerImage'?: Media;
    'blockchain': BlockchainInfo;
    /**
    * Address of the contract that minted this NFT.
    */
    'contractAddress': string;
    /**
    * Timestamp of creation of this contract in RFC 3339.
    */
    'createdDate'?: Date;
    'description'?: string;
    'featuredImage'?: Media;
    'floorPrice'?: CurrencyInfo;
    'name'?: string;
    'shortDescription'?: string;
    'slug'?: string;
    'socialMedia'?: Array<SocialMedia>;
    'symbol'?: string;
    'urls'?: Array<URL>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bannerImage",
            "baseName": "bannerImage",
            "type": "Media",
            "format": ""
        },
        {
            "name": "blockchain",
            "baseName": "blockchain",
            "type": "BlockchainInfo",
            "format": ""
        },
        {
            "name": "contractAddress",
            "baseName": "contractAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "featuredImage",
            "baseName": "featuredImage",
            "type": "Media",
            "format": ""
        },
        {
            "name": "floorPrice",
            "baseName": "floorPrice",
            "type": "CurrencyInfo",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortDescription",
            "baseName": "shortDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "slug",
            "baseName": "slug",
            "type": "string",
            "format": ""
        },
        {
            "name": "socialMedia",
            "baseName": "socialMedia",
            "type": "Array<SocialMedia>",
            "format": ""
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "urls",
            "baseName": "urls",
            "type": "Array<URL>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Collection.attributeTypeMap;
    }

    public constructor() {
    }
}

