import { CurrencyInfo } from './CurrencyInfo';
export declare class TransactionLogLine {
    'burned'?: boolean;
    'mint'?: boolean;
    'logIndex'?: number;
    'fromAddress'?: string;
    'toAddress'?: string;
    'price'?: CurrencyInfo;
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
