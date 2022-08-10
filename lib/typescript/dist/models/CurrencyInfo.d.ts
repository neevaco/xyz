import { MediaPreview } from './MediaPreview';
export declare class CurrencyInfo {
    'contractAddress'?: string;
    'decimals'?: number;
    'fiat'?: Array<CurrencyInfo>;
    'name'?: string;
    'pretty'?: string;
    'symbol'?: string;
    'symbolLogos'?: Array<MediaPreview>;
    'tokenValue'?: number;
    'value'?: string;
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
