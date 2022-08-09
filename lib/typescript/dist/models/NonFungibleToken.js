export class NonFungibleToken {
    constructor() {
    }
    static getAttributeTypeMap() {
        return NonFungibleToken.attributeTypeMap;
    }
}
NonFungibleToken.discriminator = undefined;
NonFungibleToken.attributeTypeMap = [
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "Array<TokenAttribute>",
        "format": ""
    },
    {
        "name": "collection",
        "baseName": "collection",
        "type": "Collection",
        "format": ""
    },
    {
        "name": "contractTitle",
        "baseName": "contractTitle",
        "type": "string",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "durability",
        "baseName": "durability",
        "type": "NonFungibleTokenDurabilityEnum",
        "format": ""
    },
    {
        "name": "media",
        "baseName": "media",
        "type": "Media",
        "format": ""
    },
    {
        "name": "owner",
        "baseName": "owner",
        "type": "Wallet",
        "format": ""
    },
    {
        "name": "previews",
        "baseName": "previews",
        "type": "Array<MediaPreview>",
        "format": ""
    },
    {
        "name": "projectName",
        "baseName": "projectName",
        "type": "string",
        "format": ""
    },
    {
        "name": "purchase",
        "baseName": "purchase",
        "type": "Transaction",
        "format": ""
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string",
        "format": ""
    },
    {
        "name": "tokenID",
        "baseName": "tokenID",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=NonFungibleToken.js.map