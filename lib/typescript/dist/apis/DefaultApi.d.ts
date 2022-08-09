import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { BlockchainInfo } from '../models/BlockchainInfo';
import { Collection } from '../models/Collection';
import { CurrencyInfo } from '../models/CurrencyInfo';
import { SearchDocument } from '../models/SearchDocument';
import { Token } from '../models/Token';
import { TokenEvents } from '../models/TokenEvents';
import { TokenGate } from '../models/TokenGate';
import { Transaction } from '../models/Transaction';
import { Wallet } from '../models/Wallet';
export declare class DefaultApiRequestFactory extends BaseAPIRequestFactory {
    getBlockchains(_options?: Configuration): Promise<RequestContext>;
    getCollection(contractAddress: string, chainID?: string, _options?: Configuration): Promise<RequestContext>;
    getContractTokens(contractAddress: string, chainID?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getContractTokensByContractAndID(contractAddresses: string, tokenIdentifiers: string, chainID?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getContractTransactionHistory(contractAddress: string, cursor?: string, chainID?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getSearchResults(query: string, cursor?: string, _options?: Configuration): Promise<RequestContext>;
    getSoldTokens(walletAddress: string, chainID?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getToken(contractAddress: string, tokenID: string, chainID?: string, _options?: Configuration): Promise<RequestContext>;
    getTokenGate(tokenID: string, contractAddress: string, walletAddress: string, chainID?: string, _options?: Configuration): Promise<RequestContext>;
    getTokenTransfers(contractAddress: string, tokenID: string, chainID?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getTokensBySearchQuery(query: string, cursor?: string, _options?: Configuration): Promise<RequestContext>;
    getWallet(walletAddress: string, chainID?: string, _options?: Configuration): Promise<RequestContext>;
    getWalletBalances(walletAddress: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getWalletMints(walletAddress: string, chainID?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getWalletTokens(walletAddress: string, cursor?: string, chainID?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getWalletTransactions(walletAddress: string, cursor?: string, limit?: number, chainID?: string, tokenType?: 'NFT' | 'SFT' | 'unknown', _options?: Configuration): Promise<RequestContext>;
}
export declare class DefaultApiResponseProcessor {
    getBlockchains(response: ResponseContext): Promise<Array<BlockchainInfo>>;
    getCollection(response: ResponseContext): Promise<Array<Collection>>;
    getContractTokens(response: ResponseContext): Promise<Array<Token>>;
    getContractTokensByContractAndID(response: ResponseContext): Promise<Array<Token>>;
    getContractTransactionHistory(response: ResponseContext): Promise<Array<Transaction>>;
    getSearchResults(response: ResponseContext): Promise<Array<SearchDocument>>;
    getSoldTokens(response: ResponseContext): Promise<Array<Token>>;
    getToken(response: ResponseContext): Promise<Array<Token>>;
    getTokenGate(response: ResponseContext): Promise<TokenGate>;
    getTokenTransfers(response: ResponseContext): Promise<TokenEvents>;
    getTokensBySearchQuery(response: ResponseContext): Promise<Array<Token>>;
    getWallet(response: ResponseContext): Promise<Array<Wallet>>;
    getWalletBalances(response: ResponseContext): Promise<Array<CurrencyInfo>>;
    getWalletMints(response: ResponseContext): Promise<Array<Token>>;
    getWalletTokens(response: ResponseContext): Promise<Array<Token>>;
    getWalletTransactions(response: ResponseContext): Promise<Array<Transaction>>;
}
