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

import { Collection } from './Collection';
import { CurrencyInfo } from './CurrencyInfo';
import { Media } from './Media';
import { MediaPreview } from './MediaPreview';
import { NFTTransaction } from './NFTTransaction';
import { TokenAttribute } from './TokenAttribute';
import { Wallet } from './Wallet';
import { HttpFile } from '../http/http';

export class NonFungibleToken {
    'attributes'?: Array<TokenAttribute>;
    'collection'?: Collection;
    'contractTitle'?: string;
    /**
    * The wallet address for the creator of this NFT.
    */
    'creatorAddress'?: string;
    /**
    * A description of a contract may contain markup such as HTML or Markdown.
    */
    'description'?: string;
    /**
    * A rough heuristic indicating the underlying technology and hypothetical durability of an asset. \"On-Chain\" assets store metadata and the asset media (e.g. SVG file, source code or MIDI) on a blockchain. \"Distributed\" assets are stored on decentralized protocols such as IPFS. \"Web\" assets are stored on services such as Amazon's S3. Each technology has different tradeoffs, in particular certain projects need more flexibility than is provided by on-chain data.\"
    */
    'durability'?: NonFungibleTokenDurabilityEnum;
    /**
    * When the value is true, it indicates that this collection, or the collection this NFT belongs to, has been hidden on OpenSea.
    */
    'hidden'?: boolean;
    'lastSoldPrice'?: CurrencyInfo;
    'media'?: Media;
    'owner'?: Wallet;
    /**
    * Transformed media assets that are resized and transcoded in to friendlier formats for web and mobile delivery.
    */
    'previews'?: Array<MediaPreview>;
    /**
    * The project name of the NFT.
    */
    'projectName'?: string;
    'purchase'?: NFTTransaction;
    'title'?: string;
    /**
    * ID of this particular token.
    */
    'tokenID': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "Array<TokenAttribute>",
            "format": ""
        },
        {
            "name": "collection",
            "baseName": "collection",
            "type": "Collection",
            "format": ""
        },
        {
            "name": "contractTitle",
            "baseName": "contractTitle",
            "type": "string",
            "format": ""
        },
        {
            "name": "creatorAddress",
            "baseName": "creatorAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "durability",
            "baseName": "durability",
            "type": "NonFungibleTokenDurabilityEnum",
            "format": ""
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lastSoldPrice",
            "baseName": "lastSoldPrice",
            "type": "CurrencyInfo",
            "format": ""
        },
        {
            "name": "media",
            "baseName": "media",
            "type": "Media",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "Wallet",
            "format": ""
        },
        {
            "name": "previews",
            "baseName": "previews",
            "type": "Array<MediaPreview>",
            "format": ""
        },
        {
            "name": "projectName",
            "baseName": "projectName",
            "type": "string",
            "format": ""
        },
        {
            "name": "purchase",
            "baseName": "purchase",
            "type": "NFTTransaction",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenID",
            "baseName": "tokenID",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NonFungibleToken.attributeTypeMap;
    }

    public constructor() {
    }
}


export type NonFungibleTokenDurabilityEnum = "On-Chain" | "Decentralized" | "Web" | "Unknown" ;

