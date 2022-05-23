/**
 * n.xyz REST API
 * REST API for blockchain data.
 *
 * OpenAPI spec version: 0.0.12
 *
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */
export interface ConfigurationParameters {
    apiKey?: string | ((name: string) => string);
    username?: string;
    password?: string;
    accessToken?: string | ((name: string, scopes?: string[]) => string);
    basePath?: string;
}
export class Configuration {
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey?: string | ((name: string) => string);
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    username?: string;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    password?: string;
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
    accessToken?: string | ((name: string, scopes?: string[]) => string);
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePath?: string;
    constructor(param?: ConfigurationParameters);
}
/**
 *
 * @export
 */
export const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}
/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}
/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected basePath: string;
    protected fetch: FetchAPI;
    protected configuration: Configuration;
    constructor(configuration?: Configuration, basePath?: string, fetch?: FetchAPI);
}
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
/**
 *
 * @export
 * @interface Collection
 */
export interface Collection {
    /**
     *
     * @type {string}
     * @memberof Collection
     */
    blockchain: string;
    /**
     * Address of the contract that minted this NFT
     * @type {string}
     * @memberof Collection
     */
    contractAddress: string;
    /**
     * A sample of the tokens minted by this collection
     * @type {Array<Token>}
     * @memberof Collection
     */
    tokens?: Array<Token>;
    /**
     *
     * @type {string}
     * @memberof Collection
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof Collection
     */
    slug?: string;
    /**
     *
     * @type {string}
     * @memberof Collection
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Collection
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof Collection
     */
    shortDescription?: string;
    /**
     * Timestamp of creation of this contract in RFC 3339.
     * @type {Date}
     * @memberof Collection
     */
    createdDate?: Date;
    /**
     *
     * @type {Media}
     * @memberof Collection
     */
    bannerImage?: Media;
    /**
     *
     * @type {Media}
     * @memberof Collection
     */
    featuredImage?: Media;
    /**
     *
     * @type {Array<URL>}
     * @memberof Collection
     */
    urls?: Array<URL>;
    /**
     *
     * @type {Array<SocialMedia>}
     * @memberof Collection
     */
    socialMedia?: Array<SocialMedia>;
}
/**
 *
 * @export
 * @interface CurrencyInfo
 */
export interface CurrencyInfo {
    /**
     * Transaction value as a string-encoded bigint in the base unit for a given blockchain (e.g. wei for Ethereum) or fiat currency (e.g. US Dollars).
     * @type {string}
     * @memberof CurrencyInfo
     */
    value?: string;
    /**
     *
     * @type {Array<CurrencyInfo>}
     * @memberof CurrencyInfo
     */
    spotPrice?: Array<CurrencyInfo>;
    /**
     * A formatted, human-friendly representation of the transaction value, e.g. the value in Ether, possibly with localized thousands separator and radix character.
     * @type {string}
     * @memberof CurrencyInfo
     */
    pretty?: string;
    /**
     * 10^decimals = 1 (e.g. WEI), e.g. 10^18 = 1 (e.g. ETH)
     * @type {number}
     * @memberof CurrencyInfo
     */
    decimals?: number;
    /**
     *
     * @type {string}
     * @memberof CurrencyInfo
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof CurrencyInfo
     */
    name?: string;
}
/**
 *
 * @export
 * @interface ENS
 */
export interface ENS {
    /**
     * The ENS or domain name
     * @type {string}
     * @memberof ENS
     */
    name?: string;
    /**
     * The address the ENS record points to
     * @type {string}
     * @memberof ENS
     */
    pointsTo?: string;
    /**
     * Date the ENS registration explires
     * @type {Date}
     * @memberof ENS
     */
    expires?: Date;
    /**
     * A wallet address can have multiple ENS names. The primary ENS name represents a \"cross-platform web3 username and profile.\" A wallet address can only have one primary name, and it can change at any time.
     * @type {boolean}
     * @memberof ENS
     */
    isPrimary?: boolean;
}
/**
 *
 * @export
 * @interface ErrorMessage
 */
export interface ErrorMessage {
    /**
     *
     * @type {string}
     * @memberof ErrorMessage
     */
    error: string;
}
/**
 *
 * @export
 * @interface Media
 */
export interface Media {
    /**
     *
     * @type {string}
     * @memberof Media
     */
    key: string;
    /**
     * URI for the image asset
     * @type {string}
     * @memberof Media
     */
    URI?: string;
    /**
     *
     * @type {Array<MediaVersion>}
     * @memberof Media
     */
    version?: Array<MediaVersion>;
}
/**
 *
 * @export
 * @interface MediaVersion
 */
