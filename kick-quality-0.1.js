// ==UserScript==
// @name         Kick Quality
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disables quality drop on another tab for kick
// @author       blacksquirtle
// @match        https://kick.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kick.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    Object.defineProperty(document, "hidden", {value: false, writable: true});
})();