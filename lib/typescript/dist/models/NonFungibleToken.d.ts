import { Collection } from './Collection';
import { Media } from './Media';
import { MediaPreview } from './MediaPreview';
import { TokenAttribute } from './TokenAttribute';
import { Transaction } from './Transaction';
import { Wallet } from './Wallet';
export declare class NonFungibleToken {
    'tokenID': string;
    'title'?: string;
    'contractTitle'?: string;
    'description'?: string;
    'media'?: Media;
    'previews'?: Array<MediaPreview>;
    'owner'?: Wallet;
    'attributes'?: Array<TokenAttribute>;
    'collection'?: Collection;
    'purchase'?: Transaction;
    'durability'?: NonFungibleTokenDurabilityEnum;
    'projectName'?: string;
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
export declare type NonFungibleTokenDurabilityEnum = "On-Chain" | "Decentralized" | "Web" | "Unknown";
