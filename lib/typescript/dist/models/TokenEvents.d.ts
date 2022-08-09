import { Token } from './Token';
import { Transaction } from './Transaction';
export declare class TokenEvents {
    'token'?: Array<Token>;
    'events'?: Array<Transaction>;
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
