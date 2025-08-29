'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"manifest.json": "74efa1cdc2d8d26b22e6a61f8becf0c0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "f9f2bf155cabe1cf362bba995894db1e",
"version.json": "531961d2df30488d5e7d0e4051b40f03",
"assets/NOTICES": "1dbf775b1a67e13ae32ae48bf594b031",
"assets/fonts/MaterialIcons-Regular.otf": "92cf023c091a5ef34234ed91fa5f7b4d",
"assets/AssetManifest.json": "47ed7e14debaff3773b544c513dae1c2",
"assets/assets/blender.svg": "453a6aeb819125a1346f73a69cb28b41",
"assets/assets/arabic.webp": "8593a1c5dc9b7d9c3c91e1a7fce4eaf7",
"assets/assets/movies.webp": "a4f5d772e077de46e963d527a2d82c3f",
"assets/assets/contact.webp": "c86661d562e0cca32f8541ab19ea8694",
"assets/assets/java.webp": "5537c4d890141279357a30aea0ced361",
"assets/assets/cplusplus.webp": "466474e9bac6031e04ae7b4c76fd86b5",
"assets/assets/github.svg": "4b8a4845e3c03b05cc92e2b3199889d5",
"assets/assets/facebook.webp": "1a61da12746dae6ab0c3b27a78cfbae9",
"assets/assets/gym.webp": "51d055516301f2b8d61165c95c325bab",
"assets/assets/education.webp": "bf3bbd8043045e682eac847d48eb7584",
"assets/assets/flutter.svg": "5ff1722cbed36fdb869cba0c95788d42",
"assets/assets/university.webp": "64e2ab741323aee3a4a2f592491e0e39",
"assets/assets/highSchool.webp": "a5b3c882268d3514f9798349cf3f13de",
"assets/assets/linkedin.webp": "afdc0acf7081db82a612543b73e2fdd7",
"assets/assets/skill.webp": "626870b99374fc8550a4398387abbd60",
"assets/assets/portfolio.webp": "57cbbfa2b1b555af7a0e72f8536923d2",
"assets/assets/c.svg": "7984f1f99e00b58e6402c5624e1dc298",
"assets/assets/shorebird.webp": "a3319616d1b6e4c62ca47e5d5561d4d0",
"assets/assets/python.webp": "b3ed550ae85e960ac65658cbd22eb702",
"assets/assets/english.webp": "050b0b0ae4774a8e0787954cacd8b31d",
"assets/assets/csharp.webp": "8efce316d77c70eb93215dd1f5d7c4d9",
"assets/assets/portfolio/blender/ap1.webp": "b5e7cc3e4614c1bb423cf5c504ae8087",
"assets/assets/portfolio/blender/ap3.webp": "a8329fa05a716691800a593c4f85a5b7",
"assets/assets/portfolio/blender/couch.webp": "f01084ffd5e437b4644706140e319e14",
"assets/assets/portfolio/blender/wmach1.webp": "0c9c26484beb9ae0ef70aea564f1a36b",
"assets/assets/portfolio/blender/esp4.webp": "26b0bb31863305f50b11993437605a9c",
"assets/assets/portfolio/blender/esp2.webp": "0c102515c89443de96825ecde23a332e",
"assets/assets/portfolio/blender/wmach2.webp": "28cd80fe597f53431d2d5db81c2f0bb0",
"assets/assets/portfolio/blender/esp3.webp": "e8d3f4c998951f9e8950a4717aa72c4a",
"assets/assets/portfolio/blender/la2.webp": "5c4013628f2ba664336b1414b2b24b36",
"assets/assets/portfolio/blender/la3.webp": "1a1d568738eac54a736784cc7dcd4b07",
"assets/assets/portfolio/blender/la1.webp": "91a1ee5fa71d801309f4e6165740491d",
"assets/assets/portfolio/blender/esp1.webp": "284dffdee9864b7ae3695bb9d3426a54",
"assets/assets/portfolio/blender/wmach3.webp": "e9007954961a42bf0f95d34d09ecf120",
"assets/assets/portfolio/blender/ap2.webp": "a956af229a38691aa071fccf3f494707",
"assets/assets/portfolio/blender/pearl.webp": "a1478d1474198d5478e9f7d13a619f36",
"assets/assets/portfolio/blender/la4.webp": "4056cb6c8d0fc282e5ef80ab430285f7",
"assets/assets/portfolio/flutter/espgif0.gif": "6cd9f85f760958a2a11f4a0a8e44b3f3",
"assets/assets/portfolio/flutter/use3.webp": "a9763b17e3d4b7c66b9208d14ece31b4",
"assets/assets/portfolio/flutter/esp0.webp": "5dac51eb5c1009a2de67af299613c2dc",
"assets/assets/portfolio/flutter/use1.webp": "59fdbe708d6574b11d54f78374cea244",
"assets/assets/portfolio/flutter/esp2.webp": "4d4d0477381afb8301bd99c527744658",
"assets/assets/portfolio/flutter/use2.webp": "932634cb752724b8c2c80718c2a369a9",
"assets/assets/portfolio/flutter/use0.webp": "866500001f2c5850316ed69b7a97c62e",
"assets/assets/portfolio/flutter/att1.webp": "68d8bb64a3697016832c62e67bdbf522",
"assets/assets/portfolio/flutter/esp1.webp": "883613dcb17460069966a76f213a3974",
"assets/assets/portfolio/flutter/use4.webp": "5ed60319f1f667733f410e868530479e",
"assets/assets/portfolio/flutter/att0.webp": "aeaf5ca245211aebab2a0d2c2209a418",
"assets/assets/whatsapp.webp": "e8e87cb2fe7aabd91db650d3d2bd7e36",
"assets/assets/music.webp": "8e5a2708f1a150ff5d76bc2641d805a9",
"assets/assets/personalPortrait.webp": "fed8b9ef7d53ca3715ad9d150b9f91ba",
"assets/assets/projects.webp": "2cf958fd4cadaa24e5ea4f904a6e3623",
"assets/assets/games.webp": "168cd63c2c0a34a3e295740d1bbba956",
"assets/assets/youtube.webp": "76937188cc4913dd6dcf3e22e506829f",
"assets/assets/selenium.webp": "60bd7582130fc1d47812c98ccb7cc7e5",
"assets/assets/javaFX.webp": "738e658d0f4767c17dfa30f61e7e8b16",
"assets/assets/hobbies.webp": "a591660a97c90280c3aa8b88fa095009",
"assets/assets/arduino.svg": "7433abaad24ef516bb60a19873475091",
"assets/assets/languages.webp": "c8aabdd81fffd692c9abec2ca52b8d78",
"assets/assets/dart.svg": "11b770f163584b0e8cbba1f7bc626f55",
"assets/assets/croppedPersonalPortrait.webp": "5249c8d365024d944d0d5911b3c7154c",
"assets/assets/gmail.webp": "d7a6f45cbd8b757ebc9e3df8d6688569",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/AssetManifest.bin.json": "ce1a7f49ebbc42b55d6907ff5f1541ae",
"assets/AssetManifest.bin": "7d3b78b16adf2ace572b73d8f46d3c17",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"flutter_bootstrap.js": "7551f5d040d87c5a66e059adbf9751cc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "fc57a2e81b25f8043a1f46477804ef81",
"/": "fc57a2e81b25f8043a1f46477804ef81"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
