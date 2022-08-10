# .AlphaApi

All URIs are relative to *https://api.n.xyz*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTopCollections**](AlphaApi.md#getTopCollections) | **GET** /api/v1-alpha/collections/top | Returns trending and interesting collections on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
[**getTopTokens**](AlphaApi.md#getTopTokens) | **GET** /api/v1-alpha/tokens/top | Returns trending and interesting NFTs and SFTs on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.
[**getTopWallets**](AlphaApi.md#getTopWallets) | **GET** /api/v1-alpha/wallets/top | Returns trending and interesting wallets on Ethereum. Useful for powering discovery experiences and providing an on-ramp to exploring creative blockchain data.


# **getTopCollections**
> Array<Collection> getTopCollections()


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


