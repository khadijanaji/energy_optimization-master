/* eslint-disable */
importScripts("workbox-sw.js");

if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.precaching.addPlugins([
    new workbox.broadcastUpdate.Plugin('precache-channel')
  ]);
  workbox.precaching.precacheAndRoute([]);
  
} else {
  console.log(`Workbox didn't load`);
}
