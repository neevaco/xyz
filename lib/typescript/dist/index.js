import $hCgyA$urlparse from "url-parse";
import "whatwg-fetch";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
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
var $2054034d901ee7cb$exports = {};

$parcel$export($2054034d901ee7cb$exports, "HttpMethod", () => $2054034d901ee7cb$export$8343e6f32f5246de);
$parcel$export($2054034d901ee7cb$exports, "HttpException", () => $2054034d901ee7cb$export$d5dc6a7bc778a961);
$parcel$export($2054034d901ee7cb$exports, "RequestContext", () => $2054034d901ee7cb$export$5df49ba75ba1c1f9);
$parcel$export($2054034d901ee7cb$exports, "SelfDecodingBody", () => $2054034d901ee7cb$export$215c9c887406d98d);
$parcel$export($2054034d901ee7cb$exports, "ResponseContext", () => $2054034d901ee7cb$export$572398fa513d4c94);
$parcel$export($2054034d901ee7cb$exports, "wrapHttpLibrary", () => $2054034d901ee7cb$export$a384d32803e3e9b8);

class $5d5e5e9ce1041504$export$77cea355fa80b5f4 {
    constructor(promise){
        this.promise = promise;
    }
    toPromise() {
        return this.promise;
    }
    pipe(callback) {
        return new $5d5e5e9ce1041504$export$77cea355fa80b5f4(this.promise.then(callback));
    }
}
function $5d5e5e9ce1041504$export$6788812c4e6611e6(promise) {
    return new $5d5e5e9ce1041504$export$77cea355fa80b5f4(promise);
}
function $5d5e5e9ce1041504$export$ba255e9e49e00608(value) {
    return new $5d5e5e9ce1041504$export$77cea355fa80b5f4(Promise.resolve(value));
}
function $5d5e5e9ce1041504$export$6b9f6c0d32c093f9(callback) {
    return (value)=>callback(value).toPromise();
}
function $5d5e5e9ce1041504$export$871de8747c9eaa88(callback) {
    return callback;
}


var $7ec076538b6aea73$exports = {};

$parcel$export($7ec076538b6aea73$exports, "IsomorphicFetchHttpLibrary", () => $7ec076538b6aea73$export$21faa149db867f8a);



class $7ec076538b6aea73$export$21faa149db867f8a {
    send(request) {
        let method = request.getHttpMethod().toString();
        let body = request.getBody();
        const resultPromise = fetch(request.getUrl(), {
            method: method,
            body: body,
            headers: request.getHeaders(),
            credentials: "same-origin"
        }).then((resp)=>{
            const headers = {};
            resp.headers.forEach((value, name)=>{
                headers[name] = value;
            });
            const body = {
                text: ()=>resp.text(),
                binary: ()=>resp.blob()
            };
            return new (0, $2054034d901ee7cb$export$572398fa513d4c94)(resp.status, headers, body);
        });
        return (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(resultPromise);
    }
}


let $2054034d901ee7cb$export$8343e6f32f5246de;
(function(HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["HEAD"] = "HEAD";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["CONNECT"] = "CONNECT";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["TRACE"] = "TRACE";
    HttpMethod["PATCH"] = "PATCH";
})($2054034d901ee7cb$export$8343e6f32f5246de || ($2054034d901ee7cb$export$8343e6f32f5246de = {}));
class $2054034d901ee7cb$export$d5dc6a7bc778a961 extends Error {
    constructor(msg){
        super(msg);
    }
}
class $2054034d901ee7cb$export$5df49ba75ba1c1f9 {
    /**
     * Creates the request context using a http method and request resource url
     *
     * @param url url of the requested resource
     * @param httpMethod http method
     */ constructor(url, httpMethod){
        this.httpMethod = httpMethod;
        this.headers = {};
        this.body = undefined;
        this.url = new (0, $hCgyA$urlparse)(url, true);
    }
    /*
     * Returns the url set in the constructor including the query string
     *
     */ getUrl() {
        return this.url.toString();
    }
    /**
     * Replaces the url set in the constructor with this url.
     *
     */ setUrl(url) {
        this.url = new (0, $hCgyA$urlparse)(url, true);
    }
    /**
     * Sets the body of the http request either as a string or FormData
     *
     * Note that setting a body on a HTTP GET, HEAD, DELETE, CONNECT or TRACE
     * request is discouraged.
     * https://httpwg.org/http-core/draft-ietf-httpbis-semantics-latest.html#rfc.section.7.3.1
     *
     * @param body the body of the request
     */ setBody(body) {
        this.body = body;
    }
    getHttpMethod() {
        return this.httpMethod;
    }
    getHeaders() {
        return this.headers;
    }
    getBody() {
        return this.body;
    }
    setQueryParam(name, value) {
        let queryObj = this.url.query;
        queryObj[name] = value;
        this.url.set("query", queryObj);
    }
    /**
     * Sets a cookie with the name and value. NO check  for duplicate cookies is performed
     *
     */ addCookie(name, value) {
        if (!this.headers["Cookie"]) this.headers["Cookie"] = "";
        this.headers["Cookie"] += name + "=" + value + "; ";
    }
    setHeaderParam(key, value) {
        this.headers[key] = value;
    }
}
class $2054034d901ee7cb$export$215c9c887406d98d {
    constructor(dataSource){
        this.dataSource = dataSource;
    }
    binary() {
        return this.dataSource;
    }
    async text() {
        const data = await this.dataSource;
        // @ts-ignore
        if (data.text) // @ts-ignore
        return data.text();
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.addEventListener("load", ()=>resolve(reader.result));
            reader.addEventListener("error", ()=>reject(reader.error));
            reader.readAsText(data);
        });
    }
}
class $2054034d901ee7cb$export$572398fa513d4c94 {
    constructor(httpStatusCode, headers, body){
        this.httpStatusCode = httpStatusCode;
        this.headers = headers;
        this.body = body;
    }
    /**
     * Parse header value in the form `value; param1="value1"`
     *
     * E.g. for Content-Type or Content-Disposition
     * Parameter names are converted to lower case
     * The first parameter is returned with the key `""`
     */ getParsedHeader(headerName) {
        const result = {};
        if (!this.headers[headerName]) return result;
        const parameters = this.headers[headerName].split(";");
        for (const parameter of parameters){
            let [key, value] = parameter.split("=", 2);
            key = key.toLowerCase().trim();
            if (value === undefined) result[""] = key;
            else {
                value = value.trim();
                if (value.startsWith('"') && value.endsWith('"')) value = value.substring(1, value.length - 1);
                result[key] = value;
            }
        }
        return result;
    }
    async getBodyAsFile() {
        const data = await this.body.binary();
        const fileName = this.getParsedHeader("content-disposition")["filename"] || "";
        const contentType = this.headers["content-type"] || "";
        try {
            return new File([
                data
            ], fileName, {
                type: contentType
            });
        } catch (error) {
            /** Fallback for when the File constructor is not available */ return Object.assign(data, {
                name: fileName,
                type: contentType
            });
        }
    }
    /**
     * Use a heuristic to get a body of unknown data structure.
     * Return as string if possible, otherwise as binary.
     */ getBodyAsAny() {
        try {
            return this.body.text();
        } catch  {}
        try {
            return this.body.binary();
        } catch  {}
        return Promise.resolve(undefined);
    }
}
function $2054034d901ee7cb$export$a384d32803e3e9b8(promiseHttpLibrary) {
    return {
        send (request) {
            return (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(promiseHttpLibrary.send(request));
        }
    };
}
$parcel$exportWildcard($2054034d901ee7cb$exports, $7ec076538b6aea73$exports);


var $65d75a106ccf214f$exports = {};

$parcel$export($65d75a106ccf214f$exports, "ApikeyAuthentication", () => $65d75a106ccf214f$export$92f32a979abdeed2);
$parcel$export($65d75a106ccf214f$exports, "configureAuthMethods", () => $65d75a106ccf214f$export$e978e3a6f405f991);
class $65d75a106ccf214f$export$92f32a979abdeed2 {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */ constructor(apiKey){
        this.apiKey = apiKey;
    }
    getName() {
        return "apikey";
    }
    applySecurityAuthentication(context) {
        context.setQueryParam("apikey", this.apiKey);
    }
}
function $65d75a106ccf214f$export$e978e3a6f405f991(config) {
    let authMethods = {};
    if (!config) return authMethods;
    authMethods["default"] = config["default"];
    if (config["apikey"]) authMethods["apikey"] = new $65d75a106ccf214f$export$92f32a979abdeed2(config["apikey"]);
    return authMethods;
}


var $631b122297bb6aaf$exports = {};
var $c492fa7dca7a7f17$exports = {};

$parcel$export($c492fa7dca7a7f17$exports, "AssetGate", () => $c492fa7dca7a7f17$export$bbe47d7715ae7ea2);
class $c492fa7dca7a7f17$export$bbe47d7715ae7ea2 {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "hasContract",
            "baseName": "hasContract",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasToken",
            "baseName": "hasToken",
            "type": "boolean",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $c492fa7dca7a7f17$export$bbe47d7715ae7ea2.attributeTypeMap;
    }
    constructor(){}
}


var $d88b607011ab15bf$exports = {};

$parcel$export($d88b607011ab15bf$exports, "AutoSuggestion", () => $d88b607011ab15bf$export$14bd3dc13236b3f1);
class $d88b607011ab15bf$export$14bd3dc13236b3f1 {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "previews",
            "baseName": "previews",
            "type": "Array<MediaPreview>",
            "format": ""
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenID",
            "baseName": "tokenID",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AutoSuggestionTypeEnum",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $d88b607011ab15bf$export$14bd3dc13236b3f1.attributeTypeMap;
    }
    constructor(){}
}


var $0152cf5e29389ba6$exports = {};

$parcel$export($0152cf5e29389ba6$exports, "BlockchainInfo", () => $0152cf5e29389ba6$export$ec095bc1a0e9dc00);
class $0152cf5e29389ba6$export$ec095bc1a0e9dc00 {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "chainID",
            "baseName": "chainID",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortChainID",
            "baseName": "shortChainID",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortName",
            "baseName": "shortName",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $0152cf5e29389ba6$export$ec095bc1a0e9dc00.attributeTypeMap;
    }
    constructor(){}
}


var $539ff86f4a8bab6c$exports = {};

$parcel$export($539ff86f4a8bab6c$exports, "Collection", () => $539ff86f4a8bab6c$export$fb8073518f34e6ec);
class $539ff86f4a8bab6c$export$fb8073518f34e6ec {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "bannerImage",
            "baseName": "bannerImage",
            "type": "Media",
            "format": ""
        },
        {
            "name": "blockchain",
            "baseName": "blockchain",
            "type": "BlockchainInfo",
            "format": ""
        },
        {
            "name": "contractAddress",
            "baseName": "contractAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "featuredImage",
            "baseName": "featuredImage",
            "type": "Media",
            "format": ""
        },
        {
            "name": "floorPrice",
            "baseName": "floorPrice",
            "type": "CurrencyInfo",
            "format": ""
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "logoImage",
            "baseName": "logoImage",
            "type": "Media",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "openSeaCollectionVerified",
            "baseName": "openSeaCollectionVerified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "shortDescription",
            "baseName": "shortDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "slug",
            "baseName": "slug",
            "type": "string",
            "format": ""
        },
        {
            "name": "socialMedia",
            "baseName": "socialMedia",
            "type": "Array<SocialMedia>",
            "format": ""
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalSupply",
            "baseName": "totalSupply",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "urls",
            "baseName": "urls",
            "type": "Array<URL>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $539ff86f4a8bab6c$export$fb8073518f34e6ec.attributeTypeMap;
    }
    constructor(){}
}


