// ==UserScript==
// @name         Twitter - No Post
// @namespace    http://varunramesh.net/
// @version      0.1
// @description  Remove all tweet composers.
// @author       Varun Ramesh
// @match        https://twitter.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removePostBox() {
        $('.timeline-tweet-box').remove();
    }

    removePostBox();
    setInterval(removePostBox, 500);
})();
