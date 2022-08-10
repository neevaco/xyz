export declare class MediaVersion {
    'duration'?: string;
    'format'?: string;
    'height'?: number;
    'kind'?: MediaVersionKindEnum;
    'numBytes'?: number;
    'width'?: number;
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
