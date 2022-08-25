/**
 * n.xyz REST API
 * REST API for blockchain data.
 *
 * OpenAPI spec version: 0.23.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class MediaPreview {
    /**
    * URI for the image asset.
    */
    'URI'?: string;
    /**
    * If a video, length of video in ISO 8601 duration format.
    */
    'duration'?: string;
    'format'?: string;
    /**
    * The image's approximate height in pixels.
    */
    'height'?: number;
    'kind'?: MediaPreviewKindEnum;
    /**
    * The image's approximate width in pixels.
    */
    'width'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "URI",
            "baseName": "URI",
            "type": "string",
            "format": ""
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string",
            "format": ""
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "string",
            "format": ""
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "MediaPreviewKindEnum",
            "format": ""
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MediaPreview.attributeTypeMap;
    }

    public constructor() {
    }
}


export type MediaPreviewKindEnum = "video" | "image" | "raw" | "audio" ;

