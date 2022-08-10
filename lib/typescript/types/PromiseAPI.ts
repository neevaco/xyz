import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { BlockchainInfo } from '../models/BlockchainInfo';
import { Collection } from '../models/Collection';
import { CurrencyInfo } from '../models/CurrencyInfo';
import { ENS } from '../models/ENS';
import { ErrorMessage } from '../models/ErrorMessage';
import { Media } from '../models/Media';
import { MediaPreview } from '../models/MediaPreview';
import { MediaVersion } from '../models/MediaVersion';
import { NonFungibleToken } from '../models/NonFungibleToken';
import { OpenSeaContract } from '../models/OpenSeaContract';
import { OwnedCollection } from '../models/OwnedCollection';
import { SearchDocument } from '../models/SearchDocument';
import { SocialMedia } from '../models/SocialMedia';
import { Token } from '../models/Token';
import { TokenAttribute } from '../models/TokenAttribute';
import { TokenEvents } from '../models/TokenEvents';
import { TokenGate } from '../models/TokenGate';
import { Transaction } from '../models/Transaction';
import { TransactionLogLine } from '../models/TransactionLogLine';
import { URL } from '../models/URL';
import { Wallet } from '../models/Wallet';
import { ObservableAlphaApi } from './ObservableAPI';

import { AlphaApiRequestFactory, AlphaApiResponseProcessor} from "../apis/AlphaApi";
export class PromiseAlphaApi {
    private api: ObservableAlphaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AlphaApiRequestFactory,
        responseProcessor?: AlphaApiResponseProcessor
    ) {
        this.api = new ObservableAlphaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns trending and interesting collections on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     */
    public getTopCollections(_options?: Configuration): Promise<Array<Collection>> {
        const result = this.api.getTopCollections(_options);
        return result.toPromise();
    }

    /**
     * Returns trending and interesting NFTs and SFTs on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     */
    public getTopTokens(_options?: Configuration): Promise<Array<Token>> {
        const result = this.api.getTopTokens(_options);
        return result.toPromise();
    }

    /**
     * Returns trending and interesting wallets on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     */
    public getTopWallets(_options?: Configuration): Promise<Array<Wallet>> {
        const result = this.api.getTopWallets(_options);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Lists all supported blockchains.
     */
    public getBlockchains(_options?: Configuration): Promise<Array<BlockchainInfo>> {
        const result = this.api.getBlockchains(_options);
        return result.toPromise();
    }

    /**
     * Get a collection by its contract address.
     * @param contractAddress A hex address for a blockchain contract.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */
    public getCollection(contractAddress: string, chainID?: string, _options?: Configuration): Promise<Array<Collection>> {
        const result = this.api.getCollection(contractAddress, chainID, _options);
        return result.toPromise();
    }

    /**
     * Get tokens by contract address.
     * @param contractAddress A hex address for a blockchain contract.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */
    public getContractTokens(contractAddress: string, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<Token>> {
        const result = this.api.getContractTokens(contractAddress, chainID, limit, _options);
        return result.toPromise();
    }

    /**
     * Get tokens by a pair of contract addresses and token IDs. The input are two ordered arrays. The first element of contractAddresses should be related to the 1st element of the tokenID, etc. In the below example two tokens are being requested, token 3481 from the \"goblintown\" contract (i.e. 0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e) and token 50603 from the Otherdeed contract (i.e. 0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258).
     * @param contractAddresses A comma-separated hex address for a blockchain contract, the order of values should match the order in tokenIdentifiers.
     * @param tokenIdentifiers A comma-separated token ID, the order of values should match the order in contractAddresses.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */
    public getContractTokensByContractAndID(contractAddresses: string, tokenIdentifiers: string, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<Token>> {
        const result = this.api.getContractTokensByContractAndID(contractAddresses, tokenIdentifiers, chainID, limit, _options);
        return result.toPromise();
    }

    /**
     * Get the transaction history for a collection
     * @param contractAddress A hex address for a blockchain contract.
     * @param cursor Cursor to support API pagination.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */
    public getContractTransactionHistory(contractAddress: string, cursor?: string, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<Transaction>> {
        const result = this.api.getContractTransactionHistory(contractAddress, cursor, chainID, limit, _options);
        return result.toPromise();
    }

    /**
     * Get search results such as wallets, tokens, and collections by a search query.
     * @param query A search query that returns matching results
     * @param cursor Cursor to support API pagination.
     */
    public getSearchResults(query: string, cursor?: string, _options?: Configuration): Promise<Array<SearchDocument>> {
        const result = this.api.getSearchResults(query, cursor, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of tokens sold by a wallet.
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param cursor Cursor to support API pagination.
     * @param limit Limits the number of results in a single response.
     */
    public getSoldTokens(walletAddress: string, chainID?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<Array<Token>> {
        const result = this.api.getSoldTokens(walletAddress, chainID, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Get a token by its contract address and token ID.
     * @param contractAddress A hex address for a blockchain contract.
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */
    public getToken(contractAddress: string, tokenID: string, chainID?: string, _options?: Configuration): Promise<Array<Token>> {
        const result = this.api.getToken(contractAddress, tokenID, chainID, _options);
        return result.toPromise();
    }

    /**
     * Determine if a wallet has a given token from a contract.
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param contractAddress A hex address for a blockchain contract.
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */
    public getTokenGate(tokenID: string, contractAddress: string, walletAddress: string, chainID?: string, _options?: Configuration): Promise<TokenGate> {
        const result = this.api.getTokenGate(tokenID, contractAddress, walletAddress, chainID, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of transfer transactions on a specified token.
     * @param contractAddress A hex address for a blockchain contract.
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */
    public getTokenTransfers(contractAddress: string, tokenID: string, chainID?: string, limit?: number, _options?: Configuration): Promise<TokenEvents> {
        const result = this.api.getTokenTransfers(contractAddress, tokenID, chainID, limit, _options);
        return result.toPromise();
    }

    /**
     * Get tokens by a search query.
     * @param query A search query that returns matching results
     * @param cursor Cursor to support API pagination.
     */
    public getTokensBySearchQuery(query: string, cursor?: string, _options?: Configuration): Promise<Array<Token>> {
        const result = this.api.getTokensBySearchQuery(query, cursor, _options);
        return result.toPromise();
    }

    /**
     * Get a wallet by a wallet address
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */
    public getWallet(walletAddress: string, chainID?: string, _options?: Configuration): Promise<Array<Wallet>> {
        const result = this.api.getWallet(walletAddress, chainID, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of balances for tokens this wallet currently owns.
     * @param walletAddress A hex string referencing a public wallet address.
     * @param limit Limits the number of results in a single response.
     */
    public getWalletBalances(walletAddress: string, limit?: number, _options?: Configuration): Promise<Array<CurrencyInfo>> {
        const result = this.api.getWalletBalances(walletAddress, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of tokens minted by a wallet.
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param cursor Cursor to support API pagination.
     * @param limit Limits the number of results in a single response.
     */
    public getWalletMints(walletAddress: string, chainID?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<Array<Token>> {
        const result = this.api.getWalletMints(walletAddress, chainID, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of tokens owned by a wallet.
     * @param walletAddress A hex string referencing a public wallet address.
     * @param cursor Cursor to support API pagination.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */
    public getWalletTokens(walletAddress: string, cursor?: string, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<Token>> {
        const result = this.api.getWalletTokens(walletAddress, cursor, chainID, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of transactions that have been performed by this wallet. Use token type to restrict to only certain transactions, such as NFTs
     * @param walletAddress A hex string referencing a public wallet address.
     * @param cursor Cursor to support API pagination.
     * @param limit Limits the number of results in a single response.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param tokenType An indicator that be used to filter to only a subet of tokens, for example only NFTs.
     */
    public getWalletTransactions(walletAddress: string, cursor?: string, limit?: number, chainID?: string, tokenType?: 'NFT' | 'SFT' | 'unknown', _options?: Configuration): Promise<Array<Transaction>> {
        const result = this.api.getWalletTransactions(walletAddress, cursor, limit, chainID, tokenType, _options);
        return result.toPromise();
    }


}



