export * from './BlockchainInfo';
export * from './Collection';
export * from './CurrencyInfo';
export * from './ENS';
export * from './ErrorMessage';
export * from './Media';
export * from './MediaPreview';
export * from './MediaVersion';
export * from './NonFungibleToken';
export * from './OpenSeaContract';
export * from './OwnedCollection';
export * from './SearchDocument';
export * from './SocialMedia';
export * from './Token';
export * from './TokenAttribute';
export * from './TokenEvents';
export * from './TokenGate';
export * from './Transaction';
export * from './TransactionLogLine';
export * from './URL';
export * from './Wallet';
import { BlockchainInfo } from './BlockchainInfo';
import { Collection } from './Collection';
import { CurrencyInfo } from './CurrencyInfo';
import { ENS } from './ENS';
import { ErrorMessage } from './ErrorMessage';
import { Media } from './Media';
import { MediaPreview } from './MediaPreview';
import { MediaVersion } from './MediaVersion';
import { NonFungibleToken } from './NonFungibleToken';
import { OpenSeaContract } from './OpenSeaContract';
import { OwnedCollection } from './OwnedCollection';
import { SearchDocument } from './SearchDocument';
import { SocialMedia } from './SocialMedia';
import { Token } from './Token';
import { TokenAttribute } from './TokenAttribute';
import { TokenEvents } from './TokenEvents';
import { TokenGate } from './TokenGate';
import { Transaction } from './Transaction';
import { TransactionLogLine } from './TransactionLogLine';
import { URL } from './URL';
import { Wallet } from './Wallet';
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
const supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
let enumsMap = new Set([
    "MediaPreviewKindEnum",
    "MediaVersionKindEnum",
    "NonFungibleTokenDurabilityEnum",
    "OpenSeaContractAssetContractTypeEnum",
]);
let typeMap = {
    "BlockchainInfo": BlockchainInfo,
    "Collection": Collection,
    "CurrencyInfo": CurrencyInfo,
    "ENS": ENS,
    "ErrorMessage": ErrorMessage,
    "Media": Media,
    "MediaPreview": MediaPreview,
    "MediaVersion": MediaVersion,
    "NonFungibleToken": NonFungibleToken,
    "OpenSeaContract": OpenSeaContract,
    "OwnedCollection": OwnedCollection,
    "SearchDocument": SearchDocument,
    "SocialMedia": SocialMedia,
    "Token": Token,
    "TokenAttribute": TokenAttribute,
    "TokenEvents": TokenEvents,
    "TokenGate": TokenGate,
    "Transaction": Transaction,
    "TransactionLogLine": TransactionLogLine,
    "URL": URL,
    "Wallet": Wallet,
};
export class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static deserialize(data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }
    static normalizeMediaType(mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }
    static getPreferredMediaType(mediaTypes) {
        if (!mediaTypes) {
            return "application/json";
        }
        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType = undefined;
        let selectedRank = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    }
    static stringify(data, mediaType) {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }
    static parse(rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        if (mediaType === "text/html") {
            return rawData;
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
//# sourceMappingURL=ObjectSerializer.js.map