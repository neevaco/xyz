var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BaseAPIRequestFactory } from './baseapi';
import { HttpMethod } from '../http/http';
import { ObjectSerializer } from '../models/ObjectSerializer';
import { ApiException } from './exception';
import { isCodeInRange } from '../util';
export class AlphaApiRequestFactory extends BaseAPIRequestFactory {
    getTopCollections(_options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1-alpha/collections/top';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            let authMethod;
            authMethod = _config.authMethods["apikey"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext));
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    getTopTokens(_options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1-alpha/tokens/top';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            let authMethod;
            authMethod = _config.authMethods["apikey"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext));
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    getTopWallets(_options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1-alpha/wallets/top';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            let authMethod;
            authMethod = _config.authMethods["apikey"];
            if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
                yield (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext));
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
}
export class AlphaApiResponseProcessor {
    getTopCollections(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Collection>", "");
                return body;
            }
            if (isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "ErrorMessage", "");
                throw new ApiException(response.httpStatusCode, "An error message for unexpected requests.", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Collection>", "");
                return body;
            }
            throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    getTopTokens(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Token>", "");
                return body;
            }
            if (isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "ErrorMessage", "");
                throw new ApiException(response.httpStatusCode, "An error message for unexpected requests.", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Token>", "");
                return body;
            }
            throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    getTopWallets(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Wallet>", "");
                return body;
            }
            if (isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "ErrorMessage", "");
                throw new ApiException(response.httpStatusCode, "An error message for unexpected requests.", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Wallet>", "");
                return body;
            }
            throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
}
//# sourceMappingURL=AlphaApi.js.map