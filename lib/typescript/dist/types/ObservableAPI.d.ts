import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { BlockchainInfo } from '../models/BlockchainInfo';
import { Collection } from '../models/Collection';
import { CurrencyInfo } from '../models/CurrencyInfo';
import { SearchDocument } from '../models/SearchDocument';
import { Token } from '../models/Token';
import { TokenEvents } from '../models/TokenEvents';
import { TokenGate } from '../models/TokenGate';
import { Transaction } from '../models/Transaction';
import { Wallet } from '../models/Wallet';
import { AlphaApiRequestFactory, AlphaApiResponseProcessor } from "../apis/AlphaApi";
export declare class ObservableAlphaApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AlphaApiRequestFactory, responseProcessor?: AlphaApiResponseProcessor);
    getTopCollections(_options?: Configuration): Observable<Array<Collection>>;
    getTopTokens(_options?: Configuration): Observable<Array<Token>>;
    getTopWallets(_options?: Configuration): Observable<Array<Wallet>>;
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export declare class ObservableDefaultApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    getBlockchains(_options?: Configuration): Observable<Array<BlockchainInfo>>;
    getCollection(contractAddress: string, chainID?: string, _options?: Configuration): Observable<Array<Collection>>;
    getContractTokens(contractAddress: string, chainID?: string, limit?: number, _options?: Configuration): Observable<Array<Token>>;
    getContractTokensByContractAndID(contractAddresses: string, tokenIdentifiers: string, chainID?: string, limit?: number, _options?: Configuration): Observable<Array<Token>>;
    getContractTransactionHistory(contractAddress: string, cursor?: string, chainID?: string, limit?: number, _options?: Configuration): Observable<Array<Transaction>>;
    getSearchResults(query: string, cursor?: string, _options?: Configuration): Observable<Array<SearchDocument>>;
    getSoldTokens(walletAddress: string, chainID?: string, cursor?: string, limit?: number, _options?: Configuration): Observable<Array<Token>>;
    getToken(contractAddress: string, tokenID: string, chainID?: string, _options?: Configuration): Observable<Array<Token>>;
    getTokenGate(tokenID: string, contractAddress: string, walletAddress: string, chainID?: string, _options?: Configuration): Observable<TokenGate>;
    getTokenTransfers(contractAddress: string, tokenID: string, chainID?: string, limit?: number, _options?: Configuration): Observable<TokenEvents>;
    getTokensBySearchQuery(query: string, cursor?: string, _options?: Configuration): Observable<Array<Token>>;
    getWallet(walletAddress: string, chainID?: string, _options?: Configuration): Observable<Array<Wallet>>;
    getWalletBalances(walletAddress: string, limit?: number, _options?: Configuration): Observable<Array<CurrencyInfo>>;
    getWalletMints(walletAddress: string, chainID?: string, cursor?: string, limit?: number, _options?: Configuration): Observable<Array<Token>>;
    getWalletTokens(walletAddress: string, cursor?: string, chainID?: string, limit?: number, _options?: Configuration): Observable<Array<Token>>;
    getWalletTransactions(walletAddress: string, cursor?: string, limit?: number, chainID?: string, tokenType?: 'NFT' | 'SFT' | 'unknown', _options?: Configuration): Observable<Array<Transaction>>;
}
