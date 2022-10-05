declare class Observable<T> {
    constructor(promise: Promise<T>);
    toPromise(): Promise<T>;
    pipe<S>(callback: (value: T) => S | Promise<S>): Observable<S>;
}
export class IsomorphicFetchHttpLibrary implements HttpLibrary {
    send(request: RequestContext): Observable<ResponseContext>;
}
export enum HttpMethod {
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    CONNECT = "CONNECT",
    OPTIONS = "OPTIONS",
    TRACE = "TRACE",
    PATCH = "PATCH"
}
export type HttpFile = Blob & {
    readonly name: string;
};
export class HttpException extends Error {
    constructor(msg: string);
}
export type RequestBody = undefined | string | FormData | URLSearchParams;
export class RequestContext {
    constructor(url: string, httpMethod: HttpMethod);
    getUrl(): string;
    setUrl(url: string): void;
    setBody(body: RequestBody): void;
    getHttpMethod(): HttpMethod;
    getHeaders(): {
        [key: string]: string;
    };
    getBody(): RequestBody;
    setQueryParam(name: string, value: string): void;
    addCookie(name: string, value: string): void;
    setHeaderParam(key: string, value: string): void;
}
export interface ResponseBody {
    text(): Promise<string>;
    binary(): Promise<Blob>;
}
export class SelfDecodingBody implements ResponseBody {
    constructor(dataSource: Promise<Blob>);
    binary(): Promise<Blob>;
    text(): Promise<string>;
}
export class ResponseContext {
    httpStatusCode: number;
    headers: {
        [key: string]: string;
    };
    body: ResponseBody;
    constructor(httpStatusCode: number, headers: {
        [key: string]: string;
    }, body: ResponseBody);
    getParsedHeader(headerName: string): {
        [parameter: string]: string;
    };
    getBodyAsFile(): Promise<HttpFile>;
    getBodyAsAny(): Promise<string | Blob | undefined>;
}
export interface HttpLibrary {
    send(request: RequestContext): Observable<ResponseContext>;
}
export interface PromiseHttpLibrary {
    send(request: RequestContext): Promise<ResponseContext>;
}
export function wrapHttpLibrary(promiseHttpLibrary: PromiseHttpLibrary): HttpLibrary;
export interface SecurityAuthentication {
    getName(): string;
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}
export interface TokenProvider {
    getToken(): Promise<string> | string;
}
export class ApikeyAuthentication implements SecurityAuthentication {
    constructor(apiKey: string);
    getName(): string;
    applySecurityAuthentication(context: RequestContext): void;
}
export type AuthMethods = {
    "default"?: SecurityAuthentication;
    "apikey"?: SecurityAuthentication;
};
export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = {
    "username": string;
    "password": string;
};
export type HttpBearerConfiguration = {
    tokenProvider: TokenProvider;
};
export type OAuth2Configuration = {
    accessToken: string;
};
export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication;
    "apikey"?: ApiKeyConfiguration;
};
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods;
export class AssetGate {
    'hasContract': boolean;
    'hasToken': boolean;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class MediaPreview {
    'URI'?: string;
    'duration'?: string;
    'format'?: string;
    'height'?: number;
    'kind'?: MediaPreviewKindEnum;
    'width'?: number;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export type MediaPreviewKindEnum = "video" | "image" | "raw" | "audio";
export class AutoSuggestion {
    'address'?: string;
    'previews'?: Array<MediaPreview>;
    'query'?: string;
    'title'?: string;
    'tokenID'?: string;
    'type'?: AutoSuggestionTypeEnum;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export type AutoSuggestionTypeEnum = "query" | "collection" | "wallet" | "token";
export class BlockchainInfo {
    'chainID'?: string;
    'name'?: string;
    'shortChainID'?: string;
    'shortName'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class CurrencyInfo {
    'contractAddress'?: string;
    'decimals': number;
    'fiat'?: Array<CurrencyInfo>;
    'historicalFiat'?: Array<CurrencyInfo>;
    'name'?: string;
    'pretty': string;
    'symbol'?: string;
    'symbolLogos'?: Array<MediaPreview>;
    'tokenValue': number;
    'updateTime'?: Date;
    'value': string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class MediaVersion {
    'duration'?: string;
    'format'?: string;
    'height'?: number;
    'kind'?: MediaVersionKindEnum;
    'numBytes'?: number;
    'width'?: number;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export type MediaVersionKindEnum = "video" | "image" | "raw" | "audio";
export class Media {
    'URI'?: string;
    'key'?: string;
    'version'?: Array<MediaVersion>;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class SocialMedia {
    'network'?: string;
    'url'?: string;
    'username'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class URL {
    'name'?: string;
    'url'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class Collection {
    'bannerImage'?: Media;
    'blockchain': BlockchainInfo;
    'contractAddress': string;
    'createdDate'?: Date;
    'description'?: string;
    'featuredImage'?: Media;
    'floorPrice'?: CurrencyInfo;
    'hidden'?: boolean;
    'logoImage'?: Media;
    'name'?: string;
    'openSeaCollectionVerified'?: boolean;
    'shortDescription'?: string;
    'slug'?: string;
    'socialMedia'?: Array<SocialMedia>;
    'symbol'?: string;
    'totalSupply'?: number;
    'urls'?: Array<URL>;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class CreditEvent {
    'event'?: CreditEventEventEnum;
    'protocol'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export type CreditEventEventEnum = "Supply" | "Withdraw" | "Borrow" | "Repay" | "Accrue Interest" | "Flash Loan";
export class ENS {
    'expires'?: Date;
    'isPrimary'?: boolean;
    'name'?: string;
    'pointsTo'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class ERC20Metadata {
    'contractAddress'?: string;
    'currentPrice'?: CurrencyInfo;
    'decimals'?: number;
    'name'?: string;
    'symbol'?: string;
    'symbolLogos'?: Array<MediaPreview>;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class ErrorMessage {
    'error': string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class ExchangeEvent {
    'event'?: ExchangeEventEventEnum;
    'protocol'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export type ExchangeEventEventEnum = "Swap" | "Mint" | "Burn" | "Collect Fees" | "Create Pool";
export class NFTTransactionLogLine {
    'price'?: CurrencyInfo;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class NFTTransaction {
    'fromAddress'?: string;
    'logLine'?: Array<NFTTransactionLogLine>;
    'timestamp'?: Date;
    'toAddress'?: string;
    'transactionHash'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class TokenAttribute {
    'traitType'?: string;
    'value'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class OpenSeaContract {
    'assetContractType'?: OpenSeaContractAssetContractTypeEnum;
    'buyerFeeBasisPoints'?: number;
    'defaultToFiat'?: boolean;
    'nftVersion'?: string;
    'openSeaVersion'?: string;
    'sellerFeeBasisPoints'?: number;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export type OpenSeaContractAssetContractTypeEnum = "NFT" | "SFT" | "unknown";
export class Token {
    'blockchain': BlockchainInfo;
    'contractAddress': string;
    'nft'?: NonFungibleToken;
    'openSeaContract'?: OpenSeaContract;
    'symbol'?: string;
    'tokenStandard'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class OwnedCollection {
    'collection'?: Collection;
    'tokens'?: Array<Token>;
    'totalOwnedTokens'?: number;
    'totalSpent'?: CurrencyInfo;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class TransactionLogLine {
    'burned'?: boolean;
    'eventName'?: string;
    'logAddress'?: string;
    'logAddressProtocol'?: string;
    'logData'?: string;
    'logIndex'?: number;
    'logTopics'?: Array<string>;
    'mint'?: boolean;
    'transactionIndex'?: number;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class Transaction {
    'blockNumber'?: number;
    'fromAddress'?: string;
    'gas'?: number;
    'gasFee'?: CurrencyInfo;
    'logLine'?: Array<TransactionLogLine>;
    'spenderAddress'?: string;
    'timestamp'?: Date;
    'toAddress'?: string;
    'tokenID'?: string;
    'transactionHash'?: string;
    'transactionIndex'?: number;
    'value'?: CurrencyInfo;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class Wallet {
    'address': string;
    'balances'?: Array<CurrencyInfo>;
    'collections'?: Array<OwnedCollection>;
    'ens'?: Array<ENS>;
    'history'?: Array<Transaction>;
    'recentTokens'?: Array<Token>;
    'socialMedia'?: Array<SocialMedia>;
    'topTokens'?: Array<Token>;
    'totalBalance'?: Array<CurrencyInfo>;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class NonFungibleToken {
    'attributes'?: Array<TokenAttribute>;
    'collection'?: Collection;
    'contractTitle'?: string;
    'creatorAddress'?: string;
    'description'?: string;
    'durability'?: NonFungibleTokenDurabilityEnum;
    'hidden'?: boolean;
    'lastSoldPrice'?: CurrencyInfo;
    'media'?: Media;
    'owner'?: Wallet;
    'previews'?: Array<MediaPreview>;
    'projectName'?: string;
    'purchase'?: NFTTransaction;
    'title'?: string;
    'tokenID': string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export type NonFungibleTokenDurabilityEnum = "On-Chain" | "Decentralized" | "Web" | "Unknown";
export class SearchDocument {
    'collection'?: Collection;
    'token'?: Token;
    'wallet'?: Wallet;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export class TokenEvents {
    'events'?: Array<Transaction>;
    'token'?: Array<Token>;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
interface Middleware {
    pre(context: RequestContext): Observable<RequestContext>;
    post(context: ResponseContext): Observable<ResponseContext>;
}
interface PromiseMiddleware {
    pre(context: RequestContext): Promise<RequestContext>;
    post(context: ResponseContext): Promise<ResponseContext>;
}
export interface BaseServerConfiguration {
    makeRequestContext(endpoint: string, httpMethod: HttpMethod): RequestContext;
}
export class ServerConfiguration<T extends {
    [key: string]: string;
}> implements BaseServerConfiguration {
    constructor(url: string, variableConfiguration: T);
    setVariables(variableConfiguration: Partial<T>): void;
    getConfiguration(): T;
    makeRequestContext(endpoint: string, httpMethod: HttpMethod): RequestContext;
}
export const server1: ServerConfiguration<{}>;
export const servers: ServerConfiguration<{}>[];
interface Configuration {
    readonly baseServer: BaseServerConfiguration;
    readonly httpApi: HttpLibrary;
    readonly middleware: Middleware[];
    readonly authMethods: AuthMethods;
}
interface ConfigurationParameters {
    baseServer?: BaseServerConfiguration;
    httpApi?: HttpLibrary;
    middleware?: Middleware[];
    promiseMiddleware?: PromiseMiddleware[];
    authMethods?: AuthMethodsConfiguration;
}
export function createConfiguration(conf?: ConfigurationParameters): Configuration;
export class ApiException<T> extends Error {
    code: number;
    body: T;
    headers: {
        [key: string]: string;
    };
    constructor(code: number, message: string, body: T, headers: {
        [key: string]: string;
    });
}
declare class BaseAPIRequestFactory {
    protected configuration: Configuration;
    constructor(configuration: Configuration);
}
export class RequiredError extends Error {
    api: string;
    method: string;
    field: string;
    name: "RequiredError";
    constructor(api: string, method: string, field: string);
}
declare class AlphaApiRequestFactory extends BaseAPIRequestFactory {
    getTokensSuggestionsResults(query?: string, _options?: Configuration): Promise<RequestContext>;
    getTopCollections(_options?: Configuration): Promise<RequestContext>;
    getTopTokens(_options?: Configuration): Promise<RequestContext>;
    getTopWallets(_options?: Configuration): Promise<RequestContext>;
    postRefresh(contractAddress: string, tokenID: string, chainID?: string, media?: boolean, _options?: Configuration): Promise<RequestContext>;
}
declare class AlphaApiResponseProcessor {
    getTokensSuggestionsResults(response: ResponseContext): Promise<Array<AutoSuggestion>>;
    getTopCollections(response: ResponseContext): Promise<Array<Collection>>;
    getTopTokens(response: ResponseContext): Promise<Array<Token>>;
    getTopWallets(response: ResponseContext): Promise<Array<Wallet>>;
    postRefresh(response: ResponseContext): Promise<void>;
}
declare class DefaultApiRequestFactory extends BaseAPIRequestFactory {
    getBlockchains(_options?: Configuration): Promise<RequestContext>;
    getCollection(contractAddress: string, chainID?: string, _options?: Configuration): Promise<RequestContext>;
    getCollectionsSuggestionsResults(query?: string, _options?: Configuration): Promise<RequestContext>;
    getContractGate(contractAddress: string, walletAddress: string, chainID?: string, _options?: Configuration): Promise<RequestContext>;
    getContractTokens(contractAddress: string, chainID?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getContractTokensByContractAndID(contractAddresses: string, tokenIdentifiers: string, chainID?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getContractTransactionHistory(contractAddress: string, cursor?: string, chainID?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getERC20Metadata(contractAddress: string, chainID?: string, _options?: Configuration): Promise<RequestContext>;
    getSearchResults(query: string, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getSoldTokens(walletAddress: string, chainID?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getSuggestionsResults(query?: string, _options?: Configuration): Promise<RequestContext>;
    getToken(contractAddress: string, tokenID: string, chainID?: string, _options?: Configuration): Promise<RequestContext>;
    getTokenGate(tokenID: string, contractAddress: string, walletAddress: string, chainID?: string, _options?: Configuration): Promise<RequestContext>;
    getTokenTransfers(contractAddress: string, tokenID: string, chainID?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getTokensBySearchQuery(query: string, chainID?: string, limit?: number, cursor?: string, _options?: Configuration): Promise<RequestContext>;
    getWallet(walletAddress: string, chainID?: string, _options?: Configuration): Promise<RequestContext>;
    getWalletBalances(walletAddress: string, limit?: number, chainID?: string, _options?: Configuration): Promise<RequestContext>;
    getWalletContractApprovals(walletAddress: string, _options?: Configuration): Promise<RequestContext>;
    getWalletMints(walletAddress: string, chainID?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getWalletTokens(walletAddress: string, filterAirdrops?: boolean, cursor?: string, chainID?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getWalletTokensByCollections(walletAddress: string, cursor?: string, filterAirdrops?: boolean, chainID?: string, limit?: number, _options?: Configuration): Promise<RequestContext>;
    getWalletTransactions(walletAddress: string, cursor?: string, limit?: number, chainID?: string, tokenType?: 'native' | 'fungible' | 'NFT' | 'SFT' | 'unknown', _options?: Configuration): Promise<RequestContext>;
    getWalletsSuggestionsResults(query?: string, _options?: Configuration): Promise<RequestContext>;
}
declare class DefaultApiResponseProcessor {
    getBlockchains(response: ResponseContext): Promise<Array<BlockchainInfo>>;
    getCollection(response: ResponseContext): Promise<Array<Collection>>;
    getCollectionsSuggestionsResults(response: ResponseContext): Promise<Array<AutoSuggestion>>;
    getContractGate(response: ResponseContext): Promise<AssetGate>;
    getContractTokens(response: ResponseContext): Promise<Array<Token>>;
    getContractTokensByContractAndID(response: ResponseContext): Promise<Array<Token>>;
    getContractTransactionHistory(response: ResponseContext): Promise<Array<Transaction>>;
    getERC20Metadata(response: ResponseContext): Promise<Array<ERC20Metadata>>;
    getSearchResults(response: ResponseContext): Promise<Array<SearchDocument>>;
    getSoldTokens(response: ResponseContext): Promise<Array<Token>>;
    getSuggestionsResults(response: ResponseContext): Promise<Array<AutoSuggestion>>;
    getToken(response: ResponseContext): Promise<Array<Token>>;
    getTokenGate(response: ResponseContext): Promise<AssetGate>;
    getTokenTransfers(response: ResponseContext): Promise<TokenEvents>;
    getTokensBySearchQuery(response: ResponseContext): Promise<Array<Token>>;
    getWallet(response: ResponseContext): Promise<Array<Wallet>>;
    getWalletBalances(response: ResponseContext): Promise<Array<CurrencyInfo>>;
    getWalletContractApprovals(response: ResponseContext): Promise<Array<Transaction>>;
    getWalletMints(response: ResponseContext): Promise<Array<Token>>;
    getWalletTokens(response: ResponseContext): Promise<Array<Token>>;
    getWalletTokensByCollections(response: ResponseContext): Promise<Array<OwnedCollection>>;
    getWalletTransactions(response: ResponseContext): Promise<Array<Transaction>>;
    getWalletsSuggestionsResults(response: ResponseContext): Promise<Array<AutoSuggestion>>;
}
export class AlphaApi {
    constructor(configuration: Configuration, requestFactory?: AlphaApiRequestFactory, responseProcessor?: AlphaApiResponseProcessor);
    getTokensSuggestionsResults(query?: string, _options?: Configuration): Promise<Array<AutoSuggestion>>;
    getTopCollections(_options?: Configuration): Promise<Array<Collection>>;
    getTopTokens(_options?: Configuration): Promise<Array<Token>>;
    getTopWallets(_options?: Configuration): Promise<Array<Wallet>>;
    postRefresh(contractAddress: string, tokenID: string, chainID?: string, media?: boolean, _options?: Configuration): Promise<void>;
}
export class DefaultApi {
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    getBlockchains(_options?: Configuration): Promise<Array<BlockchainInfo>>;
    getCollection(contractAddress: string, chainID?: string, _options?: Configuration): Promise<Array<Collection>>;
    getCollectionsSuggestionsResults(query?: string, _options?: Configuration): Promise<Array<AutoSuggestion>>;
    getContractGate(contractAddress: string, walletAddress: string, chainID?: string, _options?: Configuration): Promise<AssetGate>;
    getContractTokens(contractAddress: string, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<Token>>;
    getContractTokensByContractAndID(contractAddresses: string, tokenIdentifiers: string, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<Token>>;
    getContractTransactionHistory(contractAddress: string, cursor?: string, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<Transaction>>;
    getERC20Metadata(contractAddress: string, chainID?: string, _options?: Configuration): Promise<Array<ERC20Metadata>>;
    getSearchResults(query: string, cursor?: string, limit?: number, _options?: Configuration): Promise<Array<SearchDocument>>;
    getSoldTokens(walletAddress: string, chainID?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<Array<Token>>;
    getSuggestionsResults(query?: string, _options?: Configuration): Promise<Array<AutoSuggestion>>;
    getToken(contractAddress: string, tokenID: string, chainID?: string, _options?: Configuration): Promise<Array<Token>>;
    getTokenGate(tokenID: string, contractAddress: string, walletAddress: string, chainID?: string, _options?: Configuration): Promise<AssetGate>;
    getTokenTransfers(contractAddress: string, tokenID: string, chainID?: string, limit?: number, _options?: Configuration): Promise<TokenEvents>;
    getTokensBySearchQuery(query: string, chainID?: string, limit?: number, cursor?: string, _options?: Configuration): Promise<Array<Token>>;
    getWallet(walletAddress: string, chainID?: string, _options?: Configuration): Promise<Array<Wallet>>;
    getWalletBalances(walletAddress: string, limit?: number, chainID?: string, _options?: Configuration): Promise<Array<CurrencyInfo>>;
    getWalletContractApprovals(walletAddress: string, _options?: Configuration): Promise<Array<Transaction>>;
    getWalletMints(walletAddress: string, chainID?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<Array<Token>>;
    getWalletTokens(walletAddress: string, filterAirdrops?: boolean, cursor?: string, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<Token>>;
    getWalletTokensByCollections(walletAddress: string, cursor?: string, filterAirdrops?: boolean, chainID?: string, limit?: number, _options?: Configuration): Promise<Array<OwnedCollection>>;
    getWalletTransactions(walletAddress: string, cursor?: string, limit?: number, chainID?: string, tokenType?: 'native' | 'fungible' | 'NFT' | 'SFT' | 'unknown', _options?: Configuration): Promise<Array<Transaction>>;
    getWalletsSuggestionsResults(query?: string, _options?: Configuration): Promise<Array<AutoSuggestion>>;
}

//# sourceMappingURL=index.d.ts.map
