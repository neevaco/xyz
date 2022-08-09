import { BlockchainInfo } from './BlockchainInfo';
import { CurrencyInfo } from './CurrencyInfo';
import { Media } from './Media';
import { SocialMedia } from './SocialMedia';
import { URL } from './URL';
export declare class Collection {
    'bannerImage'?: Media;
    'blockchain': BlockchainInfo;
    'contractAddress': string;
    'createdDate'?: Date;
    'description'?: string;
    'featuredImage'?: Media;
    'floorPrice'?: CurrencyInfo;
    'name'?: string;
    'shortDescription'?: string;
    'slug'?: string;
    'socialMedia'?: Array<SocialMedia>;
    'symbol'?: string;
    'urls'?: Array<URL>;
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
