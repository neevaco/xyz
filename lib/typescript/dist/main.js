import {parse as $hCgyA$parse, format as $hCgyA$format} from "url";
import * as $hCgyA$isomorphicfetch from "isomorphic-fetch";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $2a95763fc1a823d3$exports = {};

$parcel$export($2a95763fc1a823d3$exports, "COLLECTION_FORMATS", () => $2a95763fc1a823d3$export$83cb526776fb323d);
$parcel$export($2a95763fc1a823d3$exports, "BaseAPI", () => $2a95763fc1a823d3$export$70edad7ad5bb3f5d);
$parcel$export($2a95763fc1a823d3$exports, "RequiredError", () => $2a95763fc1a823d3$export$a27bea7cdb975d70);
$parcel$export($2a95763fc1a823d3$exports, "MediaVersion", () => $2a95763fc1a823d3$export$e2b7ef15602a36a7);
$parcel$export($2a95763fc1a823d3$exports, "DefaultApiFetchParamCreator", () => $2a95763fc1a823d3$export$90dabc428f7b218c);
$parcel$export($2a95763fc1a823d3$exports, "DefaultApiFp", () => $2a95763fc1a823d3$export$47eb7a1dff8d5250);
$parcel$export($2a95763fc1a823d3$exports, "DefaultApiFactory", () => $2a95763fc1a823d3$export$b6aeda2059595393);
$parcel$export($2a95763fc1a823d3$exports, "DefaultApi", () => $2a95763fc1a823d3$export$872437fb2a17cd0e);


