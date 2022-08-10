import { Collection } from './Collection';
import { Token } from './Token';
import { Wallet } from './Wallet';
export declare class SearchDocument {
    'collection'?: Collection;
    'token'?: Token;
    'wallet'?: Wallet;
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
