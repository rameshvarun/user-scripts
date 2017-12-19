// ==UserScript==
// @name         Pinboard - Annotate in Hypothesis
// @namespace    http://varunramesh.net/
// @version      0.1
// @description  Open Pinboard links in Hypothesis via.
// @author       Varun Ramesh
// @match        https://pinboard.in/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('div.bookmark').each(function(i, b) {
        var link = $(b).find('a.bookmark_title').attr('href');
        $(b).find('div.edit_links').prepend(`&nbsp;&nbsp;<div style="display: inline;">
            <a style="color: #aaa;" href="https://via.hypothes.is/${link}">hypothesis</a>
        </div>`);
    });
})();
