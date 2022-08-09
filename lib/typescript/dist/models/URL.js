export class URL {
    constructor() {
    }
    static getAttributeTypeMap() {
        return URL.attributeTypeMap;
    }
}
URL.discriminator = undefined;
URL.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=URL.js.map