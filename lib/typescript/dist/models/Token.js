export class Token {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Token.attributeTypeMap;
    }
}
Token.discriminator = undefined;
Token.attributeTypeMap = [
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
        "name": "tokenStandard",
        "baseName": "tokenStandard",
        "type": "string",
        "format": ""
    },
    {
        "name": "symbol",
        "baseName": "symbol",
        "type": "string",
        "format": ""
    },
    {
        "name": "nft",
        "baseName": "nft",
        "type": "NonFungibleToken",
        "format": ""
    },
    {
        "name": "openSeaContract",
        "baseName": "openSeaContract",
        "type": "OpenSeaContract",
        "format": ""
    }
];
//# sourceMappingURL=Token.js.map