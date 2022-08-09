export class Collection {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Collection.attributeTypeMap;
    }
}
Collection.discriminator = undefined;
Collection.attributeTypeMap = [
    {
        "name": "bannerImage",
        "baseName": "bannerImage",
        "type": "Media",
        "format": ""
    },
    {
        "name": "blockchain",
        "baseName": "blockchain",
        "type": "BlockchainInfo",
        "format": ""
    },
    {
        "name": "contractAddress",
        "baseName": "contractAddress",
        "type": "string",
        "format": ""
    },
    {
        "name": "createdDate",
        "baseName": "createdDate",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "featuredImage",
        "baseName": "featuredImage",
        "type": "Media",
        "format": ""
    },
    {
        "name": "floorPrice",
        "baseName": "floorPrice",
        "type": "CurrencyInfo",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "shortDescription",
        "baseName": "shortDescription",
        "type": "string",
        "format": ""
    },
    {
        "name": "slug",
        "baseName": "slug",
        "type": "string",
        "format": ""
    },
    {
        "name": "socialMedia",
        "baseName": "socialMedia",
        "type": "Array<SocialMedia>",
        "format": ""
    },
    {
        "name": "symbol",
        "baseName": "symbol",
        "type": "string",
        "format": ""
    },
    {
        "name": "urls",
        "baseName": "urls",
        "type": "Array<URL>",
        "format": ""
    }
];
//# sourceMappingURL=Collection.js.map