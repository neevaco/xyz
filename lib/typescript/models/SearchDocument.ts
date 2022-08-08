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
import type { Token } from './Token';
import {
    TokenFromJSON,
    TokenFromJSONTyped,
    TokenToJSON,
} from './Token';
import type { Wallet } from './Wallet';
import {
    WalletFromJSON,
    WalletFromJSONTyped,
    WalletToJSON,
} from './Wallet';

/**
 * 
 * @export
 * @interface SearchDocument
 */
export interface SearchDocument {
    /**
     * 
     * @type {Token}
     * @memberof SearchDocument
     */
    token?: Token;
    /**
     * 
     * @type {Wallet}
     * @memberof SearchDocument
     */
    wallet?: Wallet;
    /**
     * 
     * @type {Collection}
     * @memberof SearchDocument
     */
    collection?: Collection;
}

/**
 * Check if a given object implements the SearchDocument interface.
 */
export function instanceOfSearchDocument(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchDocumentFromJSON(json: any): SearchDocument {
    return SearchDocumentFromJSONTyped(json, false);
}

export function SearchDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchDocument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : TokenFromJSON(json['token']),
        'wallet': !exists(json, 'wallet') ? undefined : WalletFromJSON(json['wallet']),
        'collection': !exists(json, 'collection') ? undefined : CollectionFromJSON(json['collection']),
    };
}

export function SearchDocumentToJSON(value?: SearchDocument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': TokenToJSON(value.token),
        'wallet': WalletToJSON(value.wallet),
        'collection': CollectionToJSON(value.collection),
    };
}
