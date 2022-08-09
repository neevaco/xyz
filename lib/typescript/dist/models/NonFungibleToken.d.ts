import { Collection } from './Collection';
import { Media } from './Media';
import { MediaPreview } from './MediaPreview';
import { TokenAttribute } from './TokenAttribute';
import { Transaction } from './Transaction';
import { Wallet } from './Wallet';
export declare class NonFungibleToken {
    'attributes'?: Array<TokenAttribute>;
    'collection'?: Collection;
    'contractTitle'?: string;
    'description'?: string;
    'durability'?: NonFungibleTokenDurabilityEnum;
    'media'?: Media;
    'owner'?: Wallet;
    'previews'?: Array<MediaPreview>;
    'projectName'?: string;
    'purchase'?: Transaction;
    'title'?: string;
    'tokenID': string;
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
