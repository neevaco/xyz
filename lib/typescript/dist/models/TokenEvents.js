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
        "name": "token",
        "baseName": "token",
        "type": "Array<Token>",
        "format": ""
    },
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<Transaction>",
        "format": ""
    }
];
//# sourceMappingURL=TokenEvents.js.map