export interface MediaVersion {
    /**
     *
     * @type {string}
     * @memberof MediaVersion
     */
    kind?: MediaVersion.KindEnum;
    /**
     *
     * @type {string}
     * @memberof MediaVersion
     */
    format?: string;
    /**
     *
     * @type {number}
     * @memberof MediaVersion
     */
    width?: number;
    /**
     *
     * @type {number}
     * @memberof MediaVersion
     */
    height?: number;
    /**
     *
     * @type {number}
     * @memberof MediaVersion
     */
    numBytes?: number;
    /**
     * If a video, length of video in ISO 8601 duration format.
     * @type {string}
     * @memberof MediaVersion
     */
    duration?: string;
}
/**
 * @export
 * @namespace MediaVersion
 */
declare export namespace MediaVersion {
    /**
     * @export
     * @enum {string}
     */
    enum KindEnum {
        Video,
        Image,
        Raw,
        Audio
    }
}
/**
 *
 * @export
 * @interface NonFungibleToken
 */
export interface NonFungibleToken {
    /**
     * ID of this particular token
     * @type {string}
     * @memberof NonFungibleToken
     */
    tokenID: string;
    /**
     *
     * @type {string}
     * @memberof NonFungibleToken
     */
    title?: string;
    /**
     *
     * @type {string}
     * @memberof NonFungibleToken
     */
    contractTitle?: string;
    /**
     * A description of a contract may contain markup such as HTML or Markdown
     * @type {string}
     * @memberof NonFungibleToken
     */
    description?: string;
    /**
     *
     * @type {Media}
     * @memberof NonFungibleToken
     */
    media?: Media;
    /**
     *
     * @type {Wallet}
     * @memberof NonFungibleToken
     */
    owner?: Wallet;
    /**
     *
     * @type {Array<TokenAttribute>}
     * @memberof NonFungibleToken
     */
    attributes?: Array<TokenAttribute>;
    /**
     *
     * @type {Collection}
     * @memberof NonFungibleToken
     */
    collection?: Collection;
    /**
     *
     * @type {Transaction}
     * @memberof NonFungibleToken
     */
    purchase?: Transaction;
    /**
     * A rough heuristic indicating the underlying technology and hypothetical durability of an asset. \"On-Chain\" assets store metadata and the asset media (e.g. SVG file, source code or MIDI) on a blockchain. \"Distributed\" assets are stored on decentralized protocols such as IPFS. \"Web\" assets are stored on services such as Amazon's S3. Each technology has different tradeoffs, in particular certain projects need more flexibility than is provided by on-chain data.\"
     * @type {string}
     * @memberof NonFungibleToken
     */
    durability?: NonFungibleToken.DurabilityEnum;
}
/**
 * @export
 * @namespace NonFungibleToken
 */
declare export namespace NonFungibleToken {
    /**
     * @export
     * @enum {string}
     */
    enum DurabilityEnum {
        OnChain,
        Decentralized,
        Web,
        Unknown
    }
}
/**
 *
 * @export
 * @interface OwnedCollection
 */
export interface OwnedCollection {
    /**
     * A sample of the tokens owned by this wallet
     * @type {Array<Token>}
     * @memberof OwnedCollection
     */
    tokens?: Array<Token>;
    /**
     *
     * @type {Collection}
     * @memberof OwnedCollection
     */
    collection?: Collection;
    /**
     *
     * @type {CurrencyInfo}
     * @memberof OwnedCollection
     */
    totalSpent?: CurrencyInfo;
}
/**
 *
 * @export
 * @interface SocialMedia
 */
export interface SocialMedia {
    /**
     *
     * @type {string}
     * @memberof SocialMedia
     */
    network?: string;
    /**
     *
     * @type {string}
     * @memberof SocialMedia
     */
    username?: string;
}
/**
 *
 * @export
 * @interface Token
 */
export interface Token {
    /**
     *
     * @type {string}
     * @memberof Token
     */
    blockchain: string;
    /**
     * Address of the contract that minted this NFT
     * @type {string}
     * @memberof Token
     */
    contractAddress: string;
    /**
     *
     * @type {string}
     * @memberof Token
     */
    tokenStandard?: string;
    /**
     *
     * @type {string}
     * @memberof Token
     */
    symbol?: string;
    /**
     *
     * @type {NonFungibleToken}
     * @memberof Token
     */
    nft?: NonFungibleToken;
}
/**
 *
 * @export
 * @interface TokenAttribute
 */
