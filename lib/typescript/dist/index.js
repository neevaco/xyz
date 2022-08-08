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
var $36c67adf4aa8f9ad$exports = {};

$parcel$export($36c67adf4aa8f9ad$exports, "BASE_PATH", () => $36c67adf4aa8f9ad$export$2812a1fb15aca49c);
$parcel$export($36c67adf4aa8f9ad$exports, "Configuration", () => $36c67adf4aa8f9ad$export$fa89be98fe0936f2);
$parcel$export($36c67adf4aa8f9ad$exports, "querystring", () => $36c67adf4aa8f9ad$export$ac4103b836844853);
$parcel$export($36c67adf4aa8f9ad$exports, "DefaultConfig", () => $36c67adf4aa8f9ad$export$ac4f8128ea29c5);
$parcel$export($36c67adf4aa8f9ad$exports, "BaseAPI", () => $36c67adf4aa8f9ad$export$70edad7ad5bb3f5d);
$parcel$export($36c67adf4aa8f9ad$exports, "FetchError", () => $36c67adf4aa8f9ad$export$26e841bcf1aeb894);
$parcel$export($36c67adf4aa8f9ad$exports, "ResponseError", () => $36c67adf4aa8f9ad$export$286baf652d0b1206);
$parcel$export($36c67adf4aa8f9ad$exports, "RequiredError", () => $36c67adf4aa8f9ad$export$a27bea7cdb975d70);
$parcel$export($36c67adf4aa8f9ad$exports, "COLLECTION_FORMATS", () => $36c67adf4aa8f9ad$export$83cb526776fb323d);
$parcel$export($36c67adf4aa8f9ad$exports, "exists", () => $36c67adf4aa8f9ad$export$f7e9f41ea797a17);
$parcel$export($36c67adf4aa8f9ad$exports, "mapValues", () => $36c67adf4aa8f9ad$export$825e789796ab7275);
$parcel$export($36c67adf4aa8f9ad$exports, "canConsumeForm", () => $36c67adf4aa8f9ad$export$59072c3750441c02);
$parcel$export($36c67adf4aa8f9ad$exports, "JSONApiResponse", () => $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4);
$parcel$export($36c67adf4aa8f9ad$exports, "VoidApiResponse", () => $36c67adf4aa8f9ad$export$20446dc680588cc3);
$parcel$export($36c67adf4aa8f9ad$exports, "BlobApiResponse", () => $36c67adf4aa8f9ad$export$9d707f60a06b41f8);
$parcel$export($36c67adf4aa8f9ad$exports, "TextApiResponse", () => $36c67adf4aa8f9ad$export$bf40ae8c274ef99b);
const $36c67adf4aa8f9ad$export$2812a1fb15aca49c = "https://api.n.xyz".replace(/\/+$/, "");
class $36c67adf4aa8f9ad$export$fa89be98fe0936f2 {
    constructor(configuration = {}){
        this.configuration = configuration;
    }
    set config(configuration) {
        this.configuration = configuration;
    }
    get basePath() {
        return this.configuration.basePath != null ? this.configuration.basePath : $36c67adf4aa8f9ad$export$2812a1fb15aca49c;
    }
    get fetchApi() {
        return this.configuration.fetchApi;
    }
    get middleware() {
        return this.configuration.middleware || [];
    }
    get queryParamsStringify() {
        return this.configuration.queryParamsStringify || $36c67adf4aa8f9ad$export$ac4103b836844853;
    }
    get username() {
        return this.configuration.username;
    }
    get password() {
        return this.configuration.password;
    }
    get apiKey() {
        const apiKey = this.configuration.apiKey;
        if (apiKey) return typeof apiKey === "function" ? apiKey : ()=>apiKey;
        return undefined;
    }
    get accessToken() {
        const accessToken = this.configuration.accessToken;
        if (accessToken) return typeof accessToken === "function" ? accessToken : async ()=>accessToken;
        return undefined;
    }
    get headers() {
        return this.configuration.headers;
    }
    get credentials() {
        return this.configuration.credentials;
    }
}
const $36c67adf4aa8f9ad$export$ac4f8128ea29c5 = new $36c67adf4aa8f9ad$export$fa89be98fe0936f2();
class $36c67adf4aa8f9ad$export$70edad7ad5bb3f5d {
    constructor(configuration = $36c67adf4aa8f9ad$export$ac4f8128ea29c5){
        this.configuration = configuration;
        this.fetchApi = async (url, init)=>{
            let fetchParams = {
                url: url,
                init: init
            };
            for (const middleware of this.middleware)if (middleware.pre) fetchParams = await middleware.pre({
                fetch: this.fetchApi,
                ...fetchParams
            }) || fetchParams;
            let response = undefined;
            try {
                response = await (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init);
            } catch (e) {
                for (const middleware1 of this.middleware)if (middleware1.onError) response = await middleware1.onError({
                    fetch: this.fetchApi,
                    url: fetchParams.url,
                    init: fetchParams.init,
                    error: e,
                    response: response ? response.clone() : undefined
                }) || response;
                if (response !== undefined) throw new $36c67adf4aa8f9ad$export$26e841bcf1aeb894(e, "The request failed and the interceptors did not return an alternative response");
            }
            for (const middleware2 of this.middleware)if (middleware2.post) response = await middleware2.post({
                fetch: this.fetchApi,
                url: fetchParams.url,
                init: fetchParams.init,
                response: response.clone()
            }) || response;
            return response;
        };
        this.middleware = configuration.middleware;
    }
    withMiddleware(...middlewares) {
        const next = this.clone();
        next.middleware = next.middleware.concat(...middlewares);
        return next;
    }
    withPreMiddleware(...preMiddlewares) {
        const middlewares = preMiddlewares.map((pre)=>({
                pre: pre
            }));
        return this.withMiddleware(...middlewares);
    }
    withPostMiddleware(...postMiddlewares) {
        const middlewares = postMiddlewares.map((post)=>({
                post: post
            }));
        return this.withMiddleware(...middlewares);
    }
    async request(context, initOverrides) {
        const { url: url , init: init  } = await this.createFetchParams(context, initOverrides);
        const response = await this.fetchApi(url, init);
        if (response.status >= 200 && response.status < 300) return response;
        throw new $36c67adf4aa8f9ad$export$286baf652d0b1206(response, "Response returned an error code");
    }
    async createFetchParams(context, initOverrides) {
        let url = this.configuration.basePath + context.path;
        if (context.query !== undefined && Object.keys(context.query).length !== 0) // only add the querystring to the URL if there are query parameters.
        // this is done to avoid urls ending with a "?" character which buggy webservers
        // do not handle correctly sometimes.
        url += "?" + this.configuration.queryParamsStringify(context.query);
        const headers = Object.assign({}, this.configuration.headers, context.headers);
        Object.keys(headers).forEach((key)=>headers[key] === undefined ? delete headers[key] : {});
        const initOverrideFn = typeof initOverrides === "function" ? initOverrides : async ()=>initOverrides;
        const initParams = {
            method: context.method,
            headers: headers,
            body: context.body,
            credentials: this.configuration.credentials
        };
        const overridedInit = {
            ...initParams,
            ...await initOverrideFn({
                init: initParams,
                context: context
            })
        };
        const init = {
            ...overridedInit,
            body: $36c67adf4aa8f9ad$var$isFormData(overridedInit.body) || overridedInit.body instanceof URLSearchParams || $36c67adf4aa8f9ad$var$isBlob(overridedInit.body) ? overridedInit.body : JSON.stringify(overridedInit.body)
        };
        return {
            url: url,
            init: init
        };
    }
    /**
     * Create a shallow clone of `this` by constructing a new instance
     * and then shallow cloning data members.
     */ clone() {
        const constructor = this.constructor;
        const next = new constructor(this.configuration);
        next.middleware = this.middleware.slice();
        return next;
    }
}
function $36c67adf4aa8f9ad$var$isBlob(value) {
    return typeof Blob !== "undefined" && value instanceof Blob;
}
function $36c67adf4aa8f9ad$var$isFormData(value) {
    return typeof FormData !== "undefined" && value instanceof FormData;
}
class $36c67adf4aa8f9ad$export$286baf652d0b1206 extends Error {
    constructor(response, msg){
        super(msg);
        this.response = response;
        this.name = "ResponseError";
    }
}
class $36c67adf4aa8f9ad$export$26e841bcf1aeb894 extends Error {
    constructor(cause, msg){
        super(msg);
        this.cause = cause;
        this.name = "FetchError";
    }
}
class $36c67adf4aa8f9ad$export$a27bea7cdb975d70 extends Error {
    constructor(field, msg){
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
const $36c67adf4aa8f9ad$export$83cb526776fb323d = {
    csv: ",",
    ssv: " ",
    tsv: "	",
    pipes: "|"
};
function $36c67adf4aa8f9ad$export$f7e9f41ea797a17(json, key) {
    const value = json[key];
    return value !== null && value !== undefined;
}
function $36c67adf4aa8f9ad$export$ac4103b836844853(params, prefix = "") {
    return Object.keys(params).map((key)=>$36c67adf4aa8f9ad$var$querystringSingleKey(key, params[key], prefix)).filter((part)=>part.length > 0).join("&");
}
function $36c67adf4aa8f9ad$var$querystringSingleKey(key, value, keyPrefix = "") {
    const fullKey = keyPrefix + (keyPrefix.length ? `[${key}]` : key);
    if (value instanceof Array) {
        const multiValue = value.map((singleValue)=>encodeURIComponent(String(singleValue))).join(`&${encodeURIComponent(fullKey)}=`);
        return `${encodeURIComponent(fullKey)}=${multiValue}`;
    }
    if (value instanceof Set) {
        const valueAsArray = Array.from(value);
        return $36c67adf4aa8f9ad$var$querystringSingleKey(key, valueAsArray, keyPrefix);
    }
    if (value instanceof Date) return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
    if (value instanceof Object) return $36c67adf4aa8f9ad$export$ac4103b836844853(value, fullKey);
    return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
}
function $36c67adf4aa8f9ad$export$825e789796ab7275(data, fn) {
    return Object.keys(data).reduce((acc, key)=>({
            ...acc,
            [key]: fn(data[key])
        }), {});
}
function $36c67adf4aa8f9ad$export$59072c3750441c02(consumes) {
    for (const consume of consumes){
        if ("multipart/form-data" === consume.contentType) return true;
    }
    return false;
}
class $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4 {
    constructor(raw, transformer = (jsonValue)=>jsonValue){
        this.raw = raw;
        this.transformer = transformer;
    }
    async value() {
        return this.transformer(await this.raw.json());
    }
}
class $36c67adf4aa8f9ad$export$20446dc680588cc3 {
    constructor(raw){
        this.raw = raw;
    }
    async value() {
        return undefined;
    }
}
class $36c67adf4aa8f9ad$export$9d707f60a06b41f8 {
    constructor(raw){
        this.raw = raw;
    }
    async value() {
        return await this.raw.blob();
    }
}
class $36c67adf4aa8f9ad$export$bf40ae8c274ef99b {
    constructor(raw){
        this.raw = raw;
    }
    async value() {
        return await this.raw.text();
    }
}


var $ae7ad7cc2eebe26e$exports = {};
var $8f13224aba1e1546$exports = {};

$parcel$export($8f13224aba1e1546$exports, "AlphaApi", () => $8f13224aba1e1546$export$9ff48f746beb7584);

var $3282bc8bc7d6c4cc$exports = {};
var $cf32f33cd806bfca$exports = {};

$parcel$export($cf32f33cd806bfca$exports, "instanceOfBlockchainInfo", () => $cf32f33cd806bfca$export$12059e7d6555c76c);
$parcel$export($cf32f33cd806bfca$exports, "BlockchainInfoFromJSON", () => $cf32f33cd806bfca$export$cb03894d4c7ec6eb);
$parcel$export($cf32f33cd806bfca$exports, "BlockchainInfoFromJSONTyped", () => $cf32f33cd806bfca$export$bcfdd483fd156df4);
$parcel$export($cf32f33cd806bfca$exports, "BlockchainInfoToJSON", () => $cf32f33cd806bfca$export$f2452109e1b1482e);

function $cf32f33cd806bfca$export$12059e7d6555c76c(value) {
    let isInstance = true;
    return isInstance;
}
function $cf32f33cd806bfca$export$cb03894d4c7ec6eb(json) {
    return $cf32f33cd806bfca$export$bcfdd483fd156df4(json, false);
}
function $cf32f33cd806bfca$export$bcfdd483fd156df4(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "name": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "name") ? undefined : json["name"],
        "shortName": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "shortName") ? undefined : json["shortName"],
        "chainID": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "chainID") ? undefined : json["chainID"],
        "shortChainID": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "shortChainID") ? undefined : json["shortChainID"]
    };
}
function $cf32f33cd806bfca$export$f2452109e1b1482e(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "name": value.name,
        "shortName": value.shortName,
        "chainID": value.chainID,
        "shortChainID": value.shortChainID
    };
}


