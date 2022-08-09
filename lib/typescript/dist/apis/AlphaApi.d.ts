import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { Collection } from '../models/Collection';
import { Token } from '../models/Token';
import { Wallet } from '../models/Wallet';
export declare class AlphaApiRequestFactory extends BaseAPIRequestFactory {
    getTopCollections(_options?: Configuration): Promise<RequestContext>;
    getTopTokens(_options?: Configuration): Promise<RequestContext>;
    getTopWallets(_options?: Configuration): Promise<RequestContext>;
}
export declare class AlphaApiResponseProcessor {
    getTopCollections(response: ResponseContext): Promise<Array<Collection>>;
    getTopTokens(response: ResponseContext): Promise<Array<Token>>;
    getTopWallets(response: ResponseContext): Promise<Array<Wallet>>;
}
