var $g5Y9E$axios = require("axios");

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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c7c123e6c7929bea$exports = {};

$parcel$export($c7c123e6c7929bea$exports, "MediaPreviewKindEnum", () => $c7c123e6c7929bea$export$f3ea9b8749fe6ec0);
$parcel$export($c7c123e6c7929bea$exports, "MediaVersionKindEnum", () => $c7c123e6c7929bea$export$ee8314ee6c5f3a82);
$parcel$export($c7c123e6c7929bea$exports, "NonFungibleTokenDurabilityEnum", () => $c7c123e6c7929bea$export$8bda49b5bb4da43a);
$parcel$export($c7c123e6c7929bea$exports, "OpenSeaContractAssetContractTypeEnum", () => $c7c123e6c7929bea$export$4c1d1606403f9f77);
$parcel$export($c7c123e6c7929bea$exports, "AlphaApiAxiosParamCreator", () => $c7c123e6c7929bea$export$d7ca53c9dca6225c);
$parcel$export($c7c123e6c7929bea$exports, "AlphaApiFp", () => $c7c123e6c7929bea$export$cce7bd680754110b);
$parcel$export($c7c123e6c7929bea$exports, "AlphaApiFactory", () => $c7c123e6c7929bea$export$b9e6c8fc9bbbf959);
$parcel$export($c7c123e6c7929bea$exports, "AlphaApi", () => $c7c123e6c7929bea$export$9ff48f746beb7584);
$parcel$export($c7c123e6c7929bea$exports, "DefaultApiAxiosParamCreator", () => $c7c123e6c7929bea$export$fdbef0a9bc2d0e72);
$parcel$export($c7c123e6c7929bea$exports, "DefaultApiFp", () => $c7c123e6c7929bea$export$47eb7a1dff8d5250);
$parcel$export($c7c123e6c7929bea$exports, "DefaultApiFactory", () => $c7c123e6c7929bea$export$b6aeda2059595393);
$parcel$export($c7c123e6c7929bea$exports, "DefaultApi", () => $c7c123e6c7929bea$export$872437fb2a17cd0e);


