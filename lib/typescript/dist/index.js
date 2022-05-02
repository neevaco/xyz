var $g5Y9E$url = require("url");
var $g5Y9E$isomorphicfetch = require("isomorphic-fetch");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c7c123e6c7929bea$exports = {};

$parcel$export($c7c123e6c7929bea$exports, "COLLECTION_FORMATS", () => $c7c123e6c7929bea$export$83cb526776fb323d);
$parcel$export($c7c123e6c7929bea$exports, "BaseAPI", () => $c7c123e6c7929bea$export$70edad7ad5bb3f5d);
$parcel$export($c7c123e6c7929bea$exports, "RequiredError", () => $c7c123e6c7929bea$export$a27bea7cdb975d70);
$parcel$export($c7c123e6c7929bea$exports, "MediaVersion", () => $c7c123e6c7929bea$export$e2b7ef15602a36a7);
$parcel$export($c7c123e6c7929bea$exports, "Token", () => $c7c123e6c7929bea$export$50792b0e93539fde);
$parcel$export($c7c123e6c7929bea$exports, "DefaultApiFetchParamCreator", () => $c7c123e6c7929bea$export$90dabc428f7b218c);
$parcel$export($c7c123e6c7929bea$exports, "DefaultApiFp", () => $c7c123e6c7929bea$export$47eb7a1dff8d5250);
$parcel$export($c7c123e6c7929bea$exports, "DefaultApiFactory", () => $c7c123e6c7929bea$export$b6aeda2059595393);
$parcel$export($c7c123e6c7929bea$exports, "DefaultApi", () => $c7c123e6c7929bea$export$872437fb2a17cd0e);