var $722d10a4900f9e7e$exports = {};

$parcel$export($722d10a4900f9e7e$exports, "instanceOfCollection", () => $722d10a4900f9e7e$export$978c6a76856e13f1);
$parcel$export($722d10a4900f9e7e$exports, "CollectionFromJSON", () => $722d10a4900f9e7e$export$734b625bc703c8d8);
$parcel$export($722d10a4900f9e7e$exports, "CollectionFromJSONTyped", () => $722d10a4900f9e7e$export$e286c13914feec63);
$parcel$export($722d10a4900f9e7e$exports, "CollectionToJSON", () => $722d10a4900f9e7e$export$bbb7d36c0301a0bc);


var $bd9a2133bfc7a0a3$exports = {};

$parcel$export($bd9a2133bfc7a0a3$exports, "instanceOfCurrencyInfo", () => $bd9a2133bfc7a0a3$export$c00ad6966a2842f2);
$parcel$export($bd9a2133bfc7a0a3$exports, "CurrencyInfoFromJSON", () => $bd9a2133bfc7a0a3$export$3be8521ceda13a3f);
$parcel$export($bd9a2133bfc7a0a3$exports, "CurrencyInfoFromJSONTyped", () => $bd9a2133bfc7a0a3$export$d98b1a4085ed5b43);
$parcel$export($bd9a2133bfc7a0a3$exports, "CurrencyInfoToJSON", () => $bd9a2133bfc7a0a3$export$dccf41d3d1268ae8);

function $bd9a2133bfc7a0a3$export$c00ad6966a2842f2(value) {
    let isInstance = true;
    return isInstance;
}
function $bd9a2133bfc7a0a3$export$3be8521ceda13a3f(json) {
    return $bd9a2133bfc7a0a3$export$d98b1a4085ed5b43(json, false);
}
function $bd9a2133bfc7a0a3$export$d98b1a4085ed5b43(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "value": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "value") ? undefined : json["value"],
        "tokenValue": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "tokenValue") ? undefined : json["tokenValue"],
        "fiat": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "fiat") ? undefined : json["fiat"].map($bd9a2133bfc7a0a3$export$3be8521ceda13a3f),
        "pretty": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "pretty") ? undefined : json["pretty"],
        "decimals": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "decimals") ? undefined : json["decimals"],
        "symbol": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "symbol") ? undefined : json["symbol"],
        "contractAddress": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "contractAddress") ? undefined : json["contractAddress"],
        "name": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "name") ? undefined : json["name"]
    };
}
function $bd9a2133bfc7a0a3$export$dccf41d3d1268ae8(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "value": value.value,
        "tokenValue": value.tokenValue,
        "fiat": value.fiat === undefined ? undefined : value.fiat.map($bd9a2133bfc7a0a3$export$dccf41d3d1268ae8),
        "pretty": value.pretty,
        "decimals": value.decimals,
        "symbol": value.symbol,
        "contractAddress": value.contractAddress,
        "name": value.name
    };
}


var $9a076396c45cc3c6$exports = {};

$parcel$export($9a076396c45cc3c6$exports, "instanceOfMedia", () => $9a076396c45cc3c6$export$d63a95fdbdd7c9a4);
$parcel$export($9a076396c45cc3c6$exports, "MediaFromJSON", () => $9a076396c45cc3c6$export$851a131d23905439);
$parcel$export($9a076396c45cc3c6$exports, "MediaFromJSONTyped", () => $9a076396c45cc3c6$export$7fa7c623f9cffb9e);
$parcel$export($9a076396c45cc3c6$exports, "MediaToJSON", () => $9a076396c45cc3c6$export$6894fab0cd718c63);

var $c7f9b5972da09ccd$exports = {};

$parcel$export($c7f9b5972da09ccd$exports, "MediaVersionKindEnum", () => $c7f9b5972da09ccd$export$ee8314ee6c5f3a82);
$parcel$export($c7f9b5972da09ccd$exports, "instanceOfMediaVersion", () => $c7f9b5972da09ccd$export$9b202b030fe89a48);
$parcel$export($c7f9b5972da09ccd$exports, "MediaVersionFromJSON", () => $c7f9b5972da09ccd$export$ea22decc69e922f1);
$parcel$export($c7f9b5972da09ccd$exports, "MediaVersionFromJSONTyped", () => $c7f9b5972da09ccd$export$e3cf250b0d1b12c6);
$parcel$export($c7f9b5972da09ccd$exports, "MediaVersionToJSON", () => $c7f9b5972da09ccd$export$82d91a2270675022);

const $c7f9b5972da09ccd$export$ee8314ee6c5f3a82 = {
    Video: "video",
    Image: "image",
    Raw: "raw",
    Audio: "audio"
};
function $c7f9b5972da09ccd$export$9b202b030fe89a48(value) {
    let isInstance = true;
    return isInstance;
}
function $c7f9b5972da09ccd$export$ea22decc69e922f1(json) {
    return $c7f9b5972da09ccd$export$e3cf250b0d1b12c6(json, false);
}
function $c7f9b5972da09ccd$export$e3cf250b0d1b12c6(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "kind": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "kind") ? undefined : json["kind"],
        "format": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "format") ? undefined : json["format"],
        "width": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "width") ? undefined : json["width"],
        "height": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "height") ? undefined : json["height"],
        "numBytes": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "numBytes") ? undefined : json["numBytes"],
        "duration": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "duration") ? undefined : json["duration"]
    };
}
function $c7f9b5972da09ccd$export$82d91a2270675022(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "kind": value.kind,
        "format": value.format,
        "width": value.width,
        "height": value.height,
        "numBytes": value.numBytes,
        "duration": value.duration
    };
}


