import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AssetGate } from '../models/AssetGate';
import { AutoSuggestion } from '../models/AutoSuggestion';
import { BlockchainInfo } from '../models/BlockchainInfo';
import { Collection } from '../models/Collection';
import { CreditEvent } from '../models/CreditEvent';
import { CurrencyInfo } from '../models/CurrencyInfo';
import { ENS } from '../models/ENS';
import { ERC20Metadata } from '../models/ERC20Metadata';
import { ErrorMessage } from '../models/ErrorMessage';
import { ExchangeEvent } from '../models/ExchangeEvent';
import { Media } from '../models/Media';
import { MediaPreview } from '../models/MediaPreview';
import { MediaVersion } from '../models/MediaVersion';
import { NFTTransaction } from '../models/NFTTransaction';
import { NFTTransactionLogLine } from '../models/NFTTransactionLogLine';
import { NonFungibleToken } from '../models/NonFungibleToken';
import { OpenSeaContract } from '../models/OpenSeaContract';
import { OwnedCollection } from '../models/OwnedCollection';
import { SearchDocument } from '../models/SearchDocument';
import { SocialMedia } from '../models/SocialMedia';
import { Token } from '../models/Token';
import { TokenAttribute } from '../models/TokenAttribute';
import { TokenEvents } from '../models/TokenEvents';
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
     * Get autocomplete-style search suggestions for tokens.
     * Autocomplete tokens
     * @param query A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     */
    public getTokensSuggestionsResults(query?: string, _options?: Configuration): Promise<Array<AutoSuggestion>> {
        const result = this.api.getTokensSuggestionsResults(query, _options);
        return result.toPromise();
    }

    /**
     * Returns trending and interesting collections on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * Get top collections
     */
    public getTopCollections(_options?: Configuration): Promise<Array<Collection>> {
        const result = this.api.getTopCollections(_options);
        return result.toPromise();
    }

    /**
     * Returns trending and interesting NFTs and SFTs on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * Get top tokens
     */
    public getTopTokens(_options?: Configuration): Promise<Array<Token>> {
        const result = this.api.getTopTokens(_options);
        return result.toPromise();
    }

    /**
     * Returns trending and interesting wallets on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * Get top wallets
     */
    public getTopWallets(_options?: Configuration): Promise<Array<Wallet>> {
        const result = this.api.getTopWallets(_options);
        return result.toPromise();
    }

    /**
     * The metadata will be refreshed offline and later updated.
     * Submit a request for metadata to be refreshed.
     * @param contractAddress A hex address for a blockchain contract.
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param media Refresh media.
     */
    public postRefresh(contractAddress: string, tokenID: string, chainID?: string, media?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.postRefresh(contractAddress, tokenID, chainID, media, _options);
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
     * Get supported blockchains
     */
    public getBlockchains(_options?: Configuration): Promise<Array<BlockchainInfo>> {
        const result = this.api.getBlockchains(_options);
        return result.toPromise();
    }

    /**
     * Get a collection by its contract address.
     * Get collection
     * @param contractAddress A hex address for a blockchain contract.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */
    public getCollection(contractAddress: string, chainID?: string, _options?: Configuration): Promise<Array<Collection>> {
        const result = this.api.getCollection(contractAddress, chainID, _options);
        return result.toPromise();
    }

    /**
     * Get autocomplete-style search suggestions for collections.
     * Autocomplete collections
     * @param query A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     */
    public getCollectionsSuggestionsResults(query?: string, _options?: Configuration): Promise<Array<AutoSuggestion>> {
        const result = this.api.getCollectionsSuggestionsResults(query, _options);
        return result.toPromise();
    }

    /**
     * Determine if a wallet has any token from a contract.
     * Has tokens
     * @param contractAddress A hex address for a blockchain contract.
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */
    public getContractGate(contractAddress: string, walletAddress: string, chainID?: string, _options?: Configuration): Promise<AssetGate> {
        const result = this.api.getContractGate(contractAddress, walletAddress, chainID, _options);
        return result.toPromise();
    }

    /**
     * Get tokens by contract address.
     * Get tokens
     * @param contractAddress A hex address for a blockchain contract.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */
    public getContractTokens(contractAddress: string, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<Token>> {
        const result = this.api.getContractTokens(contractAddress, chainID, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns tokens from a batch lookup.
     * Batch token lookup
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
     * Get the transaction history for a collection.
     * Get collection transactions
     * @param contractAddress A hex address for a blockchain contract.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */
    public getContractTransactionHistory(contractAddress: string, cursor?: string, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<Transaction>> {
        const result = this.api.getContractTransactionHistory(contractAddress, cursor, chainID, limit, _options);
        return result.toPromise();
    }

    /**
     * Get ERC-20 metadata by contract address.
     * Get ERC-20 metadata
     * @param contractAddress A hex address for a blockchain contract.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */
    public getERC20Metadata(contractAddress: string, chainID?: string, _options?: Configuration): Promise<Array<ERC20Metadata>> {
        const result = this.api.getERC20Metadata(contractAddress, chainID, _options);
        return result.toPromise();
    }

    /**
     * Get search results such as wallets, tokens, and collections by a search query.
     * Search
     * @param query A search query that returns matching results
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param limit Limits the number of results in a single response.
     */
    public getSearchResults(query: string, cursor?: string, limit?: number, _options?: Configuration): Promise<Array<SearchDocument>> {
        const result = this.api.getSearchResults(query, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of tokens sold by a wallet.
     * Get sold tokens
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param limit Limits the number of results in a single response.
     */
    public getSoldTokens(walletAddress: string, chainID?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<Array<Token>> {
        const result = this.api.getSoldTokens(walletAddress, chainID, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Get autocomplete-style search suggestions for results.
     * Autocomplete
     * @param query A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     */
    public getSuggestionsResults(query?: string, _options?: Configuration): Promise<Array<AutoSuggestion>> {
        const result = this.api.getSuggestionsResults(query, _options);
        return result.toPromise();
    }

    /**
     * Get a token by its contract address and token ID.
     * Get token
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
     * Has token
     * @param tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @param contractAddress A hex address for a blockchain contract.
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */
    public getTokenGate(tokenID: string, contractAddress: string, walletAddress: string, chainID?: string, _options?: Configuration): Promise<AssetGate> {
        const result = this.api.getTokenGate(tokenID, contractAddress, walletAddress, chainID, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of transfer transactions on a specified token.
     * Get token transfers
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
     * Search tokens
     * @param query A search query that returns matching results
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     */
    public getTokensBySearchQuery(query: string, chainID?: string, limit?: number, cursor?: string, _options?: Configuration): Promise<Array<Token>> {
        const result = this.api.getTokensBySearchQuery(query, chainID, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Get a wallet by a wallet address.
     * Get wallet
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */
    public getWallet(walletAddress: string, chainID?: string, _options?: Configuration): Promise<Array<Wallet>> {
        const result = this.api.getWallet(walletAddress, chainID, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of balances for tokens this wallet currently owns, sorted by contract.
     * Get balances
     * @param walletAddress A hex string referencing a public wallet address.
     * @param limit Limits the number of results in a single response.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     */
    public getWalletBalances(walletAddress: string, limit?: number, chainID?: string, _options?: Configuration): Promise<Array<CurrencyInfo>> {
        const result = this.api.getWalletBalances(walletAddress, limit, chainID, _options);
        return result.toPromise();
    }

    /**
     * Returns the latest approval events for all contracts the wallet has given spending authority to.
     * Get approved contracts
     * @param walletAddress A hex string referencing a public wallet address.
     */
    public getWalletContractApprovals(walletAddress: string, _options?: Configuration): Promise<Array<Transaction>> {
        const result = this.api.getWalletContractApprovals(walletAddress, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of tokens minted by a wallet.
     * Get minted tokens
     * @param walletAddress A hex string referencing a public wallet address.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param limit Limits the number of results in a single response.
     */
    public getWalletMints(walletAddress: string, chainID?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<Array<Token>> {
        const result = this.api.getWalletMints(walletAddress, chainID, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of tokens owned by a wallet.
     * Get owned tokens
     * @param walletAddress A hex string referencing a public wallet address.
     * @param filterAirdrops A boolean that will remove airdropped tokens from a result set.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */
    public getWalletTokens(walletAddress: string, filterAirdrops?: boolean, cursor?: string, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<Token>> {
        const result = this.api.getWalletTokens(walletAddress, filterAirdrops, cursor, chainID, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of collections with tokens owned by a wallet.
     * Get owned NFT collections
     * @param walletAddress A hex string referencing a public wallet address.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param filterAirdrops A boolean that will remove airdropped tokens from a result set.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param limit Limits the number of results in a single response.
     */
    public getWalletTokensByCollections(walletAddress: string, cursor?: string, filterAirdrops?: boolean, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<OwnedCollection>> {
        const result = this.api.getWalletTokensByCollections(walletAddress, cursor, filterAirdrops, chainID, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns transactions related to a wallet.
     * Get wallet transactions
     * @param walletAddress A hex string referencing a public wallet address.
     * @param cursor Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @param limit Limits the number of results in a single response.
     * @param chainID An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @param tokenType The token type filters a query to only a subset of tokens, for example, only NFTs. To select ERC-20 and sidechain transactions, use the \&quot;fungible\&quot; value. To select only NFTs or semi-fungible tokens (SFTs), use the \&quot;NFT\&quot; or \&quot;SFT\&quot; enums. To select only L1 native token transactions, use the \&quot;native\&quot; enum.
     */
    public getWalletTransactions(walletAddress: string, cursor?: string, limit?: number, chainID?: string, tokenType?: 'native' | 'fungible' | 'NFT' | 'SFT' | 'unknown', _options?: Configuration): Promise<Array<Transaction>> {
        const result = this.api.getWalletTransactions(walletAddress, cursor, limit, chainID, tokenType, _options);
        return result.toPromise();
    }

    /**
     * Get autocomplete-style search suggestions for wallets.
     * Autocomplete wallets
     * @param query A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     */
    public getWalletsSuggestionsResults(query?: string, _options?: Configuration): Promise<Array<AutoSuggestion>> {
        const result = this.api.getWalletsSuggestionsResults(query, _options);
        return result.toPromise();
    }


}



