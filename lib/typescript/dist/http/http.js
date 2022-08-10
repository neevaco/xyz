var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import URLParse from "url-parse";
import { from } from '../rxjsStub';
export * from './isomorphic-fetch';
export var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["HEAD"] = "HEAD";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["CONNECT"] = "CONNECT";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["TRACE"] = "TRACE";
    HttpMethod["PATCH"] = "PATCH";
})(HttpMethod || (HttpMethod = {}));
export class HttpException extends Error {
    constructor(msg) {
        super(msg);
    }
}
export class RequestContext {
    constructor(url, httpMethod) {
        this.httpMethod = httpMethod;
        this.headers = {};
        this.body = undefined;
        this.url = new URLParse(url, true);
    }
    getUrl() {
        return this.url.toString();
    }
    setUrl(url) {
        this.url = new URLParse(url, true);
    }
    setBody(body) {
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
    addCookie(name, value) {
        if (!this.headers["Cookie"]) {
            this.headers["Cookie"] = "";
        }
        this.headers["Cookie"] += name + "=" + value + "; ";
    }
    setHeaderParam(key, value) {
        this.headers[key] = value;
    }
}
export class SelfDecodingBody {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    binary() {
        return this.dataSource;
    }
    text() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.dataSource;
            if (data.text) {
                return data.text();
            }
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.addEventListener("load", () => resolve(reader.result));
                reader.addEventListener("error", () => reject(reader.error));
                reader.readAsText(data);
            });
        });
    }
}
export class ResponseContext {
    constructor(httpStatusCode, headers, body) {
        this.httpStatusCode = httpStatusCode;
        this.headers = headers;
        this.body = body;
    }
    getParsedHeader(headerName) {
        const result = {};
        if (!this.headers[headerName]) {
            return result;
        }
        const parameters = this.headers[headerName].split(";");
        for (const parameter of parameters) {
            let [key, value] = parameter.split("=", 2);
            key = key.toLowerCase().trim();
            if (value === undefined) {
                result[""] = key;
            }
            else {
                value = value.trim();
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.substring(1, value.length - 1);
                }
                result[key] = value;
            }
        }
        return result;
    }
    getBodyAsFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.body.binary();
            const fileName = this.getParsedHeader("content-disposition")["filename"] || "";
            const contentType = this.headers["content-type"] || "";
            try {
                return new File([data], fileName, { type: contentType });
            }
            catch (error) {
                return Object.assign(data, {
                    name: fileName,
                    type: contentType
                });
            }
        });
    }
    getBodyAsAny() {
        try {
            return this.body.text();
        }
        catch (_a) { }
        try {
            return this.body.binary();
        }
        catch (_b) { }
        return Promise.resolve(undefined);
    }
}
export function wrapHttpLibrary(promiseHttpLibrary) {
    return {
        send(request) {
            return from(promiseHttpLibrary.send(request));
        }
    };
}
//# sourceMappingURL=http.js.map