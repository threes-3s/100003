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
    "url": "assets/app-Dqk4FxMQ.js",
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
    "url": "assets/BmvH0v3Z.js",
    "revision": null
  }, {
    "url": "assets/Cj0sdfTi.js",
    "revision": null
  }, {
    "url": "assets/D6qkVcXO.js",
    "revision": null
  }, {
    "url": "assets/Deby6LJH.css",
    "revision": null
  }, {
    "url": "assets/donate-iTAF6ci1.jpg",
    "revision": null
  }, {
    "url": "assets/logo-BxXFPa_3.png",
    "revision": null
  }, {
    "url": "assets/m9lBDXCU.js",
    "revision": null
  }, {
    "url": "assets/oDNzx0Gu.js",
    "revision": null
  }, {
    "url": "assets/OWBecvr9.js",
    "revision": null
  }, {
    "url": "assets/pDRG5IRj.js",
    "revision": null
  }, {
    "url": "assets/shot-ai-DyQKRRNp.png",
    "revision": null
  }, {
    "url": "assets/temple-CUGiJfxu.jpg",
    "revision": null
  }, {
    "url": "assets/v5hPRQvH.js",
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
    "url": "chat/favicon.svg",
    "revision": "aed898aa97935c950c15b0201fcddce3"
  }, {
    "url": "chat/index.html",
    "revision": "9e51fd39d096a042d0b09bc08106590d"
  }, {
    "url": "chat/pwa-192x192.png",
    "revision": "84d057d02988a04f91e126f6400acbab"
  }, {
    "url": "chat/pwa-512x512.png",
    "revision": "cdba539190e861187ac4ec27f75bd12e"
  }, {
    "url": "chat/assets/arc-41c48c77.js",
    "revision": "1619b69fa749b66f81baa61d0e03d0b7"
  }, {
    "url": "chat/assets/array-9f3ba611.js",
    "revision": "17dcebeaf673b09a1ca5da014d20022f"
  }, {
    "url": "chat/assets/avatar-7ea0aa29.svg",
    "revision": "ff41fa7fb8692505a124e718c5b4db82"
  }, {
    "url": "chat/assets/avatar-ceeb03f6.jpg",
    "revision": "99bd9c2018d6d07a10d1220c8350585d"
  }, {
    "url": "chat/assets/blockDiagram-9f4a6865-2b56acbe.js",
    "revision": "995bf9ae1ffd825d90143689a926c042"
  }, {
    "url": "chat/assets/c4Diagram-ae766693-83b607f4.js",
    "revision": "9ad70bf817b591c03d8e5803e10394be"
  }, {
    "url": "chat/assets/channel-25042722.js",
    "revision": "c27045d61307a94dee234446721d9be9"
  }, {
    "url": "chat/assets/classDiagram-fb54d2a0-74b0f142.js",
    "revision": "427c0de92bf33537f05264708c46607c"
  }, {
    "url": "chat/assets/classDiagram-v2-a2b738ad-886b606c.js",
    "revision": "e4ef44db3822f99215aa834de1fa2aa9"
  }, {
    "url": "chat/assets/clone-527a6ba1.js",
    "revision": "c6500ae947df908373eb6c72da37cb00"
  }, {
    "url": "chat/assets/createText-ca0c5216-21611892.js",
    "revision": "cf7b85eae46998f7c58567e541a276ed"
  }, {
    "url": "chat/assets/donate-dbedba07.jpg",
    "revision": "f391e140e2764f73464280b7458293da"
  }, {
    "url": "chat/assets/edges-066a5561-0742b322.js",
    "revision": "c821b2922bc7d9709f0f4ceeaf5340e7"
  }, {
    "url": "chat/assets/erDiagram-09d1c15f-0a3d8c2b.js",
    "revision": "b605f43a34889858758c140540f19eb0"
  }, {
    "url": "chat/assets/flowchart-elk-definition-ae0efee6-eea57749.js",
    "revision": "14f319d7e5e4d8e156a3b09ee4e3b254"
  }, {
    "url": "chat/assets/flowDb-c1833063-b1d11648.js",
    "revision": "a367162a721b5b9d246856dd67e53202"
  }, {
    "url": "chat/assets/flowDiagram-b222e15a-79801afb.js",
    "revision": "214287743dc4dc0ec7f215064ae1ab21"
  }, {
    "url": "chat/assets/flowDiagram-v2-13329dc7-c778d90a.js",
    "revision": "76502ee68a0e216c316c5936d0c7f9c1"
  }, {
    "url": "chat/assets/ganttDiagram-b62c793e-d76af9c2.js",
    "revision": "6410586e1b68d71fa2586c4a6ff201ec"
  }, {
    "url": "chat/assets/gitGraphDiagram-942e62fe-4c0366fa.js",
    "revision": "2ab1f8067cb9d524dbc9044f9d7c8564"
  }, {
    "url": "chat/assets/graph-98be1d0b.js",
    "revision": "3acac1fe54416d20808df8a83eaf643b"
  }, {
    "url": "chat/assets/index-01f381cb-74236ffc.js",
    "revision": "86ae5f220abbda105c4e0e7850f5b050"
  }, {
    "url": "chat/assets/index-25792e9e.js",
    "revision": "28a8bff84934d77638c4e663e8c98cb0"
  }, {
    "url": "chat/assets/index-40adbc9f.js",
    "revision": "a7443e57ae007d332478bb1a6f8aa92f"
  }, {
    "url": "chat/assets/index-4b5b7462.css",
    "revision": "8943b0d0084fd65b1956b8627532992b"
  }, {
    "url": "chat/assets/index-88b5b5d4.js",
    "revision": "17763ab0823ae46b9275a0c68b72875a"
  }, {
    "url": "chat/assets/index-8df5242a.js",
    "revision": "94bdffa62893fb627b8c3dbcc4006ce9"
  }, {
    "url": "chat/assets/index-b8bcac86.css",
    "revision": "3a25857bfb1fa77e123f18c08fca233b"
  }, {
    "url": "chat/assets/index-c21f0f3e.js",
    "revision": "ffff28543d72ff5c26e60d613be27b85"
  }, {
    "url": "chat/assets/infoDiagram-94cd232f-ceeb3ca0.js",
    "revision": "4e4eb99998e0dd15c5b4730cadcd9185"
  }, {
    "url": "chat/assets/init-77b53fdd.js",
    "revision": "3ce28180466443e9b617d7b96e9f7b8f"
  }, {
    "url": "chat/assets/journeyDiagram-6625b456-6739a254.js",
    "revision": "a79d4e46edc952c3aa03931db8f4308e"
  }, {
    "url": "chat/assets/KaTeX_AMS-Regular-30da91e8.woff",
    "revision": "10824af77e9961cfd548c8a458f10851"
  }, {
    "url": "chat/assets/KaTeX_AMS-Regular-68534840.ttf",
    "revision": "56573229753fad48910bda2ea1a6dd54"
  }, {
    "url": "chat/assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",
    "revision": "497bf407c4c609c6cf1f1ad38f437f7f"
  }, {
    "url": "chat/assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",
    "revision": "de2ba279933d60f7819ff61f71c17bed"
  }, {
    "url": "chat/assets/KaTeX_Caligraphic-Regular-3398dd02.woff",
    "revision": "a25140fbe6692bffe71a2ab861572eb3"
  }, {
    "url": "chat/assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",
    "revision": "e6fb499fc8f9925eea3138cccba17fff"
  }, {
    "url": "chat/assets/KaTeX_Fraktur-Bold-9163df9c.ttf",
    "revision": "b9d7c4497cab3702487214651ab03744"
  }, {
    "url": "chat/assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",
    "revision": "40934fc076960bb989d590db044fef62"
  }, {
    "url": "chat/assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",
    "revision": "97a699d83318e9334a0deaea6ae5eda2"
  }, {
    "url": "chat/assets/KaTeX_Fraktur-Regular-5e28753b.woff",
    "revision": "e435cda5784e21b26ab2d03fbcb56a99"
  }, {
    "url": "chat/assets/KaTeX_Main-Bold-138ac28d.ttf",
    "revision": "8e431f7ece346b6282dae3d9d0e7a970"
  }, {
    "url": "chat/assets/KaTeX_Main-Bold-c76c5d69.woff",
    "revision": "4cdba6465ab9fac5d3833c6cdba7a8c3"
  }, {
    "url": "chat/assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",
    "revision": "52fb39b0434c463d5df32419608ab08a"
  }, {
    "url": "chat/assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",
    "revision": "5f875f986a9bce1264e8c42417b56f74"
  }, {
    "url": "chat/assets/KaTeX_Main-Italic-0d85ae7c.ttf",
    "revision": "39349e0a2b366f38e2672b45aded2030"
  }, {
    "url": "chat/assets/KaTeX_Main-Italic-f1d6ef86.woff",
    "revision": "8ffd28f6390231548ead99d7835887fa"
  }, {
    "url": "chat/assets/KaTeX_Main-Regular-c6368d87.woff",
    "revision": "f1cdb692ee31c10b37262caffced5271"
  }, {
    "url": "chat/assets/KaTeX_Main-Regular-d0332f52.ttf",
    "revision": "818582dae57e6fac46202cfd844afabb"
  }, {
    "url": "chat/assets/KaTeX_Math-BoldItalic-850c0af5.woff",
    "revision": "48155e43d9a284b54753e50e4ba586dc"
  }, {
    "url": "chat/assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",
    "revision": "6589c4f1f587f73f0ad0af8ae35ccb53"
  }, {
    "url": "chat/assets/KaTeX_Math-Italic-08ce98e5.ttf",
    "revision": "fe5ed5875d95b18c98546cb4f47304ff"
  }, {
    "url": "chat/assets/KaTeX_Math-Italic-8a8d2445.woff",
    "revision": "ed7aea12d765f9e2d0f9bc7fa2be626c"
  }, {
    "url": "chat/assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",
    "revision": "f2ac73121357210d91e5c3eaa42f72ea"
  }, {
    "url": "chat/assets/KaTeX_SansSerif-Bold-ece03cfd.woff",
    "revision": "0e897d27f063facef504667290e408bd"
  }, {
    "url": "chat/assets/KaTeX_SansSerif-Italic-3931dd81.ttf",
    "revision": "f60b4a34842bb524b562df092917a542"
  }, {
    "url": "chat/assets/KaTeX_SansSerif-Italic-91ee6750.woff",
    "revision": "ef725de572b71381dccf53918e300744"
  }, {
    "url": "chat/assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",
    "revision": "5f8637ee731482c44a37789723f5e499"
  }, {
    "url": "chat/assets/KaTeX_SansSerif-Regular-f36ea897.ttf",
    "revision": "3243452ee6817acd761c9757aef93c29"
  }, {
    "url": "chat/assets/KaTeX_Script-Regular-1c67f068.ttf",
    "revision": "a189c37d73ffce63464635dc12cbbc96"
  }, {
    "url": "chat/assets/KaTeX_Script-Regular-d96cdf2b.woff",
    "revision": "a82fa2a7e18b8c7a1a9f6069844ebfb9"
  }, {
    "url": "chat/assets/KaTeX_Size1-Regular-95b6d2f1.ttf",
    "revision": "0d8d9204004bdf126342605f7bbdffe6"
  }, {
    "url": "chat/assets/KaTeX_Size1-Regular-c943cc98.woff",
    "revision": "4788ba5b6247e336f734b742fe9900d5"
  }, {
    "url": "chat/assets/KaTeX_Size2-Regular-2014c523.woff",
    "revision": "b0628bfd27c979a09f702a2277979888"
  }, {
    "url": "chat/assets/KaTeX_Size2-Regular-a6b2099f.ttf",
    "revision": "1fdda0e59ed35495ebac28badf210574"
  }, {
    "url": "chat/assets/KaTeX_Size3-Regular-500e04d5.ttf",
    "revision": "963af864cbb10611ba33267ba7953777"
  }, {
    "url": "chat/assets/KaTeX_Size3-Regular-6ab6b62e.woff",
    "revision": "4de844d4552e941f6b9c38837a8d487b"
  }, {
    "url": "chat/assets/KaTeX_Size4-Regular-99f9c675.woff",
    "revision": "3045a61f722bc4b198450ce69b3e3824"
  }, {
    "url": "chat/assets/KaTeX_Size4-Regular-c647367d.ttf",
    "revision": "27a23ee69999affa55491c7dab8e53bf"
  }, {
    "url": "chat/assets/KaTeX_Typewriter-Regular-e14fed02.woff",
    "revision": "0e0460587676d22eae09accd6dcfebc6"
  }, {
    "url": "chat/assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",
    "revision": "6bf4287568e1d3004b54d5d60f9f08f9"
  }, {
    "url": "chat/assets/layout-4fdab2b0.js",
    "revision": "640f72576f15d5e1e098e6f7d7c58e83"
  }, {
    "url": "chat/assets/line-276aa73a.js",
    "revision": "245b531ac63fef8cc528a9a5531d2fa2"
  }, {
    "url": "chat/assets/linear-25ad67d6.js",
    "revision": "b3c0a014554b95be49cec22d4a599d44"
  }, {
    "url": "chat/assets/logo-ai-9a9bdbac.js",
    "revision": "a557f3e350ed4692da2f45ccda35fe36"
  }, {
    "url": "chat/assets/logo-ai-ea0fe418.png",
    "revision": "7be9de51585cbbfe2f90e80e291bf82d"
  }, {
    "url": "chat/assets/logo-b3e23a27.svg",
    "revision": "aed898aa97935c950c15b0201fcddce3"
  }, {
    "url": "chat/assets/logo-sutra-2c0c1696.png",
    "revision": "bf9d0a7b7744bf0fff6742c63450cf22"
  }, {
    "url": "chat/assets/mindmap-definition-307c710a-b10a4248.js",
    "revision": "a55aab33336e4a4c851c428414913d4d"
  }, {
    "url": "chat/assets/ordinal-ba9b4969.js",
    "revision": "3a57ceba2c0d70da5e704aad84f79b46"
  }, {
    "url": "chat/assets/path-53f90ab3.js",
    "revision": "f86c0243cb45746453c6b4f7dbd9f34d"
  }, {
    "url": "chat/assets/pieDiagram-bb1d19e5-87a36764.js",
    "revision": "8f0d9cfd8ee669d9c28df3dc72c6aa5b"
  }, {
    "url": "chat/assets/quadrantDiagram-c759a472-d839af46.js",
    "revision": "6532553e9598187098aa2b0ad529d97a"
  }, {
    "url": "chat/assets/requirementDiagram-87253d64-cf5a4e07.js",
    "revision": "aee0d650c89b36bdd8126d51e39abc93"
  }, {
    "url": "chat/assets/sankeyDiagram-707fac0f-d91f61dd.js",
    "revision": "6f3565e31363b9e208ad67fe0f967e8c"
  }, {
    "url": "chat/assets/sequenceDiagram-6894f283-1c3a44d6.js",
    "revision": "e53771b0f4a7dc2ad80372c2fec430cb"
  }, {
    "url": "chat/assets/stateDiagram-5dee940d-35491ba5.js",
    "revision": "466765443c33a25f9f1599013dc19be6"
  }, {
    "url": "chat/assets/stateDiagram-v2-1992cada-00220125.js",
    "revision": "9c653d21e1deaba95c176cbfb020eca6"
  }, {
    "url": "chat/assets/styles-0784dbeb-331a45a7.js",
    "revision": "85f450ca1482ad764c5a8255f7a8d6bd"
  }, {
    "url": "chat/assets/styles-483fbfea-a966bc22.js",
    "revision": "8c7a7335514aff89ac456c7001ba412a"
  }, {
    "url": "chat/assets/styles-b83b31c9-17e5a7ba.js",
    "revision": "b268ba6e91ff5bc49c569d09519feca4"
  }, {
    "url": "chat/assets/svgDrawCommon-5e1cfd1d-960efaae.js",
    "revision": "8fb0429a15476da72424db7df95cbe8d"
  }, {
    "url": "chat/assets/Tableau10-1b767f5e.js",
    "revision": "f2197f44250cada74e1e663d3abfba3e"
  }, {
    "url": "chat/assets/timeline-definition-bf702344-c0ce2316.js",
    "revision": "e5c32d6efa9b519595a45f6bcfc76070"
  }, {
    "url": "chat/assets/xychartDiagram-f11f50a6-e223cfd6.js",
    "revision": "927c73bcea3b42e734844dd1baf8475e"
  }, {
    "url": "sutra/0001-0151.html",
    "revision": "3e6a03f81498445dfbf73149035e5b8e"
  }, {
    "url": "sutra/0152-0219.html",
    "revision": "2f15442c703e2bb7b4df33e4450351b2"
  }, {
    "url": "sutra/0220-0261.html",
    "revision": "2b1228842ba536277f6d7dd5c37f6414"
  }, {
    "url": "sutra/0262-0277.html",
    "revision": "0d33c001b0cff774e1b32169a84b6e72"
  }, {
    "url": "sutra/0278-0309.html",
    "revision": "dc3aaa7573b8b7b986d11d0cc615783a"
  }, {
    "url": "sutra/0310-0373.html",
    "revision": "9f1159e8cd5bc333acb00d5b2d27cb61"
  }, {
    "url": "sutra/0374-0396.html",
    "revision": "5532f9b54defb8a8d25cc63616e5e20d"
  }, {
    "url": "sutra/0397-0424.html",
    "revision": "8336e7bb6f00a42e321ceffe1540243a"
  }, {
    "url": "sutra/0425-0847.html",
    "revision": "fc8d310e6bdd3ff240fad3961190512e"
  }, {
    "url": "sutra/0848-1420.html",
    "revision": "258344e2b81b65f52b40fca437add7b7"
  }, {
    "url": "vinaya/1421-1504.html",
    "revision": "613c5d94accd4630b7fa0382c0d1c552"
  }, {
    "url": "sastra/1505-1535.html",
    "revision": "abdbb21b52fedc3af978a840a1e79423"
  }, {
    "url": "sastra/1536-1563.html",
    "revision": "bf549d87f85770c086cc9dd32055fdbd"
  }, {
    "url": "sastra/1564-1578.html",
    "revision": "cd78051ab59bb1eac3da5dd4dbc0f82d"
  }, {
    "url": "sastra/1579-1627.html",
    "revision": "3ef0498ddd1a580077d62fdb063688a3"
  }, {
    "url": "sastra/1628-1692.html",
    "revision": "c9bdbd34614ed633322eb8dd68237252"
  }, {
    "url": "other/1693-1803.html",
    "revision": "066b64e03523ecfa518da9de4898df03"
  }, {
    "url": "other/1804-1815.html",
    "revision": "ae3a1fa32034827e5fc703e7a31cf1c5"
  }, {
    "url": "other/1816-1850.html",
    "revision": "3a93c30cb047c026ab31eaeb3a0eb353"
  }, {
    "url": "other/1851-2025.html",
    "revision": "2aebd522aa950754238bf0c109e448ba"
  }, {
    "url": "other/2026-2120.html",
    "revision": "baf5bdf72ecfd97dbd61758611f12112"
  }, {
    "url": "other/2121-2136.html",
    "revision": "3c38fe2d21e64d4eaca8505d15bb0a05"
  }, {
    "url": "other/2137-2144.html",
    "revision": "2890575e4118eca21dbddddbefe03084"
  }, {
    "url": "other/2145-2184.html",
    "revision": "8267f8368638208f14ac2c165705c1ed"
  }, {
    "url": "other/2732-2864.html",
    "revision": "32e9fa513bfd59b5254a782aef2e6f4e"
  }, {
    "url": "other/2865-2920.html",
    "revision": "d12e013e7b99bd3bf3e0df26d880179e"
  }, {
    "url": "hot/0001/001.html",
    "revision": "35556fa9652f651e49516d6304861b62"
  }, {
    "url": "hot/0235/001.html",
    "revision": "07776f233ccae326ac0b6961cc3a6ef3"
  }, {
    "url": "hot/0251/001.html",
    "revision": "634da814bdcee9b81b4e023902d07d3b"
  }, {
    "url": "hot/0262/001.html",
    "revision": "77a099f116a71106974a98abbf9e2b29"
  }, {
    "url": "hot/0278/001.html",
    "revision": "5afb59b254a242ae97710b4bb5bb0ae9"
  }, {
    "url": "hot/0364/001.html",
    "revision": "184b65977f58acf871c463c035910f53"
  }, {
    "url": "hot/0365/001.html",
    "revision": "5f576bf63fda4d9476b619bdcec006a4"
  }, {
    "url": "hot/0366/001.html",
    "revision": "5fa7910cce069f4ca47a087b1ff37112"
  }, {
    "url": "hot/0412/001.html",
    "revision": "0d6d9f656305cf1c5f6d4af3fa64d604"
  }, {
    "url": "hot/0784/001.html",
    "revision": "daf8c95c06cd93d9744bb10400822e1a"
  }, {
    "url": "hot/0945/001.html",
    "revision": "f270f073002378405f2ec1f96daca091"
  }, {
    "url": "hot/1911/001.html",
    "revision": "73473922d9ed5ceaa9ce0582a0c7519e"
  }, {
    "url": "hot/2016/001.html",
    "revision": "305f0b397d34138ef79ccfb9ca222a23"
  }, {
    "url": "about.html",
    "revision": "3ace07ed8e543ddbd819e49d422ba5c7"
  }, {
    "url": "adobe-webfont.js",
    "revision": "7c043b1ce65979545de8579aa667e2ea"
  }, {
    "url": "book.html",
    "revision": "88c65ec9e919f2cbd4b476ce2800fca7"
  }, {
    "url": "category.html",
    "revision": "afb2b102f87b58dc8034c5c71a92eaf2"
  }, {
    "url": "chat.html",
    "revision": "757cca0652c0c0eb526bee81489598fd"
  }, {
    "url": "google797be0da9a72aa03.html",
    "revision": "7a1abef8af8041e55f9d9e23043ea8b4"
  }, {
    "url": "index.html",
    "revision": "9be40c7fd669084a795dd432c1cff347"
  }, {
    "url": "mantra.html",
    "revision": "09418b49329c6016ac38d063730fb4c8"
  }, {
    "url": "other.html",
    "revision": "00ac924a7c5b3801e0dc3cc480f34c24"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "sastra.html",
    "revision": "c72edb266062710ca2e3ae439ef0bc08"
  }, {
    "url": "sutra.html",
    "revision": "28b3af77e5f35de1a3413aa64e2b6cb9"
  }, {
    "url": "vinaya.html",
    "revision": "0f3c6963d6fde5857d073f1924ef2b13"
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
    allowlist: [/^\/assets/, /^\/icons/, /^\/sutra/, /^\/vinaya/, /^\/sastra/, /^\/other/, /^\/hot/]
  }));

}));
