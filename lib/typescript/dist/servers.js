import { RequestContext } from "./http/http";
export class ServerConfiguration {
    constructor(url, variableConfiguration) {
        this.url = url;
        this.variableConfiguration = variableConfiguration;
    }
    setVariables(variableConfiguration) {
        Object.assign(this.variableConfiguration, variableConfiguration);
    }
    getConfiguration() {
        return this.variableConfiguration;
    }
    getUrl() {
        let replacedUrl = this.url;
        for (const key in this.variableConfiguration) {
            var re = new RegExp("{" + key + "}", "g");
            replacedUrl = replacedUrl.replace(re, this.variableConfiguration[key]);
        }
        return replacedUrl;
    }
    makeRequestContext(endpoint, httpMethod) {
        return new RequestContext(this.getUrl() + endpoint, httpMethod);
    }
}
export const server1 = new ServerConfiguration("https://api.n.xyz", {});
export const server2 = new ServerConfiguration("https://m1api.n.xyz", {});
export const server3 = new ServerConfiguration("https://localhost:2000", {});
export const server4 = new ServerConfiguration("https://api.n.dev:2000", {});
export const server5 = new ServerConfiguration("https://m1-xyzd.web3.svc.cluster.local", {});
export const server6 = new ServerConfiguration("https://xyzd", {});
export const servers = [server1, server2, server3, server4, server5, server6];
//# sourceMappingURL=servers.js.map