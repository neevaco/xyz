export class Transaction {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }
}
Transaction.discriminator = undefined;
Transaction.attributeTypeMap = [
    {
        "name": "blockNumber",
        "baseName": "blockNumber",
        "type": "number",
        "format": ""
    },
    {
        "name": "transactionIndex",
        "baseName": "transactionIndex",
        "type": "number",
        "format": ""
    },
    {
        "name": "gasFee",
        "baseName": "gasFee",
        "type": "CurrencyInfo",
        "format": ""
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "logLine",
        "baseName": "logLine",
        "type": "Array<TransactionLogLine>",
        "format": ""
    }
];
//# sourceMappingURL=Transaction.js.map