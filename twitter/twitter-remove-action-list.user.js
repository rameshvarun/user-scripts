// ==UserScript==
// @name         Twitter - Remove Action List
// @namespace    http://varunramesh.net/
// @version      0.1
// @description  Remove the action list from all tweets.
// @author       Varun Ramesh
// @match        https://twitter.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function remove() {
        $('.ProfileTweet-actionList').remove();
    }

    remove();
    setInterval(remove, 500);
})();
