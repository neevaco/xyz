# .DefaultApi

All URIs are relative to *https://api.n.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlockchains**](DefaultApi.md#getBlockchains) | **GET** /api/v1/blockchains | Lists all supported blockchains.
[**getCollection**](DefaultApi.md#getCollection) | **GET** /api/v1/collections/{contractAddress} | Get a collection by its contract address.
[**getContractTokens**](DefaultApi.md#getContractTokens) | **GET** /api/v1/tokens/{contractAddress} | Get tokens by contract address.
[**getContractTokensByContractAndID**](DefaultApi.md#getContractTokensByContractAndID) | **GET** /api/v1/token-batch | Get tokens by a pair of contract addresses and token IDs. The input are two ordered arrays. The first element of contractAddresses should be related to the 1st element of the tokenID, etc. In the below example two tokens are being requested, token 3481 from the \&quot;goblintown\&quot; contract (i.e. 0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e) and token 50603 from the Otherdeed contract (i.e. 0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258).
[**getContractTransactionHistory**](DefaultApi.md#getContractTransactionHistory) | **GET** /api/v1/collections/{contractAddress}/transactions/history | Get the transaction history for a collection
[**getSearchResults**](DefaultApi.md#getSearchResults) | **GET** /api/v1/search/{query} | Get search results such as wallets, tokens, and collections by a search query.
[**getSoldTokens**](DefaultApi.md#getSoldTokens) | **GET** /api/v1/wallets/{walletAddress}/sold-tokens | Returns a list of tokens sold by a wallet.
[**getToken**](DefaultApi.md#getToken) | **GET** /api/v1/tokens/{contractAddress}/{tokenID} | Get a token by its contract address and token ID.
[**getTokenGate**](DefaultApi.md#getTokenGate) | **GET** /api/v1/wallets/{walletAddress}/gate/{contractAddress}/{tokenID} | Determine if a wallet has a given token from a contract.
[**getTokenTransfers**](DefaultApi.md#getTokenTransfers) | **GET** /api/v1/tokens/{contractAddress}/{tokenID}/transfers | Returns a list of transfer transactions on a specified token.
[**getTokensBySearchQuery**](DefaultApi.md#getTokensBySearchQuery) | **GET** /api/v1/tokens/search/{query} | Get tokens by a search query.
[**getWallet**](DefaultApi.md#getWallet) | **GET** /api/v1/wallets/{walletAddress} | Get a wallet by a wallet address
[**getWalletBalances**](DefaultApi.md#getWalletBalances) | **GET** /api/v1/wallets/{walletAddress}/balances | Returns a list of balances for tokens this wallet currently owns.
[**getWalletMints**](DefaultApi.md#getWalletMints) | **GET** /api/v1/wallets/{walletAddress}/mints | Returns a list of tokens minted by a wallet.
[**getWalletTokens**](DefaultApi.md#getWalletTokens) | **GET** /api/v1/wallets/{walletAddress}/tokens | Returns a list of tokens owned by a wallet.
[**getWalletTransactions**](DefaultApi.md#getWalletTransactions) | **GET** /api/v1/wallets/{walletAddress}/transactions/history | Returns a list of transactions that have been performed by this wallet. Use token type to restrict to only certain transactions, such as NFTs


# **getBlockchains**
> Array<BlockchainInfo> getBlockchains()


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


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetCollectionRequest = {
  // string | A hex address for a blockchain contract.
  contractAddress: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "eip155:1",
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

# **getContractTokens**
> Array<Token> getContractTokens()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetContractTokensRequest = {
  // string | A hex address for a blockchain contract.
  contractAddress: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "eip155:1",
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
**200** | A list of tokens that belong to this contract. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getContractTokensByContractAndID**
> Array<Token> getContractTokensByContractAndID()


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
  chainID: "eip155:1",
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
**200** | A list of tokens that belong to this contract. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getContractTransactionHistory**
> Array<Transaction> getContractTransactionHistory()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetContractTransactionHistoryRequest = {
  // string | A hex address for a blockchain contract.
  contractAddress: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
  // string | Cursor to support API pagination. (optional)
  cursor: "8d7XKgOtUB7qNJibGMR1GQNxL0Ese88czy_89GL_tKjRDHW1QCkjEWBMDLVMwGd1ZxSWaNYKxDpo9URH2HdQ2oaED41tq2lemewmDIvflmk=",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "eip155:1",
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
 **cursor** | [**string**] | Cursor to support API pagination. | (optional) defaults to undefined
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
**200** | A list with the transaction history for a collection |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSearchResults**
> Array<SearchDocument> getSearchResults()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetSearchResultsRequest = {
  // string | A search query that returns matching results
  query: "chromie squiggle art blocks",
  // string | Cursor to support API pagination. (optional)
  cursor: "8d7XKgOtUB7qNJibGMR1GQNxL0Ese88czy_89GL_tKjRDHW1QCkjEWBMDLVMwGd1ZxSWaNYKxDpo9URH2HdQ2oaED41tq2lemewmDIvflmk=",
};

apiInstance.getSearchResults(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | A search query that returns matching results | defaults to undefined
 **cursor** | [**string**] | Cursor to support API pagination. | (optional) defaults to undefined


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
**200** | A list of tokens related to the search. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSoldTokens**
> Array<Token> getSoldTokens()


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
  chainID: "eip155:1",
  // string | Cursor to support API pagination. (optional)
  cursor: "8d7XKgOtUB7qNJibGMR1GQNxL0Ese88czy_89GL_tKjRDHW1QCkjEWBMDLVMwGd1ZxSWaNYKxDpo9URH2HdQ2oaED41tq2lemewmDIvflmk=",
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
 **cursor** | [**string**] | Cursor to support API pagination. | (optional) defaults to undefined
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
**200** | A paginated list of tokens that were sold by the specified wallet. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getToken**
> Array<Token> getToken()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetTokenRequest = {
  // string | A hex address for a blockchain contract.
  contractAddress: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
  // string | An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
  tokenID: "228000094",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "eip155:1",
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
> TokenGate getTokenGate()


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
  contractAddress: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
  // string | A hex string referencing a public wallet address.
  walletAddress: "0x3cd378c9b1cb5f147ebf1b2c2564118946ae4ba1",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "eip155:1",
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

**TokenGate**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A boolean indicating if the wallet has a given token. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTokenTransfers**
> TokenEvents getTokenTransfers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetTokenTransfersRequest = {
  // string | A hex address for a blockchain contract.
  contractAddress: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
  // string | An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
  tokenID: "228000094",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "eip155:1",
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
**200** | A token with transactions restricted to transfer events. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTokensBySearchQuery**
> Array<Token> getTokensBySearchQuery()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetTokensBySearchQueryRequest = {
  // string | A search query that returns matching results
  query: "chromie squiggle art blocks",
  // string | Cursor to support API pagination. (optional)
  cursor: "8d7XKgOtUB7qNJibGMR1GQNxL0Ese88czy_89GL_tKjRDHW1QCkjEWBMDLVMwGd1ZxSWaNYKxDpo9URH2HdQ2oaED41tq2lemewmDIvflmk=",
};

apiInstance.getTokensBySearchQuery(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | A search query that returns matching results | defaults to undefined
 **cursor** | [**string**] | Cursor to support API pagination. | (optional) defaults to undefined


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
**200** | A list of tokens that related to the search. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWallet**
> Array<Wallet> getWallet()


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
  chainID: "eip155:1",
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
**200** | The balance of fungible tokens from smart contracts or blockchains. Certain non-standard ERC-20 tokens (e.g. stETH) may occasionally have stale balances, for example interest payments can be slow to update. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWalletMints**
> Array<Token> getWalletMints()


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
  chainID: "eip155:1",
  // string | Cursor to support API pagination. (optional)
  cursor: "8d7XKgOtUB7qNJibGMR1GQNxL0Ese88czy_89GL_tKjRDHW1QCkjEWBMDLVMwGd1ZxSWaNYKxDpo9URH2HdQ2oaED41tq2lemewmDIvflmk=",
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
 **cursor** | [**string**] | Cursor to support API pagination. | (optional) defaults to undefined
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
**200** | A paginated list of tokens that were minted by the specified wallet. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWalletTokens**
> Array<Token> getWalletTokens()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetWalletTokensRequest = {
  // string | A hex string referencing a public wallet address.
  walletAddress: "0x3cd378c9b1cb5f147ebf1b2c2564118946ae4ba1",
  // string | Cursor to support API pagination. (optional)
  cursor: "8d7XKgOtUB7qNJibGMR1GQNxL0Ese88czy_89GL_tKjRDHW1QCkjEWBMDLVMwGd1ZxSWaNYKxDpo9URH2HdQ2oaED41tq2lemewmDIvflmk=",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "eip155:1",
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
 **cursor** | [**string**] | Cursor to support API pagination. | (optional) defaults to undefined
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
**200** | A paginated list of tokens that are owned by the specified wallet. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWalletTransactions**
> Array<Transaction> getWalletTransactions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetWalletTransactionsRequest = {
  // string | A hex string referencing a public wallet address.
  walletAddress: "0x3cd378c9b1cb5f147ebf1b2c2564118946ae4ba1",
  // string | Cursor to support API pagination. (optional)
  cursor: "8d7XKgOtUB7qNJibGMR1GQNxL0Ese88czy_89GL_tKjRDHW1QCkjEWBMDLVMwGd1ZxSWaNYKxDpo9URH2HdQ2oaED41tq2lemewmDIvflmk=",
  // number | Limits the number of results in a single response. (optional)
  limit: 25,
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "eip155:1",
  // 'NFT' | 'SFT' | 'unknown' | An indicator that be used to filter to only a subet of tokens, for example only NFTs. (optional)
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
 **cursor** | [**string**] | Cursor to support API pagination. | (optional) defaults to undefined
 **limit** | [**number**] | Limits the number of results in a single response. | (optional) defaults to 100
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'
 **tokenType** | [**&#39;NFT&#39; | &#39;SFT&#39; | &#39;unknown&#39;**]**Array<&#39;NFT&#39; &#124; &#39;SFT&#39; &#124; &#39;unknown&#39;>** | An indicator that be used to filter to only a subet of tokens, for example only NFTs. | (optional) defaults to undefined


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
**200** | A paginated list of transactions that are related to the specified wallet. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


