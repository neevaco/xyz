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
        "type": "MediaVersionKindEnum",
        "format": ""
    },
    {
        "name": "numBytes",
        "baseName": "numBytes",
        "type": "number",
        "format": ""
    },
    {
        "name": "width",
        "baseName": "width",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=MediaVersion.js.map