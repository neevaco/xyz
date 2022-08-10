import { of, from } from '../rxjsStub';
import { mergeMap, map } from '../rxjsStub';
import { AlphaApiRequestFactory, AlphaApiResponseProcessor } from "../apis/AlphaApi";
export class ObservableAlphaApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AlphaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AlphaApiResponseProcessor();
    }
    getTopCollections(_options) {
        const requestContextPromise = this.requestFactory.getTopCollections(_options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getTopCollections(rsp)));
        }));
    }
    getTopTokens(_options) {
        const requestContextPromise = this.requestFactory.getTopTokens(_options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getTopTokens(rsp)));
        }));
    }
    getTopWallets(_options) {
        const requestContextPromise = this.requestFactory.getTopWallets(_options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getTopWallets(rsp)));
        }));
    }
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export class ObservableDefaultApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }
    getBlockchains(_options) {
        const requestContextPromise = this.requestFactory.getBlockchains(_options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getBlockchains(rsp)));
        }));
    }
    getCollection(contractAddress, chainID, _options) {
        const requestContextPromise = this.requestFactory.getCollection(contractAddress, chainID, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getCollection(rsp)));
        }));
    }
    getContractTokens(contractAddress, chainID, limit, _options) {
        const requestContextPromise = this.requestFactory.getContractTokens(contractAddress, chainID, limit, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getContractTokens(rsp)));
        }));
    }
    getContractTokensByContractAndID(contractAddresses, tokenIdentifiers, chainID, limit, _options) {
        const requestContextPromise = this.requestFactory.getContractTokensByContractAndID(contractAddresses, tokenIdentifiers, chainID, limit, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getContractTokensByContractAndID(rsp)));
        }));
    }
    getContractTransactionHistory(contractAddress, cursor, chainID, limit, _options) {
        const requestContextPromise = this.requestFactory.getContractTransactionHistory(contractAddress, cursor, chainID, limit, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getContractTransactionHistory(rsp)));
        }));
    }
    getSearchResults(query, cursor, _options) {
        const requestContextPromise = this.requestFactory.getSearchResults(query, cursor, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getSearchResults(rsp)));
        }));
    }
    getSoldTokens(walletAddress, chainID, cursor, limit, _options) {
        const requestContextPromise = this.requestFactory.getSoldTokens(walletAddress, chainID, cursor, limit, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getSoldTokens(rsp)));
        }));
    }
    getToken(contractAddress, tokenID, chainID, _options) {
        const requestContextPromise = this.requestFactory.getToken(contractAddress, tokenID, chainID, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getToken(rsp)));
        }));
    }
    getTokenGate(tokenID, contractAddress, walletAddress, chainID, _options) {
        const requestContextPromise = this.requestFactory.getTokenGate(tokenID, contractAddress, walletAddress, chainID, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getTokenGate(rsp)));
        }));
    }
    getTokenTransfers(contractAddress, tokenID, chainID, limit, _options) {
        const requestContextPromise = this.requestFactory.getTokenTransfers(contractAddress, tokenID, chainID, limit, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getTokenTransfers(rsp)));
        }));
    }
    getTokensBySearchQuery(query, cursor, _options) {
        const requestContextPromise = this.requestFactory.getTokensBySearchQuery(query, cursor, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getTokensBySearchQuery(rsp)));
        }));
    }
    getWallet(walletAddress, chainID, _options) {
        const requestContextPromise = this.requestFactory.getWallet(walletAddress, chainID, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getWallet(rsp)));
        }));
    }
    getWalletBalances(walletAddress, limit, _options) {
        const requestContextPromise = this.requestFactory.getWalletBalances(walletAddress, limit, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getWalletBalances(rsp)));
        }));
    }
    getWalletMints(walletAddress, chainID, cursor, limit, _options) {
        const requestContextPromise = this.requestFactory.getWalletMints(walletAddress, chainID, cursor, limit, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getWalletMints(rsp)));
        }));
    }
    getWalletTokens(walletAddress, cursor, chainID, limit, _options) {
        const requestContextPromise = this.requestFactory.getWalletTokens(walletAddress, cursor, chainID, limit, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getWalletTokens(rsp)));
        }));
    }
    getWalletTransactions(walletAddress, cursor, limit, chainID, tokenType, _options) {
        const requestContextPromise = this.requestFactory.getWalletTransactions(walletAddress, cursor, limit, chainID, tokenType, _options);
        let middlewarePreObservable = from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response) => {
            let middlewarePostObservable = of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(map((rsp) => this.responseProcessor.getWalletTransactions(rsp)));
        }));
    }
}
//# sourceMappingURL=ObservableAPI.js.map