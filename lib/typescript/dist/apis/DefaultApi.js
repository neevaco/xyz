var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import { HttpMethod } from '../http/http';
import { ObjectSerializer } from '../models/ObjectSerializer';
import { ApiException } from './exception';
import { isCodeInRange } from '../util';
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {
    getBlockchains(_options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            const localVarPath = '/api/v1/blockchains';
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
    getCollection(contractAddress, chainID, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (contractAddress === null || contractAddress === undefined) {
                throw new RequiredError("DefaultApi", "getCollection", "contractAddress");
            }
            const localVarPath = '/api/v1/collections/{contractAddress}'
                .replace('{' + 'contractAddress' + '}', encodeURIComponent(String(contractAddress)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (chainID !== undefined) {
                requestContext.setQueryParam("chainID", ObjectSerializer.serialize(chainID, "string", ""));
            }
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
    getContractTokens(contractAddress, chainID, limit, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (contractAddress === null || contractAddress === undefined) {
                throw new RequiredError("DefaultApi", "getContractTokens", "contractAddress");
            }
            const localVarPath = '/api/v1/tokens/{contractAddress}'
                .replace('{' + 'contractAddress' + '}', encodeURIComponent(String(contractAddress)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (chainID !== undefined) {
                requestContext.setQueryParam("chainID", ObjectSerializer.serialize(chainID, "string", ""));
            }
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
            }
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
    getContractTokensByContractAndID(contractAddresses, tokenIdentifiers, chainID, limit, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (contractAddresses === null || contractAddresses === undefined) {
                throw new RequiredError("DefaultApi", "getContractTokensByContractAndID", "contractAddresses");
            }
            if (tokenIdentifiers === null || tokenIdentifiers === undefined) {
                throw new RequiredError("DefaultApi", "getContractTokensByContractAndID", "tokenIdentifiers");
            }
            const localVarPath = '/api/v1/token-batch';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (contractAddresses !== undefined) {
                requestContext.setQueryParam("contractAddresses", ObjectSerializer.serialize(contractAddresses, "string", ""));
            }
            if (tokenIdentifiers !== undefined) {
                requestContext.setQueryParam("tokenIdentifiers", ObjectSerializer.serialize(tokenIdentifiers, "string", ""));
            }
            if (chainID !== undefined) {
                requestContext.setQueryParam("chainID", ObjectSerializer.serialize(chainID, "string", ""));
            }
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
            }
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
    getContractTransactionHistory(contractAddress, cursor, chainID, limit, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (contractAddress === null || contractAddress === undefined) {
                throw new RequiredError("DefaultApi", "getContractTransactionHistory", "contractAddress");
            }
            const localVarPath = '/api/v1/collections/{contractAddress}/transactions/history'
                .replace('{' + 'contractAddress' + '}', encodeURIComponent(String(contractAddress)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (cursor !== undefined) {
                requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
            }
            if (chainID !== undefined) {
                requestContext.setQueryParam("chainID", ObjectSerializer.serialize(chainID, "string", ""));
            }
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
            }
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
    getSearchResults(query, cursor, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (query === null || query === undefined) {
                throw new RequiredError("DefaultApi", "getSearchResults", "query");
            }
            const localVarPath = '/api/v1/search/{query}'
                .replace('{' + 'query' + '}', encodeURIComponent(String(query)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (cursor !== undefined) {
                requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
            }
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
    getSoldTokens(walletAddress, chainID, cursor, limit, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (walletAddress === null || walletAddress === undefined) {
                throw new RequiredError("DefaultApi", "getSoldTokens", "walletAddress");
            }
            const localVarPath = '/api/v1/wallets/{walletAddress}/sold-tokens'
                .replace('{' + 'walletAddress' + '}', encodeURIComponent(String(walletAddress)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (chainID !== undefined) {
                requestContext.setQueryParam("chainID", ObjectSerializer.serialize(chainID, "string", ""));
            }
            if (cursor !== undefined) {
                requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
            }
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
            }
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
    getToken(contractAddress, tokenID, chainID, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (contractAddress === null || contractAddress === undefined) {
                throw new RequiredError("DefaultApi", "getToken", "contractAddress");
            }
            if (tokenID === null || tokenID === undefined) {
                throw new RequiredError("DefaultApi", "getToken", "tokenID");
            }
            const localVarPath = '/api/v1/tokens/{contractAddress}/{tokenID}'
                .replace('{' + 'contractAddress' + '}', encodeURIComponent(String(contractAddress)))
                .replace('{' + 'tokenID' + '}', encodeURIComponent(String(tokenID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (chainID !== undefined) {
                requestContext.setQueryParam("chainID", ObjectSerializer.serialize(chainID, "string", ""));
            }
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
    getTokenGate(tokenID, contractAddress, walletAddress, chainID, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (tokenID === null || tokenID === undefined) {
                throw new RequiredError("DefaultApi", "getTokenGate", "tokenID");
            }
            if (contractAddress === null || contractAddress === undefined) {
                throw new RequiredError("DefaultApi", "getTokenGate", "contractAddress");
            }
            if (walletAddress === null || walletAddress === undefined) {
                throw new RequiredError("DefaultApi", "getTokenGate", "walletAddress");
            }
            const localVarPath = '/api/v1/wallets/{walletAddress}/gate/{contractAddress}/{tokenID}'
                .replace('{' + 'tokenID' + '}', encodeURIComponent(String(tokenID)))
                .replace('{' + 'contractAddress' + '}', encodeURIComponent(String(contractAddress)))
                .replace('{' + 'walletAddress' + '}', encodeURIComponent(String(walletAddress)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (chainID !== undefined) {
                requestContext.setQueryParam("chainID", ObjectSerializer.serialize(chainID, "string", ""));
            }
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
    getTokenTransfers(contractAddress, tokenID, chainID, limit, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (contractAddress === null || contractAddress === undefined) {
                throw new RequiredError("DefaultApi", "getTokenTransfers", "contractAddress");
            }
            if (tokenID === null || tokenID === undefined) {
                throw new RequiredError("DefaultApi", "getTokenTransfers", "tokenID");
            }
            const localVarPath = '/api/v1/tokens/{contractAddress}/{tokenID}/transfers'
                .replace('{' + 'contractAddress' + '}', encodeURIComponent(String(contractAddress)))
                .replace('{' + 'tokenID' + '}', encodeURIComponent(String(tokenID)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (chainID !== undefined) {
                requestContext.setQueryParam("chainID", ObjectSerializer.serialize(chainID, "string", ""));
            }
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
            }
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
    getTokensBySearchQuery(query, cursor, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (query === null || query === undefined) {
                throw new RequiredError("DefaultApi", "getTokensBySearchQuery", "query");
            }
            const localVarPath = '/api/v1/tokens/search/{query}'
                .replace('{' + 'query' + '}', encodeURIComponent(String(query)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (cursor !== undefined) {
                requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
            }
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
    getWallet(walletAddress, chainID, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (walletAddress === null || walletAddress === undefined) {
                throw new RequiredError("DefaultApi", "getWallet", "walletAddress");
            }
            const localVarPath = '/api/v1/wallets/{walletAddress}'
                .replace('{' + 'walletAddress' + '}', encodeURIComponent(String(walletAddress)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (chainID !== undefined) {
                requestContext.setQueryParam("chainID", ObjectSerializer.serialize(chainID, "string", ""));
            }
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
    getWalletBalances(walletAddress, limit, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (walletAddress === null || walletAddress === undefined) {
                throw new RequiredError("DefaultApi", "getWalletBalances", "walletAddress");
            }
            const localVarPath = '/api/v1/wallets/{walletAddress}/balances'
                .replace('{' + 'walletAddress' + '}', encodeURIComponent(String(walletAddress)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
            }
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
    getWalletMints(walletAddress, chainID, cursor, limit, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (walletAddress === null || walletAddress === undefined) {
                throw new RequiredError("DefaultApi", "getWalletMints", "walletAddress");
            }
            const localVarPath = '/api/v1/wallets/{walletAddress}/mints'
                .replace('{' + 'walletAddress' + '}', encodeURIComponent(String(walletAddress)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (chainID !== undefined) {
                requestContext.setQueryParam("chainID", ObjectSerializer.serialize(chainID, "string", ""));
            }
            if (cursor !== undefined) {
                requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
            }
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
            }
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
    getWalletTokens(walletAddress, cursor, chainID, limit, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (walletAddress === null || walletAddress === undefined) {
                throw new RequiredError("DefaultApi", "getWalletTokens", "walletAddress");
            }
            const localVarPath = '/api/v1/wallets/{walletAddress}/tokens'
                .replace('{' + 'walletAddress' + '}', encodeURIComponent(String(walletAddress)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (cursor !== undefined) {
                requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
            }
            if (chainID !== undefined) {
                requestContext.setQueryParam("chainID", ObjectSerializer.serialize(chainID, "string", ""));
            }
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
            }
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
    getWalletTransactions(walletAddress, cursor, limit, chainID, tokenType, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (walletAddress === null || walletAddress === undefined) {
                throw new RequiredError("DefaultApi", "getWalletTransactions", "walletAddress");
            }
            const localVarPath = '/api/v1/wallets/{walletAddress}/transactions/history'
                .replace('{' + 'walletAddress' + '}', encodeURIComponent(String(walletAddress)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (cursor !== undefined) {
                requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
            }
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
            }
            if (chainID !== undefined) {
                requestContext.setQueryParam("chainID", ObjectSerializer.serialize(chainID, "string", ""));
            }
            if (tokenType !== undefined) {
                requestContext.setQueryParam("tokenType", ObjectSerializer.serialize(tokenType, "'NFT' | 'SFT' | 'unknown'", ""));
            }
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
export class DefaultApiResponseProcessor {
    getBlockchains(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<BlockchainInfo>", "");
                return body;
            }
            if (isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "ErrorMessage", "");
                throw new ApiException(response.httpStatusCode, "An error message for unexpected requests.", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<BlockchainInfo>", "");
                return body;
            }
            throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    getCollection(response) {
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
    getContractTokens(response) {
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
    getContractTokensByContractAndID(response) {
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
    getContractTransactionHistory(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Transaction>", "");
                return body;
            }
            if (isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "ErrorMessage", "");
                throw new ApiException(response.httpStatusCode, "An error message for unexpected requests.", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Transaction>", "");
                return body;
            }
            throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    getSearchResults(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<SearchDocument>", "");
                return body;
            }
            if (isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "ErrorMessage", "");
                throw new ApiException(response.httpStatusCode, "An error message for unexpected requests.", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<SearchDocument>", "");
                return body;
            }
            throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    getSoldTokens(response) {
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
    getToken(response) {
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
    getTokenGate(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "TokenGate", "");
                return body;
            }
            if (isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "ErrorMessage", "");
                throw new ApiException(response.httpStatusCode, "An error message for unexpected requests.", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "TokenGate", "");
                return body;
            }
            throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    getTokenTransfers(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "TokenEvents", "");
                return body;
            }
            if (isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "ErrorMessage", "");
                throw new ApiException(response.httpStatusCode, "An error message for unexpected requests.", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "TokenEvents", "");
                return body;
            }
            throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    getTokensBySearchQuery(response) {
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
    getWallet(response) {
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
    getWalletBalances(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<CurrencyInfo>", "");
                return body;
            }
            if (isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "ErrorMessage", "");
                throw new ApiException(response.httpStatusCode, "An error message for unexpected requests.", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<CurrencyInfo>", "");
                return body;
            }
            throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    getWalletMints(response) {
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
    getWalletTokens(response) {
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
    getWalletTransactions(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Transaction>", "");
                return body;
            }
            if (isCodeInRange("0", response.httpStatusCode)) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "ErrorMessage", "");
                throw new ApiException(response.httpStatusCode, "An error message for unexpected requests.", body, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer.deserialize(ObjectSerializer.parse(yield response.body.text(), contentType), "Array<Transaction>", "");
                return body;
            }
            throw new ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
}
//# sourceMappingURL=DefaultApi.js.map