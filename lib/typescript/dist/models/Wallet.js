export class Wallet {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Wallet.attributeTypeMap;
    }
}
Wallet.discriminator = undefined;
Wallet.attributeTypeMap = [
    {
        "name": "totalBalance",
        "baseName": "totalBalance",
        "type": "Array<CurrencyInfo>",
        "format": ""
    },
    {
        "name": "balances",
        "baseName": "balances",
        "type": "Array<CurrencyInfo>",
        "format": ""
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "string",
        "format": ""
    },
    {
        "name": "ens",
        "baseName": "ens",
        "type": "Array<ENS>",
        "format": ""
    },
    {
        "name": "socialMedia",
        "baseName": "socialMedia",
        "type": "Array<SocialMedia>",
        "format": ""
    },
    {
        "name": "recentTokens",
        "baseName": "recentTokens",
        "type": "Array<Token>",
        "format": ""
    },
    {
        "name": "topTokens",
        "baseName": "topTokens",
        "type": "Array<Token>",
        "format": ""
    },
    {
        "name": "collections",
        "baseName": "collections",
        "type": "Array<OwnedCollection>",
        "format": ""
    },
    {
        "name": "history",
        "baseName": "history",
        "type": "Array<Transaction>",
        "format": ""
    }
];
//# sourceMappingURL=Wallet.js.map