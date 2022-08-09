export declare class OpenSeaContract {
    'assetContractType'?: OpenSeaContractAssetContractTypeEnum;
    'buyerFeeBasisPoints'?: number;
    'defaultToFiat'?: boolean;
    'nftVersion'?: string;
    'openSeaVersion'?: string;
    'sellerFeeBasisPoints'?: number;
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
export declare type OpenSeaContractAssetContractTypeEnum = "NFT" | "SFT" | "unknown";
