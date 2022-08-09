import { MediaVersion } from './MediaVersion';
export declare class Media {
    'key': string;
    'URI'?: string;
    'version'?: Array<MediaVersion>;
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