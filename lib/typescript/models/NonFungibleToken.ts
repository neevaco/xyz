/* tslint:disable */
/* eslint-disable */
/**
 * n.xyz REST API
 * REST API for blockchain data.
 *
 * The version of the OpenAPI document: 0.17.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Collection } from './Collection';
import {
    CollectionFromJSON,
    CollectionFromJSONTyped,
    CollectionToJSON,
} from './Collection';
import type { Media } from './Media';
import {
    MediaFromJSON,
    MediaFromJSONTyped,
    MediaToJSON,
} from './Media';
import type { MediaPreview } from './MediaPreview';
import {
    MediaPreviewFromJSON,
    MediaPreviewFromJSONTyped,
    MediaPreviewToJSON,
} from './MediaPreview';
import type { TokenAttribute } from './TokenAttribute';
import {
    TokenAttributeFromJSON,
    TokenAttributeFromJSONTyped,
    TokenAttributeToJSON,
} from './TokenAttribute';
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
} from './Transaction';
import type { Wallet } from './Wallet';
import {
    WalletFromJSON,
    WalletFromJSONTyped,
    WalletToJSON,
} from './Wallet';

/**
 * 
 * @export
 * @interface NonFungibleToken
 */
export interface NonFungibleToken {
    /**
     * ID of this particular token.
     * @type {string}
     * @memberof NonFungibleToken
     */
    tokenID: string;
    /**
     * 
     * @type {string}
     * @memberof NonFungibleToken
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof NonFungibleToken
     */
    contractTitle?: string;
    /**
     * A description of a contract may contain markup such as HTML or Markdown.
     * @type {string}
     * @memberof NonFungibleToken
     */
    description?: string;
    /**
     * 
     * @type {Media}
     * @memberof NonFungibleToken
     */
    media?: Media;
    /**
     * Transformed media assets that are resized and transcoded in to friendlier formats for web and mobile delivery.
     * @type {Array<MediaPreview>}
     * @memberof NonFungibleToken
     */
    previews?: Array<MediaPreview>;
    /**
     * 
     * @type {Wallet}
     * @memberof NonFungibleToken
     */
    owner?: Wallet;
    /**
     * 
     * @type {Array<TokenAttribute>}
     * @memberof NonFungibleToken
     */
    attributes?: Array<TokenAttribute>;
    /**
     * 
     * @type {Collection}
     * @memberof NonFungibleToken
     */
    collection?: Collection;
    /**
     * 
     * @type {Transaction}
     * @memberof NonFungibleToken
     */
    purchase?: Transaction;
    /**
     * A rough heuristic indicating the underlying technology and hypothetical durability of an asset. "On-Chain" assets store metadata and the asset media (e.g. SVG file, source code or MIDI) on a blockchain. "Distributed" assets are stored on decentralized protocols such as IPFS. "Web" assets are stored on services such as Amazon's S3. Each technology has different tradeoffs, in particular certain projects need more flexibility than is provided by on-chain data."
     * @type {string}
     * @memberof NonFungibleToken
     */
    durability?: NonFungibleTokenDurabilityEnum;
    /**
     * The project name of the NFT.
     * @type {string}
     * @memberof NonFungibleToken
     */
    projectName?: string;
}


/**
 * @export
 */
export const NonFungibleTokenDurabilityEnum = {
    OnChain: 'On-Chain',
    Decentralized: 'Decentralized',
    Web: 'Web',
    Unknown: 'Unknown'
} as const;
export type NonFungibleTokenDurabilityEnum = typeof NonFungibleTokenDurabilityEnum[keyof typeof NonFungibleTokenDurabilityEnum];


/**
 * Check if a given object implements the NonFungibleToken interface.
 */
export function instanceOfNonFungibleToken(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tokenID" in value;

    return isInstance;
}

export function NonFungibleTokenFromJSON(json: any): NonFungibleToken {
    return NonFungibleTokenFromJSONTyped(json, false);
}

export function NonFungibleTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): NonFungibleToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tokenID': json['tokenID'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'contractTitle': !exists(json, 'contractTitle') ? undefined : json['contractTitle'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'media': !exists(json, 'media') ? undefined : MediaFromJSON(json['media']),
        'previews': !exists(json, 'previews') ? undefined : ((json['previews'] as Array<any>).map(MediaPreviewFromJSON)),
        'owner': !exists(json, 'owner') ? undefined : WalletFromJSON(json['owner']),
        'attributes': !exists(json, 'attributes') ? undefined : ((json['attributes'] as Array<any>).map(TokenAttributeFromJSON)),
        'collection': !exists(json, 'collection') ? undefined : CollectionFromJSON(json['collection']),
        'purchase': !exists(json, 'purchase') ? undefined : TransactionFromJSON(json['purchase']),
        'durability': !exists(json, 'durability') ? undefined : json['durability'],
        'projectName': !exists(json, 'projectName') ? undefined : json['projectName'],
    };
}

export function NonFungibleTokenToJSON(value?: NonFungibleToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tokenID': value.tokenID,
        'title': value.title,
        'contractTitle': value.contractTitle,
        'description': value.description,
        'media': MediaToJSON(value.media),
        'previews': value.previews === undefined ? undefined : ((value.previews as Array<any>).map(MediaPreviewToJSON)),
        'owner': WalletToJSON(value.owner),
        'attributes': value.attributes === undefined ? undefined : ((value.attributes as Array<any>).map(TokenAttributeToJSON)),
        'collection': CollectionToJSON(value.collection),
        'purchase': TransactionToJSON(value.purchase),
        'durability': value.durability,
        'projectName': value.projectName,
    };
}
