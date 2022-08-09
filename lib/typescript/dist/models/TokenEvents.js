export class TokenEvents {
    constructor() {
    }
    static getAttributeTypeMap() {
        return TokenEvents.attributeTypeMap;
    }
}
TokenEvents.discriminator = undefined;
TokenEvents.attributeTypeMap = [
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<Transaction>",
        "format": ""
    },
    {
        "name": "token",
        "baseName": "token",
        "type": "Array<Token>",
        "format": ""
    }
];
//# sourceMappingURL=TokenEvents.js.map