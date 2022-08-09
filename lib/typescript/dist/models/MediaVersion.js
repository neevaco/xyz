export class MediaVersion {
    constructor() {
    }
    static getAttributeTypeMap() {
        return MediaVersion.attributeTypeMap;
    }
}
MediaVersion.discriminator = undefined;
MediaVersion.attributeTypeMap = [
    {
        "name": "kind",
        "baseName": "kind",
        "type": "MediaVersionKindEnum",
        "format": ""
    },
    {
        "name": "format",
        "baseName": "format",
        "type": "string",
        "format": ""
    },
    {
        "name": "width",
        "baseName": "width",
        "type": "number",
        "format": ""
    },
    {
        "name": "height",
        "baseName": "height",
        "type": "number",
        "format": ""
    },
    {
        "name": "numBytes",
        "baseName": "numBytes",
        "type": "number",
        "format": ""
    },
    {
        "name": "duration",
        "baseName": "duration",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=MediaVersion.js.map