export interface TokenAttribute {
    /**
     * The key or kind of trait
     * @type {string}
     * @memberof TokenAttribute
     */
    traitType?: string;
    /**
     * A distinct attribute belonging to a particular type of trait
     * @type {string}
     * @memberof TokenAttribute
     */
    value?: string;
}
/**
 *
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    fromAddress?: string;
    /**
     *
     * @type {string}
     * @memberof Transaction
     */
    toAddress?: string;
    /**
     * Timestamp of last transaction for this token in RFC 3339.
     * @type {Date}
     * @memberof Transaction
     */
    timestamp?: Date;
    /**
     *
     * @type {CurrencyInfo}
     * @memberof Transaction
     */
    price?: CurrencyInfo;
}
/**
 *
 * @export
 * @interface URL
 */
export interface URL {
    /**
     * Human-readable name of the site, ideally simplified to a label that might appear on a business card
     * @type {string}
     * @memberof URL
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof URL
     */
    url?: string;
}
/**
 *
 * @export
 * @interface Wallet
 */
export interface Wallet {
    /**
     * The total balance in a fiat currency (e.g. USD) for the wallet.
     * @type {Array<CurrencyInfo>}
     * @memberof Wallet
     */
    totalBalance?: Array<CurrencyInfo>;
    /**
     * The balance of fungible tokens from smart contracts or blockchains.
     * @type {Array<CurrencyInfo>}
     * @memberof Wallet
     */
    balances?: Array<CurrencyInfo>;
    /**
     *
     * @type {string}
     * @memberof Wallet
     */
    address: string;
    /**
     *
     * @type {Array<ENS>}
     * @memberof Wallet
     */
    ens?: Array<ENS>;
    /**
     *
     * @type {Array<SocialMedia>}
     * @memberof Wallet
     */
    socialMedia?: Array<SocialMedia>;
    /**
     * A sample of the tokens owned by this wallet
     * @type {Array<Token>}
     * @memberof Wallet
     */
    tokens?: Array<Token>;
    /**
     * A sample of the collections this wallet owns.
     * @type {Array<OwnedCollection>}
     * @memberof Wallet
     */
    collections?: Array<OwnedCollection>;
    /**
     * A reverse-chronological list of the latest transactions for a wallet
     * @type {Array<Transaction>}
     * @memberof Wallet
     */
    history?: Array<Transaction>;
}
/**
 * DefaultApi - fetch parameter creator
 * @export
 */
