# .DefaultApi

All URIs are relative to *https://api.n.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlockchains**](DefaultApi.md#getBlockchains) | **GET** /api/v1/blockchains | Get supported blockchains
[**getCollection**](DefaultApi.md#getCollection) | **GET** /api/v1/collections/{contractAddress} | Get collection
[**getCollectionsSuggestionsResults**](DefaultApi.md#getCollectionsSuggestionsResults) | **GET** /api/v1/collections/suggestions | Autocomplete collections
[**getContractGate**](DefaultApi.md#getContractGate) | **GET** /api/v1/wallets/{walletAddress}/gate/{contractAddress} | Has tokens
[**getContractTokens**](DefaultApi.md#getContractTokens) | **GET** /api/v1/tokens/{contractAddress} | Get tokens
[**getContractTokensByContractAndID**](DefaultApi.md#getContractTokensByContractAndID) | **GET** /api/v1/token-batch | Batch token lookup
[**getContractTransactionHistory**](DefaultApi.md#getContractTransactionHistory) | **GET** /api/v1/collections/{contractAddress}/transactions/history | Get collection transactions
[**getERC20Metadata**](DefaultApi.md#getERC20Metadata) | **GET** /api/v1/token/{contractAddress}/erc20/metadata | Get ERC-20 metadata
[**getSearchResults**](DefaultApi.md#getSearchResults) | **GET** /api/v1/search/{query} | Search
[**getSoldTokens**](DefaultApi.md#getSoldTokens) | **GET** /api/v1/wallets/{walletAddress}/sold-tokens | Get sold tokens
[**getSuggestionsResults**](DefaultApi.md#getSuggestionsResults) | **GET** /api/v1/suggestions | Autocomplete
[**getToken**](DefaultApi.md#getToken) | **GET** /api/v1/tokens/{contractAddress}/{tokenID} | Get token
[**getTokenGate**](DefaultApi.md#getTokenGate) | **GET** /api/v1/wallets/{walletAddress}/gate/{contractAddress}/{tokenID} | Has token
[**getTokenTransfers**](DefaultApi.md#getTokenTransfers) | **GET** /api/v1/tokens/{contractAddress}/{tokenID}/transfers | Get token transfers
[**getTokensBySearchQuery**](DefaultApi.md#getTokensBySearchQuery) | **GET** /api/v1/tokens/search/{query} | Search tokens
[**getWallet**](DefaultApi.md#getWallet) | **GET** /api/v1/wallets/{walletAddress} | Get wallet
[**getWalletBalances**](DefaultApi.md#getWalletBalances) | **GET** /api/v1/wallets/{walletAddress}/balances | Get balances
[**getWalletContractApprovals**](DefaultApi.md#getWalletContractApprovals) | **GET** /api/v1/wallets/{walletAddress}/approvals | Get approved contracts
[**getWalletMints**](DefaultApi.md#getWalletMints) | **GET** /api/v1/wallets/{walletAddress}/mints | Get minted tokens
[**getWalletTokens**](DefaultApi.md#getWalletTokens) | **GET** /api/v1/wallets/{walletAddress}/tokens | Get owned tokens
[**getWalletTokensByCollections**](DefaultApi.md#getWalletTokensByCollections) | **GET** /api/v1/wallets/{walletAddress}/collections | Get owned NFT collections
[**getWalletTransactions**](DefaultApi.md#getWalletTransactions) | **GET** /api/v1/wallets/{walletAddress}/transactions/history | Get wallet transactions
[**getWalletsSuggestionsResults**](DefaultApi.md#getWalletsSuggestionsResults) | **GET** /api/v1/wallets/suggestions | Autocomplete wallets


# **getBlockchains**
> Array<BlockchainInfo> getBlockchains()

Lists all supported blockchains.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getBlockchains(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<BlockchainInfo>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of blockchains. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCollection**
> Array<Collection> getCollection()

Get a collection by its contract address.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetCollectionRequest = {
  // string | A hex address for a blockchain contract.
  contractAddress: "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
};

apiInstance.getCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | [**string**] | A hex address for a blockchain contract. | defaults to undefined
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'


### Return type

**Array<Collection>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list with at most one collection matching this contract address. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCollectionsSuggestionsResults**
> Array<AutoSuggestion> getCollectionsSuggestionsResults()

Get autocomplete-style search suggestions for collections.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetCollectionsSuggestionsResultsRequest = {
  // string | A query or partial query that can be used to retrieve suggested results. For example \"bored a\" would return a suggestion for \"bored ape.\" (optional)
  query: "bored a",
};

apiInstance.getCollectionsSuggestionsResults(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot; | (optional) defaults to undefined


### Return type

**Array<AutoSuggestion>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of search suggestions for collections by a search query. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getContractGate**
> AssetGate getContractGate()

Determine if a wallet has any token from a contract.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetContractGateRequest = {
  // string | A hex address for a blockchain contract.
  contractAddress: "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
  // string | A hex string referencing a public wallet address.
  walletAddress: "0x3cd378c9b1cb5f147ebf1b2c2564118946ae4ba1",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
};

apiInstance.getContractGate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | [**string**] | A hex address for a blockchain contract. | defaults to undefined
 **walletAddress** | [**string**] | A hex string referencing a public wallet address. | defaults to undefined
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'


### Return type

**AssetGate**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A map indicating if the wallet has the given contract. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getContractTokens**
> Array<Token> getContractTokens()

Get tokens by contract address.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetContractTokensRequest = {
  // string | A hex address for a blockchain contract.
  contractAddress: "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
  // number | Limits the number of results in a single response. (optional)
  limit: 25,
};

apiInstance.getContractTokens(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | [**string**] | A hex address for a blockchain contract. | defaults to undefined
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'
 **limit** | [**number**] | Limits the number of results in a single response. | (optional) defaults to 100


### Return type

**Array<Token>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of tokens that belong to this contract. |  * X-Doc-Next-Cursor -  <br>  * X-Doc-Next-Link -  <br>  * X-Doc-Start-Cursor -  <br>  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getContractTokensByContractAndID**
> Array<Token> getContractTokensByContractAndID()

Returns tokens from a batch lookup.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetContractTokensByContractAndIDRequest = {
  // string | A comma-separated hex address for a blockchain contract, the order of values should match the order in tokenIdentifiers.
  contractAddresses: "0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e,0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258",
  // string | A comma-separated token ID, the order of values should match the order in contractAddresses.
  tokenIdentifiers: "3481,50603",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
  // number | Limits the number of results in a single response. (optional)
  limit: 25,
};

apiInstance.getContractTokensByContractAndID(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddresses** | [**string**] | A comma-separated hex address for a blockchain contract, the order of values should match the order in tokenIdentifiers. | defaults to undefined
 **tokenIdentifiers** | [**string**] | A comma-separated token ID, the order of values should match the order in contractAddresses. | defaults to undefined
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'
 **limit** | [**number**] | Limits the number of results in a single response. | (optional) defaults to 100


### Return type

**Array<Token>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets a list of tokens by a pair of contract addresses and token IDs. The input is two ordered arrays. The first element of contractAddresses should be related to the 1st element of the tokenID, etc. In the below example two tokens are being requested, token 3481 from the \&quot;goblintown\&quot; contract (i.e. 0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e) and token 50603 from the Otherdeed contract (i.e. 0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258). |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getContractTransactionHistory**
> Array<Transaction> getContractTransactionHistory()

Get the transaction history for a collection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetContractTransactionHistoryRequest = {
  // string | A hex address for a blockchain contract.
  contractAddress: "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
  // string | Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours. (optional)
  cursor: "FooBarBazf0obArBazFo0BarBaz=",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
  // number | Limits the number of results in a single response. (optional)
  limit: 25,
};

apiInstance.getContractTransactionHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | [**string**] | A hex address for a blockchain contract. | defaults to undefined
 **cursor** | [**string**] | Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours. | (optional) defaults to undefined
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'
 **limit** | [**number**] | Limits the number of results in a single response. | (optional) defaults to 100


### Return type

**Array<Transaction>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list with the transaction history for a collection |  * X-Doc-Next-Cursor -  <br>  * X-Doc-Next-Link -  <br>  * X-Doc-Start-Cursor -  <br>  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getERC20Metadata**
> Array<ERC20Metadata> getERC20Metadata()

Get ERC-20 metadata by contract address.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetERC20MetadataRequest = {
  // string | A hex address for a blockchain contract.
  contractAddress: "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
};

apiInstance.getERC20Metadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | [**string**] | A hex address for a blockchain contract. | defaults to undefined
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'


### Return type

**Array<ERC20Metadata>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ERC-20 metadata for a given address |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSearchResults**
> Array<SearchDocument> getSearchResults()

Get search results such as wallets, tokens, and collections by a search query.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetSearchResultsRequest = {
  // string | A search query that returns matching results
  query: "chromie squiggle art blocks",
  // string | Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours. (optional)
  cursor: "FooBarBazf0obArBazFo0BarBaz=",
  // number | Limits the number of results in a single response. (optional)
  limit: 25,
};

apiInstance.getSearchResults(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | A search query that returns matching results | defaults to undefined
 **cursor** | [**string**] | Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours. | (optional) defaults to undefined
 **limit** | [**number**] | Limits the number of results in a single response. | (optional) defaults to 100


### Return type

**Array<SearchDocument>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of tokens related to the search. |  * X-Doc-Next-Cursor -  <br>  * X-Doc-Next-Link -  <br>  * X-Doc-Start-Cursor -  <br>  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSoldTokens**
> Array<Token> getSoldTokens()

Returns a list of tokens sold by a wallet.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetSoldTokensRequest = {
  // string | A hex string referencing a public wallet address.
  walletAddress: "0x3cd378c9b1cb5f147ebf1b2c2564118946ae4ba1",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
  // string | Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours. (optional)
  cursor: "FooBarBazf0obArBazFo0BarBaz=",
  // number | Limits the number of results in a single response. (optional)
  limit: 25,
};

apiInstance.getSoldTokens(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletAddress** | [**string**] | A hex string referencing a public wallet address. | defaults to undefined
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'
 **cursor** | [**string**] | Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours. | (optional) defaults to undefined
 **limit** | [**number**] | Limits the number of results in a single response. | (optional) defaults to 100


### Return type

**Array<Token>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of tokens that were sold by the specified wallet. |  * X-Doc-Next-Cursor -  <br>  * X-Doc-Next-Link -  <br>  * X-Doc-Start-Cursor -  <br>  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSuggestionsResults**
> Array<AutoSuggestion> getSuggestionsResults()

Get autocomplete-style search suggestions for results.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetSuggestionsResultsRequest = {
  // string | A query or partial query that can be used to retrieve suggested results. For example \"bored a\" would return a suggestion for \"bored ape.\" (optional)
  query: "bored a",
};

apiInstance.getSuggestionsResults(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot; | (optional) defaults to undefined


### Return type

**Array<AutoSuggestion>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of search suggestions for results such as wallets, tokens, and collections by a search query. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getToken**
> Array<Token> getToken()

Get a token by its contract address and token ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetTokenRequest = {
  // string | A hex address for a blockchain contract.
  contractAddress: "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
  // string | An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
  tokenID: "228000094",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
};

apiInstance.getToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | [**string**] | A hex address for a blockchain contract. | defaults to undefined
 **tokenID** | [**string**] | An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT. | defaults to undefined
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'


### Return type

**Array<Token>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of 1 token. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTokenGate**
> AssetGate getTokenGate()

Determine if a wallet has a given token from a contract.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetTokenGateRequest = {
  // string | An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
  tokenID: "228000094",
  // string | A hex address for a blockchain contract.
  contractAddress: "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
  // string | A hex string referencing a public wallet address.
  walletAddress: "0x3cd378c9b1cb5f147ebf1b2c2564118946ae4ba1",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
};

apiInstance.getTokenGate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenID** | [**string**] | An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT. | defaults to undefined
 **contractAddress** | [**string**] | A hex address for a blockchain contract. | defaults to undefined
 **walletAddress** | [**string**] | A hex string referencing a public wallet address. | defaults to undefined
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'


### Return type

**AssetGate**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A map indicating if the wallet has the given contract and if the wallet has the given token. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTokenTransfers**
> TokenEvents getTokenTransfers()

Returns a list of transfer transactions on a specified token.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetTokenTransfersRequest = {
  // string | A hex address for a blockchain contract.
  contractAddress: "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
  // string | An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
  tokenID: "228000094",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
  // number | Limits the number of results in a single response. (optional)
  limit: 25,
};

apiInstance.getTokenTransfers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | [**string**] | A hex address for a blockchain contract. | defaults to undefined
 **tokenID** | [**string**] | An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT. | defaults to undefined
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'
 **limit** | [**number**] | Limits the number of results in a single response. | (optional) defaults to 100


### Return type

**TokenEvents**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A token with transactions restricted to transfer events. |  * X-Doc-Next-Cursor -  <br>  * X-Doc-Next-Link -  <br>  * X-Doc-Start-Cursor -  <br>  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTokensBySearchQuery**
> Array<Token> getTokensBySearchQuery()

Get tokens by a search query.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetTokensBySearchQueryRequest = {
  // string | A search query that returns matching results
  query: "chromie squiggle art blocks",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
  // number | Limits the number of results in a single response. (optional)
  limit: 25,
  // string | Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours. (optional)
  cursor: "FooBarBazf0obArBazFo0BarBaz=",
};

apiInstance.getTokensBySearchQuery(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | A search query that returns matching results | defaults to undefined
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'
 **limit** | [**number**] | Limits the number of results in a single response. | (optional) defaults to 100
 **cursor** | [**string**] | Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours. | (optional) defaults to undefined


### Return type

**Array<Token>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of tokens that related to the search. |  * X-Doc-Next-Cursor -  <br>  * X-Doc-Next-Link -  <br>  * X-Doc-Start-Cursor -  <br>  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWallet**
> Array<Wallet> getWallet()

Get a wallet by a wallet address.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetWalletRequest = {
  // string | A hex string referencing a public wallet address.
  walletAddress: "0x3cd378c9b1cb5f147ebf1b2c2564118946ae4ba1",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
};

apiInstance.getWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletAddress** | [**string**] | A hex string referencing a public wallet address. | defaults to undefined
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'


### Return type

**Array<Wallet>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list with at most one wallet matching this wallet address. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWalletBalances**
> Array<CurrencyInfo> getWalletBalances()

Returns a list of balances for tokens this wallet currently owns, sorted by contract.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetWalletBalancesRequest = {
  // string | A hex string referencing a public wallet address.
  walletAddress: "0x3cd378c9b1cb5f147ebf1b2c2564118946ae4ba1",
  // number | Limits the number of results in a single response. (optional)
  limit: 25,
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
};

apiInstance.getWalletBalances(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletAddress** | [**string**] | A hex string referencing a public wallet address. | defaults to undefined
 **limit** | [**number**] | Limits the number of results in a single response. | (optional) defaults to 100
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'


### Return type

**Array<CurrencyInfo>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The balance of fungible tokens from smart contracts or blockchains. Certain non-standard ERC-20 tokens (e.g. stETH) may occasionally have stale balances, for example interest payments can be slow to update. The contract address for native tokens is the null contract address, 0x0000000000000000000000000000000000000000. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWalletContractApprovals**
> Array<Transaction> getWalletContractApprovals()

Returns the latest approval events for all contracts the wallet has given spending authority to.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetWalletContractApprovalsRequest = {
  // string | A hex string referencing a public wallet address.
  walletAddress: "0x3cd378c9b1cb5f147ebf1b2c2564118946ae4ba1",
};

apiInstance.getWalletContractApprovals(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletAddress** | [**string**] | A hex string referencing a public wallet address. | defaults to undefined


### Return type

**Array<Transaction>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transaction records for all currently approved contracts. \&quot;Current\&quot; means the last approval event for a given contract. Approved means the last approval has a value greater than 0. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWalletMints**
> Array<Token> getWalletMints()

Returns a list of tokens minted by a wallet.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetWalletMintsRequest = {
  // string | A hex string referencing a public wallet address.
  walletAddress: "0x3cd378c9b1cb5f147ebf1b2c2564118946ae4ba1",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
  // string | Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours. (optional)
  cursor: "FooBarBazf0obArBazFo0BarBaz=",
  // number | Limits the number of results in a single response. (optional)
  limit: 25,
};

apiInstance.getWalletMints(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletAddress** | [**string**] | A hex string referencing a public wallet address. | defaults to undefined
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'
 **cursor** | [**string**] | Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours. | (optional) defaults to undefined
 **limit** | [**number**] | Limits the number of results in a single response. | (optional) defaults to 100


### Return type

**Array<Token>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of tokens that were minted by the specified wallet. |  * X-Doc-Next-Cursor -  <br>  * X-Doc-Next-Link -  <br>  * X-Doc-Start-Cursor -  <br>  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWalletTokens**
> Array<Token> getWalletTokens()

Returns a list of tokens owned by a wallet.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetWalletTokensRequest = {
  // string | A hex string referencing a public wallet address.
  walletAddress: "0x3cd378c9b1cb5f147ebf1b2c2564118946ae4ba1",
  // boolean | A boolean that will remove airdropped tokens from a result set. (optional)
  filterAirdrops: true,
  // string | Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours. (optional)
  cursor: "FooBarBazf0obArBazFo0BarBaz=",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
  // number | Limits the number of results in a single response. (optional)
  limit: 25,
};

apiInstance.getWalletTokens(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletAddress** | [**string**] | A hex string referencing a public wallet address. | defaults to undefined
 **filterAirdrops** | [**boolean**] | A boolean that will remove airdropped tokens from a result set. | (optional) defaults to undefined
 **cursor** | [**string**] | Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours. | (optional) defaults to undefined
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'
 **limit** | [**number**] | Limits the number of results in a single response. | (optional) defaults to 100


### Return type

**Array<Token>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of tokens that are owned by the specified wallet. |  * X-Doc-Next-Cursor -  <br>  * X-Doc-Next-Link -  <br>  * X-Doc-Start-Cursor -  <br>  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWalletTokensByCollections**
> Array<OwnedCollection> getWalletTokensByCollections()

Returns a list of collections with tokens owned by a wallet.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetWalletTokensByCollectionsRequest = {
  // string | A hex string referencing a public wallet address.
  walletAddress: "0x3cd378c9b1cb5f147ebf1b2c2564118946ae4ba1",
  // string | Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours. (optional)
  cursor: "FooBarBazf0obArBazFo0BarBaz=",
  // boolean | A boolean that will remove airdropped tokens from a result set. (optional)
  filterAirdrops: true,
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
  // number | Limits the number of results in a single response. (optional)
  limit: 25,
};

apiInstance.getWalletTokensByCollections(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletAddress** | [**string**] | A hex string referencing a public wallet address. | defaults to undefined
 **cursor** | [**string**] | Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours. | (optional) defaults to undefined
 **filterAirdrops** | [**boolean**] | A boolean that will remove airdropped tokens from a result set. | (optional) defaults to undefined
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'
 **limit** | [**number**] | Limits the number of results in a single response. | (optional) defaults to 100


### Return type

**Array<OwnedCollection>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of tokens that are owned by the specified wallet. |  * X-Doc-Next-Cursor -  <br>  * X-Doc-Next-Link -  <br>  * X-Doc-Start-Cursor -  <br>  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWalletTransactions**
> Array<Transaction> getWalletTransactions()

Returns transactions related to a wallet.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetWalletTransactionsRequest = {
  // string | A hex string referencing a public wallet address.
  walletAddress: "0x3cd378c9b1cb5f147ebf1b2c2564118946ae4ba1",
  // string | Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours. (optional)
  cursor: "FooBarBazf0obArBazFo0BarBaz=",
  // number | Limits the number of results in a single response. (optional)
  limit: 25,
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
  // 'native' | 'fungible' | 'NFT' | 'SFT' | 'unknown' | The token type filters a query to only a subset of tokens, for example, only NFTs. To select ERC-20 and sidechain transactions, use the \"fungible\" value. To select only NFTs or semi-fungible tokens (SFTs), use the \"NFT\" or \"SFT\" enums. To select only L1 native token transactions, use the \"native\" enum. (optional)
  tokenType: "NFT",
};

apiInstance.getWalletTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletAddress** | [**string**] | A hex string referencing a public wallet address. | defaults to undefined
 **cursor** | [**string**] | Cursor to support API pagination. This value is returned via the X-Doc-Next-Link HTTP response header for endpoints that support pagination and have more documents available. The cursor expires after 24-hours. | (optional) defaults to undefined
 **limit** | [**number**] | Limits the number of results in a single response. | (optional) defaults to 100
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'
 **tokenType** | [**&#39;native&#39; | &#39;fungible&#39; | &#39;NFT&#39; | &#39;SFT&#39; | &#39;unknown&#39;**]**Array<&#39;native&#39; &#124; &#39;fungible&#39; &#124; &#39;NFT&#39; &#124; &#39;SFT&#39; &#124; &#39;unknown&#39;>** | The token type filters a query to only a subset of tokens, for example, only NFTs. To select ERC-20 and sidechain transactions, use the \&quot;fungible\&quot; value. To select only NFTs or semi-fungible tokens (SFTs), use the \&quot;NFT\&quot; or \&quot;SFT\&quot; enums. To select only L1 native token transactions, use the \&quot;native\&quot; enum. | (optional) defaults to undefined


### Return type

**Array<Transaction>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of transactions that have been performed by this wallet. Use token type to restrict to only certain transactions, such as NFTs |  * X-Doc-Next-Cursor -  <br>  * X-Doc-Next-Link -  <br>  * X-Doc-Start-Cursor -  <br>  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWalletsSuggestionsResults**
> Array<AutoSuggestion> getWalletsSuggestionsResults()

Get autocomplete-style search suggestions for wallets.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetWalletsSuggestionsResultsRequest = {
  // string | A query or partial query that can be used to retrieve suggested results. For example \"bored a\" would return a suggestion for \"bored ape.\" (optional)
  query: "bored a",
};

apiInstance.getWalletsSuggestionsResults(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | A query or partial query that can be used to retrieve suggested results. For example \&quot;bored a\&quot; would return a suggestion for \&quot;bored ape.\&quot; | (optional) defaults to undefined


### Return type

**Array<AutoSuggestion>**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of search suggestions for wallets by a search query. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


