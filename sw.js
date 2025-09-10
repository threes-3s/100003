/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-9637eeee'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/ai-WaZgaUjF.png",
    "revision": null
  }, {
    "url": "assets/app-DMxkV--P.png",
    "revision": null
  }, {
    "url": "assets/app-DWvr89hV.js",
    "revision": null
  }, {
    "url": "assets/B2tFp0Fe.js",
    "revision": null
  }, {
    "url": "assets/BgzhzJCp.css",
    "revision": null
  }, {
    "url": "assets/BinRtZV-.js",
    "revision": null
  }, {
    "url": "assets/CbLyUykG.js",
    "revision": null
  }, {
    "url": "assets/CitCzgt2.css",
    "revision": null
  }, {
    "url": "assets/d6VAS48w.js",
    "revision": null
  }, {
    "url": "assets/Deby6LJH.css",
    "revision": null
  }, {
    "url": "assets/DIyVbcHw.js",
    "revision": null
  }, {
    "url": "assets/donate-iTAF6ci1.jpg",
    "revision": null
  }, {
    "url": "assets/logo-BxXFPa_3.png",
    "revision": null
  }, {
    "url": "assets/OWBecvr9.js",
    "revision": null
  }, {
    "url": "assets/pDRG5IRj.js",
    "revision": null
  }, {
    "url": "assets/PqpQzaZs.js",
    "revision": null
  }, {
    "url": "assets/PtiXwon1.js",
    "revision": null
  }, {
    "url": "assets/shot-ai-DyQKRRNp.png",
    "revision": null
  }, {
    "url": "assets/temple-CUGiJfxu.jpg",
    "revision": null
  }, {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "7b4c5f774f9b8f647db7e9a42e2b6eec"
  }, {
    "url": "icons/favicon.svg",
    "revision": "aed898aa97935c950c15b0201fcddce3"
  }, {
    "url": "icons/logo.png",
    "revision": "7be9de51585cbbfe2f90e80e291bf82d"
  }, {
    "url": "icons/maskable-icon-512x512.png",
    "revision": "54b310a01b658fa41be02315c29d45e0"
  }, {
    "url": "icons/pwa-192x192.png",
    "revision": "84d057d02988a04f91e126f6400acbab"
  }, {
    "url": "icons/pwa-512x512.png",
    "revision": "cdba539190e861187ac4ec27f75bd12e"
  }, {
    "url": "icons/pwa-64x64.png",
    "revision": "cf2e720bf618ca724cadb140bf0b186f"
  }, {
    "url": "sutra/0001-0151.html",
    "revision": "d43e10cf8e98a2d1510e6580f47eaf05"
  }, {
    "url": "sutra/0152-0219.html",
    "revision": "8f86fcae6cae434f0949904febe6d918"
  }, {
    "url": "sutra/0220-0261.html",
    "revision": "2950dd19787ca26bdbe72dc108c704d2"
  }, {
    "url": "sutra/0262-0277.html",
    "revision": "67818dbfb1b971bff20cada45c9bd266"
  }, {
    "url": "sutra/0278-0309.html",
    "revision": "97fe0e559885069894673cb9d7194cd5"
  }, {
    "url": "sutra/0310-0373.html",
    "revision": "d493413a9d0a34a5c33adfb95808199d"
  }, {
    "url": "sutra/0374-0396.html",
    "revision": "6a752651960b6b53887585f0a94d93e6"
  }, {
    "url": "sutra/0397-0424.html",
    "revision": "f70d647b31fe0fe10f0f8ee3eab3af8d"
  }, {
    "url": "sutra/0425-0847.html",
    "revision": "1b91e5b38c9ee165e898c6f7c6f20d86"
  }, {
    "url": "sutra/0848-1420.html",
    "revision": "7365556348c4334be384f38cf1e65aa7"
  }, {
    "url": "vinaya/1421-1504.html",
    "revision": "ef9606b2824084d1b02674809c72885d"
  }, {
    "url": "sastra/1505-1535.html",
    "revision": "f5030eef81778c0f7b1222f42504fe31"
  }, {
    "url": "sastra/1536-1563.html",
    "revision": "3945569864bc5c0bf2605e985837ebb4"
  }, {
    "url": "sastra/1564-1578.html",
    "revision": "cd5042b9a40f7f2fcf6108c554e0aa9e"
  }, {
    "url": "sastra/1579-1627.html",
    "revision": "1a7ed189633bf418c14de440f0e81006"
  }, {
    "url": "sastra/1628-1692.html",
    "revision": "43e183fead83866be6802a3a5cbaa9e5"
  }, {
    "url": "other/1693-1803.html",
    "revision": "db3b63c6df6aff90eab918be40cfde26"
  }, {
    "url": "other/1804-1815.html",
    "revision": "12e93b3a53b9d973130e9616f149bc71"
  }, {
    "url": "other/1816-1850.html",
    "revision": "fd7e8084e718c7ab8c7bd724bfa7aba4"
  }, {
    "url": "other/1851-2025.html",
    "revision": "e8099797a8850eb7d1c13f7faba6af12"
  }, {
    "url": "other/2026-2120.html",
    "revision": "87b4e378bcaee2b3753f1841883eae1d"
  }, {
    "url": "other/2121-2136.html",
    "revision": "e050029653870c302be49112483f2a59"
  }, {
    "url": "other/2137-2144.html",
    "revision": "e2aec8a320fcce5f766b190792831fe9"
  }, {
    "url": "other/2145-2184.html",
    "revision": "c30a3dad5e48d8348e8b30fda604410d"
  }, {
    "url": "other/2732-2864.html",
    "revision": "6113152dce6166fa8ff54fde22af9a71"
  }, {
    "url": "other/2865-2920.html",
    "revision": "c598517a48de7da813817bb935f441fa"
  }, {
    "url": "hot/0001/001.html",
    "revision": "9fd11297c696fc638fd284defbc32f3f"
  }, {
    "url": "hot/0235/001.html",
    "revision": "fbb229de21974b13851d76ba49d739ac"
  }, {
    "url": "hot/0251/001.html",
    "revision": "7861ba504b63254554af19b3566e1e9a"
  }, {
    "url": "hot/0262/001.html",
    "revision": "cd984904d6ba56aea54500c804a4f500"
  }, {
    "url": "hot/0278/001.html",
    "revision": "4822ca784f9c3e57cf24bb7c4809e8d0"
  }, {
    "url": "hot/0364/001.html",
    "revision": "a19293593fb07415f61eec5c088e7faa"
  }, {
    "url": "hot/0365/001.html",
    "revision": "4bddf4b9d41109f79c9171f5befe8a72"
  }, {
    "url": "hot/0366/001.html",
    "revision": "7cf611869c94c2b224a1bb0f66532663"
  }, {
    "url": "hot/0412/001.html",
    "revision": "c1a347729b594136d5c8dd2cfc02d59f"
  }, {
    "url": "hot/0784/001.html",
    "revision": "2900fe9b73017ebc54c8afbdef09f1ea"
  }, {
    "url": "hot/0945/001.html",
    "revision": "65e984690b31cf789afc4feec672e852"
  }, {
    "url": "hot/1911/001.html",
    "revision": "dfb08250da11a1730376171bf7c60a8b"
  }, {
    "url": "hot/2016/001.html",
    "revision": "d397fb7e59c4fb0d13fb37017f107ff8"
  }, {
    "url": "about.html",
    "revision": "857d70eb2bd35fab895352fdb169a216"
  }, {
    "url": "adobe-webfont.js",
    "revision": "7c043b1ce65979545de8579aa667e2ea"
  }, {
    "url": "book.html",
    "revision": "256bbbde2d9a39d3f49191d120001bf8"
  }, {
    "url": "category.html",
    "revision": "17404ce6bc170f243cfb3bfac1dc1aee"
  }, {
    "url": "chat.html",
    "revision": "757cca0652c0c0eb526bee81489598fd"
  }, {
    "url": "index.html",
    "revision": "285133a0d41a2e09399c006964c5e694"
  }, {
    "url": "mantra.html",
    "revision": "1dc75385d20aa651a054e70c638032ac"
  }, {
    "url": "other.html",
    "revision": "b849b1b0eef36389f12278c50ae986c7"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "sastra.html",
    "revision": "1759fd12498c050708933512dd33f536"
  }, {
    "url": "sutra.html",
    "revision": "83ce48ad45836a9d35b3648777a7e8e2"
  }, {
    "url": "vinaya.html",
    "revision": "c8e8f98ac9af4203a2c127e584f43ad6"
  }, {
    "url": "icons/pwa-192x192.png",
    "revision": "84d057d02988a04f91e126f6400acbab"
  }, {
    "url": "icons/pwa-512x512.png",
    "revision": "cdba539190e861187ac4ec27f75bd12e"
  }, {
    "url": "manifest.webmanifest",
    "revision": "3e057658a17b57b1a13f4aa8365c4812"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html"), {
    allowlist: [/^\/assets/, /^\/chat/, /^\/icons/, /^\/sutra/, /^\/vinaya/, /^\/sastra/, /^\/other/, /^\/hot/]
  }));

}));
