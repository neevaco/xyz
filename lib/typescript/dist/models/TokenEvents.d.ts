import { Token } from './Token';
import { Transaction } from './Transaction';
export declare class TokenEvents {
    'events'?: Array<Transaction>;
    'token'?: Array<Token>;
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