const $0348d6829ba60ae1$export$2812a1fb15aca49c = "https://api.n.xyz".replace(/\/+$/, "");
const $0348d6829ba60ae1$export$83cb526776fb323d = {
    csv: ",",
    ssv: " ",
    tsv: "	",
    pipes: "|"
};
class $0348d6829ba60ae1$export$70edad7ad5bb3f5d {
    constructor(configuration, basePath = $0348d6829ba60ae1$export$2812a1fb15aca49c, axios = (0, ($parcel$interopDefault($g5Y9E$axios)))){
        this.basePath = basePath;
        this.axios = axios;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}
class $0348d6829ba60ae1$export$a27bea7cdb975d70 extends Error {
    constructor(field, msg){
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}


const $2261d03cb90f4b62$export$bab87540acad0d0 = "https://example.com";
const $2261d03cb90f4b62$export$b808bc21dd4c7149 = function(functionName, paramName, paramValue) {
    if (paramValue === null || paramValue === undefined) throw new (0, $0348d6829ba60ae1$export$a27bea7cdb975d70)(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
};
const $2261d03cb90f4b62$export$ba2fb66974fedf0d = async function(object, keyParamName, configuration) {
    if (configuration && configuration.apiKey) {
        const localVarApiKeyValue = typeof configuration.apiKey === "function" ? await configuration.apiKey(keyParamName) : await configuration.apiKey;
        object[keyParamName] = localVarApiKeyValue;
    }
};
const $2261d03cb90f4b62$export$81184285cad21fea = function(object, configuration) {
    if (configuration && (configuration.username || configuration.password)) object["auth"] = {
        username: configuration.username,
        password: configuration.password
    };
};
const $2261d03cb90f4b62$export$d68afcc6f6294bfe = async function(object, configuration) {
    if (configuration && configuration.accessToken) {
        const accessToken = typeof configuration.accessToken === "function" ? await configuration.accessToken() : await configuration.accessToken;
        object["Authorization"] = "Bearer " + accessToken;
    }
};
const $2261d03cb90f4b62$export$908325ca1dd77eba = async function(object, name, scopes, configuration) {
    if (configuration && configuration.accessToken) {
        const localVarAccessTokenValue = typeof configuration.accessToken === "function" ? await configuration.accessToken(name, scopes) : await configuration.accessToken;
        object["Authorization"] = "Bearer " + localVarAccessTokenValue;
    }
};
const $2261d03cb90f4b62$export$91091bc0d20fa6e5 = function(url, ...objects) {
    const searchParams = new URLSearchParams(url.search);
    for (const object of objects){
        for(const key in object)if (Array.isArray(object[key])) {
            searchParams.delete(key);
            for (const item of object[key])searchParams.append(key, item);
        } else searchParams.set(key, object[key]);
    }
    url.search = searchParams.toString();
};
const $2261d03cb90f4b62$export$b907f2b388ae0bc5 = function(value, requestOptions, configuration) {
    const nonString = typeof value !== "string";
    const needsSerialization = nonString && configuration && configuration.isJsonMime ? configuration.isJsonMime(requestOptions.headers["Content-Type"]) : nonString;
    return needsSerialization ? JSON.stringify(value !== undefined ? value : {}) : value || "";
};
const $2261d03cb90f4b62$export$acf74f2e6d333229 = function(url) {
    return url.pathname + url.search + url.hash;
};
const $2261d03cb90f4b62$export$2a2bdb6ca788ce6a = function(axiosArgs, globalAxios, BASE_PATH, configuration) {
    return (axios = globalAxios, basePath = BASE_PATH)=>{
        const axiosRequestArgs = {
            ...axiosArgs.options,
            url: (configuration?.basePath || basePath) + axiosArgs.url
        };
        return axios.request(axiosRequestArgs);
    };
};



const $c7c123e6c7929bea$export$f3ea9b8749fe6ec0 = {
    Video: "video",
    Image: "image",
    Raw: "raw",
    Audio: "audio"
};
const $c7c123e6c7929bea$export$ee8314ee6c5f3a82 = {
    Video: "video",
    Image: "image",
    Raw: "raw",
    Audio: "audio"
};
const $c7c123e6c7929bea$export$8bda49b5bb4da43a = {
    OnChain: "On-Chain",
    Decentralized: "Decentralized",
    Web: "Web",
    Unknown: "Unknown"
};
const $c7c123e6c7929bea$export$4c1d1606403f9f77 = {
    Nft: "NFT",
    Sft: "SFT",
    Unknown: "unknown"
};
const $c7c123e6c7929bea$export$d7ca53c9dca6225c = function(configuration) {
    return {
        /**
         * 
         * @summary Returns trending and interesting collections on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getTopCollections: async (options = {})=>{
            const localVarPath = `/api/v1-alpha/collections/top`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Returns trending and interesting NFTs and SFTs on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getTopTokens: async (options = {})=>{
            const localVarPath = `/api/v1-alpha/tokens/top`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Returns trending and interesting wallets on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getTopWallets: async (options = {})=>{
            const localVarPath = `/api/v1-alpha/wallets/top`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        }
    };
};
const $c7c123e6c7929bea$export$cce7bd680754110b = function(configuration) {
    const localVarAxiosParamCreator = $c7c123e6c7929bea$export$d7ca53c9dca6225c(configuration);
    return {
        /**
         * 
         * @summary Returns trending and interesting collections on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getTopCollections (options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTopCollections(options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Returns trending and interesting NFTs and SFTs on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getTopTokens (options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTopTokens(options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Returns trending and interesting wallets on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getTopWallets (options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTopWallets(options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        }
    };
};
const $c7c123e6c7929bea$export$b9e6c8fc9bbbf959 = function(configuration, basePath, axios) {
    const localVarFp = $c7c123e6c7929bea$export$cce7bd680754110b(configuration);
    return {
        /**
         * 
         * @summary Returns trending and interesting collections on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getTopCollections (options) {
            return localVarFp.getTopCollections(options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Returns trending and interesting NFTs and SFTs on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getTopTokens (options) {
            return localVarFp.getTopTokens(options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Returns trending and interesting wallets on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getTopWallets (options) {
            return localVarFp.getTopWallets(options).then((request)=>request(axios, basePath));
        }
    };
};
class $c7c123e6c7929bea$export$9ff48f746beb7584 extends (0, $0348d6829ba60ae1$export$70edad7ad5bb3f5d) {
    /**
     * 
     * @summary Returns trending and interesting collections on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AlphaApi
     */ getTopCollections(options) {
        return $c7c123e6c7929bea$export$cce7bd680754110b(this.configuration).getTopCollections(options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Returns trending and interesting NFTs and SFTs on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AlphaApi
     */ getTopTokens(options) {
        return $c7c123e6c7929bea$export$cce7bd680754110b(this.configuration).getTopTokens(options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Returns trending and interesting wallets on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AlphaApi
     */ getTopWallets(options) {
        return $c7c123e6c7929bea$export$cce7bd680754110b(this.configuration).getTopWallets(options).then((request)=>request(this.axios, this.basePath));
    }
}
const $c7c123e6c7929bea$export$fdbef0a9bc2d0e72 = function(configuration) {
    return {
        /**
         * 
         * @summary Lists all supported blockchains.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getBlockchains: async (options = {})=>{
            const localVarPath = `/api/v1/blockchains`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Get a collection by its contract address.
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getCollection: async (contractAddress, chainID, options = {})=>{
            // verify required parameter 'contractAddress' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getCollection", "contractAddress", contractAddress);
            const localVarPath = `/api/v1/collections/{contractAddress}`.replace(`{${"contractAddress"}}`, encodeURIComponent(String(contractAddress)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            if (chainID !== undefined) localVarQueryParameter["chainID"] = chainID;
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Get tokens by contract address.
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getContractTokens: async (contractAddress, chainID, limit, options = {})=>{
            // verify required parameter 'contractAddress' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getContractTokens", "contractAddress", contractAddress);
            const localVarPath = `/api/v1/tokens/{contractAddress}`.replace(`{${"contractAddress"}}`, encodeURIComponent(String(contractAddress)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            if (chainID !== undefined) localVarQueryParameter["chainID"] = chainID;
            if (limit !== undefined) localVarQueryParameter["limit"] = limit;
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Get tokens by a pair of contract addresses and token IDs. The input are two ordered arrays. The first element of contractAddresses should be related to the 1st element of the tokenID, etc. In the below example two tokens are being requested, token 3481 from the \"goblintown\" contract (i.e. 0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e) and token 50603 from the Otherdeed contract (i.e. 0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258).
         * @param {string} contractAddresses A comma-separated hex address for a blockchain contract, the order of values should match the order in tokenIdentifiers.
         * @param {string} tokenIdentifiers A comma-separated token ID, the order of values should match the order in contractAddresses.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getContractTokensByContractAndID: async (contractAddresses, tokenIdentifiers, chainID, limit, options = {})=>{
            // verify required parameter 'contractAddresses' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getContractTokensByContractAndID", "contractAddresses", contractAddresses);
            // verify required parameter 'tokenIdentifiers' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getContractTokensByContractAndID", "tokenIdentifiers", tokenIdentifiers);
            const localVarPath = `/api/v1/token-batch`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            if (contractAddresses !== undefined) localVarQueryParameter["contractAddresses"] = contractAddresses;
            if (tokenIdentifiers !== undefined) localVarQueryParameter["tokenIdentifiers"] = tokenIdentifiers;
            if (chainID !== undefined) localVarQueryParameter["chainID"] = chainID;
            if (limit !== undefined) localVarQueryParameter["limit"] = limit;
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Get the transaction history for a collection
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getContractTransactionHistory: async (contractAddress, cursor, chainID, limit, options = {})=>{
            // verify required parameter 'contractAddress' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getContractTransactionHistory", "contractAddress", contractAddress);
            const localVarPath = `/api/v1/collections/{contractAddress}/transactions/history`.replace(`{${"contractAddress"}}`, encodeURIComponent(String(contractAddress)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            if (cursor !== undefined) localVarQueryParameter["cursor"] = cursor;
            if (chainID !== undefined) localVarQueryParameter["chainID"] = chainID;
            if (limit !== undefined) localVarQueryParameter["limit"] = limit;
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Get search results such as wallets, tokens, and collections by a search query.
         * @param {string} query A search query that returns matching results
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getSearchResults: async (query, cursor, options = {})=>{
            // verify required parameter 'query' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getSearchResults", "query", query);
            const localVarPath = `/api/v1/search/{query}`.replace(`{${"query"}}`, encodeURIComponent(String(query)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            if (cursor !== undefined) localVarQueryParameter["cursor"] = cursor;
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Returns a list of tokens sold by a wallet.
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getSoldTokens: async (walletAddress, chainID, cursor, limit, options = {})=>{
            // verify required parameter 'walletAddress' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getSoldTokens", "walletAddress", walletAddress);
            const localVarPath = `/api/v1/wallets/{walletAddress}/sold-tokens`.replace(`{${"walletAddress"}}`, encodeURIComponent(String(walletAddress)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            if (chainID !== undefined) localVarQueryParameter["chainID"] = chainID;
            if (cursor !== undefined) localVarQueryParameter["cursor"] = cursor;
            if (limit !== undefined) localVarQueryParameter["limit"] = limit;
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Get a token by its contract address and token ID.
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getToken: async (contractAddress, tokenID, chainID, options = {})=>{
            // verify required parameter 'contractAddress' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getToken", "contractAddress", contractAddress);
            // verify required parameter 'tokenID' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getToken", "tokenID", tokenID);
            const localVarPath = `/api/v1/tokens/{contractAddress}/{tokenID}`.replace(`{${"contractAddress"}}`, encodeURIComponent(String(contractAddress))).replace(`{${"tokenID"}}`, encodeURIComponent(String(tokenID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            if (chainID !== undefined) localVarQueryParameter["chainID"] = chainID;
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Determine if a wallet has a given token from a contract.
         * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getTokenGate: async (tokenID, contractAddress, walletAddress, chainID, options = {})=>{
            // verify required parameter 'tokenID' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getTokenGate", "tokenID", tokenID);
            // verify required parameter 'contractAddress' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getTokenGate", "contractAddress", contractAddress);
            // verify required parameter 'walletAddress' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getTokenGate", "walletAddress", walletAddress);
            const localVarPath = `/api/v1/wallets/{walletAddress}/gate/{contractAddress}/{tokenID}`.replace(`{${"tokenID"}}`, encodeURIComponent(String(tokenID))).replace(`{${"contractAddress"}}`, encodeURIComponent(String(contractAddress))).replace(`{${"walletAddress"}}`, encodeURIComponent(String(walletAddress)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            if (chainID !== undefined) localVarQueryParameter["chainID"] = chainID;
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Returns a list of transfer transactions on a specified token.
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getTokenTransfers: async (contractAddress, tokenID, chainID, limit, options = {})=>{
            // verify required parameter 'contractAddress' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getTokenTransfers", "contractAddress", contractAddress);
            // verify required parameter 'tokenID' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getTokenTransfers", "tokenID", tokenID);
            const localVarPath = `/api/v1/tokens/{contractAddress}/{tokenID}/transfers`.replace(`{${"contractAddress"}}`, encodeURIComponent(String(contractAddress))).replace(`{${"tokenID"}}`, encodeURIComponent(String(tokenID)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            if (chainID !== undefined) localVarQueryParameter["chainID"] = chainID;
            if (limit !== undefined) localVarQueryParameter["limit"] = limit;
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Get tokens by a search query.
         * @param {string} query A search query that returns matching results
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getTokensBySearchQuery: async (query, cursor, options = {})=>{
            // verify required parameter 'query' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getTokensBySearchQuery", "query", query);
            const localVarPath = `/api/v1/tokens/search/{query}`.replace(`{${"query"}}`, encodeURIComponent(String(query)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            if (cursor !== undefined) localVarQueryParameter["cursor"] = cursor;
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Get a wallet by a wallet address
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getWallet: async (walletAddress, chainID, options = {})=>{
            // verify required parameter 'walletAddress' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getWallet", "walletAddress", walletAddress);
            const localVarPath = `/api/v1/wallets/{walletAddress}`.replace(`{${"walletAddress"}}`, encodeURIComponent(String(walletAddress)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            if (chainID !== undefined) localVarQueryParameter["chainID"] = chainID;
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Returns a list of balances for tokens this wallet currently owns.
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getWalletBalances: async (walletAddress, limit, options = {})=>{
            // verify required parameter 'walletAddress' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getWalletBalances", "walletAddress", walletAddress);
            const localVarPath = `/api/v1/wallets/{walletAddress}/balances`.replace(`{${"walletAddress"}}`, encodeURIComponent(String(walletAddress)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            if (limit !== undefined) localVarQueryParameter["limit"] = limit;
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Returns a list of tokens minted by a wallet.
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getWalletMints: async (walletAddress, chainID, cursor, limit, options = {})=>{
            // verify required parameter 'walletAddress' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getWalletMints", "walletAddress", walletAddress);
            const localVarPath = `/api/v1/wallets/{walletAddress}/mints`.replace(`{${"walletAddress"}}`, encodeURIComponent(String(walletAddress)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            if (chainID !== undefined) localVarQueryParameter["chainID"] = chainID;
            if (cursor !== undefined) localVarQueryParameter["cursor"] = cursor;
            if (limit !== undefined) localVarQueryParameter["limit"] = limit;
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Returns a list of tokens owned by a wallet.
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getWalletTokens: async (walletAddress, cursor, chainID, limit, options = {})=>{
            // verify required parameter 'walletAddress' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getWalletTokens", "walletAddress", walletAddress);
            const localVarPath = `/api/v1/wallets/{walletAddress}/tokens`.replace(`{${"walletAddress"}}`, encodeURIComponent(String(walletAddress)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            if (cursor !== undefined) localVarQueryParameter["cursor"] = cursor;
            if (chainID !== undefined) localVarQueryParameter["chainID"] = chainID;
            if (limit !== undefined) localVarQueryParameter["limit"] = limit;
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        },
        /**
         * 
         * @summary Returns a list of transactions that have been performed by this wallet. Use token type to restrict to only certain transactions, such as NFTs
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {'NFT' | 'SFT' | 'unknown'} [tokenType] An indicator that be used to filter to only a subet of tokens, for example only NFTs.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getWalletTransactions: async (walletAddress, cursor, limit, chainID, tokenType, options = {})=>{
            // verify required parameter 'walletAddress' is not null or undefined
            (0, $2261d03cb90f4b62$export$b808bc21dd4c7149)("getWalletTransactions", "walletAddress", walletAddress);
            const localVarPath = `/api/v1/wallets/{walletAddress}/transactions/history`.replace(`{${"walletAddress"}}`, encodeURIComponent(String(walletAddress)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, (0, $2261d03cb90f4b62$export$bab87540acad0d0));
            let baseOptions;
            if (configuration) baseOptions = configuration.baseOptions;
            const localVarRequestOptions = {
                method: "GET",
                ...baseOptions,
                ...options
            };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikey required
            await (0, $2261d03cb90f4b62$export$ba2fb66974fedf0d)(localVarQueryParameter, "apikey", configuration);
            if (cursor !== undefined) localVarQueryParameter["cursor"] = cursor;
            if (limit !== undefined) localVarQueryParameter["limit"] = limit;
            if (chainID !== undefined) localVarQueryParameter["chainID"] = chainID;
            if (tokenType !== undefined) localVarQueryParameter["tokenType"] = tokenType;
            (0, $2261d03cb90f4b62$export$91091bc0d20fa6e5)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            return {
                url: (0, $2261d03cb90f4b62$export$acf74f2e6d333229)(localVarUrlObj),
                options: localVarRequestOptions
            };
        }
    };
};
const $c7c123e6c7929bea$export$47eb7a1dff8d5250 = function(configuration) {
    const localVarAxiosParamCreator = $c7c123e6c7929bea$export$fdbef0a9bc2d0e72(configuration);
    return {
        /**
         * 
         * @summary Lists all supported blockchains.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getBlockchains (options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBlockchains(options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Get a collection by its contract address.
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getCollection (contractAddress, chainID, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCollection(contractAddress, chainID, options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Get tokens by contract address.
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getContractTokens (contractAddress, chainID, limit, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getContractTokens(contractAddress, chainID, limit, options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Get tokens by a pair of contract addresses and token IDs. The input are two ordered arrays. The first element of contractAddresses should be related to the 1st element of the tokenID, etc. In the below example two tokens are being requested, token 3481 from the \"goblintown\" contract (i.e. 0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e) and token 50603 from the Otherdeed contract (i.e. 0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258).
         * @param {string} contractAddresses A comma-separated hex address for a blockchain contract, the order of values should match the order in tokenIdentifiers.
         * @param {string} tokenIdentifiers A comma-separated token ID, the order of values should match the order in contractAddresses.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getContractTokensByContractAndID (contractAddresses, tokenIdentifiers, chainID, limit, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getContractTokensByContractAndID(contractAddresses, tokenIdentifiers, chainID, limit, options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Get the transaction history for a collection
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getContractTransactionHistory (contractAddress, cursor, chainID, limit, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getContractTransactionHistory(contractAddress, cursor, chainID, limit, options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Get search results such as wallets, tokens, and collections by a search query.
         * @param {string} query A search query that returns matching results
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getSearchResults (query, cursor, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSearchResults(query, cursor, options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Returns a list of tokens sold by a wallet.
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getSoldTokens (walletAddress, chainID, cursor, limit, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSoldTokens(walletAddress, chainID, cursor, limit, options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Get a token by its contract address and token ID.
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getToken (contractAddress, tokenID, chainID, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getToken(contractAddress, tokenID, chainID, options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Determine if a wallet has a given token from a contract.
         * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getTokenGate (tokenID, contractAddress, walletAddress, chainID, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTokenGate(tokenID, contractAddress, walletAddress, chainID, options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Returns a list of transfer transactions on a specified token.
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getTokenTransfers (contractAddress, tokenID, chainID, limit, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTokenTransfers(contractAddress, tokenID, chainID, limit, options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Get tokens by a search query.
         * @param {string} query A search query that returns matching results
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getTokensBySearchQuery (query, cursor, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTokensBySearchQuery(query, cursor, options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Get a wallet by a wallet address
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getWallet (walletAddress, chainID, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWallet(walletAddress, chainID, options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Returns a list of balances for tokens this wallet currently owns.
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getWalletBalances (walletAddress, limit, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWalletBalances(walletAddress, limit, options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Returns a list of tokens minted by a wallet.
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getWalletMints (walletAddress, chainID, cursor, limit, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWalletMints(walletAddress, chainID, cursor, limit, options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Returns a list of tokens owned by a wallet.
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getWalletTokens (walletAddress, cursor, chainID, limit, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWalletTokens(walletAddress, cursor, chainID, limit, options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        },
        /**
         * 
         * @summary Returns a list of transactions that have been performed by this wallet. Use token type to restrict to only certain transactions, such as NFTs
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {'NFT' | 'SFT' | 'unknown'} [tokenType] An indicator that be used to filter to only a subet of tokens, for example only NFTs.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ async getWalletTransactions (walletAddress, cursor, limit, chainID, tokenType, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWalletTransactions(walletAddress, cursor, limit, chainID, tokenType, options);
            return (0, $2261d03cb90f4b62$export$2a2bdb6ca788ce6a)(localVarAxiosArgs, (0, ($parcel$interopDefault($g5Y9E$axios))), (0, $0348d6829ba60ae1$export$2812a1fb15aca49c), configuration);
        }
    };
};
const $c7c123e6c7929bea$export$b6aeda2059595393 = function(configuration, basePath, axios) {
    const localVarFp = $c7c123e6c7929bea$export$47eb7a1dff8d5250(configuration);
    return {
        /**
         * 
         * @summary Lists all supported blockchains.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getBlockchains (options) {
            return localVarFp.getBlockchains(options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Get a collection by its contract address.
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getCollection (contractAddress, chainID, options) {
            return localVarFp.getCollection(contractAddress, chainID, options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Get tokens by contract address.
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getContractTokens (contractAddress, chainID, limit, options) {
            return localVarFp.getContractTokens(contractAddress, chainID, limit, options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Get tokens by a pair of contract addresses and token IDs. The input are two ordered arrays. The first element of contractAddresses should be related to the 1st element of the tokenID, etc. In the below example two tokens are being requested, token 3481 from the \"goblintown\" contract (i.e. 0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e) and token 50603 from the Otherdeed contract (i.e. 0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258).
         * @param {string} contractAddresses A comma-separated hex address for a blockchain contract, the order of values should match the order in tokenIdentifiers.
         * @param {string} tokenIdentifiers A comma-separated token ID, the order of values should match the order in contractAddresses.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getContractTokensByContractAndID (contractAddresses, tokenIdentifiers, chainID, limit, options) {
            return localVarFp.getContractTokensByContractAndID(contractAddresses, tokenIdentifiers, chainID, limit, options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Get the transaction history for a collection
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getContractTransactionHistory (contractAddress, cursor, chainID, limit, options) {
            return localVarFp.getContractTransactionHistory(contractAddress, cursor, chainID, limit, options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Get search results such as wallets, tokens, and collections by a search query.
         * @param {string} query A search query that returns matching results
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getSearchResults (query, cursor, options) {
            return localVarFp.getSearchResults(query, cursor, options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Returns a list of tokens sold by a wallet.
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getSoldTokens (walletAddress, chainID, cursor, limit, options) {
            return localVarFp.getSoldTokens(walletAddress, chainID, cursor, limit, options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Get a token by its contract address and token ID.
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getToken (contractAddress, tokenID, chainID, options) {
            return localVarFp.getToken(contractAddress, tokenID, chainID, options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Determine if a wallet has a given token from a contract.
         * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getTokenGate (tokenID, contractAddress, walletAddress, chainID, options) {
            return localVarFp.getTokenGate(tokenID, contractAddress, walletAddress, chainID, options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Returns a list of transfer transactions on a specified token.
         * @param {string} contractAddress A hex address for a blockchain contract.
         * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getTokenTransfers (contractAddress, tokenID, chainID, limit, options) {
            return localVarFp.getTokenTransfers(contractAddress, tokenID, chainID, limit, options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Get tokens by a search query.
         * @param {string} query A search query that returns matching results
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getTokensBySearchQuery (query, cursor, options) {
            return localVarFp.getTokensBySearchQuery(query, cursor, options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Get a wallet by a wallet address
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getWallet (walletAddress, chainID, options) {
            return localVarFp.getWallet(walletAddress, chainID, options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Returns a list of balances for tokens this wallet currently owns.
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getWalletBalances (walletAddress, limit, options) {
            return localVarFp.getWalletBalances(walletAddress, limit, options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Returns a list of tokens minted by a wallet.
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getWalletMints (walletAddress, chainID, cursor, limit, options) {
            return localVarFp.getWalletMints(walletAddress, chainID, cursor, limit, options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Returns a list of tokens owned by a wallet.
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getWalletTokens (walletAddress, cursor, chainID, limit, options) {
            return localVarFp.getWalletTokens(walletAddress, cursor, chainID, limit, options).then((request)=>request(axios, basePath));
        },
        /**
         * 
         * @summary Returns a list of transactions that have been performed by this wallet. Use token type to restrict to only certain transactions, such as NFTs
         * @param {string} walletAddress A hex string referencing a public wallet address.
         * @param {string} [cursor] Cursor to support API pagination.
         * @param {number} [limit] Limits the number of results in a single response.
         * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
         * @param {'NFT' | 'SFT' | 'unknown'} [tokenType] An indicator that be used to filter to only a subet of tokens, for example only NFTs.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */ getWalletTransactions (walletAddress, cursor, limit, chainID, tokenType, options) {
            return localVarFp.getWalletTransactions(walletAddress, cursor, limit, chainID, tokenType, options).then((request)=>request(axios, basePath));
        }
    };
};
class $c7c123e6c7929bea$export$872437fb2a17cd0e extends (0, $0348d6829ba60ae1$export$70edad7ad5bb3f5d) {
    /**
     * 
     * @summary Lists all supported blockchains.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ getBlockchains(options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).getBlockchains(options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get a collection by its contract address.
     * @param {string} contractAddress A hex address for a blockchain contract.
     * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ getCollection(contractAddress, chainID, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).getCollection(contractAddress, chainID, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get tokens by contract address.
     * @param {string} contractAddress A hex address for a blockchain contract.
     * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param {number} [limit] Limits the number of results in a single response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ getContractTokens(contractAddress, chainID, limit, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).getContractTokens(contractAddress, chainID, limit, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get tokens by a pair of contract addresses and token IDs. The input are two ordered arrays. The first element of contractAddresses should be related to the 1st element of the tokenID, etc. In the below example two tokens are being requested, token 3481 from the \"goblintown\" contract (i.e. 0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e) and token 50603 from the Otherdeed contract (i.e. 0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258).
     * @param {string} contractAddresses A comma-separated hex address for a blockchain contract, the order of values should match the order in tokenIdentifiers.
     * @param {string} tokenIdentifiers A comma-separated token ID, the order of values should match the order in contractAddresses.
     * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param {number} [limit] Limits the number of results in a single response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ getContractTokensByContractAndID(contractAddresses, tokenIdentifiers, chainID, limit, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).getContractTokensByContractAndID(contractAddresses, tokenIdentifiers, chainID, limit, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get the transaction history for a collection
     * @param {string} contractAddress A hex address for a blockchain contract.
     * @param {string} [cursor] Cursor to support API pagination.
     * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param {number} [limit] Limits the number of results in a single response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ getContractTransactionHistory(contractAddress, cursor, chainID, limit, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).getContractTransactionHistory(contractAddress, cursor, chainID, limit, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get search results such as wallets, tokens, and collections by a search query.
     * @param {string} query A search query that returns matching results
     * @param {string} [cursor] Cursor to support API pagination.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ getSearchResults(query, cursor, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).getSearchResults(query, cursor, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Returns a list of tokens sold by a wallet.
     * @param {string} walletAddress A hex string referencing a public wallet address.
     * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param {string} [cursor] Cursor to support API pagination.
     * @param {number} [limit] Limits the number of results in a single response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ getSoldTokens(walletAddress, chainID, cursor, limit, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).getSoldTokens(walletAddress, chainID, cursor, limit, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get a token by its contract address and token ID.
     * @param {string} contractAddress A hex address for a blockchain contract.
     * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ getToken(contractAddress, tokenID, chainID, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).getToken(contractAddress, tokenID, chainID, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Determine if a wallet has a given token from a contract.
     * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param {string} contractAddress A hex address for a blockchain contract.
     * @param {string} walletAddress A hex string referencing a public wallet address.
     * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ getTokenGate(tokenID, contractAddress, walletAddress, chainID, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).getTokenGate(tokenID, contractAddress, walletAddress, chainID, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Returns a list of transfer transactions on a specified token.
     * @param {string} contractAddress A hex address for a blockchain contract.
     * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param {number} [limit] Limits the number of results in a single response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ getTokenTransfers(contractAddress, tokenID, chainID, limit, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).getTokenTransfers(contractAddress, tokenID, chainID, limit, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get tokens by a search query.
     * @param {string} query A search query that returns matching results
     * @param {string} [cursor] Cursor to support API pagination.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ getTokensBySearchQuery(query, cursor, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).getTokensBySearchQuery(query, cursor, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get a wallet by a wallet address
     * @param {string} walletAddress A hex string referencing a public wallet address.
     * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ getWallet(walletAddress, chainID, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).getWallet(walletAddress, chainID, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Returns a list of balances for tokens this wallet currently owns.
     * @param {string} walletAddress A hex string referencing a public wallet address.
     * @param {number} [limit] Limits the number of results in a single response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ getWalletBalances(walletAddress, limit, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).getWalletBalances(walletAddress, limit, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Returns a list of tokens minted by a wallet.
     * @param {string} walletAddress A hex string referencing a public wallet address.
     * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param {string} [cursor] Cursor to support API pagination.
     * @param {number} [limit] Limits the number of results in a single response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ getWalletMints(walletAddress, chainID, cursor, limit, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).getWalletMints(walletAddress, chainID, cursor, limit, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Returns a list of tokens owned by a wallet.
     * @param {string} walletAddress A hex string referencing a public wallet address.
     * @param {string} [cursor] Cursor to support API pagination.
     * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param {number} [limit] Limits the number of results in a single response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ getWalletTokens(walletAddress, cursor, chainID, limit, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).getWalletTokens(walletAddress, cursor, chainID, limit, options).then((request)=>request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Returns a list of transactions that have been performed by this wallet. Use token type to restrict to only certain transactions, such as NFTs
     * @param {string} walletAddress A hex string referencing a public wallet address.
     * @param {string} [cursor] Cursor to support API pagination.
     * @param {number} [limit] Limits the number of results in a single response.
     * @param {string} [chainID] An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param {'NFT' | 'SFT' | 'unknown'} [tokenType] An indicator that be used to filter to only a subet of tokens, for example only NFTs.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */ getWalletTransactions(walletAddress, cursor, limit, chainID, tokenType, options) {
        return $c7c123e6c7929bea$export$47eb7a1dff8d5250(this.configuration).getWalletTransactions(walletAddress, cursor, limit, chainID, tokenType, options).then((request)=>request(this.axios, this.basePath));
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
        this.baseOptions = param.baseOptions;
        this.formDataCtor = param.formDataCtor;
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */ isJsonMime(mime) {
        const jsonMime = new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$", "i");
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === "application/json-patch+json");
    }
}


$parcel$exportWildcard(module.exports, $c7c123e6c7929bea$exports);
$parcel$exportWildcard(module.exports, $a4d867bebea9b66c$exports);


//# sourceMappingURL=index.js.map
