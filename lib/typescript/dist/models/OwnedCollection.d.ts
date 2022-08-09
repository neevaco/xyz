import { Collection } from './Collection';
import { CurrencyInfo } from './CurrencyInfo';
import { Token } from './Token';
export declare class OwnedCollection {
    'collection'?: Collection;
    'tokens'?: Array<Token>;
    'totalSpent'?: CurrencyInfo;
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
