export class ApikeyAuthentication {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    getName() {
        return "apikey";
    }
    applySecurityAuthentication(context) {
        context.setQueryParam("apikey", this.apiKey);
    }
}
export function configureAuthMethods(config) {
    let authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    if (config["apikey"]) {
        authMethods["apikey"] = new ApikeyAuthentication(config["apikey"]);
    }
    return authMethods;
}
//# sourceMappingURL=auth.js.map