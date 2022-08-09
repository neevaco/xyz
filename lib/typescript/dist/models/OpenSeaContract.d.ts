export declare class OpenSeaContract {
    'assetContractType'?: OpenSeaContractAssetContractTypeEnum;
    'nftVersion'?: string;
    'openSeaVersion'?: string;
    'defaultToFiat'?: boolean;
    'buyerFeeBasisPoints'?: number;
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
