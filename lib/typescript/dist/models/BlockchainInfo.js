export class BlockchainInfo {
    constructor() {
    }
    static getAttributeTypeMap() {
        return BlockchainInfo.attributeTypeMap;
    }
}
BlockchainInfo.discriminator = undefined;
BlockchainInfo.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "shortName",
        "baseName": "shortName",
        "type": "string",
        "format": ""
    },
    {
        "name": "chainID",
        "baseName": "chainID",
        "type": "string",
        "format": ""
    },
    {
        "name": "shortChainID",
        "baseName": "shortChainID",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=BlockchainInfo.js.map