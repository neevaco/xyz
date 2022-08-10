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
        "name": "contractAddress",
        "baseName": "contractAddress",
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
        "name": "fiat",
        "baseName": "fiat",
        "type": "Array<CurrencyInfo>",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "pretty",
        "baseName": "pretty",
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
        "name": "tokenValue",
        "baseName": "tokenValue",
        "type": "number",
        "format": ""
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=CurrencyInfo.js.map