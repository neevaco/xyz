import { CurrencyInfo } from './CurrencyInfo';
export declare class TransactionLogLine {
    'burned'?: boolean;
    'fromAddress'?: string;
    'logIndex'?: number;
    'mint'?: boolean;
    'price'?: CurrencyInfo;
    'toAddress'?: string;
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