export const DefaultApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get a collection by its contract address
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1CollectionsContractAddressGet(contractAddress: string, options?: any): FetchArgs;
    /**
     *
     * @summary Get a collections
     * @param {string} [contractAddress] A hex address for a blockchain contract
     * @param {string} [query] A search query containing keywords or operators to filter tokens
     * @param {string} [sort] A means to order collections by specific values
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1CollectionsGet(contractAddress?: string, query?: string, sort?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Get tokens by contract address
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokensContractAddressGet(contractAddress: string, options?: any): FetchArgs;
    /**
     *
     * @summary Get a token by its contract address and token id
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokensContractAddressTokenIDGet(contractAddress: string, tokenID: string, options?: any): FetchArgs;
    /**
     *
     * @summary Get tokens
     * @param {string} [contractAddress] A hex address for a blockchain contract
     * @param {string} [tokenID] An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
     * @param {string} [query] A search query containing keywords or operators to filter tokens
     * @param {string} [sort] A means to order tokens by specific values
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokensGet(contractAddress?: string, tokenID?: string, query?: string, sort?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Get a Wallet
     * @param {string} [walletAddress] A hex string referencing a public wallet address
     * @param {string} [query] A search query containing keywords or operators to filter wallets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1WalletsGet(walletAddress?: string, query?: string, options?: any): FetchArgs;
    /**
     *
     * @summary Get a wallet by a wallet address
     * @param {string} walletAddress A hex string referencing a public wallet address.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1WalletsWalletAddressGet(walletAddress: string, options?: any): FetchArgs;
};
/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get a collection by its contract address
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1CollectionsContractAddressGet(contractAddress: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Collection>>;
    /**
     *
     * @summary Get a collections
     * @param {string} [contractAddress] A hex address for a blockchain contract
     * @param {string} [query] A search query containing keywords or operators to filter tokens
     * @param {string} [sort] A means to order collections by specific values
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1CollectionsGet(contractAddress?: string, query?: string, sort?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Collection>>;
    /**
     *
     * @summary Get tokens by contract address
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokensContractAddressGet(contractAddress: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Token>>;
    /**
     *
     * @summary Get a token by its contract address and token id
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokensContractAddressTokenIDGet(contractAddress: string, tokenID: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Token>;
    /**
     *
     * @summary Get tokens
     * @param {string} [contractAddress] A hex address for a blockchain contract
     * @param {string} [tokenID] An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
     * @param {string} [query] A search query containing keywords or operators to filter tokens
     * @param {string} [sort] A means to order tokens by specific values
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokensGet(contractAddress?: string, tokenID?: string, query?: string, sort?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Token>>;
    /**
     *
     * @summary Get a Wallet
     * @param {string} [walletAddress] A hex string referencing a public wallet address
     * @param {string} [query] A search query containing keywords or operators to filter wallets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1WalletsGet(walletAddress?: string, query?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Wallet>>;
    /**
     *
     * @summary Get a wallet by a wallet address
     * @param {string} walletAddress A hex string referencing a public wallet address.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1WalletsWalletAddressGet(walletAddress: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Wallet>>;
};
/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @summary Get a collection by its contract address
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1CollectionsContractAddressGet(contractAddress: string, options?: any): Promise<Collection[]>;
    /**
     *
     * @summary Get a collections
     * @param {string} [contractAddress] A hex address for a blockchain contract
     * @param {string} [query] A search query containing keywords or operators to filter tokens
     * @param {string} [sort] A means to order collections by specific values
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1CollectionsGet(contractAddress?: string, query?: string, sort?: string, options?: any): Promise<Collection[]>;
    /**
     *
     * @summary Get tokens by contract address
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokensContractAddressGet(contractAddress: string, options?: any): Promise<Token[]>;
    /**
     *
     * @summary Get a token by its contract address and token id
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokensContractAddressTokenIDGet(contractAddress: string, tokenID: string, options?: any): Promise<Token>;
    /**
     *
     * @summary Get tokens
     * @param {string} [contractAddress] A hex address for a blockchain contract
     * @param {string} [tokenID] An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
     * @param {string} [query] A search query containing keywords or operators to filter tokens
     * @param {string} [sort] A means to order tokens by specific values
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokensGet(contractAddress?: string, tokenID?: string, query?: string, sort?: string, options?: any): Promise<Token[]>;
    /**
     *
     * @summary Get a Wallet
     * @param {string} [walletAddress] A hex string referencing a public wallet address
     * @param {string} [query] A search query containing keywords or operators to filter wallets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1WalletsGet(walletAddress?: string, query?: string, options?: any): Promise<Wallet[]>;
    /**
     *
     * @summary Get a wallet by a wallet address
     * @param {string} walletAddress A hex string referencing a public wallet address.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1WalletsWalletAddressGet(walletAddress: string, options?: any): Promise<Wallet[]>;
};
/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     *
     * @summary Get a collection by its contract address
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    apiV1CollectionsContractAddressGet(contractAddress: string, options?: any): Promise<Collection[]>;
    /**
     *
     * @summary Get a collections
     * @param {string} [contractAddress] A hex address for a blockchain contract
     * @param {string} [query] A search query containing keywords or operators to filter tokens
     * @param {string} [sort] A means to order collections by specific values
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    apiV1CollectionsGet(contractAddress?: string, query?: string, sort?: string, options?: any): Promise<Collection[]>;
    /**
     *
     * @summary Get tokens by contract address
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    apiV1TokensContractAddressGet(contractAddress: string, options?: any): Promise<Token[]>;
    /**
     *
     * @summary Get a token by its contract address and token id
     * @param {string} contractAddress A hex address for a blockchain contract
     * @param {string} tokenID An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    apiV1TokensContractAddressTokenIDGet(contractAddress: string, tokenID: string, options?: any): Promise<Token>;
    /**
     *
     * @summary Get tokens
     * @param {string} [contractAddress] A hex address for a blockchain contract
     * @param {string} [tokenID] An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT
     * @param {string} [query] A search query containing keywords or operators to filter tokens
     * @param {string} [sort] A means to order tokens by specific values
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    apiV1TokensGet(contractAddress?: string, tokenID?: string, query?: string, sort?: string, options?: any): Promise<Token[]>;
    /**
     *
     * @summary Get a Wallet
     * @param {string} [walletAddress] A hex string referencing a public wallet address
     * @param {string} [query] A search query containing keywords or operators to filter wallets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    apiV1WalletsGet(walletAddress?: string, query?: string, options?: any): Promise<Wallet[]>;
    /**
     *
     * @summary Get a wallet by a wallet address
     * @param {string} walletAddress A hex string referencing a public wallet address.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    apiV1WalletsWalletAddressGet(walletAddress: string, options?: any): Promise<Wallet[]>;
}

//# sourceMappingURL=index.d.ts.map
