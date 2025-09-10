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
    "url": "assets/app-DkfTwu0B.js",
    "revision": null
  }, {
    "url": "assets/app-DMxkV--P.png",
    "revision": null
  }, {
    "url": "assets/B13dsHPp.js",
    "revision": null
  }, {
    "url": "assets/BgzhzJCp.css",
    "revision": null
  }, {
    "url": "assets/BinRtZV-.js",
    "revision": null
  }, {
    "url": "assets/BLDLf7vI.css",
    "revision": null
  }, {
    "url": "assets/CHuCpxAC.js",
    "revision": null
  }, {
    "url": "assets/CMMXj8U3.js",
    "revision": null
  }, {
    "url": "assets/Deby6LJH.css",
    "revision": null
  }, {
    "url": "assets/DIaVrd7Q.js",
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
    "url": "assets/pHalPFJn.js",
    "revision": null
  }, {
    "url": "assets/shot-ai-DyQKRRNp.png",
    "revision": null
  }, {
    "url": "assets/temple-CUGiJfxu.jpg",
    "revision": null
  }, {
    "url": "assets/Zweaz4_f.js",
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
    "revision": "96a1286d73bc66cb6e99be585c029524"
  }, {
    "url": "sutra/0152-0219.html",
    "revision": "ab23a93b052919ec02ab86bd0aceb8f8"
  }, {
    "url": "sutra/0220-0261.html",
    "revision": "a0d7d93c7f66f9b6841e05f9db26566b"
  }, {
    "url": "sutra/0262-0277.html",
    "revision": "9144992e0c648de6cfbe088229ce0be8"
  }, {
    "url": "sutra/0278-0309.html",
    "revision": "30d9e975a6839174cb341a85fe253aa3"
  }, {
    "url": "sutra/0310-0373.html",
    "revision": "371e4bc58bfbc06d830301dbcd7b05cc"
  }, {
    "url": "sutra/0374-0396.html",
    "revision": "819c973e0492ef12388c83753ed350eb"
  }, {
    "url": "sutra/0397-0424.html",
    "revision": "b78269fbf633d40640f039e9e3a8086c"
  }, {
    "url": "sutra/0425-0847.html",
    "revision": "0a061b81fadd064d9ca1c5a1201abdbd"
  }, {
    "url": "sutra/0848-1420.html",
    "revision": "916c3dd8ebee88514bc023483ecb0b5a"
  }, {
    "url": "vinaya/1421-1504.html",
    "revision": "279ca48e74a94de4a5c26768673140e8"
  }, {
    "url": "sastra/1505-1535.html",
    "revision": "d379cb89e81001b1499e42836a83bb81"
  }, {
    "url": "sastra/1536-1563.html",
    "revision": "13446127e938bc85d970cdba346902d0"
  }, {
    "url": "sastra/1564-1578.html",
    "revision": "4525698ee25cd4bb5c8f2c58bfe5c8f7"
  }, {
    "url": "sastra/1579-1627.html",
    "revision": "6c461d770f4182300c0367ced3b772ed"
  }, {
    "url": "sastra/1628-1692.html",
    "revision": "636073208acf1f4cb5a252028a538772"
  }, {
    "url": "other/1693-1803.html",
    "revision": "bfd0dd94088ad89b5c439614c08d555b"
  }, {
    "url": "other/1804-1815.html",
    "revision": "d7a688fe575dc6f94c26b1965171e791"
  }, {
    "url": "other/1816-1850.html",
    "revision": "6002acce9840611e20888ce0316ef40e"
  }, {
    "url": "other/1851-2025.html",
    "revision": "b3f0d19cb8849e48e4e3786501acb6ed"
  }, {
    "url": "other/2026-2120.html",
    "revision": "843aa88363d510ff7ff1bc5b0964c072"
  }, {
    "url": "other/2121-2136.html",
    "revision": "fae207c6ca6d86e8b37931426dbfe18e"
  }, {
    "url": "other/2137-2144.html",
    "revision": "45a5a7339e9c7bb82f19aa1a5e760603"
  }, {
    "url": "other/2145-2184.html",
    "revision": "2d1bf4e2f3930b41c988ec6f9fd06dea"
  }, {
    "url": "other/2732-2864.html",
    "revision": "37ad0544023e05e8ba5bbcde29995161"
  }, {
    "url": "other/2865-2920.html",
    "revision": "263105bac0c246077de7f2d0b47f5c6b"
  }, {
    "url": "hot/0001/001.html",
    "revision": "c2c7b91aac27462b88edba7f52db4251"
  }, {
    "url": "hot/0235/001.html",
    "revision": "d6d61b82c9aa663bcd5842d91728c88e"
  }, {
    "url": "hot/0251/001.html",
    "revision": "de6d0be275fc8a2214e0d3fe8a51d8e7"
  }, {
    "url": "hot/0262/001.html",
    "revision": "6cf049e59606a9cc720bf3f0b80f926f"
  }, {
    "url": "hot/0278/001.html",
    "revision": "1142afd2e52cd102c92f3f21a8bf3a94"
  }, {
    "url": "hot/0364/001.html",
    "revision": "ce54c8767dc7b41232f81b30def0820d"
  }, {
    "url": "hot/0365/001.html",
    "revision": "dfe5e8b1540b6aeb8eba56dc52f3c84a"
  }, {
    "url": "hot/0366/001.html",
    "revision": "7ff6d9383f56e6078a2332e41aa481cf"
  }, {
    "url": "hot/0412/001.html",
    "revision": "8d34bac4b5a22d352e7820eb511300fa"
  }, {
    "url": "hot/0784/001.html",
    "revision": "ec5a8efc30b206cd7c5e56078ea674b4"
  }, {
    "url": "hot/0945/001.html",
    "revision": "e79ad6d16cf71e7cf7189829cd87553d"
  }, {
    "url": "hot/1911/001.html",
    "revision": "f2d6df457cc851c454e726bf72a5c6ca"
  }, {
    "url": "hot/2016/001.html",
    "revision": "fe6af54ead1d942362266d8575228437"
  }, {
    "url": "about.html",
    "revision": "d2387836b842e122d706814c408ea5eb"
  }, {
    "url": "adobe-webfont.js",
    "revision": "7c043b1ce65979545de8579aa667e2ea"
  }, {
    "url": "book.html",
    "revision": "d6e0cbe811c3d0d3aa6754f7e29b2ddb"
  }, {
    "url": "category.html",
    "revision": "67d9fa9a82af70f1e1cedf1834822bce"
  }, {
    "url": "chat.html",
    "revision": "757cca0652c0c0eb526bee81489598fd"
  }, {
    "url": "index.html",
    "revision": "f9b2ecd8bcbac841391a90357317f974"
  }, {
    "url": "mantra.html",
    "revision": "8dd9ffbd6271f2caff85d342209fc8d8"
  }, {
    "url": "other.html",
    "revision": "c6c969d7637b8aea0727e5371eb4f124"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "sastra.html",
    "revision": "0522095b7ac9029a49e999a384db756c"
  }, {
    "url": "sutra.html",
    "revision": "a06b0a616d5e4b0f36f16888d17c4f7d"
  }, {
    "url": "vinaya.html",
    "revision": "a1fcb8b0c94820ae17722eb2ad0fb1a1"
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
