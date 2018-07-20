/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/bootstrap-responsive.css",
    "revision": "d2c30d07a98d50e945570bf32c56435f"
  },
  {
    "url": "css/bootstrap-responsive.min.css",
    "revision": "365a247af4036532701d83957e490adc"
  },
  {
    "url": "css/bootstrap-theme.css",
    "revision": "b9b46bcc4dad6cc90fc4f95073c50735"
  },
  {
    "url": "css/bootstrap-theme.min.css",
    "revision": "ab6b02efeaf178e0247b9504051472fb"
  },
  {
    "url": "css/bootstrap.css",
    "revision": "2a31dca112f26923b51676cb764c58d5"
  },
  {
    "url": "css/bootstrap.min.css",
    "revision": "ec3bb52a00e176a7181d454dffaea219"
  },
  {
    "url": "css/custom.css",
    "revision": "e158722e9726276b616e0f21cabc035d"
  },
  {
    "url": "css/normalize.css",
    "revision": "8c6eee6b2107ef25dc486020ced13898"
  },
  {
    "url": "css/prism.css",
    "revision": "e6a6f5d12d0afdeee0414db5b67506c6"
  },
  {
    "url": "css/rve-styles.css",
    "revision": "add3b8a7688b1ad081087e2f4348b382"
  },
  {
    "url": "css/style.css",
    "revision": "746f9bc3e6baebd7fb679ccd990504c4"
  },
  {
    "url": "js/bootstrap.js",
    "revision": "fb81549ee2896513a1ed5714b1b1a0f0"
  },
  {
    "url": "js/bootstrap.min.js",
    "revision": "5869c96cc8f19086aee625d670d741f9"
  },
  {
    "url": "js/jquery.min.js",
    "revision": "663628f795cb62444143fde1ebdf2b5b"
  },
  {
    "url": "js/prism.js",
    "revision": "531a01b20a2127c6cc4b3d8521e0290e"
  },
  {
    "url": "js/start-sw.js",
    "revision": "b360065886eb65f3c2234378c25701ff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\/page/, workbox.strategies.networkOnly(), 'GET');
workbox.routing.registerRoute(/\/\d+\/.*\.html$/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/\/image/, workbox.strategies.cacheFirst(), 'GET');
