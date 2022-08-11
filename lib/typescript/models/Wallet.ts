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

import { CurrencyInfo } from './CurrencyInfo';
import { ENS } from './ENS';
import { OwnedCollection } from './OwnedCollection';
import { SocialMedia } from './SocialMedia';
import { Token } from './Token';
import { Transaction } from './Transaction';
import { HttpFile } from '../http/http';

export class Wallet {
    'address': string;
    /**
    * The balance of fungible tokens from smart contracts or blockchains. Certain non-standard ERC-20 tokens (e.g. stETH) may occasionally have stale balances, for example interest payments can be slow to update.
    */
    'balances'?: Array<CurrencyInfo>;
    /**
    * A sample of the collections this wallet owns.
    */
    'collections'?: Array<OwnedCollection>;
    'ens'?: Array<ENS>;
    /**
    * A reverse-chronological list of the latest transactions for a wallet.
    */
    'history'?: Array<Transaction>;
    /**
    * A sample of the most recently transferred tokens owned by this wallet.
    */
    'recentTokens'?: Array<Token>;
    'socialMedia'?: Array<SocialMedia>;
    /**
    * A sample of the most expensive tokens owned by this wallet.
    */
    'topTokens'?: Array<Token>;
    /**
    * The total balance in a fiat currency (e.g. USD) for the wallet.
    */
    'totalBalance'?: Array<CurrencyInfo>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "balances",
            "baseName": "balances",
            "type": "Array<CurrencyInfo>",
            "format": ""
        },
        {
            "name": "collections",
            "baseName": "collections",
            "type": "Array<OwnedCollection>",
            "format": ""
        },
        {
            "name": "ens",
            "baseName": "ens",
            "type": "Array<ENS>",
            "format": ""
        },
        {
            "name": "history",
            "baseName": "history",
            "type": "Array<Transaction>",
            "format": ""
        },
        {
            "name": "recentTokens",
            "baseName": "recentTokens",
            "type": "Array<Token>",
            "format": ""
        },
        {
            "name": "socialMedia",
            "baseName": "socialMedia",
            "type": "Array<SocialMedia>",
            "format": ""
        },
        {
            "name": "topTokens",
            "baseName": "topTokens",
            "type": "Array<Token>",
            "format": ""
        },
        {
            "name": "totalBalance",
            "baseName": "totalBalance",
            "type": "Array<CurrencyInfo>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Wallet.attributeTypeMap;
    }

    public constructor() {
    }
}
