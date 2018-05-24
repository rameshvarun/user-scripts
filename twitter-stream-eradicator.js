// ==UserScript==
// @name         Twitter Stream Eradicator
// @namespace    http://varunramesh.net/
// @version      0.1
// @description  Remove the stream on Twitter's homepage. Similar to News Feed Eradicator for Facebook.
// @author       Varun Ramesh
// @match        https://twitter.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('.stream-container').remove();
})();
