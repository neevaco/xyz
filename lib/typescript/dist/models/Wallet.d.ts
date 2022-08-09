import { CurrencyInfo } from './CurrencyInfo';
import { ENS } from './ENS';
import { OwnedCollection } from './OwnedCollection';
import { SocialMedia } from './SocialMedia';
import { Token } from './Token';
import { Transaction } from './Transaction';
export declare class Wallet {
    'totalBalance'?: Array<CurrencyInfo>;
    'balances'?: Array<CurrencyInfo>;
    'address': string;
    'ens'?: Array<ENS>;
    'socialMedia'?: Array<SocialMedia>;
    'recentTokens'?: Array<Token>;
    'topTokens'?: Array<Token>;
    'collections'?: Array<OwnedCollection>;
    'history'?: Array<Transaction>;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
