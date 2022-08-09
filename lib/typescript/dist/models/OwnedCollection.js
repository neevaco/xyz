export class OwnedCollection {
    constructor() {
    }
    static getAttributeTypeMap() {
        return OwnedCollection.attributeTypeMap;
    }
}
OwnedCollection.discriminator = undefined;
OwnedCollection.attributeTypeMap = [
    {
        "name": "tokens",
        "baseName": "tokens",
        "type": "Array<Token>",
        "format": ""
    },
    {
        "name": "collection",
        "baseName": "collection",
        "type": "Collection",
        "format": ""
    },
    {
        "name": "totalSpent",
        "baseName": "totalSpent",
        "type": "CurrencyInfo",
        "format": ""
    }
];
//# sourceMappingURL=OwnedCollection.js.map