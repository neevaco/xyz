export class SocialMedia {
    constructor() {
    }
    static getAttributeTypeMap() {
        return SocialMedia.attributeTypeMap;
    }
}
SocialMedia.discriminator = undefined;
SocialMedia.attributeTypeMap = [
    {
        "name": "network",
        "baseName": "network",
        "type": "string",
        "format": ""
    },
    {
        "name": "username",
        "baseName": "username",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=SocialMedia.js.map