function $9a076396c45cc3c6$export$d63a95fdbdd7c9a4(value) {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    return isInstance;
}
function $9a076396c45cc3c6$export$851a131d23905439(json) {
    return $9a076396c45cc3c6$export$7fa7c623f9cffb9e(json, false);
}
function $9a076396c45cc3c6$export$7fa7c623f9cffb9e(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "key": json["key"],
        "uRI": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "URI") ? undefined : json["URI"],
        "version": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "version") ? undefined : json["version"].map((0, $c7f9b5972da09ccd$export$ea22decc69e922f1))
    };
}
function $9a076396c45cc3c6$export$6894fab0cd718c63(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "key": value.key,
        "URI": value.uRI,
        "version": value.version === undefined ? undefined : value.version.map((0, $c7f9b5972da09ccd$export$82d91a2270675022))
    };
}


var $e30f32fa1a482821$exports = {};

$parcel$export($e30f32fa1a482821$exports, "instanceOfSocialMedia", () => $e30f32fa1a482821$export$32f05f6e93ee1b04);
$parcel$export($e30f32fa1a482821$exports, "SocialMediaFromJSON", () => $e30f32fa1a482821$export$193b6a587abe31bf);
$parcel$export($e30f32fa1a482821$exports, "SocialMediaFromJSONTyped", () => $e30f32fa1a482821$export$94eedba8201fed4c);
$parcel$export($e30f32fa1a482821$exports, "SocialMediaToJSON", () => $e30f32fa1a482821$export$d5020364e3ca2e67);

function $e30f32fa1a482821$export$32f05f6e93ee1b04(value) {
    let isInstance = true;
    return isInstance;
}
function $e30f32fa1a482821$export$193b6a587abe31bf(json) {
    return $e30f32fa1a482821$export$94eedba8201fed4c(json, false);
}
function $e30f32fa1a482821$export$94eedba8201fed4c(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "network": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "network") ? undefined : json["network"],
        "username": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "username") ? undefined : json["username"]
    };
}
function $e30f32fa1a482821$export$d5020364e3ca2e67(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "network": value.network,
        "username": value.username
    };
}


var $717d1f4e3fed3949$exports = {};

$parcel$export($717d1f4e3fed3949$exports, "instanceOfURL", () => $717d1f4e3fed3949$export$dedaaab85a1cd989);
$parcel$export($717d1f4e3fed3949$exports, "URLFromJSON", () => $717d1f4e3fed3949$export$c65a537cdbde84c6);
$parcel$export($717d1f4e3fed3949$exports, "URLFromJSONTyped", () => $717d1f4e3fed3949$export$cf3467f367876130);
$parcel$export($717d1f4e3fed3949$exports, "URLToJSON", () => $717d1f4e3fed3949$export$f58c6dc3f554d19d);

function $717d1f4e3fed3949$export$dedaaab85a1cd989(value) {
    let isInstance = true;
    return isInstance;
}
function $717d1f4e3fed3949$export$c65a537cdbde84c6(json) {
    return $717d1f4e3fed3949$export$cf3467f367876130(json, false);
}
function $717d1f4e3fed3949$export$cf3467f367876130(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "name": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "name") ? undefined : json["name"],
        "url": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "url") ? undefined : json["url"]
    };
}
function $717d1f4e3fed3949$export$f58c6dc3f554d19d(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "name": value.name,
        "url": value.url
    };
}


function $722d10a4900f9e7e$export$978c6a76856e13f1(value) {
    let isInstance = true;
    isInstance = isInstance && "blockchain" in value;
    isInstance = isInstance && "contractAddress" in value;
    return isInstance;
}
function $722d10a4900f9e7e$export$734b625bc703c8d8(json) {
    return $722d10a4900f9e7e$export$e286c13914feec63(json, false);
}
function $722d10a4900f9e7e$export$e286c13914feec63(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "blockchain": (0, $cf32f33cd806bfca$export$cb03894d4c7ec6eb)(json["blockchain"]),
        "contractAddress": json["contractAddress"],
        "symbol": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "symbol") ? undefined : json["symbol"],
        "slug": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "slug") ? undefined : json["slug"],
        "name": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "name") ? undefined : json["name"],
        "description": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "description") ? undefined : json["description"],
        "shortDescription": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "shortDescription") ? undefined : json["shortDescription"],
        "createdDate": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "createdDate") ? undefined : json["createdDate"] === null ? null : new Date(json["createdDate"]),
        "floorPrice": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "floorPrice") ? undefined : (0, $bd9a2133bfc7a0a3$export$3be8521ceda13a3f)(json["floorPrice"]),
        "bannerImage": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "bannerImage") ? undefined : (0, $9a076396c45cc3c6$export$851a131d23905439)(json["bannerImage"]),
        "featuredImage": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "featuredImage") ? undefined : (0, $9a076396c45cc3c6$export$851a131d23905439)(json["featuredImage"]),
        "urls": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "urls") ? undefined : json["urls"].map((0, $717d1f4e3fed3949$export$c65a537cdbde84c6)),
        "socialMedia": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "socialMedia") ? undefined : json["socialMedia"].map((0, $e30f32fa1a482821$export$193b6a587abe31bf))
    };
}
function $722d10a4900f9e7e$export$bbb7d36c0301a0bc(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "blockchain": (0, $cf32f33cd806bfca$export$f2452109e1b1482e)(value.blockchain),
        "contractAddress": value.contractAddress,
        "symbol": value.symbol,
        "slug": value.slug,
        "name": value.name,
        "description": value.description,
        "shortDescription": value.shortDescription,
        "createdDate": value.createdDate === undefined ? undefined : value.createdDate === null ? null : value.createdDate.toISOString(),
        "floorPrice": (0, $bd9a2133bfc7a0a3$export$dccf41d3d1268ae8)(value.floorPrice),
        "bannerImage": (0, $9a076396c45cc3c6$export$6894fab0cd718c63)(value.bannerImage),
        "featuredImage": (0, $9a076396c45cc3c6$export$6894fab0cd718c63)(value.featuredImage),
        "urls": value.urls === undefined ? undefined : value.urls.map((0, $717d1f4e3fed3949$export$f58c6dc3f554d19d)),
        "socialMedia": value.socialMedia === undefined ? undefined : value.socialMedia.map((0, $e30f32fa1a482821$export$d5020364e3ca2e67))
    };
}



var $cfa4816945e25a59$exports = {};

$parcel$export($cfa4816945e25a59$exports, "instanceOfENS", () => $cfa4816945e25a59$export$3019720dbec7cd0a);
$parcel$export($cfa4816945e25a59$exports, "ENSFromJSON", () => $cfa4816945e25a59$export$929a75b87723997d);
$parcel$export($cfa4816945e25a59$exports, "ENSFromJSONTyped", () => $cfa4816945e25a59$export$4e8d75ff8fb2d960);
$parcel$export($cfa4816945e25a59$exports, "ENSToJSON", () => $cfa4816945e25a59$export$db58039e68eccc44);

function $cfa4816945e25a59$export$3019720dbec7cd0a(value) {
    let isInstance = true;
    return isInstance;
}
function $cfa4816945e25a59$export$929a75b87723997d(json) {
    return $cfa4816945e25a59$export$4e8d75ff8fb2d960(json, false);
}
function $cfa4816945e25a59$export$4e8d75ff8fb2d960(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "name": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "name") ? undefined : json["name"],
        "pointsTo": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "pointsTo") ? undefined : json["pointsTo"],
        "expires": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "expires") ? undefined : json["expires"] === null ? null : new Date(json["expires"]),
        "isPrimary": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "isPrimary") ? undefined : json["isPrimary"]
    };
}
function $cfa4816945e25a59$export$db58039e68eccc44(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "name": value.name,
        "pointsTo": value.pointsTo,
        "expires": value.expires === undefined ? undefined : value.expires === null ? null : value.expires.toISOString(),
        "isPrimary": value.isPrimary
    };
}


var $dc7c14fc7a0281a2$exports = {};

$parcel$export($dc7c14fc7a0281a2$exports, "instanceOfErrorMessage", () => $dc7c14fc7a0281a2$export$772bb21b82273313);
$parcel$export($dc7c14fc7a0281a2$exports, "ErrorMessageFromJSON", () => $dc7c14fc7a0281a2$export$aafc969cfc52b7e2);
$parcel$export($dc7c14fc7a0281a2$exports, "ErrorMessageFromJSONTyped", () => $dc7c14fc7a0281a2$export$90d2967b5d27f811);
$parcel$export($dc7c14fc7a0281a2$exports, "ErrorMessageToJSON", () => $dc7c14fc7a0281a2$export$ad36f5e8b3abc8ac);
function $dc7c14fc7a0281a2$export$772bb21b82273313(value) {
    let isInstance = true;
    isInstance = isInstance && "error" in value;
    return isInstance;
}
function $dc7c14fc7a0281a2$export$aafc969cfc52b7e2(json) {
    return $dc7c14fc7a0281a2$export$90d2967b5d27f811(json, false);
}
function $dc7c14fc7a0281a2$export$90d2967b5d27f811(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "error": json["error"]
    };
}
function $dc7c14fc7a0281a2$export$ad36f5e8b3abc8ac(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "error": value.error
    };
}



var $b9a2da77dd13a8d2$exports = {};

