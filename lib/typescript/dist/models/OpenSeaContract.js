export class OpenSeaContract {
    constructor() {
    }
    static getAttributeTypeMap() {
        return OpenSeaContract.attributeTypeMap;
    }
}
OpenSeaContract.discriminator = undefined;
OpenSeaContract.attributeTypeMap = [
    {
        "name": "assetContractType",
        "baseName": "assetContractType",
        "type": "OpenSeaContractAssetContractTypeEnum",
        "format": ""
    },
    {
        "name": "buyerFeeBasisPoints",
        "baseName": "buyerFeeBasisPoints",
        "type": "number",
        "format": ""
    },
    {
        "name": "defaultToFiat",
        "baseName": "defaultToFiat",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "nftVersion",
        "baseName": "nftVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "openSeaVersion",
        "baseName": "openSeaVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "sellerFeeBasisPoints",
        "baseName": "sellerFeeBasisPoints",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=OpenSeaContract.js.map