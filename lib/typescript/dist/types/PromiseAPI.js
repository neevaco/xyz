import { ObservableAlphaApi } from './ObservableAPI';
export class PromiseAlphaApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAlphaApi(configuration, requestFactory, responseProcessor);
    }
    getTopCollections(_options) {
        const result = this.api.getTopCollections(_options);
        return result.toPromise();
    }
    getTopTokens(_options) {
        const result = this.api.getTopTokens(_options);
        return result.toPromise();
    }
    getTopWallets(_options) {
        const result = this.api.getTopWallets(_options);
        return result.toPromise();
    }
}
import { ObservableDefaultApi } from './ObservableAPI';
export class PromiseDefaultApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    getBlockchains(_options) {
        const result = this.api.getBlockchains(_options);
        return result.toPromise();
    }
    getCollection(contractAddress, chainID, _options) {
        const result = this.api.getCollection(contractAddress, chainID, _options);
        return result.toPromise();
    }
    getContractTokens(contractAddress, chainID, limit, _options) {
        const result = this.api.getContractTokens(contractAddress, chainID, limit, _options);
        return result.toPromise();
    }
    getContractTokensByContractAndID(contractAddresses, tokenIdentifiers, chainID, limit, _options) {
        const result = this.api.getContractTokensByContractAndID(contractAddresses, tokenIdentifiers, chainID, limit, _options);
        return result.toPromise();
    }
    getContractTransactionHistory(contractAddress, cursor, chainID, limit, _options) {
        const result = this.api.getContractTransactionHistory(contractAddress, cursor, chainID, limit, _options);
        return result.toPromise();
    }
    getSearchResults(query, cursor, _options) {
        const result = this.api.getSearchResults(query, cursor, _options);
        return result.toPromise();
    }
    getSoldTokens(walletAddress, chainID, cursor, limit, _options) {
        const result = this.api.getSoldTokens(walletAddress, chainID, cursor, limit, _options);
        return result.toPromise();
    }
    getToken(contractAddress, tokenID, chainID, _options) {
        const result = this.api.getToken(contractAddress, tokenID, chainID, _options);
        return result.toPromise();
    }
    getTokenGate(tokenID, contractAddress, walletAddress, chainID, _options) {
        const result = this.api.getTokenGate(tokenID, contractAddress, walletAddress, chainID, _options);
        return result.toPromise();
    }
    getTokenTransfers(contractAddress, tokenID, chainID, limit, _options) {
        const result = this.api.getTokenTransfers(contractAddress, tokenID, chainID, limit, _options);
        return result.toPromise();
    }
    getTokensBySearchQuery(query, cursor, _options) {
        const result = this.api.getTokensBySearchQuery(query, cursor, _options);
        return result.toPromise();
    }
    getWallet(walletAddress, chainID, _options) {
        const result = this.api.getWallet(walletAddress, chainID, _options);
        return result.toPromise();
    }
    getWalletBalances(walletAddress, limit, _options) {
        const result = this.api.getWalletBalances(walletAddress, limit, _options);
        return result.toPromise();
    }
    getWalletMints(walletAddress, chainID, cursor, limit, _options) {
        const result = this.api.getWalletMints(walletAddress, chainID, cursor, limit, _options);
        return result.toPromise();
    }
    getWalletTokens(walletAddress, cursor, chainID, limit, _options) {
        const result = this.api.getWalletTokens(walletAddress, cursor, chainID, limit, _options);
        return result.toPromise();
    }
    getWalletTransactions(walletAddress, cursor, limit, chainID, tokenType, _options) {
        const result = this.api.getWalletTransactions(walletAddress, cursor, limit, chainID, tokenType, _options);
        return result.toPromise();
    }
}
//# sourceMappingURL=PromiseAPI.js.map