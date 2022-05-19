/**
 * n.xyz REST API
 * REST API for blockchain data.
 *
 * OpenAPI spec version: 0.0.11
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as api from "./api"
import { Configuration } from "./configuration"

const config: Configuration = {}

describe("DefaultApi", () => {
  let instance: api.DefaultApi
  beforeEach(function() {
    instance = new api.DefaultApi(config)
  });

  test("apiV1CollectionsContractAddressGet", () => {
    const contractAddress: string = "contractAddress_example"
    return expect(instance.apiV1CollectionsContractAddressGet(contractAddress, {})).resolves.toBe(null)
  })
  test("apiV1CollectionsGet", () => {
    const contractAddress: string = "contractAddress_example"
    const query: string = "query_example"
    const sort: string = "sort_example"
    return expect(instance.apiV1CollectionsGet(contractAddress, query, sort, {})).resolves.toBe(null)
  })
  test("apiV1TokensContractAddressGet", () => {
    const contractAddress: string = "contractAddress_example"
    return expect(instance.apiV1TokensContractAddressGet(contractAddress, {})).resolves.toBe(null)
  })
  test("apiV1TokensContractAddressTokenIDGet", () => {
    const contractAddress: string = "contractAddress_example"
    const tokenID: string = "tokenID_example"
    return expect(instance.apiV1TokensContractAddressTokenIDGet(contractAddress, tokenID, {})).resolves.toBe(null)
  })
  test("apiV1TokensGet", () => {
    const contractAddress: string = "contractAddress_example"
    const tokenID: string = "tokenID_example"
    const query: string = "query_example"
    const sort: string = "sort_example"
    return expect(instance.apiV1TokensGet(contractAddress, tokenID, query, sort, {})).resolves.toBe(null)
  })
  test("apiV1WalletsGet", () => {
    const walletAddress: string = "walletAddress_example"
    const query: string = "query_example"
    return expect(instance.apiV1WalletsGet(walletAddress, query, {})).resolves.toBe(null)
  })
  test("apiV1WalletsWalletAddressGet", () => {
    const walletAddress: string = "walletAddress_example"
    return expect(instance.apiV1WalletsWalletAddressGet(walletAddress, {})).resolves.toBe(null)
  })
})