const $c7c123e6c7929bea$var$BASE_PATH = "/".replace(/\/+$/, "");
const $c7c123e6c7929bea$export$83cb526776fb323d = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|"
};
class $c7c123e6c7929bea$export$70edad7ad5bb3f5d {
    constructor(configuration, basePath = $c7c123e6c7929bea$var$BASE_PATH, fetch = $g5Y9E$isomorphicfetch){
        this.basePath = basePath;
        this.fetch = fetch;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}
class $c7c123e6c7929bea$export$a27bea7cdb975d70 extends Error {
    constructor(field, msg){
        super(msg);
        this.field = field;
    }
}
let $c7c123e6c7929bea$export$e2b7ef15602a36a7;
(function($c7c123e6c7929bea$export$e2b7ef15602a36a7) {
    let KindEnum1;
    (function(KindEnum) {
        KindEnum[KindEnum["Video"] = 'video'] = "Video";
        KindEnum[KindEnum["Image"] = 'image'] = "Image";
        KindEnum[KindEnum["Raw"] = 'raw'] = "Raw";
        KindEnum[KindEnum["Audio"] = 'audio'] = "Audio";
    })(KindEnum1 = $c7c123e6c7929bea$export$e2b7ef15602a36a7.KindEnum || ($c7c123e6c7929bea$export$e2b7ef15602a36a7.KindEnum = {}));
})($c7c123e6c7929bea$export$e2b7ef15602a36a7 || ($c7c123e6c7929bea$export$e2b7ef15602a36a7 = {}));
let $c7c123e6c7929bea$export$50792b0e93539fde;
(function($c7c123e6c7929bea$export$50792b0e93539fde) {
    let DurabilityEnum1;
    (function(DurabilityEnum) {
        DurabilityEnum[DurabilityEnum["OnChain"] = 'On-Chain'] = "OnChain";
        DurabilityEnum[DurabilityEnum["Decentralized"] = 'Decentralized'] = "Decentralized";
        DurabilityEnum[DurabilityEnum["Web"] = 'Web'] = "Web";
        DurabilityEnum[DurabilityEnum["Unknown"] = 'Unknown'] = "Unknown";
    })(DurabilityEnum1 = $c7c123e6c7929bea$export$50792b0e93539fde.DurabilityEnum || ($c7c123e6c7929bea$export$50792b0e93539fde.DurabilityEnum = {}));
})($c7c123e6c7929bea$export$50792b0e93539fde || ($c7c123e6c7929bea$export$50792b0e93539fde = {}));
const $c7c123e6c7929bea$export$90dabc428f7b218c = function(configuration) {
    return {
        /**
         * 
         * @summary Get a collection by its contract address
         * @param {string} contractAddress A hex address for a blockchain contract
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1CollectionsContractAddressGet (contractAddress, options = {}) {
            // verify required parameter 'contractAddress' is not null or undefined
            if (contractAddress === null || contractAddress === undefined) throw new $c7c123e6c7929bea$export$a27bea7cdb975d70('contractAddress', 'Required parameter contractAddress was null or undefined when calling apiV1CollectionsContractAddressGet.');
            const localVarPath = `/api/v1/collections/{contractAddress}/`.replace(`{${"contractAddress"}}`, encodeURIComponent(String(contractAddress)));
            const localVarUrlObj = $g5Y9E$url.parse(localVarPath, true);
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
                url: $g5Y9E$url.format(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Get a collections
         * @param {string} [contractAddress] A hex address for a blockchain contract
         * @param {string} [query] A search query containing keywords or operators to filter tokens
         * @param {string} [sort] A means to order collections by specific values
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1CollectionsGet (contractAddress, query, sort, options = {}) {
            const localVarPath = `/api/v1/collections/`;
            const localVarUrlObj = $g5Y9E$url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({
                method: 'GET'
            }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (contractAddress !== undefined) localVarQueryParameter['contractAddress'] = contractAddress;
            if (query !== undefined) localVarQueryParameter['query'] = query;
            if (sort !== undefined) localVarQueryParameter['sort'] = sort;
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: $g5Y9E$url.format(localVarUrlObj),
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
            if (contractAddress === null || contractAddress === undefined) throw new $c7c123e6c7929bea$export$a27bea7cdb975d70('contractAddress', 'Required parameter contractAddress was null or undefined when calling apiV1TokensContractAddressGet.');
            const localVarPath = `/api/v1/tokens/{contractAddress}/`.replace(`{${"contractAddress"}}`, encodeURIComponent(String(contractAddress)));
            const localVarUrlObj = $g5Y9E$url.parse(localVarPath, true);
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
                url: $g5Y9E$url.format(localVarUrlObj),
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
            if (contractAddress === null || contractAddress === undefined) throw new $c7c123e6c7929bea$export$a27bea7cdb975d70('contractAddress', 'Required parameter contractAddress was null or undefined when calling apiV1TokensContractAddressTokenIDGet.');
            // verify required parameter 'tokenID' is not null or undefined
            if (tokenID === null || tokenID === undefined) throw new $c7c123e6c7929bea$export$a27bea7cdb975d70('tokenID', 'Required parameter tokenID was null or undefined when calling apiV1TokensContractAddressTokenIDGet.');
            const localVarPath = `/api/v1/tokens/{contractAddress}/{tokenID}`.replace(`{${"contractAddress"}}`, encodeURIComponent(String(contractAddress))).replace(`{${"tokenID"}}`, encodeURIComponent(String(tokenID)));
            const localVarUrlObj = $g5Y9E$url.parse(localVarPath, true);
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
                url: $g5Y9E$url.format(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Get tokens
         * @param {string} [contractAddress] A hex address for a blockchain contract
         * @param {string} [tokenID] An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
         * @param {string} [query] A search query containing keywords or operators to filter tokens
         * @param {string} [sort] A means to order tokens by specific values
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1TokensGet (contractAddress, tokenID, query, sort, options = {}) {
            const localVarPath = `/api/v1/tokens/`;
            const localVarUrlObj = $g5Y9E$url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({
                method: 'GET'
            }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (contractAddress !== undefined) localVarQueryParameter['contractAddress'] = contractAddress;
            if (tokenID !== undefined) localVarQueryParameter['tokenID'] = tokenID;
            if (query !== undefined) localVarQueryParameter['query'] = query;
            if (sort !== undefined) localVarQueryParameter['sort'] = sort;
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: $g5Y9E$url.format(localVarUrlObj),
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
            const localVarUrlObj = $g5Y9E$url.parse(localVarPath, true);
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
                url: $g5Y9E$url.format(localVarUrlObj),
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
            if (walletAddress === null || walletAddress === undefined) throw new $c7c123e6c7929bea$export$a27bea7cdb975d70('walletAddress', 'Required parameter walletAddress was null or undefined when calling apiV1WalletsWalletAddressGet.');
            const localVarPath = `/api/v1/wallets/{walletAddress}/`.replace(`{${"walletAddress"}}`, encodeURIComponent(String(walletAddress)));
            const localVarUrlObj = $g5Y9E$url.parse(localVarPath, true);
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
                url: $g5Y9E$url.format(localVarUrlObj),
                options: localVarRequestOptions
            };
        }
    };
};
const $c7c123e6c7929bea$export$47eb7a1dff8d5250 = function(configuration) {
    return {
        /**
         * 
         * @summary Get a collection by its contract address
         * @param {string} contractAddress A hex address for a blockchain contract
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1CollectionsContractAddressGet (contractAddress, options) {
            const localVarFetchArgs = $c7c123e6c7929bea$export$90dabc428f7b218c(configuration).apiV1CollectionsContractAddressGet(contractAddress, options);
            return (fetch = $g5Y9E$isomorphicfetch, basePath = $c7c123e6c7929bea$var$BASE_PATH)=>{
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
         * @param {string} [sort] A means to order collections by specific values
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1CollectionsGet (contractAddress, query, sort, options) {
            const localVarFetchArgs = $c7c123e6c7929bea$export$90dabc428f7b218c(configuration).apiV1CollectionsGet(contractAddress, query, sort, options);
            return (fetch = $g5Y9E$isomorphicfetch, basePath = $c7c123e6c7929bea$var$BASE_PATH)=>{
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
            const localVarFetchArgs = $c7c123e6c7929bea$export$90dabc428f7b218c(configuration).apiV1TokensContractAddressGet(contractAddress, options);
            return (fetch = $g5Y9E$isomorphicfetch, basePath = $c7c123e6c7929bea$var$BASE_PATH)=>{
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
            const localVarFetchArgs = $c7c123e6c7929bea$export$90dabc428f7b218c(configuration).apiV1TokensContractAddressTokenIDGet(contractAddress, tokenID, options);
            return (fetch = $g5Y9E$isomorphicfetch, basePath = $c7c123e6c7929bea$var$BASE_PATH)=>{
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
         * @param {string} [sort] A means to order tokens by specific values
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1TokensGet (contractAddress, tokenID, query, sort, options) {
            const localVarFetchArgs = $c7c123e6c7929bea$export$90dabc428f7b218c(configuration).apiV1TokensGet(contractAddress, tokenID, query, sort, options);
            return (fetch = $g5Y9E$isomorphicfetch, basePath = $c7c123e6c7929bea$var$BASE_PATH)=>{
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
            const localVarFetchArgs = $c7c123e6c7929bea$export$90dabc428f7b218c(configuration).apiV1WalletsGet(walletAddress, query, options);
            return (fetch = $g5Y9E$isomorphicfetch, basePath = $c7c123e6c7929bea$var$BASE_PATH)=>{
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
            const localVarFetchArgs = $c7c123e6c7929bea$export$90dabc428f7b218c(configuration).apiV1WalletsWalletAddressGet(walletAddress, options);
            return (fetch = $g5Y9E$isomorphicfetch, basePath = $c7c123e6c7929bea$var$BASE_PATH)=>{
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response)=>{
                    if (response.status >= 200 && response.status < 300) return response.json();
                    else throw response;
                });
            };
        }
    };
};
const $c7c123e6c7929bea$export$b6aeda2059595393 = function(configuration, fetch, basePath) {
    return {
        /**
         * 
         * @summary Get a collection by its contract address
         * @param {string} contractAddress A hex address for a blockchain contract
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1CollectionsContractAddressGet (contractAddress, options) {
            return $c7c123e6c7929bea$export$47eb7a1dff8d5250(configuration).apiV1CollectionsContractAddressGet(contractAddress, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get a collections
         * @param {string} [contractAddress] A hex address for a blockchain contract
         * @param {string} [query] A search query containing keywords or operators to filter tokens
         * @param {string} [sort] A means to order collections by specific values
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1CollectionsGet (contractAddress, query, sort, options) {
            return $c7c123e6c7929bea$export$47eb7a1dff8d5250(configuration).apiV1CollectionsGet(contractAddress, query, sort, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get tokens by contract address
         * @param {string} contractAddress A hex address for a blockchain contract
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1TokensContractAddressGet (contractAddress, options) {
            return $c7c123e6c7929bea$export$47eb7a1dff8d5250(configuration).apiV1TokensContractAddressGet(contractAddress, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get a token by its contract address and token id
         * @param {string} contractAddress A hex address for a blockchain contract
         * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1TokensContractAddressTokenIDGet (contractAddress, tokenID, options) {
            return $c7c123e6c7929bea$export$47eb7a1dff8d5250(configuration).apiV1TokensContractAddressTokenIDGet(contractAddress, tokenID, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get tokens
         * @param {string} [contractAddress] A hex address for a blockchain contract
         * @param {string} [tokenID] An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
         * @param {string} [query] A search query containing keywords or operators to filter tokens
         * @param {string} [sort] A means to order tokens by specific values
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1TokensGet (contractAddress, tokenID, query, sort, options) {
            return $c7c123e6c7929bea$export$47eb7a1dff8d5250(configuration).apiV1TokensGet(contractAddress, tokenID, query, sort, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get a Wallet
         * @param {string} [walletAddress] A hex string referencing a public wallet address
         * @param {string} [query] A search query containing keywords or operators to filter wallets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1WalletsGet (walletAddress, query, options) {
            return $c7c123e6c7929bea$export$47eb7a1dff8d5250(configuration).apiV1WalletsGet(walletAddress, query, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get a wallet by a wallet address
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ apiV1WalletsWalletAddressGet (walletAddress, options) {
            return $c7c123e6c7929bea$export$47eb7a1dff8d5250(configuration).apiV1WalletsWalletAddressGet(walletAddress, options)(fetch, basePath);
        }
    };
};
class $c7c123e6c7929bea$export$872437fb2a17cd0e extends $c7c123e6c7929bea$export$70edad7ad5bb3f5d {
    /**
     * 
     * @summary Get a collection by its contract address
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ apiV1CollectionsContractAddressGet(contractAddress, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).apiV1CollectionsContractAddressGet(contractAddress, options)(this.fetch, this.basePath);
    }
    /**
     * 
     * @summary Get a collections
     * @param {string} [contractAddress] A hex address for a blockchain contract
     * @param {string} [query] A search query containing keywords or operators to filter tokens
     * @param {string} [sort] A means to order collections by specific values
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ apiV1CollectionsGet(contractAddress, query, sort, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).apiV1CollectionsGet(contractAddress, query, sort, options)(this.fetch, this.basePath);
    }
    /**
     * 
     * @summary Get tokens by contract address
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ apiV1TokensContractAddressGet(contractAddress, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).apiV1TokensContractAddressGet(contractAddress, options)(this.fetch, this.basePath);
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
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).apiV1TokensContractAddressTokenIDGet(contractAddress, tokenID, options)(this.fetch, this.basePath);
    }
    /**
     * 
     * @summary Get tokens
     * @param {string} [contractAddress] A hex address for a blockchain contract
     * @param {string} [tokenID] An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
     * @param {string} [query] A search query containing keywords or operators to filter tokens
     * @param {string} [sort] A means to order tokens by specific values
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ apiV1TokensGet(contractAddress, tokenID, query, sort, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).apiV1TokensGet(contractAddress, tokenID, query, sort, options)(this.fetch, this.basePath);
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
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).apiV1WalletsGet(walletAddress, query, options)(this.fetch, this.basePath);
    }
    /**
     * 
     * @summary Get a wallet by a wallet address
     * @param {string} walletAddress A hex string referencing a public wallet address.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ apiV1WalletsWalletAddressGet(walletAddress, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).apiV1WalletsWalletAddressGet(walletAddress, options)(this.fetch, this.basePath);
    }
}


var $a4d867bebea9b66c$exports = {};

$parcel$export($a4d867bebea9b66c$exports, "Configuration", () => $a4d867bebea9b66c$export$fa89be98fe0936f2);
class $a4d867bebea9b66c$export$fa89be98fe0936f2 {
    constructor(param = {}){
        this.apiKey = param.apiKey;
        this.username = param.username;
        this.password = param.password;
        this.accessToken = param.accessToken;
        this.basePath = param.basePath;
    }
}


$parcel$exportWildcard(module.exports, $c7c123e6c7929bea$exports);
$parcel$exportWildcard(module.exports, $a4d867bebea9b66c$exports);


//# sourceMappingURL=index.js.map
