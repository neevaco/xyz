import { ObservableAlphaApi } from "./ObservableAPI";
export class ObjectAlphaApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAlphaApi(configuration, requestFactory, responseProcessor);
    }
    getTopCollections(param = {}, options) {
        return this.api.getTopCollections(options).toPromise();
    }
    getTopTokens(param = {}, options) {
        return this.api.getTopTokens(options).toPromise();
    }
    getTopWallets(param = {}, options) {
        return this.api.getTopWallets(options).toPromise();
    }
}
import { ObservableDefaultApi } from "./ObservableAPI";
export class ObjectDefaultApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    getBlockchains(param = {}, options) {
        return this.api.getBlockchains(options).toPromise();
    }
    getCollection(param, options) {
        return this.api.getCollection(param.contractAddress, param.chainID, options).toPromise();
    }
    getContractTokens(param, options) {
        return this.api.getContractTokens(param.contractAddress, param.chainID, param.limit, options).toPromise();
    }
    getContractTokensByContractAndID(param, options) {
        return this.api.getContractTokensByContractAndID(param.contractAddresses, param.tokenIdentifiers, param.chainID, param.limit, options).toPromise();
    }
    getContractTransactionHistory(param, options) {
        return this.api.getContractTransactionHistory(param.contractAddress, param.cursor, param.chainID, param.limit, options).toPromise();
    }
    getSearchResults(param, options) {
        return this.api.getSearchResults(param.query, param.cursor, options).toPromise();
    }
    getSoldTokens(param, options) {
        return this.api.getSoldTokens(param.walletAddress, param.chainID, param.cursor, param.limit, options).toPromise();
    }
    getToken(param, options) {
        return this.api.getToken(param.contractAddress, param.tokenID, param.chainID, options).toPromise();
    }
    getTokenGate(param, options) {
        return this.api.getTokenGate(param.tokenID, param.contractAddress, param.walletAddress, param.chainID, options).toPromise();
    }
    getTokenTransfers(param, options) {
        return this.api.getTokenTransfers(param.contractAddress, param.tokenID, param.chainID, param.limit, options).toPromise();
    }
    getTokensBySearchQuery(param, options) {
        return this.api.getTokensBySearchQuery(param.query, param.cursor, options).toPromise();
    }
    getWallet(param, options) {
        return this.api.getWallet(param.walletAddress, param.chainID, options).toPromise();
    }
    getWalletBalances(param, options) {
        return this.api.getWalletBalances(param.walletAddress, param.limit, options).toPromise();
    }
    getWalletMints(param, options) {
        return this.api.getWalletMints(param.walletAddress, param.chainID, param.cursor, param.limit, options).toPromise();
    }
    getWalletTokens(param, options) {
        return this.api.getWalletTokens(param.walletAddress, param.cursor, param.chainID, param.limit, options).toPromise();
    }
    getWalletTransactions(param, options) {
        return this.api.getWalletTransactions(param.walletAddress, param.cursor, param.limit, param.chainID, param.tokenType, options).toPromise();
    }
}
//# sourceMappingURL=ObjectParamAPI.js.map