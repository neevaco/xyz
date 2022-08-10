import { BlockchainInfo } from './BlockchainInfo';
import { NonFungibleToken } from './NonFungibleToken';
import { OpenSeaContract } from './OpenSeaContract';
export declare class Token {
    'blockchain': BlockchainInfo;
    'contractAddress': string;
    'nft'?: NonFungibleToken;
    'openSeaContract'?: OpenSeaContract;
    'symbol'?: string;
    'tokenStandard'?: string;
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
