import { BlockchainInfo } from './BlockchainInfo';
import { CurrencyInfo } from './CurrencyInfo';
import { Media } from './Media';
import { SocialMedia } from './SocialMedia';
import { URL } from './URL';
export declare class Collection {
    'blockchain': BlockchainInfo;
    'contractAddress': string;
    'symbol'?: string;
    'slug'?: string;
    'name'?: string;
    'description'?: string;
    'shortDescription'?: string;
    'createdDate'?: Date;
    'floorPrice'?: CurrencyInfo;
    'bannerImage'?: Media;
    'featuredImage'?: Media;
    'urls'?: Array<URL>;
    'socialMedia'?: Array<SocialMedia>;
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
