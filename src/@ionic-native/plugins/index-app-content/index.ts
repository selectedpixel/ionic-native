import { Injectable } from '@angular/core';
import {
  Cordova,
  CordovaFunctionOverride,
  IonicNativePlugin,
  Plugin
} from '@ionic-native/core';
import { Observable } from 'rxjs';

export interface IndexItem {
  domain: string;
  identifier: string;
  title: string;
  description: string;

  /**
   * Url to image
   */
  url: string;

  /**
   * Item keywords
   */
  keywords?: string[];

  /**
   * Lifetime in minutes
   */
  lifetime?: number;
}

/**
 * @name Index App Content
 * @description
 * This plugin gives you a Javascript API to interact with Core Spotlight on iOS (=> iOS 9).
 * You can add, update and delete items to the spotlight search index.
 * Spotlight Search will include these items in the result list. You can deep-link the search results with your app.
 *
 * @usage
 * ```typescript
 * import { IndexAppContent } from '@ionic-native/index-app-content/ngx';
 *
 *
 * constructor(private indexAppContent: IndexAppContent) { }
 *
 * ...
 *
 * var items = [
 *      {
 *        domain: 'com.my.domain',
 *        identifier: '88asdf7dsf',
 *        title: 'Foo',
 *        description: 'Bar',
 *        url: 'http://location/of/my/image.jpg',
 *    },
 *    {
 *        domain: 'com.other.domain',
 *        identifier: '9asd67g6a',
 *        title: 'Baz',
 *        description: 'Woot',
 *        url: 'http://location/of/my/image2.jpg',
 *     }
 * ];
 *
 * this.indexAppContent.setItems(items)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'IndexAppContent',
  plugin: 'cordova-plugin-indexappcontent',
  pluginRef: 'window.plugins.indexAppContent',
  repo: 'https://github.com/johanblomgren/cordova-plugin-indexappcontent',
  platforms: ['iOS']
})
@Injectable({
  providedIn: 'root'
})
export class IndexAppContent extends IonicNativePlugin {
  /**
   * The option to index app content might not be available at all due to device limitations or user settings.
   * Therefore it's highly recommended to check upfront if indexing is possible.
   * @return {Promise<boolean>} Returns a promise that resolves with true if indexing is available, false if not
   */
  @Cordova()
  isIndexingAvailable(): Promise<boolean> {
    return;
  }

  /**
   * Add or change items to spotlight index
   * @param {IndexItem[]} items Array of items to index
   * @return {Promise<any>} Returns if index set was successfully
   */
  @Cordova()
  setItems(items: IndexItem[]): Promise<any> {
    return;
  }

  /**
   * Clear all items stored for a given array of domains
   * @param {string[]} domains Array of domains to clear
   * @return {Promise<any>} Resolve if successfully
   */
  @Cordova()
  clearItemsForDomains(domains: string[]): Promise<any> {
    return;
  }

  /**
   * Clear all items stored for a given array of identifiers
   * @param {string[]} identifiers Array of identifiers to clear
   * @return {Promise<any>} Resolve if successfully
   */
  @Cordova()
  clearItemsForIdentifiers(identifiers: string[]): Promise<any> {
    return;
  }

  /**
   * If user taps on a search result in spotlight then the app will be launched.
   * You can register a Javascript handler to get informed when this happens.
   * @returns {Observable<any>} returns an observable that notifies you when he user presses on the home screen icon
   */
  @CordovaFunctionOverride()
  onItemPressed(): Observable<any> {
    return;
  }

  /**
   * You might want to avoid to update spotlight index too frequently.
   * Without calling this function a subsequent call to manipulate the index is only possible after 1440 minutes (= 24 hours)!
   * @param {number} intervalMinutes value => 0
   */
  @Cordova()
  setIndexingInterval(intervalMinutes: number) {
    return;
  }
}
