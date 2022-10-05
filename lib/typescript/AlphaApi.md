# .AlphaApi

All URIs are relative to *https://api.n.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTokensSuggestionsResults**](AlphaApi.md#getTokensSuggestionsResults) | **GET** /api/v1-alpha/tokens/suggestions | Autocomplete tokens
[**getTopCollections**](AlphaApi.md#getTopCollections) | **GET** /api/v1-alpha/collections/top | Get top collections
[**getTopTokens**](AlphaApi.md#getTopTokens) | **GET** /api/v1-alpha/tokens/top | Get top tokens
[**getTopWallets**](AlphaApi.md#getTopWallets) | **GET** /api/v1-alpha/wallets/top | Get top wallets
[**postRefresh**](AlphaApi.md#postRefresh) | **POST** /api/v1-alpha/refresh/{contractAddress}/{tokenID} | Submit a request for metadata to be refreshed.


# **getTokensSuggestionsResults**
> Array<AutoSuggestion> getTokensSuggestionsResults()

Get autocomplete-style search suggestions for tokens.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlphaApi(configuration);

let body:.AlphaApiGetTokensSuggestionsResultsRequest = {
  // string | A query or partial query that can be used to retrieve suggested results. For example \"bored a\" would return a suggestion for \"bored ape.\" (optional)
  query: "bored a",
};

apiInstance.getTokensSuggestionsResults(body).then((data:any) => {
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
**200** | List of search suggestions for tokens by a search query. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTopCollections**
> Array<Collection> getTopCollections()

Returns trending and interesting collections on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlphaApi(configuration);

let body:any = {};

apiInstance.getTopCollections(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


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
**200** | A list of trending and interesting collections on Ethereum. Only gives simple identifying information for collections. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTopTokens**
> Array<Token> getTopTokens()

Returns trending and interesting NFTs and SFTs on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlphaApi(configuration);

let body:any = {};

apiInstance.getTopTokens(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


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
**200** | A list of trending and interesting NFTs and SFTs on Ethereum. Only gives simple identifying information for tokens. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTopWallets**
> Array<Wallet> getTopWallets()

Returns trending and interesting wallets on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlphaApi(configuration);

let body:any = {};

apiInstance.getTopWallets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


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
**200** | A list of trending and interesting wallets on Ethereum. Only gives simple identifying information for wallets. |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postRefresh**
> void postRefresh()

The metadata will be refreshed offline and later updated.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlphaApi(configuration);

let body:.AlphaApiPostRefreshRequest = {
  // string | A hex address for a blockchain contract.
  contractAddress: "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
  // string | An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT.
  tokenID: "228000094",
  // string | An identifier to restrict results to a given blockchain. Provide either a keyword such as \"ethereum\" or \"polygon\" to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. (optional)
  chainID: "ethereum",
  // boolean | Refresh media. (optional)
  media: true,
};

apiInstance.postRefresh(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | [**string**] | A hex address for a blockchain contract. | defaults to undefined
 **tokenID** | [**string**] | An arbitrary ID defined by a contract to uniquely identify a cryptographic asset such as an NFT. | defaults to undefined
 **chainID** | [**string**] | An identifier to restrict results to a given blockchain. Provide either a keyword such as \&quot;ethereum\&quot; or \&quot;polygon\&quot; to restrict to the mainnet for named chains. Also supports CAIP-2 identifiers. | (optional) defaults to 'ethereum'
 **media** | [**boolean**] | Refresh media. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[apikey](README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Empty |  -  |
**0** | An error message for unexpected requests. |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-RateLimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


