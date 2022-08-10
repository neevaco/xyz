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
export declare class PromiseAlphaApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AlphaApiRequestFactory, responseProcessor?: AlphaApiResponseProcessor);
    getTopCollections(_options?: Configuration): Promise<Array<Collection>>;
    getTopTokens(_options?: Configuration): Promise<Array<Token>>;
    getTopWallets(_options?: Configuration): Promise<Array<Wallet>>;
}
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export declare class PromiseDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    getBlockchains(_options?: Configuration): Promise<Array<BlockchainInfo>>;
    getCollection(contractAddress: string, chainID?: string, _options?: Configuration): Promise<Array<Collection>>;
    getContractTokens(contractAddress: string, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<Token>>;
    getContractTokensByContractAndID(contractAddresses: string, tokenIdentifiers: string, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<Token>>;
    getContractTransactionHistory(contractAddress: string, cursor?: string, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<Transaction>>;
    getSearchResults(query: string, cursor?: string, _options?: Configuration): Promise<Array<SearchDocument>>;
    getSoldTokens(walletAddress: string, chainID?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<Array<Token>>;
    getToken(contractAddress: string, tokenID: string, chainID?: string, _options?: Configuration): Promise<Array<Token>>;
    getTokenGate(tokenID: string, contractAddress: string, walletAddress: string, chainID?: string, _options?: Configuration): Promise<TokenGate>;
    getTokenTransfers(contractAddress: string, tokenID: string, chainID?: string, limit?: number, _options?: Configuration): Promise<TokenEvents>;
    getTokensBySearchQuery(query: string, cursor?: string, _options?: Configuration): Promise<Array<Token>>;
    getWallet(walletAddress: string, chainID?: string, _options?: Configuration): Promise<Array<Wallet>>;
    getWalletBalances(walletAddress: string, limit?: number, _options?: Configuration): Promise<Array<CurrencyInfo>>;
    getWalletMints(walletAddress: string, chainID?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<Array<Token>>;
    getWalletTokens(walletAddress: string, cursor?: string, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<Token>>;
    getWalletTransactions(walletAddress: string, cursor?: string, limit?: number, chainID?: string, tokenType?: 'NFT' | 'SFT' | 'unknown', _options?: Configuration): Promise<Array<Transaction>>;
}