$parcel$export($b9a2da77dd13a8d2$exports, "MediaPreviewKindEnum", () => $b9a2da77dd13a8d2$export$f3ea9b8749fe6ec0);
$parcel$export($b9a2da77dd13a8d2$exports, "instanceOfMediaPreview", () => $b9a2da77dd13a8d2$export$cb71e7caec2646aa);
$parcel$export($b9a2da77dd13a8d2$exports, "MediaPreviewFromJSON", () => $b9a2da77dd13a8d2$export$e41f7e55239b361a);
$parcel$export($b9a2da77dd13a8d2$exports, "MediaPreviewFromJSONTyped", () => $b9a2da77dd13a8d2$export$97d6305e8a40fdc4);
$parcel$export($b9a2da77dd13a8d2$exports, "MediaPreviewToJSON", () => $b9a2da77dd13a8d2$export$af32baf0954631b6);

const $b9a2da77dd13a8d2$export$f3ea9b8749fe6ec0 = {
    Video: "video",
    Image: "image",
    Raw: "raw",
    Audio: "audio"
};
function $b9a2da77dd13a8d2$export$cb71e7caec2646aa(value) {
    let isInstance = true;
    return isInstance;
}
function $b9a2da77dd13a8d2$export$e41f7e55239b361a(json) {
    return $b9a2da77dd13a8d2$export$97d6305e8a40fdc4(json, false);
}
function $b9a2da77dd13a8d2$export$97d6305e8a40fdc4(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "uRI": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "URI") ? undefined : json["URI"],
        "kind": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "kind") ? undefined : json["kind"],
        "format": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "format") ? undefined : json["format"],
        "height": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "height") ? undefined : json["height"],
        "width": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "width") ? undefined : json["width"],
        "duration": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "duration") ? undefined : json["duration"]
    };
}
function $b9a2da77dd13a8d2$export$af32baf0954631b6(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "URI": value.uRI,
        "kind": value.kind,
        "format": value.format,
        "height": value.height,
        "width": value.width,
        "duration": value.duration
    };
}



var $3faeb2a355badc16$exports = {};

$parcel$export($3faeb2a355badc16$exports, "NonFungibleTokenDurabilityEnum", () => $3faeb2a355badc16$export$8bda49b5bb4da43a);
$parcel$export($3faeb2a355badc16$exports, "instanceOfNonFungibleToken", () => $3faeb2a355badc16$export$c8d66b3f0d45535b);
$parcel$export($3faeb2a355badc16$exports, "NonFungibleTokenFromJSON", () => $3faeb2a355badc16$export$57a9b9f787fb400);
$parcel$export($3faeb2a355badc16$exports, "NonFungibleTokenFromJSONTyped", () => $3faeb2a355badc16$export$fd2283a2bb0f7622);
$parcel$export($3faeb2a355badc16$exports, "NonFungibleTokenToJSON", () => $3faeb2a355badc16$export$ad73952bfbf414cc);




var $129da4fa2f54b7c1$exports = {};

$parcel$export($129da4fa2f54b7c1$exports, "instanceOfTokenAttribute", () => $129da4fa2f54b7c1$export$477fa350d2698475);
$parcel$export($129da4fa2f54b7c1$exports, "TokenAttributeFromJSON", () => $129da4fa2f54b7c1$export$79fa8ee456ad0727);
$parcel$export($129da4fa2f54b7c1$exports, "TokenAttributeFromJSONTyped", () => $129da4fa2f54b7c1$export$f1da625bda88a69f);
$parcel$export($129da4fa2f54b7c1$exports, "TokenAttributeToJSON", () => $129da4fa2f54b7c1$export$9c9e3c4249135b8d);

function $129da4fa2f54b7c1$export$477fa350d2698475(value) {
    let isInstance = true;
    return isInstance;
}
function $129da4fa2f54b7c1$export$79fa8ee456ad0727(json) {
    return $129da4fa2f54b7c1$export$f1da625bda88a69f(json, false);
}
function $129da4fa2f54b7c1$export$f1da625bda88a69f(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "traitType": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "traitType") ? undefined : json["traitType"],
        "value": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "value") ? undefined : json["value"]
    };
}
function $129da4fa2f54b7c1$export$9c9e3c4249135b8d(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "traitType": value.traitType,
        "value": value.value
    };
}


var $7f6b4524151e4eff$exports = {};

$parcel$export($7f6b4524151e4eff$exports, "instanceOfTransaction", () => $7f6b4524151e4eff$export$d16c5a2c25de2ce1);
$parcel$export($7f6b4524151e4eff$exports, "TransactionFromJSON", () => $7f6b4524151e4eff$export$1ccdf69c056a0135);
$parcel$export($7f6b4524151e4eff$exports, "TransactionFromJSONTyped", () => $7f6b4524151e4eff$export$bc6b775167f08d3f);
$parcel$export($7f6b4524151e4eff$exports, "TransactionToJSON", () => $7f6b4524151e4eff$export$2dc94d84cedac603);


var $49c47d63cd54f1c8$exports = {};

$parcel$export($49c47d63cd54f1c8$exports, "instanceOfTransactionLogLine", () => $49c47d63cd54f1c8$export$5d26387ba8b43c46);
$parcel$export($49c47d63cd54f1c8$exports, "TransactionLogLineFromJSON", () => $49c47d63cd54f1c8$export$5997e08a62f7a8d2);
$parcel$export($49c47d63cd54f1c8$exports, "TransactionLogLineFromJSONTyped", () => $49c47d63cd54f1c8$export$fcd6230362062e71);
$parcel$export($49c47d63cd54f1c8$exports, "TransactionLogLineToJSON", () => $49c47d63cd54f1c8$export$5905eadcf1f93bde);


function $49c47d63cd54f1c8$export$5d26387ba8b43c46(value) {
    let isInstance = true;
    return isInstance;
}
function $49c47d63cd54f1c8$export$5997e08a62f7a8d2(json) {
    return $49c47d63cd54f1c8$export$fcd6230362062e71(json, false);
}
function $49c47d63cd54f1c8$export$fcd6230362062e71(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "burned": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "burned") ? undefined : json["burned"],
        "mint": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "mint") ? undefined : json["mint"],
        "logIndex": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "logIndex") ? undefined : json["logIndex"],
        "fromAddress": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "fromAddress") ? undefined : json["fromAddress"],
        "toAddress": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "toAddress") ? undefined : json["toAddress"],
        "price": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "price") ? undefined : (0, $bd9a2133bfc7a0a3$export$3be8521ceda13a3f)(json["price"])
    };
}
function $49c47d63cd54f1c8$export$5905eadcf1f93bde(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "burned": value.burned,
        "mint": value.mint,
        "logIndex": value.logIndex,
        "fromAddress": value.fromAddress,
        "toAddress": value.toAddress,
        "price": (0, $bd9a2133bfc7a0a3$export$dccf41d3d1268ae8)(value.price)
    };
}


function $7f6b4524151e4eff$export$d16c5a2c25de2ce1(value) {
    let isInstance = true;
    return isInstance;
}
function $7f6b4524151e4eff$export$1ccdf69c056a0135(json) {
    return $7f6b4524151e4eff$export$bc6b775167f08d3f(json, false);
}
function $7f6b4524151e4eff$export$bc6b775167f08d3f(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "blockNumber": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "blockNumber") ? undefined : json["blockNumber"],
        "transactionIndex": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "transactionIndex") ? undefined : json["transactionIndex"],
        "gasFee": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "gasFee") ? undefined : (0, $bd9a2133bfc7a0a3$export$3be8521ceda13a3f)(json["gasFee"]),
        "timestamp": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "timestamp") ? undefined : json["timestamp"] === null ? null : new Date(json["timestamp"]),
        "logLine": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "logLine") ? undefined : json["logLine"].map((0, $49c47d63cd54f1c8$export$5997e08a62f7a8d2))
    };
}
function $7f6b4524151e4eff$export$2dc94d84cedac603(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "blockNumber": value.blockNumber,
        "transactionIndex": value.transactionIndex,
        "gasFee": (0, $bd9a2133bfc7a0a3$export$dccf41d3d1268ae8)(value.gasFee),
        "timestamp": value.timestamp === undefined ? undefined : value.timestamp === null ? null : value.timestamp.toISOString(),
        "logLine": value.logLine === undefined ? undefined : value.logLine.map((0, $49c47d63cd54f1c8$export$5905eadcf1f93bde))
    };
}


var $a2ae32d285c59b25$exports = {};

$parcel$export($a2ae32d285c59b25$exports, "instanceOfWallet", () => $a2ae32d285c59b25$export$455da094a0e1e2d9);
$parcel$export($a2ae32d285c59b25$exports, "WalletFromJSON", () => $a2ae32d285c59b25$export$dc4b5786640f97da);
$parcel$export($a2ae32d285c59b25$exports, "WalletFromJSONTyped", () => $a2ae32d285c59b25$export$fa8f60b2a746584a);
$parcel$export($a2ae32d285c59b25$exports, "WalletToJSON", () => $a2ae32d285c59b25$export$c69bd2ae2f7a0017);



var $83a07ce77929802d$exports = {};

