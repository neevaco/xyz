export class SearchDocument {
    constructor() {
    }
    static getAttributeTypeMap() {
        return SearchDocument.attributeTypeMap;
    }
}
SearchDocument.discriminator = undefined;
SearchDocument.attributeTypeMap = [
    {
        "name": "collection",
        "baseName": "collection",
        "type": "Collection",
        "format": ""
    },
    {
        "name": "token",
        "baseName": "token",
        "type": "Token",
        "format": ""
    },
    {
        "name": "wallet",
        "baseName": "wallet",
        "type": "Wallet",
        "format": ""
    }
];
//# sourceMappingURL=SearchDocument.js.map