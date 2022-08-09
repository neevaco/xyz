export class TransactionLogLine {
    constructor() {
    }
    static getAttributeTypeMap() {
        return TransactionLogLine.attributeTypeMap;
    }
}
TransactionLogLine.discriminator = undefined;
TransactionLogLine.attributeTypeMap = [
    {
        "name": "burned",
        "baseName": "burned",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "fromAddress",
        "baseName": "fromAddress",
        "type": "string",
        "format": ""
    },
    {
        "name": "logIndex",
        "baseName": "logIndex",
        "type": "number",
        "format": ""
    },
    {
        "name": "mint",
        "baseName": "mint",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "CurrencyInfo",
        "format": ""
    },
    {
        "name": "toAddress",
        "baseName": "toAddress",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=TransactionLogLine.js.map