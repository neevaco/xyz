export class MediaPreview {
    constructor() {
    }
    static getAttributeTypeMap() {
        return MediaPreview.attributeTypeMap;
    }
}
MediaPreview.discriminator = undefined;
MediaPreview.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=MediaPreview.js.map