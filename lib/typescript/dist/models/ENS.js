export class ENS {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ENS.attributeTypeMap;
    }
}
ENS.discriminator = undefined;
ENS.attributeTypeMap = [
    {
        "name": "expires",
        "baseName": "expires",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "isPrimary",
        "baseName": "isPrimary",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "pointsTo",
        "baseName": "pointsTo",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=ENS.js.map