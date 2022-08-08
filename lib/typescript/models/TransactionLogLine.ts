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
import type { CurrencyInfo } from './CurrencyInfo';
import {
    CurrencyInfoFromJSON,
    CurrencyInfoFromJSONTyped,
    CurrencyInfoToJSON,
} from './CurrencyInfo';

/**
 * 
 * @export
 * @interface TransactionLogLine
 */
export interface TransactionLogLine {
    /**
     * When the value is true, it indicates that a token has been burned, and this transaction corresponds to the burn.
     * @type {boolean}
     * @memberof TransactionLogLine
     */
    burned?: boolean | null;
    /**
     * When the value is true, it indicates this is the transaction representing a token minting.
     * @type {boolean}
     * @memberof TransactionLogLine
     */
    mint?: boolean | null;
    /**
     * Index of the log in the transaction.
     * @type {number}
     * @memberof TransactionLogLine
     */
    logIndex?: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionLogLine
     */
    fromAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionLogLine
     */
    toAddress?: string;
    /**
     * 
     * @type {CurrencyInfo}
     * @memberof TransactionLogLine
     */
    price?: CurrencyInfo;
}

/**
 * Check if a given object implements the TransactionLogLine interface.
 */
export function instanceOfTransactionLogLine(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransactionLogLineFromJSON(json: any): TransactionLogLine {
    return TransactionLogLineFromJSONTyped(json, false);
}

export function TransactionLogLineFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionLogLine {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'burned': !exists(json, 'burned') ? undefined : json['burned'],
        'mint': !exists(json, 'mint') ? undefined : json['mint'],
        'logIndex': !exists(json, 'logIndex') ? undefined : json['logIndex'],
        'fromAddress': !exists(json, 'fromAddress') ? undefined : json['fromAddress'],
        'toAddress': !exists(json, 'toAddress') ? undefined : json['toAddress'],
        'price': !exists(json, 'price') ? undefined : CurrencyInfoFromJSON(json['price']),
    };
}

export function TransactionLogLineToJSON(value?: TransactionLogLine | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'burned': value.burned,
        'mint': value.mint,
        'logIndex': value.logIndex,
        'fromAddress': value.fromAddress,
        'toAddress': value.toAddress,
        'price': CurrencyInfoToJSON(value.price),
    };
}

