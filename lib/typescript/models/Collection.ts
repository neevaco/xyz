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
import type { BlockchainInfo } from './BlockchainInfo';
import {
    BlockchainInfoFromJSON,
    BlockchainInfoFromJSONTyped,
    BlockchainInfoToJSON,
} from './BlockchainInfo';
import type { CurrencyInfo } from './CurrencyInfo';
import {
    CurrencyInfoFromJSON,
    CurrencyInfoFromJSONTyped,
    CurrencyInfoToJSON,
} from './CurrencyInfo';
import type { Media } from './Media';
import {
    MediaFromJSON,
    MediaFromJSONTyped,
    MediaToJSON,
} from './Media';
import type { SocialMedia } from './SocialMedia';
import {
    SocialMediaFromJSON,
    SocialMediaFromJSONTyped,
    SocialMediaToJSON,
} from './SocialMedia';
import type { URL } from './URL';
import {
    URLFromJSON,
    URLFromJSONTyped,
    URLToJSON,
} from './URL';

/**
 * 
 * @export
 * @interface Collection
 */
export interface Collection {
    /**
     * 
     * @type {BlockchainInfo}
     * @memberof Collection
     */
    blockchain: BlockchainInfo;
    /**
     * Address of the contract that minted this NFT.
     * @type {string}
     * @memberof Collection
     */
    contractAddress: string;
    /**
     * 
     * @type {string}
     * @memberof Collection
     */
    symbol?: string;
    /**
     * 
     * @type {string}
     * @memberof Collection
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof Collection
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Collection
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Collection
     */
    shortDescription?: string;
    /**
     * Timestamp of creation of this contract in RFC 3339.
     * @type {Date}
     * @memberof Collection
     */
    createdDate?: Date | null;
    /**
     * 
     * @type {CurrencyInfo}
     * @memberof Collection
     */
    floorPrice?: CurrencyInfo;
    /**
     * 
     * @type {Media}
     * @memberof Collection
     */
    bannerImage?: Media;
    /**
     * 
     * @type {Media}
     * @memberof Collection
     */
    featuredImage?: Media;
    /**
     * 
     * @type {Array<URL>}
     * @memberof Collection
     */
    urls?: Array<URL>;
    /**
     * 
     * @type {Array<SocialMedia>}
     * @memberof Collection
     */
    socialMedia?: Array<SocialMedia>;
}

/**
 * Check if a given object implements the Collection interface.
 */
export function instanceOfCollection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "blockchain" in value;
    isInstance = isInstance && "contractAddress" in value;

    return isInstance;
}

export function CollectionFromJSON(json: any): Collection {
    return CollectionFromJSONTyped(json, false);
}

export function CollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Collection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockchain': BlockchainInfoFromJSON(json['blockchain']),
        'contractAddress': json['contractAddress'],
        'symbol': !exists(json, 'symbol') ? undefined : json['symbol'],
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
        'createdDate': !exists(json, 'createdDate') ? undefined : (json['createdDate'] === null ? null : new Date(json['createdDate'])),
        'floorPrice': !exists(json, 'floorPrice') ? undefined : CurrencyInfoFromJSON(json['floorPrice']),
        'bannerImage': !exists(json, 'bannerImage') ? undefined : MediaFromJSON(json['bannerImage']),
        'featuredImage': !exists(json, 'featuredImage') ? undefined : MediaFromJSON(json['featuredImage']),
        'urls': !exists(json, 'urls') ? undefined : ((json['urls'] as Array<any>).map(URLFromJSON)),
        'socialMedia': !exists(json, 'socialMedia') ? undefined : ((json['socialMedia'] as Array<any>).map(SocialMediaFromJSON)),
    };
}

export function CollectionToJSON(value?: Collection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockchain': BlockchainInfoToJSON(value.blockchain),
        'contractAddress': value.contractAddress,
        'symbol': value.symbol,
        'slug': value.slug,
        'name': value.name,
        'description': value.description,
        'shortDescription': value.shortDescription,
        'createdDate': value.createdDate === undefined ? undefined : (value.createdDate === null ? null : value.createdDate.toISOString()),
        'floorPrice': CurrencyInfoToJSON(value.floorPrice),
        'bannerImage': MediaToJSON(value.bannerImage),
        'featuredImage': MediaToJSON(value.featuredImage),
        'urls': value.urls === undefined ? undefined : ((value.urls as Array<any>).map(URLToJSON)),
        'socialMedia': value.socialMedia === undefined ? undefined : ((value.socialMedia as Array<any>).map(SocialMediaToJSON)),
    };
}