var $cc8046c1fd9a5ab5$exports = {};

$parcel$export($cc8046c1fd9a5ab5$exports, "CreditEvent", () => $cc8046c1fd9a5ab5$export$97f37e2f86888b8c);
class $cc8046c1fd9a5ab5$export$97f37e2f86888b8c {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "event",
            "baseName": "event",
            "type": "CreditEventEventEnum",
            "format": ""
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $cc8046c1fd9a5ab5$export$97f37e2f86888b8c.attributeTypeMap;
    }
    constructor(){}
}


var $58b8e637d75c9175$exports = {};

$parcel$export($58b8e637d75c9175$exports, "CurrencyInfo", () => $58b8e637d75c9175$export$1c8dced55726649b);
class $58b8e637d75c9175$export$1c8dced55726649b {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "contractAddress",
            "baseName": "contractAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "decimals",
            "baseName": "decimals",
            "type": "number",
            "format": ""
        },
        {
            "name": "fiat",
            "baseName": "fiat",
            "type": "Array<CurrencyInfo>",
            "format": ""
        },
        {
            "name": "historicalFiat",
            "baseName": "historicalFiat",
            "type": "Array<CurrencyInfo>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "pretty",
            "baseName": "pretty",
            "type": "string",
            "format": ""
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "symbolLogos",
            "baseName": "symbolLogos",
            "type": "Array<MediaPreview>",
            "format": ""
        },
        {
            "name": "tokenValue",
            "baseName": "tokenValue",
            "type": "number",
            "format": "double"
        },
        {
            "name": "updateTime",
            "baseName": "updateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $58b8e637d75c9175$export$1c8dced55726649b.attributeTypeMap;
    }
    constructor(){}
}


var $7eed368765da0756$exports = {};

$parcel$export($7eed368765da0756$exports, "ENS", () => $7eed368765da0756$export$40432f7468508f49);
class $7eed368765da0756$export$40432f7468508f49 {
    static discriminator = undefined;
    static attributeTypeMap = [
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
    static getAttributeTypeMap() {
        return $7eed368765da0756$export$40432f7468508f49.attributeTypeMap;
    }
    constructor(){}
}


var $eb7c0930257b877e$exports = {};

$parcel$export($eb7c0930257b877e$exports, "ERC20Metadata", () => $eb7c0930257b877e$export$c87c89abb30c56c9);
class $eb7c0930257b877e$export$c87c89abb30c56c9 {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "contractAddress",
            "baseName": "contractAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "currentPrice",
            "baseName": "currentPrice",
            "type": "CurrencyInfo",
            "format": ""
        },
        {
            "name": "decimals",
            "baseName": "decimals",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "symbolLogos",
            "baseName": "symbolLogos",
            "type": "Array<MediaPreview>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $eb7c0930257b877e$export$c87c89abb30c56c9.attributeTypeMap;
    }
    constructor(){}
}


var $ecd06076e48fb6a1$exports = {};

$parcel$export($ecd06076e48fb6a1$exports, "ErrorMessage", () => $ecd06076e48fb6a1$export$915e9e7bd4f0f96d);
class $ecd06076e48fb6a1$export$915e9e7bd4f0f96d {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $ecd06076e48fb6a1$export$915e9e7bd4f0f96d.attributeTypeMap;
    }
    constructor(){}
}


var $4316086235fec1ee$exports = {};

$parcel$export($4316086235fec1ee$exports, "ExchangeEvent", () => $4316086235fec1ee$export$a8f0d8e344c547a4);
class $4316086235fec1ee$export$a8f0d8e344c547a4 {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "event",
            "baseName": "event",
            "type": "ExchangeEventEventEnum",
            "format": ""
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $4316086235fec1ee$export$a8f0d8e344c547a4.attributeTypeMap;
    }
    constructor(){}
}


var $525073fdd8df943d$exports = {};

$parcel$export($525073fdd8df943d$exports, "Media", () => $525073fdd8df943d$export$7fc53215244aec38);
class $525073fdd8df943d$export$7fc53215244aec38 {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "URI",
            "baseName": "URI",
            "type": "string",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "Array<MediaVersion>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $525073fdd8df943d$export$7fc53215244aec38.attributeTypeMap;
    }
    constructor(){}
}


var $49b8de1051317c9b$exports = {};

$parcel$export($49b8de1051317c9b$exports, "MediaPreview", () => $49b8de1051317c9b$export$a694a2f74268cca);
class $49b8de1051317c9b$export$a694a2f74268cca {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "URI",
            "baseName": "URI",
            "type": "string",
            "format": ""
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string",
            "format": ""
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "string",
            "format": ""
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "MediaPreviewKindEnum",
            "format": ""
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $49b8de1051317c9b$export$a694a2f74268cca.attributeTypeMap;
    }
    constructor(){}
}


var $2106b4b33c02702e$exports = {};

$parcel$export($2106b4b33c02702e$exports, "MediaVersion", () => $2106b4b33c02702e$export$e2b7ef15602a36a7);
class $2106b4b33c02702e$export$e2b7ef15602a36a7 {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string",
            "format": ""
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "string",
            "format": ""
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "MediaVersionKindEnum",
            "format": ""
        },
        {
            "name": "numBytes",
            "baseName": "numBytes",
            "type": "number",
            "format": ""
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $2106b4b33c02702e$export$e2b7ef15602a36a7.attributeTypeMap;
    }
    constructor(){}
}


var $212269051af2d65b$exports = {};

$parcel$export($212269051af2d65b$exports, "NFTTransaction", () => $212269051af2d65b$export$fa7847a6d78e3bed);
class $212269051af2d65b$export$fa7847a6d78e3bed {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "fromAddress",
            "baseName": "fromAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "logLine",
            "baseName": "logLine",
            "type": "Array<NFTTransactionLogLine>",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "toAddress",
            "baseName": "toAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionHash",
            "baseName": "transactionHash",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $212269051af2d65b$export$fa7847a6d78e3bed.attributeTypeMap;
    }
    constructor(){}
}


var $25a8c7398935e4f9$exports = {};

$parcel$export($25a8c7398935e4f9$exports, "NFTTransactionLogLine", () => $25a8c7398935e4f9$export$249a83b27a0b0d1c);
class $25a8c7398935e4f9$export$249a83b27a0b0d1c {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "price",
            "baseName": "price",
            "type": "CurrencyInfo",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $25a8c7398935e4f9$export$249a83b27a0b0d1c.attributeTypeMap;
    }
    constructor(){}
}


var $a9078b79939cd912$exports = {};

$parcel$export($a9078b79939cd912$exports, "NonFungibleToken", () => $a9078b79939cd912$export$a15d1e76d2203f4b);
class $a9078b79939cd912$export$a15d1e76d2203f4b {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "Array<TokenAttribute>",
            "format": ""
        },
        {
            "name": "collection",
            "baseName": "collection",
            "type": "Collection",
            "format": ""
        },
        {
            "name": "contractTitle",
            "baseName": "contractTitle",
            "type": "string",
            "format": ""
        },
        {
            "name": "creatorAddress",
            "baseName": "creatorAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "durability",
            "baseName": "durability",
            "type": "NonFungibleTokenDurabilityEnum",
            "format": ""
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lastSoldPrice",
            "baseName": "lastSoldPrice",
            "type": "CurrencyInfo",
            "format": ""
        },
        {
            "name": "media",
            "baseName": "media",
            "type": "Media",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "Wallet",
            "format": ""
        },
        {
            "name": "previews",
            "baseName": "previews",
            "type": "Array<MediaPreview>",
            "format": ""
        },
        {
            "name": "projectName",
            "baseName": "projectName",
            "type": "string",
            "format": ""
        },
        {
            "name": "purchase",
            "baseName": "purchase",
            "type": "NFTTransaction",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenID",
            "baseName": "tokenID",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $a9078b79939cd912$export$a15d1e76d2203f4b.attributeTypeMap;
    }
    constructor(){}
}


var $800da416b43a55e3$exports = {};

$parcel$export($800da416b43a55e3$exports, "OpenSeaContract", () => $800da416b43a55e3$export$6130be7c2f175b4e);
class $800da416b43a55e3$export$6130be7c2f175b4e {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "assetContractType",
            "baseName": "assetContractType",
            "type": "OpenSeaContractAssetContractTypeEnum",
            "format": ""
        },
        {
            "name": "buyerFeeBasisPoints",
            "baseName": "buyerFeeBasisPoints",
            "type": "number",
            "format": ""
        },
        {
            "name": "defaultToFiat",
            "baseName": "defaultToFiat",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "nftVersion",
            "baseName": "nftVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "openSeaVersion",
            "baseName": "openSeaVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "sellerFeeBasisPoints",
            "baseName": "sellerFeeBasisPoints",
            "type": "number",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $800da416b43a55e3$export$6130be7c2f175b4e.attributeTypeMap;
    }
    constructor(){}
}


var $aaf6584bed4876f6$exports = {};

$parcel$export($aaf6584bed4876f6$exports, "OwnedCollection", () => $aaf6584bed4876f6$export$5708ccdce007a0d9);
class $aaf6584bed4876f6$export$5708ccdce007a0d9 {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "collection",
            "baseName": "collection",
            "type": "Collection",
            "format": ""
        },
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<Token>",
            "format": ""
        },
        {
            "name": "totalOwnedTokens",
            "baseName": "totalOwnedTokens",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "totalSpent",
            "baseName": "totalSpent",
            "type": "CurrencyInfo",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $aaf6584bed4876f6$export$5708ccdce007a0d9.attributeTypeMap;
    }
    constructor(){}
}


var $4bdc8ed11676dbc8$exports = {};

$parcel$export($4bdc8ed11676dbc8$exports, "SearchDocument", () => $4bdc8ed11676dbc8$export$25de7845cd69fc8e);
class $4bdc8ed11676dbc8$export$25de7845cd69fc8e {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "collection",
            "baseName": "collection",
            "type": "Collection",
            "format": ""
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "Token",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "Wallet",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $4bdc8ed11676dbc8$export$25de7845cd69fc8e.attributeTypeMap;
    }
    constructor(){}
}


var $7c6bc9ad9a5e08ac$exports = {};

$parcel$export($7c6bc9ad9a5e08ac$exports, "SocialMedia", () => $7c6bc9ad9a5e08ac$export$b5bd25ab3bfc98);
class $7c6bc9ad9a5e08ac$export$b5bd25ab3bfc98 {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "network",
            "baseName": "network",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
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
    static getAttributeTypeMap() {
        return $7c6bc9ad9a5e08ac$export$b5bd25ab3bfc98.attributeTypeMap;
    }
    constructor(){}
}


