export class ErrorMessage {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ErrorMessage.attributeTypeMap;
    }
}
ErrorMessage.discriminator = undefined;
ErrorMessage.attributeTypeMap = [
    {
        "name": "error",
        "baseName": "error",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=ErrorMessage.js.map