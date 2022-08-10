import { CurrencyInfo } from './CurrencyInfo';
import { ENS } from './ENS';
import { OwnedCollection } from './OwnedCollection';
import { SocialMedia } from './SocialMedia';
import { Token } from './Token';
import { Transaction } from './Transaction';
export declare class Wallet {
    'address': string;
    'balances'?: Array<CurrencyInfo>;
    'collections'?: Array<OwnedCollection>;
    'ens'?: Array<ENS>;
    'history'?: Array<Transaction>;
    'recentTokens'?: Array<Token>;
    'socialMedia'?: Array<SocialMedia>;
    'topTokens'?: Array<Token>;
    'totalBalance'?: Array<CurrencyInfo>;
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
