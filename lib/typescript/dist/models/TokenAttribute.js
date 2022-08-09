export class TokenAttribute {
    constructor() {
    }
    static getAttributeTypeMap() {
        return TokenAttribute.attributeTypeMap;
    }
}
TokenAttribute.discriminator = undefined;
TokenAttribute.attributeTypeMap = [
    {
        "name": "traitType",
        "baseName": "traitType",
        "type": "string",
        "format": ""
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=TokenAttribute.js.map