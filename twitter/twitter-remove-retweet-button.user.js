// ==UserScript==
// @name         Twitter - Remove Retweet Button
// @namespace    http://varunramesh.net/
// @version      0.1
// @description  Remove the retweet button from all tweets.
// @author       Varun Ramesh
// @match        https://twitter.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function remove() {
        $('.ProfileTweet-action--retweet').remove();
    }

    remove();
    setInterval(remove, 500);
})();
