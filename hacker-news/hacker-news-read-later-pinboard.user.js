// ==UserScript==
// @name         Hacker News - Save to Pinboard
// @namespace    http://varunramesh.net/
// @version      0.2
// @description  Add a "save to pinboard option"
// @author       Varun Ramesh
// @match        https://news.ycombinator.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Don't conflict with page's jQuery.
    $.noConflict();
    var jq = jQuery;

    // Dict of functions that save to pinboard.
    window.save_to_pinboard = {};

    jq('tr.athing:not(.comtr)').each(function(i, tr) {
        var a = jq(tr).find('a.storylink');
        var link = a.attr('href');
        var title = a.html();

        window.save_to_pinboard[i] = function() {
            var url = `https://pinboard.in/add?later=yes&noui=yes&jump=close&url=${encodeURIComponent(link)}&title=${encodeURIComponent(title)}`;
            var popup = window.open(url,'Pinboard','toolbar=no,width=100,height=100');
            popup.blur();
        };

        jq(tr).next().children('td.subtext').append(` | <a href="javascript:window.save_to_pinboard[${i}]()">read later [pinboard]</a>`);
    });
})();