$parcel$export($83a07ce77929802d$exports, "instanceOfOwnedCollection", () => $83a07ce77929802d$export$f54dc1b6636d15bb);
$parcel$export($83a07ce77929802d$exports, "OwnedCollectionFromJSON", () => $83a07ce77929802d$export$fcfe028fc4eae377);
$parcel$export($83a07ce77929802d$exports, "OwnedCollectionFromJSONTyped", () => $83a07ce77929802d$export$336030d0bb115f9d);
$parcel$export($83a07ce77929802d$exports, "OwnedCollectionToJSON", () => $83a07ce77929802d$export$ec9951def1967ee2);



var $beeb3f9fcf233600$exports = {};

$parcel$export($beeb3f9fcf233600$exports, "instanceOfToken", () => $beeb3f9fcf233600$export$8eea080c17fc4347);
$parcel$export($beeb3f9fcf233600$exports, "TokenFromJSON", () => $beeb3f9fcf233600$export$e68a1cb72d1c78e5);
$parcel$export($beeb3f9fcf233600$exports, "TokenFromJSONTyped", () => $beeb3f9fcf233600$export$1a171d79d6490cbc);
$parcel$export($beeb3f9fcf233600$exports, "TokenToJSON", () => $beeb3f9fcf233600$export$a821ee4729bf96d7);



var $890a5c3283f7190c$exports = {};

$parcel$export($890a5c3283f7190c$exports, "OpenSeaContractAssetContractTypeEnum", () => $890a5c3283f7190c$export$4c1d1606403f9f77);
$parcel$export($890a5c3283f7190c$exports, "instanceOfOpenSeaContract", () => $890a5c3283f7190c$export$269a49b03b682e17);
$parcel$export($890a5c3283f7190c$exports, "OpenSeaContractFromJSON", () => $890a5c3283f7190c$export$f8f4cae7f66e01f8);
$parcel$export($890a5c3283f7190c$exports, "OpenSeaContractFromJSONTyped", () => $890a5c3283f7190c$export$e4acb6384a5da91a);
$parcel$export($890a5c3283f7190c$exports, "OpenSeaContractToJSON", () => $890a5c3283f7190c$export$9be7b43a5d9a7137);

const $890a5c3283f7190c$export$4c1d1606403f9f77 = {
    Nft: "NFT",
    Sft: "SFT",
    Unknown: "unknown"
};
function $890a5c3283f7190c$export$269a49b03b682e17(value) {
    let isInstance = true;
    return isInstance;
}
function $890a5c3283f7190c$export$f8f4cae7f66e01f8(json) {
    return $890a5c3283f7190c$export$e4acb6384a5da91a(json, false);
}
function $890a5c3283f7190c$export$e4acb6384a5da91a(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "assetContractType": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "assetContractType") ? undefined : json["assetContractType"],
        "nftVersion": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "nftVersion") ? undefined : json["nftVersion"],
        "openSeaVersion": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "openSeaVersion") ? undefined : json["openSeaVersion"],
        "defaultToFiat": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "defaultToFiat") ? undefined : json["defaultToFiat"],
        "buyerFeeBasisPoints": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "buyerFeeBasisPoints") ? undefined : json["buyerFeeBasisPoints"],
        "sellerFeeBasisPoints": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "sellerFeeBasisPoints") ? undefined : json["sellerFeeBasisPoints"]
    };
}
function $890a5c3283f7190c$export$9be7b43a5d9a7137(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "assetContractType": value.assetContractType,
        "nftVersion": value.nftVersion,
        "openSeaVersion": value.openSeaVersion,
        "defaultToFiat": value.defaultToFiat,
        "buyerFeeBasisPoints": value.buyerFeeBasisPoints,
        "sellerFeeBasisPoints": value.sellerFeeBasisPoints
    };
}


function $beeb3f9fcf233600$export$8eea080c17fc4347(value) {
    let isInstance = true;
    isInstance = isInstance && "blockchain" in value;
    isInstance = isInstance && "contractAddress" in value;
    return isInstance;
}
function $beeb3f9fcf233600$export$e68a1cb72d1c78e5(json) {
    return $beeb3f9fcf233600$export$1a171d79d6490cbc(json, false);
}
function $beeb3f9fcf233600$export$1a171d79d6490cbc(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "blockchain": (0, $cf32f33cd806bfca$export$cb03894d4c7ec6eb)(json["blockchain"]),
        "contractAddress": json["contractAddress"],
        "tokenStandard": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "tokenStandard") ? undefined : json["tokenStandard"],
        "symbol": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "symbol") ? undefined : json["symbol"],
        "nft": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "nft") ? undefined : (0, $3faeb2a355badc16$export$57a9b9f787fb400)(json["nft"]),
        "openSeaContract": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "openSeaContract") ? undefined : (0, $890a5c3283f7190c$export$f8f4cae7f66e01f8)(json["openSeaContract"])
    };
}
function $beeb3f9fcf233600$export$a821ee4729bf96d7(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "blockchain": (0, $cf32f33cd806bfca$export$f2452109e1b1482e)(value.blockchain),
        "contractAddress": value.contractAddress,
        "tokenStandard": value.tokenStandard,
        "symbol": value.symbol,
        "nft": (0, $3faeb2a355badc16$export$ad73952bfbf414cc)(value.nft),
        "openSeaContract": (0, $890a5c3283f7190c$export$9be7b43a5d9a7137)(value.openSeaContract)
    };
}


function $83a07ce77929802d$export$f54dc1b6636d15bb(value) {
    let isInstance = true;
    return isInstance;
}
function $83a07ce77929802d$export$fcfe028fc4eae377(json) {
    return $83a07ce77929802d$export$336030d0bb115f9d(json, false);
}
function $83a07ce77929802d$export$336030d0bb115f9d(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "tokens": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "tokens") ? undefined : json["tokens"].map((0, $beeb3f9fcf233600$export$e68a1cb72d1c78e5)),
        "collection": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "collection") ? undefined : (0, $722d10a4900f9e7e$export$734b625bc703c8d8)(json["collection"]),
        "totalSpent": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "totalSpent") ? undefined : (0, $bd9a2133bfc7a0a3$export$3be8521ceda13a3f)(json["totalSpent"])
    };
}
function $83a07ce77929802d$export$ec9951def1967ee2(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "tokens": value.tokens === undefined ? undefined : value.tokens.map((0, $beeb3f9fcf233600$export$a821ee4729bf96d7)),
        "collection": (0, $722d10a4900f9e7e$export$bbb7d36c0301a0bc)(value.collection),
        "totalSpent": (0, $bd9a2133bfc7a0a3$export$dccf41d3d1268ae8)(value.totalSpent)
    };
}





function $a2ae32d285c59b25$export$455da094a0e1e2d9(value) {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    return isInstance;
}
function $a2ae32d285c59b25$export$dc4b5786640f97da(json) {
    return $a2ae32d285c59b25$export$fa8f60b2a746584a(json, false);
}
function $a2ae32d285c59b25$export$fa8f60b2a746584a(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "totalBalance": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "totalBalance") ? undefined : json["totalBalance"].map((0, $bd9a2133bfc7a0a3$export$3be8521ceda13a3f)),
        "balances": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "balances") ? undefined : json["balances"].map((0, $bd9a2133bfc7a0a3$export$3be8521ceda13a3f)),
        "address": json["address"],
        "ens": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "ens") ? undefined : json["ens"].map((0, $cfa4816945e25a59$export$929a75b87723997d)),
        "socialMedia": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "socialMedia") ? undefined : json["socialMedia"].map((0, $e30f32fa1a482821$export$193b6a587abe31bf)),
        "recentTokens": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "recentTokens") ? undefined : json["recentTokens"].map((0, $beeb3f9fcf233600$export$e68a1cb72d1c78e5)),
        "topTokens": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "topTokens") ? undefined : json["topTokens"].map((0, $beeb3f9fcf233600$export$e68a1cb72d1c78e5)),
        "collections": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "collections") ? undefined : json["collections"].map((0, $83a07ce77929802d$export$fcfe028fc4eae377)),
        "history": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "history") ? undefined : json["history"].map((0, $7f6b4524151e4eff$export$1ccdf69c056a0135))
    };
}
function $a2ae32d285c59b25$export$c69bd2ae2f7a0017(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "totalBalance": value.totalBalance === undefined ? undefined : value.totalBalance.map((0, $bd9a2133bfc7a0a3$export$dccf41d3d1268ae8)),
        "balances": value.balances === undefined ? undefined : value.balances.map((0, $bd9a2133bfc7a0a3$export$dccf41d3d1268ae8)),
        "address": value.address,
        "ens": value.ens === undefined ? undefined : value.ens.map((0, $cfa4816945e25a59$export$db58039e68eccc44)),
        "socialMedia": value.socialMedia === undefined ? undefined : value.socialMedia.map((0, $e30f32fa1a482821$export$d5020364e3ca2e67)),
        "recentTokens": value.recentTokens === undefined ? undefined : value.recentTokens.map((0, $beeb3f9fcf233600$export$a821ee4729bf96d7)),
        "topTokens": value.topTokens === undefined ? undefined : value.topTokens.map((0, $beeb3f9fcf233600$export$a821ee4729bf96d7)),
        "collections": value.collections === undefined ? undefined : value.collections.map((0, $83a07ce77929802d$export$ec9951def1967ee2)),
        "history": value.history === undefined ? undefined : value.history.map((0, $7f6b4524151e4eff$export$2dc94d84cedac603))
    };
}


