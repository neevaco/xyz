export declare class MediaVersion {
    'kind'?: MediaVersionKindEnum;
    'format'?: string;
    'width'?: number;
    'height'?: number;
    'numBytes'?: number;
    'duration'?: string;
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
export declare type MediaVersionKindEnum = "video" | "image" | "raw" | "audio";
