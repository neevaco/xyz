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
    },
    {
        "name": "collection",
        "baseName": "collection",
        "type": "Collection",
        "format": ""
    }
];
//# sourceMappingURL=SearchDocument.js.map