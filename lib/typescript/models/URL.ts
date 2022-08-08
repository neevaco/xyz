/* tslint:disable */
/* eslint-disable */
/**
 * n.xyz REST API
 * REST API for blockchain data.
 *
 * The version of the OpenAPI document: 0.17.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface URL
 */
export interface URL {
    /**
     * Human-readable name of the site.
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
 * Check if a given object implements the URL interface.
 */
export function instanceOfURL(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function URLFromJSON(json: any): URL {
    return URLFromJSONTyped(json, false);
}

export function URLFromJSONTyped(json: any, ignoreDiscriminator: boolean): URL {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function URLToJSON(value?: URL | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'url': value.url,
    };
}

