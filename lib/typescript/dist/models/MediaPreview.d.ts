export declare class MediaPreview {
    'URI'?: string;
    'kind'?: MediaPreviewKindEnum;
    'format'?: string;
    'height'?: number;
    'width'?: number;
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
export declare type MediaPreviewKindEnum = "video" | "image" | "raw" | "audio";
