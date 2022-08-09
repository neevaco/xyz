import { CurrencyInfo } from './CurrencyInfo';
import { TransactionLogLine } from './TransactionLogLine';
export declare class Transaction {
    'blockNumber'?: number;
    'transactionIndex'?: number;
    'gasFee'?: CurrencyInfo;
    'timestamp'?: Date;
    'logLine'?: Array<TransactionLogLine>;
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