const $3faeb2a355badc16$export$8bda49b5bb4da43a = {
    OnChain: "On-Chain",
    Decentralized: "Decentralized",
    Web: "Web",
    Unknown: "Unknown"
};
function $3faeb2a355badc16$export$c8d66b3f0d45535b(value) {
    let isInstance = true;
    isInstance = isInstance && "tokenID" in value;
    return isInstance;
}
function $3faeb2a355badc16$export$57a9b9f787fb400(json) {
    return $3faeb2a355badc16$export$fd2283a2bb0f7622(json, false);
}
function $3faeb2a355badc16$export$fd2283a2bb0f7622(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "tokenID": json["tokenID"],
        "title": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "title") ? undefined : json["title"],
        "contractTitle": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "contractTitle") ? undefined : json["contractTitle"],
        "description": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "description") ? undefined : json["description"],
        "media": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "media") ? undefined : (0, $9a076396c45cc3c6$export$851a131d23905439)(json["media"]),
        "previews": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "previews") ? undefined : json["previews"].map((0, $b9a2da77dd13a8d2$export$e41f7e55239b361a)),
        "owner": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "owner") ? undefined : (0, $a2ae32d285c59b25$export$dc4b5786640f97da)(json["owner"]),
        "attributes": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "attributes") ? undefined : json["attributes"].map((0, $129da4fa2f54b7c1$export$79fa8ee456ad0727)),
        "collection": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "collection") ? undefined : (0, $722d10a4900f9e7e$export$734b625bc703c8d8)(json["collection"]),
        "purchase": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "purchase") ? undefined : (0, $7f6b4524151e4eff$export$1ccdf69c056a0135)(json["purchase"]),
        "durability": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "durability") ? undefined : json["durability"],
        "projectName": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "projectName") ? undefined : json["projectName"]
    };
}
function $3faeb2a355badc16$export$ad73952bfbf414cc(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "tokenID": value.tokenID,
        "title": value.title,
        "contractTitle": value.contractTitle,
        "description": value.description,
        "media": (0, $9a076396c45cc3c6$export$6894fab0cd718c63)(value.media),
        "previews": value.previews === undefined ? undefined : value.previews.map((0, $b9a2da77dd13a8d2$export$af32baf0954631b6)),
        "owner": (0, $a2ae32d285c59b25$export$c69bd2ae2f7a0017)(value.owner),
        "attributes": value.attributes === undefined ? undefined : value.attributes.map((0, $129da4fa2f54b7c1$export$9c9e3c4249135b8d)),
        "collection": (0, $722d10a4900f9e7e$export$bbb7d36c0301a0bc)(value.collection),
        "purchase": (0, $7f6b4524151e4eff$export$2dc94d84cedac603)(value.purchase),
        "durability": value.durability,
        "projectName": value.projectName
    };
}




var $1d03d262e4cb5274$exports = {};

$parcel$export($1d03d262e4cb5274$exports, "instanceOfSearchDocument", () => $1d03d262e4cb5274$export$41501e9c0dfecfd1);
$parcel$export($1d03d262e4cb5274$exports, "SearchDocumentFromJSON", () => $1d03d262e4cb5274$export$e829c580b0baf29b);
$parcel$export($1d03d262e4cb5274$exports, "SearchDocumentFromJSONTyped", () => $1d03d262e4cb5274$export$440574810916c462);
$parcel$export($1d03d262e4cb5274$exports, "SearchDocumentToJSON", () => $1d03d262e4cb5274$export$7ebb9f542ddd37d7);




function $1d03d262e4cb5274$export$41501e9c0dfecfd1(value) {
    let isInstance = true;
    return isInstance;
}
function $1d03d262e4cb5274$export$e829c580b0baf29b(json) {
    return $1d03d262e4cb5274$export$440574810916c462(json, false);
}
function $1d03d262e4cb5274$export$440574810916c462(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "token": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "token") ? undefined : (0, $beeb3f9fcf233600$export$e68a1cb72d1c78e5)(json["token"]),
        "wallet": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "wallet") ? undefined : (0, $a2ae32d285c59b25$export$dc4b5786640f97da)(json["wallet"]),
        "collection": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "collection") ? undefined : (0, $722d10a4900f9e7e$export$734b625bc703c8d8)(json["collection"])
    };
}
function $1d03d262e4cb5274$export$7ebb9f542ddd37d7(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "token": (0, $beeb3f9fcf233600$export$a821ee4729bf96d7)(value.token),
        "wallet": (0, $a2ae32d285c59b25$export$c69bd2ae2f7a0017)(value.wallet),
        "collection": (0, $722d10a4900f9e7e$export$bbb7d36c0301a0bc)(value.collection)
    };
}





var $2eb87d5c6326fff2$exports = {};

$parcel$export($2eb87d5c6326fff2$exports, "instanceOfTokenEvents", () => $2eb87d5c6326fff2$export$9449e3c2ac8e2625);
$parcel$export($2eb87d5c6326fff2$exports, "TokenEventsFromJSON", () => $2eb87d5c6326fff2$export$54debe019b887d64);
$parcel$export($2eb87d5c6326fff2$exports, "TokenEventsFromJSONTyped", () => $2eb87d5c6326fff2$export$ba5b4294b35c80a9);
$parcel$export($2eb87d5c6326fff2$exports, "TokenEventsToJSON", () => $2eb87d5c6326fff2$export$efa479196d4a1a82);



function $2eb87d5c6326fff2$export$9449e3c2ac8e2625(value) {
    let isInstance = true;
    return isInstance;
}
function $2eb87d5c6326fff2$export$54debe019b887d64(json) {
    return $2eb87d5c6326fff2$export$ba5b4294b35c80a9(json, false);
}
function $2eb87d5c6326fff2$export$ba5b4294b35c80a9(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "token": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "token") ? undefined : json["token"].map((0, $beeb3f9fcf233600$export$e68a1cb72d1c78e5)),
        "events": !(0, $36c67adf4aa8f9ad$export$f7e9f41ea797a17)(json, "events") ? undefined : json["events"].map((0, $7f6b4524151e4eff$export$1ccdf69c056a0135))
    };
}
function $2eb87d5c6326fff2$export$efa479196d4a1a82(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "token": value.token === undefined ? undefined : value.token.map((0, $beeb3f9fcf233600$export$a821ee4729bf96d7)),
        "events": value.events === undefined ? undefined : value.events.map((0, $7f6b4524151e4eff$export$2dc94d84cedac603))
    };
}


var $2acd4d52cc57dd2c$exports = {};

$parcel$export($2acd4d52cc57dd2c$exports, "instanceOfTokenGate", () => $2acd4d52cc57dd2c$export$6d2db17f2da66495);
$parcel$export($2acd4d52cc57dd2c$exports, "TokenGateFromJSON", () => $2acd4d52cc57dd2c$export$cbd7e9dd6667973);
$parcel$export($2acd4d52cc57dd2c$exports, "TokenGateFromJSONTyped", () => $2acd4d52cc57dd2c$export$b2b83d5fc6f0939d);
$parcel$export($2acd4d52cc57dd2c$exports, "TokenGateToJSON", () => $2acd4d52cc57dd2c$export$5743ea6c27f3a7a3);
function $2acd4d52cc57dd2c$export$6d2db17f2da66495(value) {
    let isInstance = true;
    isInstance = isInstance && "hasToken" in value;
    return isInstance;
}
function $2acd4d52cc57dd2c$export$cbd7e9dd6667973(json) {
    return $2acd4d52cc57dd2c$export$b2b83d5fc6f0939d(json, false);
}
function $2acd4d52cc57dd2c$export$b2b83d5fc6f0939d(json, ignoreDiscriminator) {
    if (json === undefined || json === null) return json;
    return {
        "hasToken": json["hasToken"]
    };
}
function $2acd4d52cc57dd2c$export$5743ea6c27f3a7a3(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    return {
        "hasToken": value.hasToken
    };
}






$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $cf32f33cd806bfca$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $722d10a4900f9e7e$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $bd9a2133bfc7a0a3$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $cfa4816945e25a59$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $dc7c14fc7a0281a2$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $9a076396c45cc3c6$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $b9a2da77dd13a8d2$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $c7f9b5972da09ccd$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $3faeb2a355badc16$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $890a5c3283f7190c$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $83a07ce77929802d$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $1d03d262e4cb5274$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $e30f32fa1a482821$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $beeb3f9fcf233600$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $129da4fa2f54b7c1$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $2eb87d5c6326fff2$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $2acd4d52cc57dd2c$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $7f6b4524151e4eff$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $49c47d63cd54f1c8$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $717d1f4e3fed3949$exports);
$parcel$exportWildcard($3282bc8bc7d6c4cc$exports, $a2ae32d285c59b25$exports);


