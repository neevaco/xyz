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

import { ObservableAlphaApi } from "./ObservableAPI";
import { AlphaApiRequestFactory, AlphaApiResponseProcessor} from "../apis/AlphaApi";

export interface AlphaApiGetTokensSuggestionsResultsRequest {
    /**
     * A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     * @type string
     * @memberof AlphaApigetTokensSuggestionsResults
     */
    query?: string
}

export interface AlphaApiGetTopCollectionsRequest {
}

export interface AlphaApiGetTopTokensRequest {
}

export interface AlphaApiGetTopWalletsRequest {
}

export interface AlphaApiPostRefreshRequest {
    /**
     * A hex address for a blockchain contract.
     * @type string
     * @memberof AlphaApipostRefresh
     */
    contractAddress: string
    /**
     * An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @type string
     * @memberof AlphaApipostRefresh
     */
    tokenID: string
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof AlphaApipostRefresh
     */
    chainID?: string
    /**
     * Refresh media.
     * @type boolean
     * @memberof AlphaApipostRefresh
     */
    media?: boolean
}

export class ObjectAlphaApi {
    private api: ObservableAlphaApi

    public constructor(configuration: Configuration, requestFactory?: AlphaApiRequestFactory, responseProcessor?: AlphaApiResponseProcessor) {
        this.api = new ObservableAlphaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get autocomplete-style search suggestions for tokens.
     * Autocomplete tokens
     * @param param the request object
     */
    public getTokensSuggestionsResults(param: AlphaApiGetTokensSuggestionsResultsRequest = {}, options?: Configuration): Promise<Array<AutoSuggestion>> {
        return this.api.getTokensSuggestionsResults(param.query,  options).toPromise();
    }

    /**
     * Returns trending and interesting collections on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * Get top collections
     * @param param the request object
     */
    public getTopCollections(param: AlphaApiGetTopCollectionsRequest = {}, options?: Configuration): Promise<Array<Collection>> {
        return this.api.getTopCollections( options).toPromise();
    }

    /**
     * Returns trending and interesting NFTs and SFTs on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * Get top tokens
     * @param param the request object
     */
    public getTopTokens(param: AlphaApiGetTopTokensRequest = {}, options?: Configuration): Promise<Array<Token>> {
        return this.api.getTopTokens( options).toPromise();
    }

    /**
     * Returns trending and interesting wallets on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
     * Get top wallets
     * @param param the request object
     */
    public getTopWallets(param: AlphaApiGetTopWalletsRequest = {}, options?: Configuration): Promise<Array<Wallet>> {
        return this.api.getTopWallets( options).toPromise();
    }

    /**
     * The metadata will be refreshed offline and later updated.
     * Submit a request for metadata to be refreshed.
     * @param param the request object
     */
    public postRefresh(param: AlphaApiPostRefreshRequest, options?: Configuration): Promise<void> {
        return this.api.postRefresh(param.contractAddress, param.tokenID, param.chainID, param.media,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetBlockchainsRequest {
}

export interface DefaultApiGetCollectionRequest {
    /**
     * A hex address for a blockchain contract.
     * @type string
     * @memberof DefaultApigetCollection
     */
    contractAddress: string
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetCollection
     */
    chainID?: string
}

export interface DefaultApiGetCollectionsSuggestionsResultsRequest {
    /**
     * A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     * @type string
     * @memberof DefaultApigetCollectionsSuggestionsResults
     */
    query?: string
}

export interface DefaultApiGetContractGateRequest {
    /**
     * A hex address for a blockchain contract.
     * @type string
     * @memberof DefaultApigetContractGate
     */
    contractAddress: string
    /**
     * A hex string referencing a public wallet address.
     * @type string
     * @memberof DefaultApigetContractGate
     */
    walletAddress: string
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetContractGate
     */
    chainID?: string
}

export interface DefaultApiGetContractTokensRequest {
    /**
     * A hex address for a blockchain contract.
     * @type string
     * @memberof DefaultApigetContractTokens
     */
    contractAddress: string
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetContractTokens
     */
    chainID?: string
    /**
     * Limits the number of results in a single response.
     * @type number
     * @memberof DefaultApigetContractTokens
     */
    limit?: number
}

export interface DefaultApiGetContractTokensByContractAndIDRequest {
    /**
     * A comma-separated hex address for a blockchain contract, the order of values should match the order in tokenIdentifiers.
     * @type string
     * @memberof DefaultApigetContractTokensByContractAndID
     */
    contractAddresses: string
    /**
     * A comma-separated token ID, the order of values should match the order in contractAddresses.
     * @type string
     * @memberof DefaultApigetContractTokensByContractAndID
     */
    tokenIdentifiers: string
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetContractTokensByContractAndID
     */
    chainID?: string
    /**
     * Limits the number of results in a single response.
     * @type number
     * @memberof DefaultApigetContractTokensByContractAndID
     */
    limit?: number
}

export interface DefaultApiGetContractTransactionHistoryRequest {
    /**
     * A hex address for a blockchain contract.
     * @type string
     * @memberof DefaultApigetContractTransactionHistory
     */
    contractAddress: string
    /**
     * Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @type string
     * @memberof DefaultApigetContractTransactionHistory
     */
    cursor?: string
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetContractTransactionHistory
     */
    chainID?: string
    /**
     * Limits the number of results in a single response.
     * @type number
     * @memberof DefaultApigetContractTransactionHistory
     */
    limit?: number
}

export interface DefaultApiGetERC20MetadataRequest {
    /**
     * A hex address for a blockchain contract.
     * @type string
     * @memberof DefaultApigetERC20Metadata
     */
    contractAddress: string
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetERC20Metadata
     */
    chainID?: string
}

export interface DefaultApiGetSearchResultsRequest {
    /**
     * A search query that returns matching results
     * @type string
     * @memberof DefaultApigetSearchResults
     */
    query: string
    /**
     * Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @type string
     * @memberof DefaultApigetSearchResults
     */
    cursor?: string
    /**
     * Limits the number of results in a single response.
     * @type number
     * @memberof DefaultApigetSearchResults
     */
    limit?: number
}

export interface DefaultApiGetSoldTokensRequest {
    /**
     * A hex string referencing a public wallet address.
     * @type string
     * @memberof DefaultApigetSoldTokens
     */
    walletAddress: string
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetSoldTokens
     */
    chainID?: string
    /**
     * Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @type string
     * @memberof DefaultApigetSoldTokens
     */
    cursor?: string
    /**
     * Limits the number of results in a single response.
     * @type number
     * @memberof DefaultApigetSoldTokens
     */
    limit?: number
}

export interface DefaultApiGetSuggestionsResultsRequest {
    /**
     * A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     * @type string
     * @memberof DefaultApigetSuggestionsResults
     */
    query?: string
}

export interface DefaultApiGetTokenRequest {
    /**
     * A hex address for a blockchain contract.
     * @type string
     * @memberof DefaultApigetToken
     */
    contractAddress: string
    /**
     * An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @type string
     * @memberof DefaultApigetToken
     */
    tokenID: string
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetToken
     */
    chainID?: string
}

export interface DefaultApiGetTokenGateRequest {
    /**
     * An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @type string
     * @memberof DefaultApigetTokenGate
     */
    tokenID: string
    /**
     * A hex address for a blockchain contract.
     * @type string
     * @memberof DefaultApigetTokenGate
     */
    contractAddress: string
    /**
     * A hex string referencing a public wallet address.
     * @type string
     * @memberof DefaultApigetTokenGate
     */
    walletAddress: string
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetTokenGate
     */
    chainID?: string
}

export interface DefaultApiGetTokenTransfersRequest {
    /**
     * A hex address for a blockchain contract.
     * @type string
     * @memberof DefaultApigetTokenTransfers
     */
    contractAddress: string
    /**
     * An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
     * @type string
     * @memberof DefaultApigetTokenTransfers
     */
    tokenID: string
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetTokenTransfers
     */
    chainID?: string
    /**
     * Limits the number of results in a single response.
     * @type number
     * @memberof DefaultApigetTokenTransfers
     */
    limit?: number
}

export interface DefaultApiGetTokensBySearchQueryRequest {
    /**
     * A search query that returns matching results
     * @type string
     * @memberof DefaultApigetTokensBySearchQuery
     */
    query: string
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetTokensBySearchQuery
     */
    chainID?: string
    /**
     * Limits the number of results in a single response.
     * @type number
     * @memberof DefaultApigetTokensBySearchQuery
     */
    limit?: number
    /**
     * Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @type string
     * @memberof DefaultApigetTokensBySearchQuery
     */
    cursor?: string
}

export interface DefaultApiGetWalletRequest {
    /**
     * A hex string referencing a public wallet address.
     * @type string
     * @memberof DefaultApigetWallet
     */
    walletAddress: string
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetWallet
     */
    chainID?: string
}

export interface DefaultApiGetWalletBalancesRequest {
    /**
     * A hex string referencing a public wallet address.
     * @type string
     * @memberof DefaultApigetWalletBalances
     */
    walletAddress: string
    /**
     * Limits the number of results in a single response.
     * @type number
     * @memberof DefaultApigetWalletBalances
     */
    limit?: number
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetWalletBalances
     */
    chainID?: string
}

export interface DefaultApiGetWalletContractApprovalsRequest {
    /**
     * A hex string referencing a public wallet address.
     * @type string
     * @memberof DefaultApigetWalletContractApprovals
     */
    walletAddress: string
}

export interface DefaultApiGetWalletMintsRequest {
    /**
     * A hex string referencing a public wallet address.
     * @type string
     * @memberof DefaultApigetWalletMints
     */
    walletAddress: string
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetWalletMints
     */
    chainID?: string
    /**
     * Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @type string
     * @memberof DefaultApigetWalletMints
     */
    cursor?: string
    /**
     * Limits the number of results in a single response.
     * @type number
     * @memberof DefaultApigetWalletMints
     */
    limit?: number
}

export interface DefaultApiGetWalletTokensRequest {
    /**
     * A hex string referencing a public wallet address.
     * @type string
     * @memberof DefaultApigetWalletTokens
     */
    walletAddress: string
    /**
     * A boolean that will remove airdropped tokens from a result set.
     * @type boolean
     * @memberof DefaultApigetWalletTokens
     */
    filterAirdrops?: boolean
    /**
     * Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @type string
     * @memberof DefaultApigetWalletTokens
     */
    cursor?: string
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetWalletTokens
     */
    chainID?: string
    /**
     * Limits the number of results in a single response.
     * @type number
     * @memberof DefaultApigetWalletTokens
     */
    limit?: number
}

export interface DefaultApiGetWalletTokensByCollectionsRequest {
    /**
     * A hex string referencing a public wallet address.
     * @type string
     * @memberof DefaultApigetWalletTokensByCollections
     */
    walletAddress: string
    /**
     * Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @type string
     * @memberof DefaultApigetWalletTokensByCollections
     */
    cursor?: string
    /**
     * A boolean that will remove airdropped tokens from a result set.
     * @type boolean
     * @memberof DefaultApigetWalletTokensByCollections
     */
    filterAirdrops?: boolean
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetWalletTokensByCollections
     */
    chainID?: string
    /**
     * Limits the number of results in a single response.
     * @type number
     * @memberof DefaultApigetWalletTokensByCollections
     */
    limit?: number
}

export interface DefaultApiGetWalletTransactionsRequest {
    /**
     * A hex string referencing a public wallet address.
     * @type string
     * @memberof DefaultApigetWalletTransactions
     */
    walletAddress: string
    /**
     * Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours.
     * @type string
     * @memberof DefaultApigetWalletTransactions
     */
    cursor?: string
    /**
     * Limits the number of results in a single response.
     * @type number
     * @memberof DefaultApigetWalletTransactions
     */
    limit?: number
    /**
     * An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers.
     * @type string
     * @memberof DefaultApigetWalletTransactions
     */
    chainID?: string
    /**
     * The token type filters a query to only a subset of tokens, for example, only NFTs. To select ERC-20 and sidechain transactions, use the \&quot;fungible\&quot; value. To select only NFTs or semi-fungible tokens (SFTs), use the \&quot;NFT\&quot; or \&quot;SFT\&quot; enums. To select only L1 native token transactions, use the \&quot;native\&quot; enum.
     * @type &#39;native&#39; | &#39;fungible&#39; | &#39;NFT&#39; | &#39;SFT&#39; | &#39;unknown&#39;
     * @memberof DefaultApigetWalletTransactions
     */
    tokenType?: 'native' | 'fungible' | 'NFT' | 'SFT' | 'unknown'
}

export interface DefaultApiGetWalletsSuggestionsResultsRequest {
    /**
     * A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot;
     * @type string
     * @memberof DefaultApigetWalletsSuggestionsResults
     */
    query?: string
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Lists all supported blockchains.
     * Get supported blockchains
     * @param param the request object
     */
    public getBlockchains(param: DefaultApiGetBlockchainsRequest = {}, options?: Configuration): Promise<Array<BlockchainInfo>> {
        return this.api.getBlockchains( options).toPromise();
    }

    /**
     * Get a collection by its contract address.
     * Get collection
     * @param param the request object
     */
    public getCollection(param: DefaultApiGetCollectionRequest, options?: Configuration): Promise<Array<Collection>> {
        return this.api.getCollection(param.contractAddress, param.chainID,  options).toPromise();
    }

    /**
     * Get autocomplete-style search suggestions for collections.
     * Autocomplete collections
     * @param param the request object
     */
    public getCollectionsSuggestionsResults(param: DefaultApiGetCollectionsSuggestionsResultsRequest = {}, options?: Configuration): Promise<Array<AutoSuggestion>> {
        return this.api.getCollectionsSuggestionsResults(param.query,  options).toPromise();
    }

    /**
     * Determine if a wallet has any token from a contract.
     * Has tokens
     * @param param the request object
     */
    public getContractGate(param: DefaultApiGetContractGateRequest, options?: Configuration): Promise<AssetGate> {
        return this.api.getContractGate(param.contractAddress, param.walletAddress, param.chainID,  options).toPromise();
    }

    /**
     * Get tokens by contract address.
     * Get tokens
     * @param param the request object
     */
    public getContractTokens(param: DefaultApiGetContractTokensRequest, options?: Configuration): Promise<Array<Token>> {
        return this.api.getContractTokens(param.contractAddress, param.chainID, param.limit,  options).toPromise();
    }

    /**
     * Returns tokens from a batch lookup.
     * Batch token lookup
     * @param param the request object
     */
    public getContractTokensByContractAndID(param: DefaultApiGetContractTokensByContractAndIDRequest, options?: Configuration): Promise<Array<Token>> {
        return this.api.getContractTokensByContractAndID(param.contractAddresses, param.tokenIdentifiers, param.chainID, param.limit,  options).toPromise();
    }

    /**
     * Get the transaction history for a collection.
     * Get collection transactions
     * @param param the request object
     */
    public getContractTransactionHistory(param: DefaultApiGetContractTransactionHistoryRequest, options?: Configuration): Promise<Array<Transaction>> {
        return this.api.getContractTransactionHistory(param.contractAddress, param.cursor, param.chainID, param.limit,  options).toPromise();
    }

    /**
     * Get ERC-20 metadata by contract address.
     * Get ERC-20 metadata
     * @param param the request object
     */
    public getERC20Metadata(param: DefaultApiGetERC20MetadataRequest, options?: Configuration): Promise<Array<ERC20Metadata>> {
        return this.api.getERC20Metadata(param.contractAddress, param.chainID,  options).toPromise();
    }

    /**
     * Get search results such as wallets, tokens, and collections by a search query.
     * Search
     * @param param the request object
     */
    public getSearchResults(param: DefaultApiGetSearchResultsRequest, options?: Configuration): Promise<Array<SearchDocument>> {
        return this.api.getSearchResults(param.query, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns a list of tokens sold by a wallet.
     * Get sold tokens
     * @param param the request object
     */
    public getSoldTokens(param: DefaultApiGetSoldTokensRequest, options?: Configuration): Promise<Array<Token>> {
        return this.api.getSoldTokens(param.walletAddress, param.chainID, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Get autocomplete-style search suggestions for results.
     * Autocomplete
     * @param param the request object
     */
    public getSuggestionsResults(param: DefaultApiGetSuggestionsResultsRequest = {}, options?: Configuration): Promise<Array<AutoSuggestion>> {
        return this.api.getSuggestionsResults(param.query,  options).toPromise();
    }

    /**
     * Get a token by its contract address and token ID.
     * Get token
     * @param param the request object
     */
    public getToken(param: DefaultApiGetTokenRequest, options?: Configuration): Promise<Array<Token>> {
        return this.api.getToken(param.contractAddress, param.tokenID, param.chainID,  options).toPromise();
    }

    /**
     * Determine if a wallet has a given token from a contract.
     * Has token
     * @param param the request object
     */
    public getTokenGate(param: DefaultApiGetTokenGateRequest, options?: Configuration): Promise<AssetGate> {
        return this.api.getTokenGate(param.tokenID, param.contractAddress, param.walletAddress, param.chainID,  options).toPromise();
    }

    /**
     * Returns a list of transfer transactions on a specified token.
     * Get token transfers
     * @param param the request object
     */
    public getTokenTransfers(param: DefaultApiGetTokenTransfersRequest, options?: Configuration): Promise<TokenEvents> {
        return this.api.getTokenTransfers(param.contractAddress, param.tokenID, param.chainID, param.limit,  options).toPromise();
    }

    /**
     * Get tokens by a search query.
     * Search tokens
     * @param param the request object
     */
    public getTokensBySearchQuery(param: DefaultApiGetTokensBySearchQueryRequest, options?: Configuration): Promise<Array<Token>> {
        return this.api.getTokensBySearchQuery(param.query, param.chainID, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Get a wallet by a wallet address.
     * Get wallet
     * @param param the request object
     */
    public getWallet(param: DefaultApiGetWalletRequest, options?: Configuration): Promise<Array<Wallet>> {
        return this.api.getWallet(param.walletAddress, param.chainID,  options).toPromise();
    }

    /**
     * Returns a list of balances for tokens this wallet currently owns, sorted by contract.
     * Get balances
     * @param param the request object
     */
    public getWalletBalances(param: DefaultApiGetWalletBalancesRequest, options?: Configuration): Promise<Array<CurrencyInfo>> {
        return this.api.getWalletBalances(param.walletAddress, param.limit, param.chainID,  options).toPromise();
    }

    /**
     * Returns the latest approval events for all contracts the wallet has given spending authority to.
     * Get approved contracts
     * @param param the request object
     */
    public getWalletContractApprovals(param: DefaultApiGetWalletContractApprovalsRequest, options?: Configuration): Promise<Array<Transaction>> {
        return this.api.getWalletContractApprovals(param.walletAddress,  options).toPromise();
    }

    /**
     * Returns a list of tokens minted by a wallet.
     * Get minted tokens
     * @param param the request object
     */
    public getWalletMints(param: DefaultApiGetWalletMintsRequest, options?: Configuration): Promise<Array<Token>> {
        return this.api.getWalletMints(param.walletAddress, param.chainID, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns a list of tokens owned by a wallet.
     * Get owned tokens
     * @param param the request object
     */
    public getWalletTokens(param: DefaultApiGetWalletTokensRequest, options?: Configuration): Promise<Array<Token>> {
        return this.api.getWalletTokens(param.walletAddress, param.filterAirdrops, param.cursor, param.chainID, param.limit,  options).toPromise();
    }

    /**
     * Returns a list of collections with tokens owned by a wallet.
     * Get owned NFT collections
     * @param param the request object
     */
    public getWalletTokensByCollections(param: DefaultApiGetWalletTokensByCollectionsRequest, options?: Configuration): Promise<Array<OwnedCollection>> {
        return this.api.getWalletTokensByCollections(param.walletAddress, param.cursor, param.filterAirdrops, param.chainID, param.limit,  options).toPromise();
    }

    /**
     * Returns transactions related to a wallet.
     * Get wallet transactions
     * @param param the request object
     */
    public getWalletTransactions(param: DefaultApiGetWalletTransactionsRequest, options?: Configuration): Promise<Array<Transaction>> {
        return this.api.getWalletTransactions(param.walletAddress, param.cursor, param.limit, param.chainID, param.tokenType,  options).toPromise();
    }

    /**
     * Get autocomplete-style search suggestions for wallets.
     * Autocomplete wallets
     * @param param the request object
     */
    public getWalletsSuggestionsResults(param: DefaultApiGetWalletsSuggestionsResultsRequest = {}, options?: Configuration): Promise<Array<AutoSuggestion>> {
        return this.api.getWalletsSuggestionsResults(param.query,  options).toPromise();
    }

}
