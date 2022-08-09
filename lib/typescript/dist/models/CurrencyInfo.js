export class CurrencyInfo {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CurrencyInfo.attributeTypeMap;
    }
}
CurrencyInfo.discriminator = undefined;
CurrencyInfo.attributeTypeMap = [
    {
        "name": "value",
        "baseName": "value",
        "type": "string",
        "format": ""
    },
    {
        "name": "tokenValue",
        "baseName": "tokenValue",
        "type": "number",
        "format": ""
    },
    {
        "name": "fiat",
        "baseName": "fiat",
        "type": "Array<CurrencyInfo>",
        "format": ""
    },
    {
        "name": "pretty",
        "baseName": "pretty",
        "type": "string",
        "format": ""
    },
    {
        "name": "decimals",
        "baseName": "decimals",
        "type": "number",
        "format": ""
    },
    {
        "name": "symbol",
        "baseName": "symbol",
        "type": "string",
        "format": ""
    },
    {
        "name": "contractAddress",
        "baseName": "contractAddress",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=CurrencyInfo.js.map