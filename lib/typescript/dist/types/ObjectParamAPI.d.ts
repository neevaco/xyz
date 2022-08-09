import { Configuration } from '../configuration';
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
export interface AlphaApiGetTopCollectionsRequest {
}
export interface AlphaApiGetTopTokensRequest {
}
export interface AlphaApiGetTopWalletsRequest {
}
export declare class ObjectAlphaApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AlphaApiRequestFactory, responseProcessor?: AlphaApiResponseProcessor);
    getTopCollections(param?: AlphaApiGetTopCollectionsRequest, options?: Configuration): Promise<Array<Collection>>;
    getTopTokens(param?: AlphaApiGetTopTokensRequest, options?: Configuration): Promise<Array<Token>>;
    getTopWallets(param?: AlphaApiGetTopWalletsRequest, options?: Configuration): Promise<Array<Wallet>>;
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export interface DefaultApiGetBlockchainsRequest {
}
export interface DefaultApiGetCollectionRequest {
    contractAddress: string;
    chainID?: string;
}
export interface DefaultApiGetContractTokensRequest {
    contractAddress: string;
    chainID?: string;
    limit?: number;
}
export interface DefaultApiGetContractTokensByContractAndIDRequest {
    contractAddresses: string;
    tokenIdentifiers: string;
    chainID?: string;
    limit?: number;
}
export interface DefaultApiGetContractTransactionHistoryRequest {
    contractAddress: string;
    cursor?: string;
    chainID?: string;
    limit?: number;
}
export interface DefaultApiGetSearchResultsRequest {
    query: string;
    cursor?: string;
}
export interface DefaultApiGetSoldTokensRequest {
    walletAddress: string;
    chainID?: string;
    cursor?: string;
    limit?: number;
}
export interface DefaultApiGetTokenRequest {
    contractAddress: string;
    tokenID: string;
    chainID?: string;
}
export interface DefaultApiGetTokenGateRequest {
    tokenID: string;
    contractAddress: string;
    walletAddress: string;
    chainID?: string;
}
export interface DefaultApiGetTokenTransfersRequest {
    contractAddress: string;
    tokenID: string;
    chainID?: string;
    limit?: number;
}
export interface DefaultApiGetTokensBySearchQueryRequest {
    query: string;
    cursor?: string;
}
export interface DefaultApiGetWalletRequest {
    walletAddress: string;
    chainID?: string;
}
export interface DefaultApiGetWalletBalancesRequest {
    walletAddress: string;
    limit?: number;
}
export interface DefaultApiGetWalletMintsRequest {
    walletAddress: string;
    chainID?: string;
    cursor?: string;
    limit?: number;
}
export interface DefaultApiGetWalletTokensRequest {
    walletAddress: string;
    cursor?: string;
    chainID?: string;
    limit?: number;
}
export interface DefaultApiGetWalletTransactionsRequest {
    walletAddress: string;
    cursor?: string;
    limit?: number;
    chainID?: string;
    tokenType?: 'NFT' | 'SFT' | 'unknown';
}
export declare class ObjectDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    getBlockchains(param?: DefaultApiGetBlockchainsRequest, options?: Configuration): Promise<Array<BlockchainInfo>>;
    getCollection(param: DefaultApiGetCollectionRequest, options?: Configuration): Promise<Array<Collection>>;
    getContractTokens(param: DefaultApiGetContractTokensRequest, options?: Configuration): Promise<Array<Token>>;
    getContractTokensByContractAndID(param: DefaultApiGetContractTokensByContractAndIDRequest, options?: Configuration): Promise<Array<Token>>;
    getContractTransactionHistory(param: DefaultApiGetContractTransactionHistoryRequest, options?: Configuration): Promise<Array<Transaction>>;
    getSearchResults(param: DefaultApiGetSearchResultsRequest, options?: Configuration): Promise<Array<SearchDocument>>;
    getSoldTokens(param: DefaultApiGetSoldTokensRequest, options?: Configuration): Promise<Array<Token>>;
    getToken(param: DefaultApiGetTokenRequest, options?: Configuration): Promise<Array<Token>>;
    getTokenGate(param: DefaultApiGetTokenGateRequest, options?: Configuration): Promise<TokenGate>;
    getTokenTransfers(param: DefaultApiGetTokenTransfersRequest, options?: Configuration): Promise<TokenEvents>;
    getTokensBySearchQuery(param: DefaultApiGetTokensBySearchQueryRequest, options?: Configuration): Promise<Array<Token>>;
    getWallet(param: DefaultApiGetWalletRequest, options?: Configuration): Promise<Array<Wallet>>;
    getWalletBalances(param: DefaultApiGetWalletBalancesRequest, options?: Configuration): Promise<Array<CurrencyInfo>>;
    getWalletMints(param: DefaultApiGetWalletMintsRequest, options?: Configuration): Promise<Array<Token>>;
    getWalletTokens(param: DefaultApiGetWalletTokensRequest, options?: Configuration): Promise<Array<Token>>;
    getWalletTransactions(param: DefaultApiGetWalletTransactionsRequest, options?: Configuration): Promise<Array<Transaction>>;
}
