// ==UserScript==
// @name         Twitter - Remove Reply
// @namespace    http://varunramesh.net/
// @version      0.1
// @description  Remove all reply tweet composers.
// @author       Varun Ramesh
// @match        https://twitter.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeReplyBox() {
        $('.inline-reply-tweetbox').remove();
        $('.modal-tweet-form-container').remove();
    }

    removeReplyBox();
    setInterval(removeReplyBox, 500);
})();
