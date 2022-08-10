export class Media {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Media.attributeTypeMap;
    }
}
Media.discriminator = undefined;
Media.attributeTypeMap = [
    {
        "name": "URI",
        "baseName": "URI",
        "type": "string",
        "format": ""
    },
    {
        "name": "key",
        "baseName": "key",
        "type": "string",
        "format": ""
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "Array<MediaVersion>",
        "format": ""
    }
];
//# sourceMappingURL=Media.js.map