var $c5ee18a57d34bf04$exports = {};

$parcel$export($c5ee18a57d34bf04$exports, "Token", () => $c5ee18a57d34bf04$export$50792b0e93539fde);
class $c5ee18a57d34bf04$export$50792b0e93539fde {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "blockchain",
            "baseName": "blockchain",
            "type": "BlockchainInfo",
            "format": ""
        },
        {
            "name": "contractAddress",
            "baseName": "contractAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "nft",
            "baseName": "nft",
            "type": "NonFungibleToken",
            "format": ""
        },
        {
            "name": "openSeaContract",
            "baseName": "openSeaContract",
            "type": "OpenSeaContract",
            "format": ""
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenStandard",
            "baseName": "tokenStandard",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $c5ee18a57d34bf04$export$50792b0e93539fde.attributeTypeMap;
    }
    constructor(){}
}


var $9099178cb753644d$exports = {};

$parcel$export($9099178cb753644d$exports, "TokenAttribute", () => $9099178cb753644d$export$ac008993769ce8fd);
class $9099178cb753644d$export$ac008993769ce8fd {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "traitType",
            "baseName": "traitType",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $9099178cb753644d$export$ac008993769ce8fd.attributeTypeMap;
    }
    constructor(){}
}


var $201363496c5c1e1e$exports = {};

$parcel$export($201363496c5c1e1e$exports, "TokenEvents", () => $201363496c5c1e1e$export$2cb2e533a0c83c50);
class $201363496c5c1e1e$export$2cb2e533a0c83c50 {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<Transaction>",
            "format": ""
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "Array<Token>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $201363496c5c1e1e$export$2cb2e533a0c83c50.attributeTypeMap;
    }
    constructor(){}
}


var $77d18158b506f9cb$exports = {};

$parcel$export($77d18158b506f9cb$exports, "Transaction", () => $77d18158b506f9cb$export$febc5573c75cefb0);
class $77d18158b506f9cb$export$febc5573c75cefb0 {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "blockNumber",
            "baseName": "blockNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "fromAddress",
            "baseName": "fromAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "gas",
            "baseName": "gas",
            "type": "number",
            "format": ""
        },
        {
            "name": "gasFee",
            "baseName": "gasFee",
            "type": "CurrencyInfo",
            "format": ""
        },
        {
            "name": "logLine",
            "baseName": "logLine",
            "type": "Array<TransactionLogLine>",
            "format": ""
        },
        {
            "name": "spenderAddress",
            "baseName": "spenderAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "toAddress",
            "baseName": "toAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenID",
            "baseName": "tokenID",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionHash",
            "baseName": "transactionHash",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionIndex",
            "baseName": "transactionIndex",
            "type": "number",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "CurrencyInfo",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $77d18158b506f9cb$export$febc5573c75cefb0.attributeTypeMap;
    }
    constructor(){}
}


var $b5b6aa7ec82a6b0c$exports = {};

$parcel$export($b5b6aa7ec82a6b0c$exports, "TransactionLogLine", () => $b5b6aa7ec82a6b0c$export$ad3644717ae62333);
class $b5b6aa7ec82a6b0c$export$ad3644717ae62333 {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "burned",
            "baseName": "burned",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "eventName",
            "baseName": "eventName",
            "type": "string",
            "format": ""
        },
        {
            "name": "logAddress",
            "baseName": "logAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "logAddressProtocol",
            "baseName": "logAddressProtocol",
            "type": "string",
            "format": ""
        },
        {
            "name": "logData",
            "baseName": "logData",
            "type": "string",
            "format": ""
        },
        {
            "name": "logIndex",
            "baseName": "logIndex",
            "type": "number",
            "format": ""
        },
        {
            "name": "logTopics",
            "baseName": "logTopics",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "mint",
            "baseName": "mint",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "transactionIndex",
            "baseName": "transactionIndex",
            "type": "number",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $b5b6aa7ec82a6b0c$export$ad3644717ae62333.attributeTypeMap;
    }
    constructor(){}
}


var $027dc3ac4e9305b5$exports = {};

$parcel$export($027dc3ac4e9305b5$exports, "URL", () => $027dc3ac4e9305b5$export$61abde59b50deb8e);
class $027dc3ac4e9305b5$export$61abde59b50deb8e {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $027dc3ac4e9305b5$export$61abde59b50deb8e.attributeTypeMap;
    }
    constructor(){}
}


var $a6f1c12c62b1a531$exports = {};

$parcel$export($a6f1c12c62b1a531$exports, "Wallet", () => $a6f1c12c62b1a531$export$bcca3ea514774656);
class $a6f1c12c62b1a531$export$bcca3ea514774656 {
    static discriminator = undefined;
    static attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "balances",
            "baseName": "balances",
            "type": "Array<CurrencyInfo>",
            "format": ""
        },
        {
            "name": "collections",
            "baseName": "collections",
            "type": "Array<OwnedCollection>",
            "format": ""
        },
        {
            "name": "ens",
            "baseName": "ens",
            "type": "Array<ENS>",
            "format": ""
        },
        {
            "name": "history",
            "baseName": "history",
            "type": "Array<Transaction>",
            "format": ""
        },
        {
            "name": "recentTokens",
            "baseName": "recentTokens",
            "type": "Array<Token>",
            "format": ""
        },
        {
            "name": "socialMedia",
            "baseName": "socialMedia",
            "type": "Array<SocialMedia>",
            "format": ""
        },
        {
            "name": "topTokens",
            "baseName": "topTokens",
            "type": "Array<Token>",
            "format": ""
        },
        {
            "name": "totalBalance",
            "baseName": "totalBalance",
            "type": "Array<CurrencyInfo>",
            "format": ""
        }
    ];
    static getAttributeTypeMap() {
        return $a6f1c12c62b1a531$export$bcca3ea514774656.attributeTypeMap;
    }
    constructor(){}
}


$parcel$exportWildcard($631b122297bb6aaf$exports, $0152cf5e29389ba6$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $539ff86f4a8bab6c$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $58b8e637d75c9175$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $7eed368765da0756$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $ecd06076e48fb6a1$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $525073fdd8df943d$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $49b8de1051317c9b$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $2106b4b33c02702e$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $a9078b79939cd912$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $800da416b43a55e3$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $aaf6584bed4876f6$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $4bdc8ed11676dbc8$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $7c6bc9ad9a5e08ac$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $c5ee18a57d34bf04$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $9099178cb753644d$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $201363496c5c1e1e$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $77d18158b506f9cb$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $b5b6aa7ec82a6b0c$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $027dc3ac4e9305b5$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $a6f1c12c62b1a531$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $c492fa7dca7a7f17$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $d88b607011ab15bf$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $cc8046c1fd9a5ab5$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $4316086235fec1ee$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $eb7c0930257b877e$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $212269051af2d65b$exports);
$parcel$exportWildcard($631b122297bb6aaf$exports, $25a8c7398935e4f9$exports);



