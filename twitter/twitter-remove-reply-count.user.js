// ==UserScript==
// @name         Twitter - Remove Reply Count
// @namespace    http://varunramesh.net/
// @version      0.1
// @description  Remove the reply count from all tweets.
// @author       Varun Ramesh
// @match        https://twitter.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function remove() {
        $('.ProfileTweet-action--reply').remove();
    }

    remove();
    setInterval(remove, 500);
})();