class $8f13224aba1e1546$export$9ff48f746beb7584 extends $36c67adf4aa8f9ad$export$70edad7ad5bb3f5d {
    /**
     * Returns trending and interesting collections on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     */ async getTopCollectionsRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1-alpha/collections/top`,
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $722d10a4900f9e7e$export$734b625bc703c8d8)));
    }
    /**
     * Returns trending and interesting collections on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     */ async getTopCollections(initOverrides) {
        const response = await this.getTopCollectionsRaw(initOverrides);
        return await response.value();
    }
    /**
     * Returns trending and interesting NFTs and SFTs on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     */ async getTopTokensRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1-alpha/tokens/top`,
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $beeb3f9fcf233600$export$e68a1cb72d1c78e5)));
    }
    /**
     * Returns trending and interesting NFTs and SFTs on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     */ async getTopTokens(initOverrides) {
        const response = await this.getTopTokensRaw(initOverrides);
        return await response.value();
    }
    /**
     * Returns trending and interesting wallets on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     */ async getTopWalletsRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1-alpha/wallets/top`,
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $a2ae32d285c59b25$export$dc4b5786640f97da)));
    }
    /**
     * Returns trending and interesting wallets on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     */ async getTopWallets(initOverrides) {
        const response = await this.getTopWalletsRaw(initOverrides);
        return await response.value();
    }
}


var $de0c0c8e9d4a0216$exports = {};

$parcel$export($de0c0c8e9d4a0216$exports, "DefaultApi", () => $de0c0c8e9d4a0216$export$872437fb2a17cd0e);
$parcel$export($de0c0c8e9d4a0216$exports, "GetWalletTransactionsTokenTypeEnum", () => $de0c0c8e9d4a0216$export$361591f137c835d9);


class $de0c0c8e9d4a0216$export$872437fb2a17cd0e extends $36c67adf4aa8f9ad$export$70edad7ad5bb3f5d {
    /**
     * Lists all supported blockchains.
     */ async getBlockchainsRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1/blockchains`,
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $cf32f33cd806bfca$export$cb03894d4c7ec6eb)));
    }
    /**
     * Lists all supported blockchains.
     */ async getBlockchains(initOverrides) {
        const response = await this.getBlockchainsRaw(initOverrides);
        return await response.value();
    }
    /**
     * Get a collection by its contract address.
     */ async getCollectionRaw(requestParameters, initOverrides) {
        if (requestParameters.contractAddress === null || requestParameters.contractAddress === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("contractAddress", "Required parameter requestParameters.contractAddress was null or undefined when calling getCollection.");
        const queryParameters = {};
        if (requestParameters.chainID !== undefined) queryParameters["chainID"] = requestParameters.chainID;
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1/collections/{contractAddress}`.replace(`{${"contractAddress"}}`, encodeURIComponent(String(requestParameters.contractAddress))),
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $722d10a4900f9e7e$export$734b625bc703c8d8)));
    }
    /**
     * Get a collection by its contract address.
     */ async getCollection(requestParameters, initOverrides) {
        const response = await this.getCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Get tokens by contract address.
     */ async getContractTokensRaw(requestParameters, initOverrides) {
        if (requestParameters.contractAddress === null || requestParameters.contractAddress === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("contractAddress", "Required parameter requestParameters.contractAddress was null or undefined when calling getContractTokens.");
        const queryParameters = {};
        if (requestParameters.chainID !== undefined) queryParameters["chainID"] = requestParameters.chainID;
        if (requestParameters.limit !== undefined) queryParameters["limit"] = requestParameters.limit;
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1/tokens/{contractAddress}`.replace(`{${"contractAddress"}}`, encodeURIComponent(String(requestParameters.contractAddress))),
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $beeb3f9fcf233600$export$e68a1cb72d1c78e5)));
    }
    /**
     * Get tokens by contract address.
     */ async getContractTokens(requestParameters, initOverrides) {
        const response = await this.getContractTokensRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Get tokens by a pair of contract addresses and token IDs. The input are two ordered arrays. The first element of contractAddresses should be related to the 1st element of the tokenID, etc. In the below example two tokens are being requested, token 3481 from the \"goblintown\" contract (i.e. 0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e) and token 50603 from the Otherdeed contract (i.e. 0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258).
     */ async getContractTokensByContractAndIDRaw(requestParameters, initOverrides) {
        if (requestParameters.contractAddresses === null || requestParameters.contractAddresses === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("contractAddresses", "Required parameter requestParameters.contractAddresses was null or undefined when calling getContractTokensByContractAndID.");
        if (requestParameters.tokenIdentifiers === null || requestParameters.tokenIdentifiers === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("tokenIdentifiers", "Required parameter requestParameters.tokenIdentifiers was null or undefined when calling getContractTokensByContractAndID.");
        const queryParameters = {};
        if (requestParameters.contractAddresses !== undefined) queryParameters["contractAddresses"] = requestParameters.contractAddresses;
        if (requestParameters.tokenIdentifiers !== undefined) queryParameters["tokenIdentifiers"] = requestParameters.tokenIdentifiers;
        if (requestParameters.chainID !== undefined) queryParameters["chainID"] = requestParameters.chainID;
        if (requestParameters.limit !== undefined) queryParameters["limit"] = requestParameters.limit;
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1/token-batch`,
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $beeb3f9fcf233600$export$e68a1cb72d1c78e5)));
    }
    /**
     * Get tokens by a pair of contract addresses and token IDs. The input are two ordered arrays. The first element of contractAddresses should be related to the 1st element of the tokenID, etc. In the below example two tokens are being requested, token 3481 from the \"goblintown\" contract (i.e. 0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e) and token 50603 from the Otherdeed contract (i.e. 0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258).
     */ async getContractTokensByContractAndID(requestParameters, initOverrides) {
        const response = await this.getContractTokensByContractAndIDRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Get the transaction history for a collection
     */ async getContractTransactionHistoryRaw(requestParameters, initOverrides) {
        if (requestParameters.contractAddress === null || requestParameters.contractAddress === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("contractAddress", "Required parameter requestParameters.contractAddress was null or undefined when calling getContractTransactionHistory.");
        const queryParameters = {};
        if (requestParameters.cursor !== undefined) queryParameters["cursor"] = requestParameters.cursor;
        if (requestParameters.chainID !== undefined) queryParameters["chainID"] = requestParameters.chainID;
        if (requestParameters.limit !== undefined) queryParameters["limit"] = requestParameters.limit;
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1/collections/{contractAddress}/transactions/history`.replace(`{${"contractAddress"}}`, encodeURIComponent(String(requestParameters.contractAddress))),
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $7f6b4524151e4eff$export$1ccdf69c056a0135)));
    }
    /**
     * Get the transaction history for a collection
     */ async getContractTransactionHistory(requestParameters, initOverrides) {
        const response = await this.getContractTransactionHistoryRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Get search results such as wallets, tokens, and collections by a search query.
     */ async getSearchResultsRaw(requestParameters, initOverrides) {
        if (requestParameters.query === null || requestParameters.query === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("query", "Required parameter requestParameters.query was null or undefined when calling getSearchResults.");
        const queryParameters = {};
        if (requestParameters.cursor !== undefined) queryParameters["cursor"] = requestParameters.cursor;
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1/search/{query}`.replace(`{${"query"}}`, encodeURIComponent(String(requestParameters.query))),
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $1d03d262e4cb5274$export$e829c580b0baf29b)));
    }
    /**
     * Get search results such as wallets, tokens, and collections by a search query.
     */ async getSearchResults(requestParameters, initOverrides) {
        const response = await this.getSearchResultsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Returns a list of tokens sold by a wallet.
     */ async getSoldTokensRaw(requestParameters, initOverrides) {
        if (requestParameters.walletAddress === null || requestParameters.walletAddress === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("walletAddress", "Required parameter requestParameters.walletAddress was null or undefined when calling getSoldTokens.");
        const queryParameters = {};
        if (requestParameters.chainID !== undefined) queryParameters["chainID"] = requestParameters.chainID;
        if (requestParameters.cursor !== undefined) queryParameters["cursor"] = requestParameters.cursor;
        if (requestParameters.limit !== undefined) queryParameters["limit"] = requestParameters.limit;
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1/wallets/{walletAddress}/sold-tokens`.replace(`{${"walletAddress"}}`, encodeURIComponent(String(requestParameters.walletAddress))),
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $beeb3f9fcf233600$export$e68a1cb72d1c78e5)));
    }
    /**
     * Returns a list of tokens sold by a wallet.
     */ async getSoldTokens(requestParameters, initOverrides) {
        const response = await this.getSoldTokensRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Get a token by its contract address and token ID.
     */ async getTokenRaw(requestParameters, initOverrides) {
        if (requestParameters.contractAddress === null || requestParameters.contractAddress === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("contractAddress", "Required parameter requestParameters.contractAddress was null or undefined when calling getToken.");
        if (requestParameters.tokenID === null || requestParameters.tokenID === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("tokenID", "Required parameter requestParameters.tokenID was null or undefined when calling getToken.");
        const queryParameters = {};
        if (requestParameters.chainID !== undefined) queryParameters["chainID"] = requestParameters.chainID;
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1/tokens/{contractAddress}/{tokenID}`.replace(`{${"contractAddress"}}`, encodeURIComponent(String(requestParameters.contractAddress))).replace(`{${"tokenID"}}`, encodeURIComponent(String(requestParameters.tokenID))),
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $beeb3f9fcf233600$export$e68a1cb72d1c78e5)));
    }
    /**
     * Get a token by its contract address and token ID.
     */ async getToken(requestParameters, initOverrides) {
        const response = await this.getTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Determine if a wallet has a given token from a contract.
     */ async getTokenGateRaw(requestParameters, initOverrides) {
        if (requestParameters.tokenID === null || requestParameters.tokenID === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("tokenID", "Required parameter requestParameters.tokenID was null or undefined when calling getTokenGate.");
        if (requestParameters.contractAddress === null || requestParameters.contractAddress === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("contractAddress", "Required parameter requestParameters.contractAddress was null or undefined when calling getTokenGate.");
        if (requestParameters.walletAddress === null || requestParameters.walletAddress === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("walletAddress", "Required parameter requestParameters.walletAddress was null or undefined when calling getTokenGate.");
        const queryParameters = {};
        if (requestParameters.chainID !== undefined) queryParameters["chainID"] = requestParameters.chainID;
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1/wallets/{walletAddress}/gate/{contractAddress}/{tokenID}`.replace(`{${"tokenID"}}`, encodeURIComponent(String(requestParameters.tokenID))).replace(`{${"contractAddress"}}`, encodeURIComponent(String(requestParameters.contractAddress))).replace(`{${"walletAddress"}}`, encodeURIComponent(String(requestParameters.walletAddress))),
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>(0, $2acd4d52cc57dd2c$export$cbd7e9dd6667973)(jsonValue));
    }
    /**
     * Determine if a wallet has a given token from a contract.
     */ async getTokenGate(requestParameters, initOverrides) {
        const response = await this.getTokenGateRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Returns a list of transfer transactions on a specified token.
     */ async getTokenTransfersRaw(requestParameters, initOverrides) {
        if (requestParameters.contractAddress === null || requestParameters.contractAddress === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("contractAddress", "Required parameter requestParameters.contractAddress was null or undefined when calling getTokenTransfers.");
        if (requestParameters.tokenID === null || requestParameters.tokenID === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("tokenID", "Required parameter requestParameters.tokenID was null or undefined when calling getTokenTransfers.");
        const queryParameters = {};
        if (requestParameters.chainID !== undefined) queryParameters["chainID"] = requestParameters.chainID;
        if (requestParameters.limit !== undefined) queryParameters["limit"] = requestParameters.limit;
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1/tokens/{contractAddress}/{tokenID}/transfers`.replace(`{${"contractAddress"}}`, encodeURIComponent(String(requestParameters.contractAddress))).replace(`{${"tokenID"}}`, encodeURIComponent(String(requestParameters.tokenID))),
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>(0, $2eb87d5c6326fff2$export$54debe019b887d64)(jsonValue));
    }
    /**
     * Returns a list of transfer transactions on a specified token.
     */ async getTokenTransfers(requestParameters, initOverrides) {
        const response = await this.getTokenTransfersRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Get tokens by a search query.
     */ async getTokensBySearchQueryRaw(requestParameters, initOverrides) {
        if (requestParameters.query === null || requestParameters.query === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("query", "Required parameter requestParameters.query was null or undefined when calling getTokensBySearchQuery.");
        const queryParameters = {};
        if (requestParameters.cursor !== undefined) queryParameters["cursor"] = requestParameters.cursor;
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1/tokens/search/{query}`.replace(`{${"query"}}`, encodeURIComponent(String(requestParameters.query))),
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $beeb3f9fcf233600$export$e68a1cb72d1c78e5)));
    }
    /**
     * Get tokens by a search query.
     */ async getTokensBySearchQuery(requestParameters, initOverrides) {
        const response = await this.getTokensBySearchQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Get a wallet by a wallet address
     */ async getWalletRaw(requestParameters, initOverrides) {
        if (requestParameters.walletAddress === null || requestParameters.walletAddress === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("walletAddress", "Required parameter requestParameters.walletAddress was null or undefined when calling getWallet.");
        const queryParameters = {};
        if (requestParameters.chainID !== undefined) queryParameters["chainID"] = requestParameters.chainID;
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1/wallets/{walletAddress}`.replace(`{${"walletAddress"}}`, encodeURIComponent(String(requestParameters.walletAddress))),
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $a2ae32d285c59b25$export$dc4b5786640f97da)));
    }
    /**
     * Get a wallet by a wallet address
     */ async getWallet(requestParameters, initOverrides) {
        const response = await this.getWalletRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Returns a list of balances for tokens this wallet currently owns.
     */ async getWalletBalancesRaw(requestParameters, initOverrides) {
        if (requestParameters.walletAddress === null || requestParameters.walletAddress === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("walletAddress", "Required parameter requestParameters.walletAddress was null or undefined when calling getWalletBalances.");
        const queryParameters = {};
        if (requestParameters.limit !== undefined) queryParameters["limit"] = requestParameters.limit;
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1/wallets/{walletAddress}/balances`.replace(`{${"walletAddress"}}`, encodeURIComponent(String(requestParameters.walletAddress))),
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $bd9a2133bfc7a0a3$export$3be8521ceda13a3f)));
    }
    /**
     * Returns a list of balances for tokens this wallet currently owns.
     */ async getWalletBalances(requestParameters, initOverrides) {
        const response = await this.getWalletBalancesRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Returns a list of tokens minted by a wallet.
     */ async getWalletMintsRaw(requestParameters, initOverrides) {
        if (requestParameters.walletAddress === null || requestParameters.walletAddress === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("walletAddress", "Required parameter requestParameters.walletAddress was null or undefined when calling getWalletMints.");
        const queryParameters = {};
        if (requestParameters.chainID !== undefined) queryParameters["chainID"] = requestParameters.chainID;
        if (requestParameters.cursor !== undefined) queryParameters["cursor"] = requestParameters.cursor;
        if (requestParameters.limit !== undefined) queryParameters["limit"] = requestParameters.limit;
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1/wallets/{walletAddress}/mints`.replace(`{${"walletAddress"}}`, encodeURIComponent(String(requestParameters.walletAddress))),
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $beeb3f9fcf233600$export$e68a1cb72d1c78e5)));
    }
    /**
     * Returns a list of tokens minted by a wallet.
     */ async getWalletMints(requestParameters, initOverrides) {
        const response = await this.getWalletMintsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Returns a list of tokens owned by a wallet.
     */ async getWalletTokensRaw(requestParameters, initOverrides) {
        if (requestParameters.walletAddress === null || requestParameters.walletAddress === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("walletAddress", "Required parameter requestParameters.walletAddress was null or undefined when calling getWalletTokens.");
        const queryParameters = {};
        if (requestParameters.cursor !== undefined) queryParameters["cursor"] = requestParameters.cursor;
        if (requestParameters.chainID !== undefined) queryParameters["chainID"] = requestParameters.chainID;
        if (requestParameters.limit !== undefined) queryParameters["limit"] = requestParameters.limit;
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1/wallets/{walletAddress}/tokens`.replace(`{${"walletAddress"}}`, encodeURIComponent(String(requestParameters.walletAddress))),
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $beeb3f9fcf233600$export$e68a1cb72d1c78e5)));
    }
    /**
     * Returns a list of tokens owned by a wallet.
     */ async getWalletTokens(requestParameters, initOverrides) {
        const response = await this.getWalletTokensRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Returns a list of transactions that have been performed by this wallet. Use token type to restrict to only certain transactions, such as NFTs
     */ async getWalletTransactionsRaw(requestParameters, initOverrides) {
        if (requestParameters.walletAddress === null || requestParameters.walletAddress === undefined) throw new $36c67adf4aa8f9ad$export$a27bea7cdb975d70("walletAddress", "Required parameter requestParameters.walletAddress was null or undefined when calling getWalletTransactions.");
        const queryParameters = {};
        if (requestParameters.cursor !== undefined) queryParameters["cursor"] = requestParameters.cursor;
        if (requestParameters.limit !== undefined) queryParameters["limit"] = requestParameters.limit;
        if (requestParameters.chainID !== undefined) queryParameters["chainID"] = requestParameters.chainID;
        if (requestParameters.tokenType !== undefined) queryParameters["tokenType"] = requestParameters.tokenType;
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) queryParameters["apikey"] = this.configuration.apiKey("apikey"); // apikey authentication
        const response = await this.request({
            path: `/api/v1/wallets/{walletAddress}/transactions/history`.replace(`{${"walletAddress"}}`, encodeURIComponent(String(requestParameters.walletAddress))),
            method: "GET",
            headers: headerParameters,
            query: queryParameters
        }, initOverrides);
        return new $36c67adf4aa8f9ad$export$9a41a2c2c33dd8d4(response, (jsonValue)=>jsonValue.map((0, $7f6b4524151e4eff$export$1ccdf69c056a0135)));
    }
    /**
     * Returns a list of transactions that have been performed by this wallet. Use token type to restrict to only certain transactions, such as NFTs
     */ async getWalletTransactions(requestParameters, initOverrides) {
        const response = await this.getWalletTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
const $de0c0c8e9d4a0216$export$361591f137c835d9 = {
    Nft: "NFT",
    Sft: "SFT",
    Unknown: "unknown"
};


$parcel$exportWildcard($ae7ad7cc2eebe26e$exports, $8f13224aba1e1546$exports);
$parcel$exportWildcard($ae7ad7cc2eebe26e$exports, $de0c0c8e9d4a0216$exports);



$parcel$exportWildcard(module.exports, $36c67adf4aa8f9ad$exports);
$parcel$exportWildcard(module.exports, $ae7ad7cc2eebe26e$exports);
$parcel$exportWildcard(module.exports, $3282bc8bc7d6c4cc$exports);


//# sourceMappingURL=index.js.map