class $46a094b0854f249e$export$d73413b9c541d9f4 {
    constructor(middleware){
        this.middleware = middleware;
    }
    pre(context) {
        return (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(this.middleware.pre(context));
    }
    post(context) {
        return (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(this.middleware.post(context));
    }
}



var $c261d649da09318f$exports = {};

$parcel$export($c261d649da09318f$exports, "ServerConfiguration", () => $c261d649da09318f$export$f8ba0b589abffc9c);
$parcel$export($c261d649da09318f$exports, "server1", () => $c261d649da09318f$export$856443aa55f6e609);
$parcel$export($c261d649da09318f$exports, "servers", () => $c261d649da09318f$export$586cd91fdb30a529);

class $c261d649da09318f$export$f8ba0b589abffc9c {
    constructor(url, variableConfiguration){
        this.url = url;
        this.variableConfiguration = variableConfiguration;
    }
    /**
     * Sets the value of the variables of this server.
     *
     * @param variableConfiguration a partial variable configuration for the variables contained in the url
     */ setVariables(variableConfiguration) {
        Object.assign(this.variableConfiguration, variableConfiguration);
    }
    getConfiguration() {
        return this.variableConfiguration;
    }
    getUrl() {
        let replacedUrl = this.url;
        for(const key in this.variableConfiguration){
            var re = new RegExp("{" + key + "}", "g");
            replacedUrl = replacedUrl.replace(re, this.variableConfiguration[key]);
        }
        return replacedUrl;
    }
    /**
     * Creates a new request context for this server using the url with variables
     * replaced with their respective values and the endpoint of the request appended.
     *
     * @param endpoint the endpoint to be queried on the server
     * @param httpMethod httpMethod to be used
     *
     */ makeRequestContext(endpoint, httpMethod) {
        return new (0, $2054034d901ee7cb$export$5df49ba75ba1c1f9)(this.getUrl() + endpoint, httpMethod);
    }
}
const $c261d649da09318f$export$856443aa55f6e609 = new $c261d649da09318f$export$f8ba0b589abffc9c("https://api.n.xyz", {});
const $c261d649da09318f$export$586cd91fdb30a529 = [
    $c261d649da09318f$export$856443aa55f6e609
];



function $d6a2a28870838ac5$export$7d4f6ec394b0f86c(conf = {}) {
    const configuration = {
        baseServer: conf.baseServer !== undefined ? conf.baseServer : (0, $c261d649da09318f$export$856443aa55f6e609),
        httpApi: conf.httpApi || new (0, $7ec076538b6aea73$export$21faa149db867f8a)(),
        middleware: conf.middleware || [],
        authMethods: (0, $65d75a106ccf214f$export$e978e3a6f405f991)(conf.authMethods)
    };
    if (conf.promiseMiddleware) conf.promiseMiddleware.forEach((m)=>configuration.middleware.push(new (0, $46a094b0854f249e$export$d73413b9c541d9f4)(m)));
    return configuration;
}


var $a6b129c5f384a4a1$exports = {};

$parcel$export($a6b129c5f384a4a1$exports, "ApiException", () => $a6b129c5f384a4a1$export$96fc0f3bebede439);
class $a6b129c5f384a4a1$export$96fc0f3bebede439 extends Error {
    constructor(code, message, body, headers){
        super("HTTP-Code: " + code + "\nMessage: " + message + "\nBody: " + JSON.stringify(body) + "\nHeaders: " + JSON.stringify(headers));
        this.code = code;
        this.body = body;
        this.headers = headers;
    }
}



const $39e76b72a67606d3$export$83cb526776fb323d = {
    csv: ",",
    ssv: " ",
    tsv: "	",
    pipes: "|"
};
class $39e76b72a67606d3$export$9342bba58f177c29 {
    constructor(configuration){
        this.configuration = configuration;
    }
}
class $39e76b72a67606d3$export$a27bea7cdb975d70 extends Error {
    constructor(api, method, field){
        super("Required parameter " + field + " was null or undefined when calling " + api + "." + method + ".");
        this.api = api;
        this.method = method;
        this.field = field;
        this.name = "RequiredError";
    }
}




























































/* tslint:disable:no-unused-variable */ let $661e2b27d26b0409$var$primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
const $661e2b27d26b0409$var$supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
let $661e2b27d26b0409$var$enumsMap = new Set([
    "AutoSuggestionTypeEnum",
    "CreditEventEventEnum",
    "ExchangeEventEventEnum",
    "MediaPreviewKindEnum",
    "MediaVersionKindEnum",
    "NonFungibleTokenDurabilityEnum",
    "OpenSeaContractAssetContractTypeEnum", 
]);
let $661e2b27d26b0409$var$typeMap = {
    "AssetGate": (0, $c492fa7dca7a7f17$export$bbe47d7715ae7ea2),
    "AutoSuggestion": (0, $d88b607011ab15bf$export$14bd3dc13236b3f1),
    "BlockchainInfo": (0, $0152cf5e29389ba6$export$ec095bc1a0e9dc00),
    "Collection": (0, $539ff86f4a8bab6c$export$fb8073518f34e6ec),
    "CreditEvent": (0, $cc8046c1fd9a5ab5$export$97f37e2f86888b8c),
    "CurrencyInfo": (0, $58b8e637d75c9175$export$1c8dced55726649b),
    "ENS": (0, $7eed368765da0756$export$40432f7468508f49),
    "ERC20Metadata": (0, $eb7c0930257b877e$export$c87c89abb30c56c9),
    "ErrorMessage": (0, $ecd06076e48fb6a1$export$915e9e7bd4f0f96d),
    "ExchangeEvent": (0, $4316086235fec1ee$export$a8f0d8e344c547a4),
    "Media": (0, $525073fdd8df943d$export$7fc53215244aec38),
    "MediaPreview": (0, $49b8de1051317c9b$export$a694a2f74268cca),
    "MediaVersion": (0, $2106b4b33c02702e$export$e2b7ef15602a36a7),
    "NFTTransaction": (0, $212269051af2d65b$export$fa7847a6d78e3bed),
    "NFTTransactionLogLine": (0, $25a8c7398935e4f9$export$249a83b27a0b0d1c),
    "NonFungibleToken": (0, $a9078b79939cd912$export$a15d1e76d2203f4b),
    "OpenSeaContract": (0, $800da416b43a55e3$export$6130be7c2f175b4e),
    "OwnedCollection": (0, $aaf6584bed4876f6$export$5708ccdce007a0d9),
    "SearchDocument": (0, $4bdc8ed11676dbc8$export$25de7845cd69fc8e),
    "SocialMedia": (0, $7c6bc9ad9a5e08ac$export$b5bd25ab3bfc98),
    "Token": (0, $c5ee18a57d34bf04$export$50792b0e93539fde),
    "TokenAttribute": (0, $9099178cb753644d$export$ac008993769ce8fd),
    "TokenEvents": (0, $201363496c5c1e1e$export$2cb2e533a0c83c50),
    "Transaction": (0, $77d18158b506f9cb$export$febc5573c75cefb0),
    "TransactionLogLine": (0, $b5b6aa7ec82a6b0c$export$ad3644717ae62333),
    "URL": (0, $027dc3ac4e9305b5$export$61abde59b50deb8e),
    "Wallet": (0, $a6f1c12c62b1a531$export$bcca3ea514774656)
};
class $661e2b27d26b0409$export$534101ea662928f5 {
    static findCorrectType(data, expectedType) {
        if (data == undefined) return expectedType;
        else if ($661e2b27d26b0409$var$primitives.indexOf(expectedType.toLowerCase()) !== -1) return expectedType;
        else if (expectedType === "Date") return expectedType;
        else {
            if ($661e2b27d26b0409$var$enumsMap.has(expectedType)) return expectedType;
            if (!$661e2b27d26b0409$var$typeMap[expectedType]) return expectedType; // w/e we don't know the type
            // Check the discriminator
            let discriminatorProperty = $661e2b27d26b0409$var$typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) return expectedType; // the type does not have a discriminator. use it.
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if ($661e2b27d26b0409$var$typeMap[discriminatorType]) return discriminatorType; // use the type given in the discriminator
                    else return expectedType; // discriminator did not map to a type
                } else return expectedType; // discriminator was not present (or an empty string)
            }
        }
    }
    static serialize(data, type, format) {
        if (data == undefined) return data;
        else if ($661e2b27d26b0409$var$primitives.indexOf(type.toLowerCase()) !== -1) return data;
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for(let index in data){
                let date = data[index];
                transformedData.push($661e2b27d26b0409$export$534101ea662928f5.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            } else return data.toISOString();
        } else {
            if ($661e2b27d26b0409$var$enumsMap.has(type)) return data;
            if (!$661e2b27d26b0409$var$typeMap[type]) return data;
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = $661e2b27d26b0409$var$typeMap[type].getAttributeTypeMap();
            let instance = {};
            for(let index1 in attributeTypes){
                let attributeType = attributeTypes[index1];
                instance[attributeType.baseName] = $661e2b27d26b0409$export$534101ea662928f5.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static deserialize(data, type, format) {
        // polymorphism may change the actual type.
        type = $661e2b27d26b0409$export$534101ea662928f5.findCorrectType(data, type);
        if (data == undefined) return data;
        else if ($661e2b27d26b0409$var$primitives.indexOf(type.toLowerCase()) !== -1) return data;
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for(let index in data){
                let date = data[index];
                transformedData.push($661e2b27d26b0409$export$534101ea662928f5.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") return new Date(data);
        else {
            if ($661e2b27d26b0409$var$enumsMap.has(type)) return data;
            if (!$661e2b27d26b0409$var$typeMap[type]) return data;
            let instance = new $661e2b27d26b0409$var$typeMap[type]();
            let attributeTypes = $661e2b27d26b0409$var$typeMap[type].getAttributeTypeMap();
            for(let index1 in attributeTypes){
                let attributeType = attributeTypes[index1];
                let value = $661e2b27d26b0409$export$534101ea662928f5.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) instance[attributeType.name] = value;
            }
            return instance;
        }
    }
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */ static normalizeMediaType(mediaType) {
        if (mediaType === undefined) return undefined;
        return mediaType.split(";")[0].trim().toLowerCase();
    }
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */ static getPreferredMediaType(mediaTypes) {
        /** According to OAS 3 we should default to json */ if (!mediaTypes) return "application/json";
        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType = undefined;
        let selectedRank = -Infinity;
        for (const mediaType of normalMediaTypes)if ($661e2b27d26b0409$var$supportedMediaTypes[mediaType] > selectedRank) {
            selectedMediaType = mediaType;
            selectedRank = $661e2b27d26b0409$var$supportedMediaTypes[mediaType];
        }
        if (selectedMediaType === undefined) throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        return selectedMediaType;
    }
    /**
     * Convert data to a string according the given media type
     */ static stringify(data, mediaType) {
        if (mediaType === "application/json") return JSON.stringify(data);
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }
    /**
     * Parse data from a string according to the given media type
     */ static parse(rawData, mediaType) {
        if (mediaType === undefined) throw new Error("Cannot parse content. No Content-Type defined.");
        if (mediaType === "application/json") return JSON.parse(rawData);
        if (mediaType === "text/html") return rawData;
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}



function $fc15ef3e89d82812$export$b16163085df23908(codeRange, code) {
    // This is how the default value is encoded in OAG
    if (codeRange === "0") return true;
    if (codeRange == code.toString()) return true;
    else {
        const codeString = code.toString();
        if (codeString.length != codeRange.length) return false;
        for(let i = 0; i < codeString.length; i++){
            if (codeRange.charAt(i) != "X" && codeRange.charAt(i) != codeString.charAt(i)) return false;
        }
        return true;
    }
}
function $fc15ef3e89d82812$export$59072c3750441c02(contentTypes) {
    return contentTypes.indexOf("multipart/form-data") !== -1;
}


class $3650bfcf28fe6efa$export$a77b50040ad232a5 extends (0, $39e76b72a67606d3$export$9342bba58f177c29) {
    /**
     * Get autocomplete-style search suggestions for tokens.
     * Autocomplete tokens
     * @param query A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     */ async getTokensSuggestionsResults(query, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = "/api/v1-alpha/tokens/suggestions";
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (query !== undefined) requestContext.setQueryParam("query", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(query, "string", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Returns trending and interesting collections on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * Get top collections
     */ async getTopCollections(_options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = "/api/v1-alpha/collections/top";
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Returns trending and interesting NFTs and SFTs on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * Get top tokens
     */ async getTopTokens(_options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = "/api/v1-alpha/tokens/top";
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Returns trending and interesting wallets on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * Get top wallets
     */ async getTopWallets(_options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = "/api/v1-alpha/wallets/top";
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * The metadata will be refreshed offline and later updated.
     * Submit a request for metadata to be refreshed.
     * @param contractAddress A hex address for a blockchain contract.
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param media Refresh media.
     */ async postRefresh(contractAddress, tokenID, chainID, media, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'contractAddress' is not null or undefined
        if (contractAddress === null || contractAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("AlphaApi", "postRefresh", "contractAddress");
        // verify required parameter 'tokenID' is not null or undefined
        if (tokenID === null || tokenID === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("AlphaApi", "postRefresh", "tokenID");
        // Path Params
        const localVarPath = "/api/v1-alpha/refresh/{contractAddress}/{tokenID}".replace("{contractAddress}", encodeURIComponent(String(contractAddress))).replace("{tokenID}", encodeURIComponent(String(tokenID)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        // Query Params
        if (media !== undefined) requestContext.setQueryParam("media", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(media, "boolean", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
}
class $3650bfcf28fe6efa$export$f2d42e0e4597a664 {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTokensSuggestionsResults
     * @throws ApiException if the response code was not in [200, 299]
     */ async getTokensSuggestionsResults(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<AutoSuggestion>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<AutoSuggestion>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTopCollections
     * @throws ApiException if the response code was not in [200, 299]
     */ async getTopCollections(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Collection>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Collection>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTopTokens
     * @throws ApiException if the response code was not in [200, 299]
     */ async getTopTokens(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Token>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Token>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTopWallets
     * @throws ApiException if the response code was not in [200, 299]
     */ async getTopWallets(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Wallet>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Wallet>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postRefresh
     * @throws ApiException if the response code was not in [200, 299]
     */ async postRefresh(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) return;
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "void", "");
            return body1;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}







class $101fd941f640fbf7$export$c0feda9424026bf9 extends (0, $39e76b72a67606d3$export$9342bba58f177c29) {
    /**
     * Lists all supported blockchains.
     * Get supported blockchains
     */ async getBlockchains(_options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = "/api/v1/blockchains";
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Get a collection by its contract address.
     * Get collection
     * @param contractAddress A hex address for a blockchain contract.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ async getCollection(contractAddress, chainID, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'contractAddress' is not null or undefined
        if (contractAddress === null || contractAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getCollection", "contractAddress");
        // Path Params
        const localVarPath = "/api/v1/collections/{contractAddress}".replace("{contractAddress}", encodeURIComponent(String(contractAddress)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Get autocomplete-style search suggestions for collections.
     * Autocomplete collections
     * @param query A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     */ async getCollectionsSuggestionsResults(query, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = "/api/v1/collections/suggestions";
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (query !== undefined) requestContext.setQueryParam("query", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(query, "string", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Determine if a wallet has any token from a contract.
     * Has tokens
     * @param contractAddress A hex address for a blockchain contract.
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ async getContractGate(contractAddress, walletAddress, chainID, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'contractAddress' is not null or undefined
        if (contractAddress === null || contractAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getContractGate", "contractAddress");
        // verify required parameter 'walletAddress' is not null or undefined
        if (walletAddress === null || walletAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getContractGate", "walletAddress");
        // Path Params
        const localVarPath = "/api/v1/wallets/{walletAddress}/gate/{contractAddress}".replace("{contractAddress}", encodeURIComponent(String(contractAddress))).replace("{walletAddress}", encodeURIComponent(String(walletAddress)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Get tokens by contract address.
     * Get tokens
     * @param contractAddress A hex address for a blockchain contract.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ async getContractTokens(contractAddress, chainID, limit, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'contractAddress' is not null or undefined
        if (contractAddress === null || contractAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getContractTokens", "contractAddress");
        // Path Params
        const localVarPath = "/api/v1/tokens/{contractAddress}".replace("{contractAddress}", encodeURIComponent(String(contractAddress)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        // Query Params
        if (limit !== undefined) requestContext.setQueryParam("limit", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(limit, "number", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Returns tokens from a batch lookup.
     * Batch token lookup
     * @param contractAddresses A comma-separated hex address for a blockchain contract, the order of values should match the order in tokenIdentifiers.
     * @param tokenIdentifiers A comma-separated token ID, the order of values should match the order in contractAddresses.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ async getContractTokensByContractAndID(contractAddresses, tokenIdentifiers, chainID, limit, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'contractAddresses' is not null or undefined
        if (contractAddresses === null || contractAddresses === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getContractTokensByContractAndID", "contractAddresses");
        // verify required parameter 'tokenIdentifiers' is not null or undefined
        if (tokenIdentifiers === null || tokenIdentifiers === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getContractTokensByContractAndID", "tokenIdentifiers");
        // Path Params
        const localVarPath = "/api/v1/token-batch";
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (contractAddresses !== undefined) requestContext.setQueryParam("contractAddresses", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(contractAddresses, "string", ""));
        // Query Params
        if (tokenIdentifiers !== undefined) requestContext.setQueryParam("tokenIdentifiers", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(tokenIdentifiers, "string", ""));
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        // Query Params
        if (limit !== undefined) requestContext.setQueryParam("limit", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(limit, "number", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Get the transaction history for a collection.
     * Get collection transactions
     * @param contractAddress A hex address for a blockchain contract.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ async getContractTransactionHistory(contractAddress, cursor, chainID, limit, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'contractAddress' is not null or undefined
        if (contractAddress === null || contractAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getContractTransactionHistory", "contractAddress");
        // Path Params
        const localVarPath = "/api/v1/collections/{contractAddress}/transactions/history".replace("{contractAddress}", encodeURIComponent(String(contractAddress)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (cursor !== undefined) requestContext.setQueryParam("cursor", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(cursor, "string", ""));
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        // Query Params
        if (limit !== undefined) requestContext.setQueryParam("limit", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(limit, "number", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Get ERC-20 metadata by contract address.
     * Get ERC-20 metadata
     * @param contractAddress A hex address for a blockchain contract.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ async getERC20Metadata(contractAddress, chainID, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'contractAddress' is not null or undefined
        if (contractAddress === null || contractAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getERC20Metadata", "contractAddress");
        // Path Params
        const localVarPath = "/api/v1/token/{contractAddress}/erc20/metadata".replace("{contractAddress}", encodeURIComponent(String(contractAddress)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Get search results such as wallets, tokens, and collections by a search query.
     * Search
     * @param query A search query that returns matching results
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param limit Limits the number of results in a single response.
     */ async getSearchResults(query, cursor, limit, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getSearchResults", "query");
        // Path Params
        const localVarPath = "/api/v1/search/{query}".replace("{query}", encodeURIComponent(String(query)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (cursor !== undefined) requestContext.setQueryParam("cursor", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(cursor, "string", ""));
        // Query Params
        if (limit !== undefined) requestContext.setQueryParam("limit", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(limit, "number", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Returns a list of tokens sold by a wallet.
     * Get sold tokens
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param limit Limits the number of results in a single response.
     */ async getSoldTokens(walletAddress, chainID, cursor, limit, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'walletAddress' is not null or undefined
        if (walletAddress === null || walletAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getSoldTokens", "walletAddress");
        // Path Params
        const localVarPath = "/api/v1/wallets/{walletAddress}/sold-tokens".replace("{walletAddress}", encodeURIComponent(String(walletAddress)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        // Query Params
        if (cursor !== undefined) requestContext.setQueryParam("cursor", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(cursor, "string", ""));
        // Query Params
        if (limit !== undefined) requestContext.setQueryParam("limit", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(limit, "number", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Get autocomplete-style search suggestions for results.
     * Autocomplete
     * @param query A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     */ async getSuggestionsResults(query, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = "/api/v1/suggestions";
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (query !== undefined) requestContext.setQueryParam("query", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(query, "string", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Get a token by its contract address and token ID.
     * Get token
     * @param contractAddress A hex address for a blockchain contract.
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ async getToken(contractAddress, tokenID, chainID, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'contractAddress' is not null or undefined
        if (contractAddress === null || contractAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getToken", "contractAddress");
        // verify required parameter 'tokenID' is not null or undefined
        if (tokenID === null || tokenID === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getToken", "tokenID");
        // Path Params
        const localVarPath = "/api/v1/tokens/{contractAddress}/{tokenID}".replace("{contractAddress}", encodeURIComponent(String(contractAddress))).replace("{tokenID}", encodeURIComponent(String(tokenID)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Determine if a wallet has a given token from a contract.
     * Has token
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param contractAddress A hex address for a blockchain contract.
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ async getTokenGate(tokenID, contractAddress, walletAddress, chainID, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'tokenID' is not null or undefined
        if (tokenID === null || tokenID === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getTokenGate", "tokenID");
        // verify required parameter 'contractAddress' is not null or undefined
        if (contractAddress === null || contractAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getTokenGate", "contractAddress");
        // verify required parameter 'walletAddress' is not null or undefined
        if (walletAddress === null || walletAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getTokenGate", "walletAddress");
        // Path Params
        const localVarPath = "/api/v1/wallets/{walletAddress}/gate/{contractAddress}/{tokenID}".replace("{tokenID}", encodeURIComponent(String(tokenID))).replace("{contractAddress}", encodeURIComponent(String(contractAddress))).replace("{walletAddress}", encodeURIComponent(String(walletAddress)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Returns a list of transfer transactions on a specified token.
     * Get token transfers
     * @param contractAddress A hex address for a blockchain contract.
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ async getTokenTransfers(contractAddress, tokenID, chainID, limit, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'contractAddress' is not null or undefined
        if (contractAddress === null || contractAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getTokenTransfers", "contractAddress");
        // verify required parameter 'tokenID' is not null or undefined
        if (tokenID === null || tokenID === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getTokenTransfers", "tokenID");
        // Path Params
        const localVarPath = "/api/v1/tokens/{contractAddress}/{tokenID}/transfers".replace("{contractAddress}", encodeURIComponent(String(contractAddress))).replace("{tokenID}", encodeURIComponent(String(tokenID)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        // Query Params
        if (limit !== undefined) requestContext.setQueryParam("limit", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(limit, "number", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Get tokens by a search query.
     * Search tokens
     * @param query A search query that returns matching results
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     */ async getTokensBySearchQuery(query, chainID, limit, cursor, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getTokensBySearchQuery", "query");
        // Path Params
        const localVarPath = "/api/v1/tokens/search/{query}".replace("{query}", encodeURIComponent(String(query)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        // Query Params
        if (limit !== undefined) requestContext.setQueryParam("limit", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(limit, "number", ""));
        // Query Params
        if (cursor !== undefined) requestContext.setQueryParam("cursor", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(cursor, "string", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Get a wallet by a wallet address.
     * Get wallet
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ async getWallet(walletAddress, chainID, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'walletAddress' is not null or undefined
        if (walletAddress === null || walletAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getWallet", "walletAddress");
        // Path Params
        const localVarPath = "/api/v1/wallets/{walletAddress}".replace("{walletAddress}", encodeURIComponent(String(walletAddress)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Returns a list of balances for tokens this wallet currently owns, sorted by contract.
     * Get balances
     * @param walletAddress A hex string referencing a public wallet address.
     * @param limit Limits the number of results in a single response.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ async getWalletBalances(walletAddress, limit, chainID, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'walletAddress' is not null or undefined
        if (walletAddress === null || walletAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getWalletBalances", "walletAddress");
        // Path Params
        const localVarPath = "/api/v1/wallets/{walletAddress}/balances".replace("{walletAddress}", encodeURIComponent(String(walletAddress)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (limit !== undefined) requestContext.setQueryParam("limit", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(limit, "number", ""));
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Returns the latest approval events for all contracts the wallet has given spending authority to.
     * Get approved contracts
     * @param walletAddress A hex string referencing a public wallet address.
     */ async getWalletContractApprovals(walletAddress, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'walletAddress' is not null or undefined
        if (walletAddress === null || walletAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getWalletContractApprovals", "walletAddress");
        // Path Params
        const localVarPath = "/api/v1/wallets/{walletAddress}/approvals".replace("{walletAddress}", encodeURIComponent(String(walletAddress)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Returns a list of tokens minted by a wallet.
     * Get minted tokens
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param limit Limits the number of results in a single response.
     */ async getWalletMints(walletAddress, chainID, cursor, limit, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'walletAddress' is not null or undefined
        if (walletAddress === null || walletAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getWalletMints", "walletAddress");
        // Path Params
        const localVarPath = "/api/v1/wallets/{walletAddress}/mints".replace("{walletAddress}", encodeURIComponent(String(walletAddress)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        // Query Params
        if (cursor !== undefined) requestContext.setQueryParam("cursor", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(cursor, "string", ""));
        // Query Params
        if (limit !== undefined) requestContext.setQueryParam("limit", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(limit, "number", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Returns a list of tokens owned by a wallet.
     * Get owned tokens
     * @param walletAddress A hex string referencing a public wallet address.
     * @param filterAirdrops A boolean that will remove airdropped tokens from a result set.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ async getWalletTokens(walletAddress, filterAirdrops, cursor, chainID, limit, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'walletAddress' is not null or undefined
        if (walletAddress === null || walletAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getWalletTokens", "walletAddress");
        // Path Params
        const localVarPath = "/api/v1/wallets/{walletAddress}/tokens".replace("{walletAddress}", encodeURIComponent(String(walletAddress)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (filterAirdrops !== undefined) requestContext.setQueryParam("filterAirdrops", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(filterAirdrops, "boolean", ""));
        // Query Params
        if (cursor !== undefined) requestContext.setQueryParam("cursor", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(cursor, "string", ""));
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        // Query Params
        if (limit !== undefined) requestContext.setQueryParam("limit", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(limit, "number", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Returns a list of collections with tokens owned by a wallet.
     * Get owned NFT collections
     * @param walletAddress A hex string referencing a public wallet address.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param filterAirdrops A boolean that will remove airdropped tokens from a result set.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ async getWalletTokensByCollections(walletAddress, cursor, filterAirdrops, chainID, limit, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'walletAddress' is not null or undefined
        if (walletAddress === null || walletAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getWalletTokensByCollections", "walletAddress");
        // Path Params
        const localVarPath = "/api/v1/wallets/{walletAddress}/collections".replace("{walletAddress}", encodeURIComponent(String(walletAddress)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (cursor !== undefined) requestContext.setQueryParam("cursor", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(cursor, "string", ""));
        // Query Params
        if (filterAirdrops !== undefined) requestContext.setQueryParam("filterAirdrops", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(filterAirdrops, "boolean", ""));
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        // Query Params
        if (limit !== undefined) requestContext.setQueryParam("limit", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(limit, "number", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Returns transactions related to a wallet.
     * Get wallet transactions
     * @param walletAddress A hex string referencing a public wallet address.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param limit Limits the number of results in a single response.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param tokenType The token type filters a query to only a subset of tokens, for example, only NFTs. To select ERC-20 and sidechain transactions, use the \&quot;fungible\&quot; value. To select only NFTs or semi-fungible tokens (SFTs), use the \&quot;NFT\&quot; or \&quot;SFT\&quot; enums. To select only L1 native token transactions, use the \&quot;native\&quot; enum.
     */ async getWalletTransactions(walletAddress, cursor, limit, chainID, tokenType, _options) {
        let _config = _options || this.configuration;
        // verify required parameter 'walletAddress' is not null or undefined
        if (walletAddress === null || walletAddress === undefined) throw new (0, $39e76b72a67606d3$export$a27bea7cdb975d70)("DefaultApi", "getWalletTransactions", "walletAddress");
        // Path Params
        const localVarPath = "/api/v1/wallets/{walletAddress}/transactions/history".replace("{walletAddress}", encodeURIComponent(String(walletAddress)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (cursor !== undefined) requestContext.setQueryParam("cursor", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(cursor, "string", ""));
        // Query Params
        if (limit !== undefined) requestContext.setQueryParam("limit", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(limit, "number", ""));
        // Query Params
        if (chainID !== undefined) requestContext.setQueryParam("chainID", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(chainID, "string", ""));
        // Query Params
        if (tokenType !== undefined) requestContext.setQueryParam("tokenType", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(tokenType, "'native' | 'fungible' | 'NFT' | 'SFT' | 'unknown'", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
    /**
     * Get autocomplete-style search suggestions for wallets.
     * Autocomplete wallets
     * @param query A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     */ async getWalletsSuggestionsResults(query, _options) {
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = "/api/v1/wallets/suggestions";
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, (0, $2054034d901ee7cb$export$8343e6f32f5246de).GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (query !== undefined) requestContext.setQueryParam("query", (0, $661e2b27d26b0409$export$534101ea662928f5).serialize(query, "string", ""));
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["apikey"];
        if (authMethod?.applySecurityAuthentication) await authMethod?.applySecurityAuthentication(requestContext);
        const defaultAuth = _options?.authMethods?.default || this.configuration?.authMethods?.default;
        if (defaultAuth?.applySecurityAuthentication) await defaultAuth?.applySecurityAuthentication(requestContext);
        return requestContext;
    }
}
class $101fd941f640fbf7$export$e80d64ac625e4e08 {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBlockchains
     * @throws ApiException if the response code was not in [200, 299]
     */ async getBlockchains(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<BlockchainInfo>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<BlockchainInfo>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCollection
     * @throws ApiException if the response code was not in [200, 299]
     */ async getCollection(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Collection>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Collection>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCollectionsSuggestionsResults
     * @throws ApiException if the response code was not in [200, 299]
     */ async getCollectionsSuggestionsResults(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<AutoSuggestion>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<AutoSuggestion>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getContractGate
     * @throws ApiException if the response code was not in [200, 299]
     */ async getContractGate(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "AssetGate", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "AssetGate", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getContractTokens
     * @throws ApiException if the response code was not in [200, 299]
     */ async getContractTokens(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Token>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Token>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getContractTokensByContractAndID
     * @throws ApiException if the response code was not in [200, 299]
     */ async getContractTokensByContractAndID(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Token>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Token>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getContractTransactionHistory
     * @throws ApiException if the response code was not in [200, 299]
     */ async getContractTransactionHistory(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Transaction>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Transaction>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getERC20Metadata
     * @throws ApiException if the response code was not in [200, 299]
     */ async getERC20Metadata(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<ERC20Metadata>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<ERC20Metadata>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSearchResults
     * @throws ApiException if the response code was not in [200, 299]
     */ async getSearchResults(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<SearchDocument>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<SearchDocument>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSoldTokens
     * @throws ApiException if the response code was not in [200, 299]
     */ async getSoldTokens(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Token>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Token>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSuggestionsResults
     * @throws ApiException if the response code was not in [200, 299]
     */ async getSuggestionsResults(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<AutoSuggestion>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<AutoSuggestion>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getToken
     * @throws ApiException if the response code was not in [200, 299]
     */ async getToken(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Token>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Token>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTokenGate
     * @throws ApiException if the response code was not in [200, 299]
     */ async getTokenGate(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "AssetGate", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "AssetGate", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTokenTransfers
     * @throws ApiException if the response code was not in [200, 299]
     */ async getTokenTransfers(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "TokenEvents", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "TokenEvents", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTokensBySearchQuery
     * @throws ApiException if the response code was not in [200, 299]
     */ async getTokensBySearchQuery(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Token>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Token>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWallet
     * @throws ApiException if the response code was not in [200, 299]
     */ async getWallet(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Wallet>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Wallet>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWalletBalances
     * @throws ApiException if the response code was not in [200, 299]
     */ async getWalletBalances(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<CurrencyInfo>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<CurrencyInfo>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWalletContractApprovals
     * @throws ApiException if the response code was not in [200, 299]
     */ async getWalletContractApprovals(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Transaction>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Transaction>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWalletMints
     * @throws ApiException if the response code was not in [200, 299]
     */ async getWalletMints(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Token>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Token>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWalletTokens
     * @throws ApiException if the response code was not in [200, 299]
     */ async getWalletTokens(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Token>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Token>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWalletTokensByCollections
     * @throws ApiException if the response code was not in [200, 299]
     */ async getWalletTokensByCollections(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<OwnedCollection>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<OwnedCollection>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWalletTransactions
     * @throws ApiException if the response code was not in [200, 299]
     */ async getWalletTransactions(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Transaction>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<Transaction>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWalletsSuggestionsResults
     * @throws ApiException if the response code was not in [200, 299]
     */ async getWalletsSuggestionsResults(response) {
        const contentType = (0, $661e2b27d26b0409$export$534101ea662928f5).normalizeMediaType(response.headers["content-type"]);
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("200", response.httpStatusCode)) {
            const body = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<AutoSuggestion>", "");
            return body;
        }
        if ((0, $fc15ef3e89d82812$export$b16163085df23908)("0", response.httpStatusCode)) {
            const body1 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "ErrorMessage", "");
            throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "An error message for unexpected requests.", body1, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body2 = (0, $661e2b27d26b0409$export$534101ea662928f5).deserialize((0, $661e2b27d26b0409$export$534101ea662928f5).parse(await response.body.text(), contentType), "Array<AutoSuggestion>", "");
            return body2;
        }
        throw new (0, $a6b129c5f384a4a1$export$96fc0f3bebede439)(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}


class $38cc75600f18853d$export$4d28279d9100e3ff {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new (0, $3650bfcf28fe6efa$export$a77b50040ad232a5)(configuration);
        this.responseProcessor = responseProcessor || new (0, $3650bfcf28fe6efa$export$f2d42e0e4597a664)();
    }
    /**
     * Get autocomplete-style search suggestions for tokens.
     * Autocomplete tokens
     * @param query A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     */ getTokensSuggestionsResults(query, _options) {
        const requestContextPromise = this.requestFactory.getTokensSuggestionsResults(query, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getTokensSuggestionsResults(rsp)));
        }));
    }
    /**
     * Returns trending and interesting collections on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * Get top collections
     */ getTopCollections(_options) {
        const requestContextPromise = this.requestFactory.getTopCollections(_options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getTopCollections(rsp)));
        }));
    }
    /**
     * Returns trending and interesting NFTs and SFTs on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * Get top tokens
     */ getTopTokens(_options) {
        const requestContextPromise = this.requestFactory.getTopTokens(_options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getTopTokens(rsp)));
        }));
    }
    /**
     * Returns trending and interesting wallets on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * Get top wallets
     */ getTopWallets(_options) {
        const requestContextPromise = this.requestFactory.getTopWallets(_options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getTopWallets(rsp)));
        }));
    }
    /**
     * The metadata will be refreshed offline and later updated.
     * Submit a request for metadata to be refreshed.
     * @param contractAddress A hex address for a blockchain contract.
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param media Refresh media.
     */ postRefresh(contractAddress, tokenID, chainID, media, _options) {
        const requestContextPromise = this.requestFactory.postRefresh(contractAddress, tokenID, chainID, media, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.postRefresh(rsp)));
        }));
    }
}
class $38cc75600f18853d$export$ed3fb23aab9754d3 {
    constructor(configuration, requestFactory, responseProcessor){
        this.configuration = configuration;
        this.requestFactory = requestFactory || new (0, $101fd941f640fbf7$export$c0feda9424026bf9)(configuration);
        this.responseProcessor = responseProcessor || new (0, $101fd941f640fbf7$export$e80d64ac625e4e08)();
    }
    /**
     * Lists all supported blockchains.
     * Get supported blockchains
     */ getBlockchains(_options) {
        const requestContextPromise = this.requestFactory.getBlockchains(_options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getBlockchains(rsp)));
        }));
    }
    /**
     * Get a collection by its contract address.
     * Get collection
     * @param contractAddress A hex address for a blockchain contract.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ getCollection(contractAddress, chainID, _options) {
        const requestContextPromise = this.requestFactory.getCollection(contractAddress, chainID, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getCollection(rsp)));
        }));
    }
    /**
     * Get autocomplete-style search suggestions for collections.
     * Autocomplete collections
     * @param query A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     */ getCollectionsSuggestionsResults(query, _options) {
        const requestContextPromise = this.requestFactory.getCollectionsSuggestionsResults(query, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getCollectionsSuggestionsResults(rsp)));
        }));
    }
    /**
     * Determine if a wallet has any token from a contract.
     * Has tokens
     * @param contractAddress A hex address for a blockchain contract.
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ getContractGate(contractAddress, walletAddress, chainID, _options) {
        const requestContextPromise = this.requestFactory.getContractGate(contractAddress, walletAddress, chainID, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getContractGate(rsp)));
        }));
    }
    /**
     * Get tokens by contract address.
     * Get tokens
     * @param contractAddress A hex address for a blockchain contract.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ getContractTokens(contractAddress, chainID, limit, _options) {
        const requestContextPromise = this.requestFactory.getContractTokens(contractAddress, chainID, limit, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getContractTokens(rsp)));
        }));
    }
    /**
     * Returns tokens from a batch lookup.
     * Batch token lookup
     * @param contractAddresses A comma-separated hex address for a blockchain contract, the order of values should match the order in tokenIdentifiers.
     * @param tokenIdentifiers A comma-separated token ID, the order of values should match the order in contractAddresses.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ getContractTokensByContractAndID(contractAddresses, tokenIdentifiers, chainID, limit, _options) {
        const requestContextPromise = this.requestFactory.getContractTokensByContractAndID(contractAddresses, tokenIdentifiers, chainID, limit, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getContractTokensByContractAndID(rsp)));
        }));
    }
    /**
     * Get the transaction history for a collection.
     * Get collection transactions
     * @param contractAddress A hex address for a blockchain contract.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ getContractTransactionHistory(contractAddress, cursor, chainID, limit, _options) {
        const requestContextPromise = this.requestFactory.getContractTransactionHistory(contractAddress, cursor, chainID, limit, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getContractTransactionHistory(rsp)));
        }));
    }
    /**
     * Get ERC-20 metadata by contract address.
     * Get ERC-20 metadata
     * @param contractAddress A hex address for a blockchain contract.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ getERC20Metadata(contractAddress, chainID, _options) {
        const requestContextPromise = this.requestFactory.getERC20Metadata(contractAddress, chainID, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getERC20Metadata(rsp)));
        }));
    }
    /**
     * Get search results such as wallets, tokens, and collections by a search query.
     * Search
     * @param query A search query that returns matching results
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param limit Limits the number of results in a single response.
     */ getSearchResults(query, cursor, limit, _options) {
        const requestContextPromise = this.requestFactory.getSearchResults(query, cursor, limit, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getSearchResults(rsp)));
        }));
    }
    /**
     * Returns a list of tokens sold by a wallet.
     * Get sold tokens
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param limit Limits the number of results in a single response.
     */ getSoldTokens(walletAddress, chainID, cursor, limit, _options) {
        const requestContextPromise = this.requestFactory.getSoldTokens(walletAddress, chainID, cursor, limit, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getSoldTokens(rsp)));
        }));
    }
    /**
     * Get autocomplete-style search suggestions for results.
     * Autocomplete
     * @param query A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     */ getSuggestionsResults(query, _options) {
        const requestContextPromise = this.requestFactory.getSuggestionsResults(query, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getSuggestionsResults(rsp)));
        }));
    }
    /**
     * Get a token by its contract address and token ID.
     * Get token
     * @param contractAddress A hex address for a blockchain contract.
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ getToken(contractAddress, tokenID, chainID, _options) {
        const requestContextPromise = this.requestFactory.getToken(contractAddress, tokenID, chainID, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getToken(rsp)));
        }));
    }
    /**
     * Determine if a wallet has a given token from a contract.
     * Has token
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param contractAddress A hex address for a blockchain contract.
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ getTokenGate(tokenID, contractAddress, walletAddress, chainID, _options) {
        const requestContextPromise = this.requestFactory.getTokenGate(tokenID, contractAddress, walletAddress, chainID, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getTokenGate(rsp)));
        }));
    }
    /**
     * Returns a list of transfer transactions on a specified token.
     * Get token transfers
     * @param contractAddress A hex address for a blockchain contract.
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ getTokenTransfers(contractAddress, tokenID, chainID, limit, _options) {
        const requestContextPromise = this.requestFactory.getTokenTransfers(contractAddress, tokenID, chainID, limit, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getTokenTransfers(rsp)));
        }));
    }
    /**
     * Get tokens by a search query.
     * Search tokens
     * @param query A search query that returns matching results
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     */ getTokensBySearchQuery(query, chainID, limit, cursor, _options) {
        const requestContextPromise = this.requestFactory.getTokensBySearchQuery(query, chainID, limit, cursor, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getTokensBySearchQuery(rsp)));
        }));
    }
    /**
     * Get a wallet by a wallet address.
     * Get wallet
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ getWallet(walletAddress, chainID, _options) {
        const requestContextPromise = this.requestFactory.getWallet(walletAddress, chainID, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getWallet(rsp)));
        }));
    }
    /**
     * Returns a list of balances for tokens this wallet currently owns, sorted by contract.
     * Get balances
     * @param walletAddress A hex string referencing a public wallet address.
     * @param limit Limits the number of results in a single response.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ getWalletBalances(walletAddress, limit, chainID, _options) {
        const requestContextPromise = this.requestFactory.getWalletBalances(walletAddress, limit, chainID, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getWalletBalances(rsp)));
        }));
    }
    /**
     * Returns the latest approval events for all contracts the wallet has given spending authority to.
     * Get approved contracts
     * @param walletAddress A hex string referencing a public wallet address.
     */ getWalletContractApprovals(walletAddress, _options) {
        const requestContextPromise = this.requestFactory.getWalletContractApprovals(walletAddress, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getWalletContractApprovals(rsp)));
        }));
    }
    /**
     * Returns a list of tokens minted by a wallet.
     * Get minted tokens
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param limit Limits the number of results in a single response.
     */ getWalletMints(walletAddress, chainID, cursor, limit, _options) {
        const requestContextPromise = this.requestFactory.getWalletMints(walletAddress, chainID, cursor, limit, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getWalletMints(rsp)));
        }));
    }
    /**
     * Returns a list of tokens owned by a wallet.
     * Get owned tokens
     * @param walletAddress A hex string referencing a public wallet address.
     * @param filterAirdrops A boolean that will remove airdropped tokens from a result set.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ getWalletTokens(walletAddress, filterAirdrops, cursor, chainID, limit, _options) {
        const requestContextPromise = this.requestFactory.getWalletTokens(walletAddress, filterAirdrops, cursor, chainID, limit, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getWalletTokens(rsp)));
        }));
    }
    /**
     * Returns a list of collections with tokens owned by a wallet.
     * Get owned NFT collections
     * @param walletAddress A hex string referencing a public wallet address.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param filterAirdrops A boolean that will remove airdropped tokens from a result set.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ getWalletTokensByCollections(walletAddress, cursor, filterAirdrops, chainID, limit, _options) {
        const requestContextPromise = this.requestFactory.getWalletTokensByCollections(walletAddress, cursor, filterAirdrops, chainID, limit, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getWalletTokensByCollections(rsp)));
        }));
    }
    /**
     * Returns transactions related to a wallet.
     * Get wallet transactions
     * @param walletAddress A hex string referencing a public wallet address.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param limit Limits the number of results in a single response.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param tokenType The token type filters a query to only a subset of tokens, for example, only NFTs. To select ERC-20 and sidechain transactions, use the \&quot;fungible\&quot; value. To select only NFTs or semi-fungible tokens (SFTs), use the \&quot;NFT\&quot; or \&quot;SFT\&quot; enums. To select only L1 native token transactions, use the \&quot;native\&quot; enum.
     */ getWalletTransactions(walletAddress, cursor, limit, chainID, tokenType, _options) {
        const requestContextPromise = this.requestFactory.getWalletTransactions(walletAddress, cursor, limit, chainID, tokenType, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getWalletTransactions(rsp)));
        }));
    }
    /**
     * Get autocomplete-style search suggestions for wallets.
     * Autocomplete wallets
     * @param query A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     */ getWalletsSuggestionsResults(query, _options) {
        const requestContextPromise = this.requestFactory.getWalletsSuggestionsResults(query, _options);
        // build promise chain
        let middlewarePreObservable = (0, $5d5e5e9ce1041504$export$6788812c4e6611e6)(requestContextPromise);
        for (let middleware of this.configuration.middleware)middlewarePreObservable = middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>middleware.pre(ctx)));
        return middlewarePreObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((ctx)=>this.configuration.httpApi.send(ctx))).pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((response)=>{
            let middlewarePostObservable = (0, $5d5e5e9ce1041504$export$ba255e9e49e00608)(response);
            for (let middleware of this.configuration.middleware)middlewarePostObservable = middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$6b9f6c0d32c093f9)((rsp)=>middleware.post(rsp)));
            return middlewarePostObservable.pipe((0, $5d5e5e9ce1041504$export$871de8747c9eaa88)((rsp)=>this.responseProcessor.getWalletsSuggestionsResults(rsp)));
        }));
    }
}



class $dea83ef0cdd25c03$export$98ee16294f6e141d {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new (0, $38cc75600f18853d$export$4d28279d9100e3ff)(configuration, requestFactory, responseProcessor);
    }
    /**
     * Get autocomplete-style search suggestions for tokens.
     * Autocomplete tokens
     * @param query A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     */ getTokensSuggestionsResults(query, _options) {
        const result = this.api.getTokensSuggestionsResults(query, _options);
        return result.toPromise();
    }
    /**
     * Returns trending and interesting collections on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * Get top collections
     */ getTopCollections(_options) {
        const result = this.api.getTopCollections(_options);
        return result.toPromise();
    }
    /**
     * Returns trending and interesting NFTs and SFTs on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * Get top tokens
     */ getTopTokens(_options) {
        const result = this.api.getTopTokens(_options);
        return result.toPromise();
    }
    /**
     * Returns trending and interesting wallets on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * Get top wallets
     */ getTopWallets(_options) {
        const result = this.api.getTopWallets(_options);
        return result.toPromise();
    }
    /**
     * The metadata will be refreshed offline and later updated.
     * Submit a request for metadata to be refreshed.
     * @param contractAddress A hex address for a blockchain contract.
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param media Refresh media.
     */ postRefresh(contractAddress, tokenID, chainID, media, _options) {
        const result = this.api.postRefresh(contractAddress, tokenID, chainID, media, _options);
        return result.toPromise();
    }
}
class $dea83ef0cdd25c03$export$648399c2a48d44ca {
    constructor(configuration, requestFactory, responseProcessor){
        this.api = new (0, $38cc75600f18853d$export$ed3fb23aab9754d3)(configuration, requestFactory, responseProcessor);
    }
    /**
     * Lists all supported blockchains.
     * Get supported blockchains
     */ getBlockchains(_options) {
        const result = this.api.getBlockchains(_options);
        return result.toPromise();
    }
    /**
     * Get a collection by its contract address.
     * Get collection
     * @param contractAddress A hex address for a blockchain contract.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ getCollection(contractAddress, chainID, _options) {
        const result = this.api.getCollection(contractAddress, chainID, _options);
        return result.toPromise();
    }
    /**
     * Get autocomplete-style search suggestions for collections.
     * Autocomplete collections
     * @param query A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     */ getCollectionsSuggestionsResults(query, _options) {
        const result = this.api.getCollectionsSuggestionsResults(query, _options);
        return result.toPromise();
    }
    /**
     * Determine if a wallet has any token from a contract.
     * Has tokens
     * @param contractAddress A hex address for a blockchain contract.
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ getContractGate(contractAddress, walletAddress, chainID, _options) {
        const result = this.api.getContractGate(contractAddress, walletAddress, chainID, _options);
        return result.toPromise();
    }
    /**
     * Get tokens by contract address.
     * Get tokens
     * @param contractAddress A hex address for a blockchain contract.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ getContractTokens(contractAddress, chainID, limit, _options) {
        const result = this.api.getContractTokens(contractAddress, chainID, limit, _options);
        return result.toPromise();
    }
    /**
     * Returns tokens from a batch lookup.
     * Batch token lookup
     * @param contractAddresses A comma-separated hex address for a blockchain contract, the order of values should match the order in tokenIdentifiers.
     * @param tokenIdentifiers A comma-separated token ID, the order of values should match the order in contractAddresses.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ getContractTokensByContractAndID(contractAddresses, tokenIdentifiers, chainID, limit, _options) {
        const result = this.api.getContractTokensByContractAndID(contractAddresses, tokenIdentifiers, chainID, limit, _options);
        return result.toPromise();
    }
    /**
     * Get the transaction history for a collection.
     * Get collection transactions
     * @param contractAddress A hex address for a blockchain contract.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ getContractTransactionHistory(contractAddress, cursor, chainID, limit, _options) {
        const result = this.api.getContractTransactionHistory(contractAddress, cursor, chainID, limit, _options);
        return result.toPromise();
    }
    /**
     * Get ERC-20 metadata by contract address.
     * Get ERC-20 metadata
     * @param contractAddress A hex address for a blockchain contract.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ getERC20Metadata(contractAddress, chainID, _options) {
        const result = this.api.getERC20Metadata(contractAddress, chainID, _options);
        return result.toPromise();
    }
    /**
     * Get search results such as wallets, tokens, and collections by a search query.
     * Search
     * @param query A search query that returns matching results
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param limit Limits the number of results in a single response.
     */ getSearchResults(query, cursor, limit, _options) {
        const result = this.api.getSearchResults(query, cursor, limit, _options);
        return result.toPromise();
    }
    /**
     * Returns a list of tokens sold by a wallet.
     * Get sold tokens
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param limit Limits the number of results in a single response.
     */ getSoldTokens(walletAddress, chainID, cursor, limit, _options) {
        const result = this.api.getSoldTokens(walletAddress, chainID, cursor, limit, _options);
        return result.toPromise();
    }
    /**
     * Get autocomplete-style search suggestions for results.
     * Autocomplete
     * @param query A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     */ getSuggestionsResults(query, _options) {
        const result = this.api.getSuggestionsResults(query, _options);
        return result.toPromise();
    }
    /**
     * Get a token by its contract address and token ID.
     * Get token
     * @param contractAddress A hex address for a blockchain contract.
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ getToken(contractAddress, tokenID, chainID, _options) {
        const result = this.api.getToken(contractAddress, tokenID, chainID, _options);
        return result.toPromise();
    }
    /**
     * Determine if a wallet has a given token from a contract.
     * Has token
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param contractAddress A hex address for a blockchain contract.
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ getTokenGate(tokenID, contractAddress, walletAddress, chainID, _options) {
        const result = this.api.getTokenGate(tokenID, contractAddress, walletAddress, chainID, _options);
        return result.toPromise();
    }
    /**
     * Returns a list of transfer transactions on a specified token.
     * Get token transfers
     * @param contractAddress A hex address for a blockchain contract.
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ getTokenTransfers(contractAddress, tokenID, chainID, limit, _options) {
        const result = this.api.getTokenTransfers(contractAddress, tokenID, chainID, limit, _options);
        return result.toPromise();
    }
    /**
     * Get tokens by a search query.
     * Search tokens
     * @param query A search query that returns matching results
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     */ getTokensBySearchQuery(query, chainID, limit, cursor, _options) {
        const result = this.api.getTokensBySearchQuery(query, chainID, limit, cursor, _options);
        return result.toPromise();
    }
    /**
     * Get a wallet by a wallet address.
     * Get wallet
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ getWallet(walletAddress, chainID, _options) {
        const result = this.api.getWallet(walletAddress, chainID, _options);
        return result.toPromise();
    }
    /**
     * Returns a list of balances for tokens this wallet currently owns, sorted by contract.
     * Get balances
     * @param walletAddress A hex string referencing a public wallet address.
     * @param limit Limits the number of results in a single response.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */ getWalletBalances(walletAddress, limit, chainID, _options) {
        const result = this.api.getWalletBalances(walletAddress, limit, chainID, _options);
        return result.toPromise();
    }
    /**
     * Returns the latest approval events for all contracts the wallet has given spending authority to.
     * Get approved contracts
     * @param walletAddress A hex string referencing a public wallet address.
     */ getWalletContractApprovals(walletAddress, _options) {
        const result = this.api.getWalletContractApprovals(walletAddress, _options);
        return result.toPromise();
    }
    /**
     * Returns a list of tokens minted by a wallet.
     * Get minted tokens
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param limit Limits the number of results in a single response.
     */ getWalletMints(walletAddress, chainID, cursor, limit, _options) {
        const result = this.api.getWalletMints(walletAddress, chainID, cursor, limit, _options);
        return result.toPromise();
    }
    /**
     * Returns a list of tokens owned by a wallet.
     * Get owned tokens
     * @param walletAddress A hex string referencing a public wallet address.
     * @param filterAirdrops A boolean that will remove airdropped tokens from a result set.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ getWalletTokens(walletAddress, filterAirdrops, cursor, chainID, limit, _options) {
        const result = this.api.getWalletTokens(walletAddress, filterAirdrops, cursor, chainID, limit, _options);
        return result.toPromise();
    }
    /**
     * Returns a list of collections with tokens owned by a wallet.
     * Get owned NFT collections
     * @param walletAddress A hex string referencing a public wallet address.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param filterAirdrops A boolean that will remove airdropped tokens from a result set.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */ getWalletTokensByCollections(walletAddress, cursor, filterAirdrops, chainID, limit, _options) {
        const result = this.api.getWalletTokensByCollections(walletAddress, cursor, filterAirdrops, chainID, limit, _options);
        return result.toPromise();
    }
    /**
     * Returns transactions related to a wallet.
     * Get wallet transactions
     * @param walletAddress A hex string referencing a public wallet address.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param limit Limits the number of results in a single response.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param tokenType The token type filters a query to only a subset of tokens, for example, only NFTs. To select ERC-20 and sidechain transactions, use the \&quot;fungible\&quot; value. To select only NFTs or semi-fungible tokens (SFTs), use the \&quot;NFT\&quot; or \&quot;SFT\&quot; enums. To select only L1 native token transactions, use the \&quot;native\&quot; enum.
     */ getWalletTransactions(walletAddress, cursor, limit, chainID, tokenType, _options) {
        const result = this.api.getWalletTransactions(walletAddress, cursor, limit, chainID, tokenType, _options);
        return result.toPromise();
    }
    /**
     * Get autocomplete-style search suggestions for wallets.
     * Autocomplete wallets
     * @param query A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     */ getWalletsSuggestionsResults(query, _options) {
        const result = this.api.getWalletsSuggestionsResults(query, _options);
        return result.toPromise();
    }
}




export {$d6a2a28870838ac5$export$7d4f6ec394b0f86c as createConfiguration, $39e76b72a67606d3$export$a27bea7cdb975d70 as RequiredError, $dea83ef0cdd25c03$export$98ee16294f6e141d as AlphaApi, $dea83ef0cdd25c03$export$648399c2a48d44ca as DefaultApi, $2054034d901ee7cb$export$8343e6f32f5246de as HttpMethod, $2054034d901ee7cb$export$d5dc6a7bc778a961 as HttpException, $2054034d901ee7cb$export$5df49ba75ba1c1f9 as RequestContext, $2054034d901ee7cb$export$215c9c887406d98d as SelfDecodingBody, $2054034d901ee7cb$export$572398fa513d4c94 as ResponseContext, $2054034d901ee7cb$export$a384d32803e3e9b8 as wrapHttpLibrary, $7ec076538b6aea73$export$21faa149db867f8a as IsomorphicFetchHttpLibrary, $65d75a106ccf214f$export$92f32a979abdeed2 as ApikeyAuthentication, $65d75a106ccf214f$export$e978e3a6f405f991 as configureAuthMethods, $0152cf5e29389ba6$export$ec095bc1a0e9dc00 as BlockchainInfo, $539ff86f4a8bab6c$export$fb8073518f34e6ec as Collection, $58b8e637d75c9175$export$1c8dced55726649b as CurrencyInfo, $7eed368765da0756$export$40432f7468508f49 as ENS, $ecd06076e48fb6a1$export$915e9e7bd4f0f96d as ErrorMessage, $525073fdd8df943d$export$7fc53215244aec38 as Media, $49b8de1051317c9b$export$a694a2f74268cca as MediaPreview, $2106b4b33c02702e$export$e2b7ef15602a36a7 as MediaVersion, $a9078b79939cd912$export$a15d1e76d2203f4b as NonFungibleToken, $800da416b43a55e3$export$6130be7c2f175b4e as OpenSeaContract, $aaf6584bed4876f6$export$5708ccdce007a0d9 as OwnedCollection, $4bdc8ed11676dbc8$export$25de7845cd69fc8e as SearchDocument, $7c6bc9ad9a5e08ac$export$b5bd25ab3bfc98 as SocialMedia, $c5ee18a57d34bf04$export$50792b0e93539fde as Token, $9099178cb753644d$export$ac008993769ce8fd as TokenAttribute, $201363496c5c1e1e$export$2cb2e533a0c83c50 as TokenEvents, $77d18158b506f9cb$export$febc5573c75cefb0 as Transaction, $b5b6aa7ec82a6b0c$export$ad3644717ae62333 as TransactionLogLine, $027dc3ac4e9305b5$export$61abde59b50deb8e as URL, $a6f1c12c62b1a531$export$bcca3ea514774656 as Wallet, $c492fa7dca7a7f17$export$bbe47d7715ae7ea2 as AssetGate, $d88b607011ab15bf$export$14bd3dc13236b3f1 as AutoSuggestion, $cc8046c1fd9a5ab5$export$97f37e2f86888b8c as CreditEvent, $4316086235fec1ee$export$a8f0d8e344c547a4 as ExchangeEvent, $eb7c0930257b877e$export$c87c89abb30c56c9 as ERC20Metadata, $212269051af2d65b$export$fa7847a6d78e3bed as NFTTransaction, $25a8c7398935e4f9$export$249a83b27a0b0d1c as NFTTransactionLogLine, $a6b129c5f384a4a1$export$96fc0f3bebede439 as ApiException, $c261d649da09318f$export$f8ba0b589abffc9c as ServerConfiguration, $c261d649da09318f$export$856443aa55f6e609 as server1, $c261d649da09318f$export$586cd91fdb30a529 as servers};
//# sourceMappingURL=index.js.map