const $2a95763fc1a823d3$var$BASE_PATH = "https://virtserver.swaggerhub.com/neevaxyz/jdtest/0.0.1".replace(/\/+$/, "");
const $2a95763fc1a823d3$export$83cb526776fb323d = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|"
};
class $2a95763fc1a823d3$export$70edad7ad5bb3f5d {
    constructor(configuration, basePath = $2a95763fc1a823d3$var$BASE_PATH, fetch = $hCgyA$isomorphicfetch){
        this.basePath = basePath;
        this.fetch = fetch;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}
class $2a95763fc1a823d3$export$a27bea7cdb975d70 extends Error {
    constructor(field, msg){
        super(msg);
        this.field = field;
    }
}
let $2a95763fc1a823d3$export$e2b7ef15602a36a7;
(function($2a95763fc1a823d3$export$e2b7ef15602a36a7) {
    let KindEnum1;
    (function(KindEnum) {
        KindEnum[KindEnum["Video"] = 'video'] = "Video";
        KindEnum[KindEnum["Image"] = 'image'] = "Image";
        KindEnum[KindEnum["Raw"] = 'raw'] = "Raw";
        KindEnum[KindEnum["Audio"] = 'audio'] = "Audio";
    })(KindEnum1 = $2a95763fc1a823d3$export$e2b7ef15602a36a7.KindEnum || ($2a95763fc1a823d3$export$e2b7ef15602a36a7.KindEnum = {}));
})($2a95763fc1a823d3$export$e2b7ef15602a36a7 || ($2a95763fc1a823d3$export$e2b7ef15602a36a7 = {}));
const $2a95763fc1a823d3$export$90dabc428f7b218c = function(configuration) {
    return {
        /**
         * 
         * @summary Get a collection by its contract address
         * @param {string} contractAddress A hex address for a blockchain contract
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1CollectionsContractAddressGet (contractAddress, options = {}) {
            // verify required parameter 'contractAddress' is not null or undefined
            if (contractAddress === null || contractAddress === undefined) throw new $2a95763fc1a823d3$export$a27bea7cdb975d70('contractAddress', 'Required parameter contractAddress was null or undefined when calling apiV1CollectionsContractAddressGet.');
            const localVarPath = `/api/v1/collections/{contractAddress}/`.replace(`{${"contractAddress"}}`, encodeURIComponent(String(contractAddress)));
            const localVarUrlObj = $hCgyA$parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({
                method: 'GET'
            }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: $hCgyA$format(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Get a collections
         * @param {string} [contractAddress] A hex address for a blockchain contract
         * @param {string} [query] A search query containing keywords or operators to filter tokens
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1CollectionsGet (contractAddress, query, options = {}) {
            const localVarPath = `/api/v1/collections/`;
            const localVarUrlObj = $hCgyA$parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({
                method: 'GET'
            }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (contractAddress !== undefined) localVarQueryParameter['contractAddress'] = contractAddress;
            if (query !== undefined) localVarQueryParameter['query'] = query;
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: $hCgyA$format(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Get tokens by contract address
         * @param {string} contractAddress A hex address for a blockchain contract
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1TokensContractAddressGet (contractAddress, options = {}) {
            // verify required parameter 'contractAddress' is not null or undefined
            if (contractAddress === null || contractAddress === undefined) throw new $2a95763fc1a823d3$export$a27bea7cdb975d70('contractAddress', 'Required parameter contractAddress was null or undefined when calling apiV1TokensContractAddressGet.');
            const localVarPath = `/api/v1/tokens/{contractAddress}/`.replace(`{${"contractAddress"}}`, encodeURIComponent(String(contractAddress)));
            const localVarUrlObj = $hCgyA$parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({
                method: 'GET'
            }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: $hCgyA$format(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Get a token by its contract address and token id
         * @param {string} contractAddress A hex address for a blockchain contract
         * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1TokensContractAddressTokenIDGet (contractAddress, tokenID, options = {}) {
            // verify required parameter 'contractAddress' is not null or undefined
            if (contractAddress === null || contractAddress === undefined) throw new $2a95763fc1a823d3$export$a27bea7cdb975d70('contractAddress', 'Required parameter contractAddress was null or undefined when calling apiV1TokensContractAddressTokenIDGet.');
            // verify required parameter 'tokenID' is not null or undefined
            if (tokenID === null || tokenID === undefined) throw new $2a95763fc1a823d3$export$a27bea7cdb975d70('tokenID', 'Required parameter tokenID was null or undefined when calling apiV1TokensContractAddressTokenIDGet.');
            const localVarPath = `/api/v1/tokens/{contractAddress}/{tokenID}`.replace(`{${"contractAddress"}}`, encodeURIComponent(String(contractAddress))).replace(`{${"tokenID"}}`, encodeURIComponent(String(tokenID)));
            const localVarUrlObj = $hCgyA$parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({
                method: 'GET'
            }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: $hCgyA$format(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Get tokens
         * @param {string} [contractAddress] A hex address for a blockchain contract
         * @param {string} [tokenID] An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
         * @param {string} [query] A search query containing keywords or operators to filter tokens
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1TokensGet (contractAddress, tokenID, query, options = {}) {
            const localVarPath = `/api/v1/tokens/`;
            const localVarUrlObj = $hCgyA$parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({
                method: 'GET'
            }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (contractAddress !== undefined) localVarQueryParameter['contractAddress'] = contractAddress;
            if (tokenID !== undefined) localVarQueryParameter['tokenID'] = tokenID;
            if (query !== undefined) localVarQueryParameter['query'] = query;
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: $hCgyA$format(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Get a Wallet
         * @param {string} [walletAddress] A hex string referencing a public wallet address
         * @param {string} [query] A search query containing keywords or operators to filter wallets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1WalletsGet (walletAddress, query, options = {}) {
            const localVarPath = `/api/v1/wallets/`;
            const localVarUrlObj = $hCgyA$parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({
                method: 'GET'
            }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (walletAddress !== undefined) localVarQueryParameter['walletAddress'] = walletAddress;
            if (query !== undefined) localVarQueryParameter['query'] = query;
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: $hCgyA$format(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Get a wallet by a wallet address
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1WalletsWalletAddressGet (walletAddress, options = {}) {
            // verify required parameter 'walletAddress' is not null or undefined
            if (walletAddress === null || walletAddress === undefined) throw new $2a95763fc1a823d3$export$a27bea7cdb975d70('walletAddress', 'Required parameter walletAddress was null or undefined when calling apiV1WalletsWalletAddressGet.');
            const localVarPath = `/api/v1/wallets/{walletAddress}/`.replace(`{${"walletAddress"}}`, encodeURIComponent(String(walletAddress)));
            const localVarUrlObj = $hCgyA$parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({
                method: 'GET'
            }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: $hCgyA$format(localVarUrlObj),
                options: localVarRequestOptions
            };
        }
    };
};
const $2a95763fc1a823d3$export$47eb7a1dff8d5250 = function(configuration) {
    return {
        /**
         * 
         * @summary Get a collection by its contract address
         * @param {string} contractAddress A hex address for a blockchain contract
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1CollectionsContractAddressGet (contractAddress, options) {
            const localVarFetchArgs = $2a95763fc1a823d3$export$90dabc428f7b218c(configuration).apiV1CollectionsContractAddressGet(contractAddress, options);
            return (fetch = $hCgyA$isomorphicfetch, basePath = $2a95763fc1a823d3$var$BASE_PATH)=>{
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response)=>{
                    if (response.status >= 200 && response.status < 300) return response.json();
                    else throw response;
                });
            };
        },
        /**
         * 
         * @summary Get a collections
         * @param {string} [contractAddress] A hex address for a blockchain contract
         * @param {string} [query] A search query containing keywords or operators to filter tokens
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1CollectionsGet (contractAddress, query, options) {
            const localVarFetchArgs = $2a95763fc1a823d3$export$90dabc428f7b218c(configuration).apiV1CollectionsGet(contractAddress, query, options);
            return (fetch = $hCgyA$isomorphicfetch, basePath = $2a95763fc1a823d3$var$BASE_PATH)=>{
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response)=>{
                    if (response.status >= 200 && response.status < 300) return response.json();
                    else throw response;
                });
            };
        },
        /**
         * 
         * @summary Get tokens by contract address
         * @param {string} contractAddress A hex address for a blockchain contract
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1TokensContractAddressGet (contractAddress, options) {
            const localVarFetchArgs = $2a95763fc1a823d3$export$90dabc428f7b218c(configuration).apiV1TokensContractAddressGet(contractAddress, options);
            return (fetch = $hCgyA$isomorphicfetch, basePath = $2a95763fc1a823d3$var$BASE_PATH)=>{
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response)=>{
                    if (response.status >= 200 && response.status < 300) return response.json();
                    else throw response;
                });
            };
        },
        /**
         * 
         * @summary Get a token by its contract address and token id
         * @param {string} contractAddress A hex address for a blockchain contract
         * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1TokensContractAddressTokenIDGet (contractAddress, tokenID, options) {
            const localVarFetchArgs = $2a95763fc1a823d3$export$90dabc428f7b218c(configuration).apiV1TokensContractAddressTokenIDGet(contractAddress, tokenID, options);
            return (fetch = $hCgyA$isomorphicfetch, basePath = $2a95763fc1a823d3$var$BASE_PATH)=>{
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response)=>{
                    if (response.status >= 200 && response.status < 300) return response.json();
                    else throw response;
                });
            };
        },
        /**
         * 
         * @summary Get tokens
         * @param {string} [contractAddress] A hex address for a blockchain contract
         * @param {string} [tokenID] An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
         * @param {string} [query] A search query containing keywords or operators to filter tokens
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1TokensGet (contractAddress, tokenID, query, options) {
            const localVarFetchArgs = $2a95763fc1a823d3$export$90dabc428f7b218c(configuration).apiV1TokensGet(contractAddress, tokenID, query, options);
            return (fetch = $hCgyA$isomorphicfetch, basePath = $2a95763fc1a823d3$var$BASE_PATH)=>{
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response)=>{
                    if (response.status >= 200 && response.status < 300) return response.json();
                    else throw response;
                });
            };
        },
        /**
         * 
         * @summary Get a Wallet
         * @param {string} [walletAddress] A hex string referencing a public wallet address
         * @param {string} [query] A search query containing keywords or operators to filter wallets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1WalletsGet (walletAddress, query, options) {
            const localVarFetchArgs = $2a95763fc1a823d3$export$90dabc428f7b218c(configuration).apiV1WalletsGet(walletAddress, query, options);
            return (fetch = $hCgyA$isomorphicfetch, basePath = $2a95763fc1a823d3$var$BASE_PATH)=>{
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response)=>{
                    if (response.status >= 200 && response.status < 300) return response.json();
                    else throw response;
                });
            };
        },
        /**
         * 
         * @summary Get a wallet by a wallet address
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1WalletsWalletAddressGet (walletAddress, options) {
            const localVarFetchArgs = $2a95763fc1a823d3$export$90dabc428f7b218c(configuration).apiV1WalletsWalletAddressGet(walletAddress, options);
            return (fetch = $hCgyA$isomorphicfetch, basePath = $2a95763fc1a823d3$var$BASE_PATH)=>{
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response)=>{
                    if (response.status >= 200 && response.status < 300) return response.json();
                    else throw response;
                });
            };
        }
    };
};
const $2a95763fc1a823d3$export$b6aeda2059595393 = function(configuration, fetch, basePath) {
    return {
        /**
         * 
         * @summary Get a collection by its contract address
         * @param {string} contractAddress A hex address for a blockchain contract
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1CollectionsContractAddressGet (contractAddress, options) {
            return $2a95763fc1a823d3$export$47eb7a1dff8d5250(configuration).apiV1CollectionsContractAddressGet(contractAddress, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get a collections
         * @param {string} [contractAddress] A hex address for a blockchain contract
         * @param {string} [query] A search query containing keywords or operators to filter tokens
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1CollectionsGet (contractAddress, query, options) {
            return $2a95763fc1a823d3$export$47eb7a1dff8d5250(configuration).apiV1CollectionsGet(contractAddress, query, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get tokens by contract address
         * @param {string} contractAddress A hex address for a blockchain contract
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1TokensContractAddressGet (contractAddress, options) {
            return $2a95763fc1a823d3$export$47eb7a1dff8d5250(configuration).apiV1TokensContractAddressGet(contractAddress, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get a token by its contract address and token id
         * @param {string} contractAddress A hex address for a blockchain contract
         * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1TokensContractAddressTokenIDGet (contractAddress, tokenID, options) {
            return $2a95763fc1a823d3$export$47eb7a1dff8d5250(configuration).apiV1TokensContractAddressTokenIDGet(contractAddress, tokenID, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get tokens
         * @param {string} [contractAddress] A hex address for a blockchain contract
         * @param {string} [tokenID] An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
         * @param {string} [query] A search query containing keywords or operators to filter tokens
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1TokensGet (contractAddress, tokenID, query, options) {
            return $2a95763fc1a823d3$export$47eb7a1dff8d5250(configuration).apiV1TokensGet(contractAddress, tokenID, query, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get a Wallet
         * @param {string} [walletAddress] A hex string referencing a public wallet address
         * @param {string} [query] A search query containing keywords or operators to filter wallets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1WalletsGet (walletAddress, query, options) {
            return $2a95763fc1a823d3$export$47eb7a1dff8d5250(configuration).apiV1WalletsGet(walletAddress, query, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get a wallet by a wallet address
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1WalletsWalletAddressGet (walletAddress, options) {
            return $2a95763fc1a823d3$export$47eb7a1dff8d5250(configuration).apiV1WalletsWalletAddressGet(walletAddress, options)(fetch, basePath);
        }
    };
};
class $2a95763fc1a823d3$export$872437fb2a17cd0e extends $2a95763fc1a823d3$export$70edad7ad5bb3f5d {
    /**
     * 
     * @summary Get a collection by its contract address
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ apiV1CollectionsContractAddressGet(contractAddress, options) {
        return $2a95763fc1a823d3$export$47eb7a1dff8d5250(this.configuration).apiV1CollectionsContractAddressGet(contractAddress, options)(this.fetch, this.basePath);
    }
    /**
     * 
     * @summary Get a collections
     * @param {string} [contractAddress] A hex address for a blockchain contract
     * @param {string} [query] A search query containing keywords or operators to filter tokens
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ apiV1CollectionsGet(contractAddress, query, options) {
        return $2a95763fc1a823d3$export$47eb7a1dff8d5250(this.configuration).apiV1CollectionsGet(contractAddress, query, options)(this.fetch, this.basePath);
    }
    /**
     * 
     * @summary Get tokens by contract address
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ apiV1TokensContractAddressGet(contractAddress, options) {
        return $2a95763fc1a823d3$export$47eb7a1dff8d5250(this.configuration).apiV1TokensContractAddressGet(contractAddress, options)(this.fetch, this.basePath);
    }
    /**
     * 
     * @summary Get a token by its contract address and token id
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ apiV1TokensContractAddressTokenIDGet(contractAddress, tokenID, options) {
        return $2a95763fc1a823d3$export$47eb7a1dff8d5250(this.configuration).apiV1TokensContractAddressTokenIDGet(contractAddress, tokenID, options)(this.fetch, this.basePath);
    }
    /**
     * 
     * @summary Get tokens
     * @param {string} [contractAddress] A hex address for a blockchain contract
     * @param {string} [tokenID] An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
     * @param {string} [query] A search query containing keywords or operators to filter tokens
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ apiV1TokensGet(contractAddress, tokenID, query, options) {
        return $2a95763fc1a823d3$export$47eb7a1dff8d5250(this.configuration).apiV1TokensGet(contractAddress, tokenID, query, options)(this.fetch, this.basePath);
    }
    /**
     * 
     * @summary Get a Wallet
     * @param {string} [walletAddress] A hex string referencing a public wallet address
     * @param {string} [query] A search query containing keywords or operators to filter wallets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ apiV1WalletsGet(walletAddress, query, options) {
        return $2a95763fc1a823d3$export$47eb7a1dff8d5250(this.configuration).apiV1WalletsGet(walletAddress, query, options)(this.fetch, this.basePath);
    }
    /**
     * 
     * @summary Get a wallet by a wallet address
     * @param {string} walletAddress A hex string referencing a public wallet address.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ apiV1WalletsWalletAddressGet(walletAddress, options) {
        return $2a95763fc1a823d3$export$47eb7a1dff8d5250(this.configuration).apiV1WalletsWalletAddressGet(walletAddress, options)(this.fetch, this.basePath);
    }
}


var $d6a2a28870838ac5$exports = {};

$parcel$export($d6a2a28870838ac5$exports, "Configuration", () => $d6a2a28870838ac5$export$fa89be98fe0936f2);
class $d6a2a28870838ac5$export$fa89be98fe0936f2 {
    constructor(param = {}){
        this.apiKey = param.apiKey;
        this.username = param.username;
        this.password = param.password;
        this.accessToken = param.accessToken;
        this.basePath = param.basePath;
    }
}




export {$2a95763fc1a823d3$export$83cb526776fb323d as COLLECTION_FORMATS, $2a95763fc1a823d3$export$70edad7ad5bb3f5d as BaseAPI, $2a95763fc1a823d3$export$a27bea7cdb975d70 as RequiredError, $2a95763fc1a823d3$export$e2b7ef15602a36a7 as MediaVersion, $2a95763fc1a823d3$export$90dabc428f7b218c as DefaultApiFetchParamCreator, $2a95763fc1a823d3$export$47eb7a1dff8d5250 as DefaultApiFp, $2a95763fc1a823d3$export$b6aeda2059595393 as DefaultApiFactory, $2a95763fc1a823d3$export$872437fb2a17cd0e as DefaultApi, $d6a2a28870838ac5$export$fa89be98fe0936f2 as Configuration};
//# sourceMappingURL=main.js.map
