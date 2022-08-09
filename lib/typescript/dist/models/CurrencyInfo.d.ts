export declare class CurrencyInfo {
    'value'?: string;
    'tokenValue'?: number;
    'fiat'?: Array<CurrencyInfo>;
    'pretty'?: string;
    'decimals'?: number;
    'symbol'?: string;
    'contractAddress'?: string;
    'name'?: string;
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
