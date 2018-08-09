// ==UserScript==
// @name         Reddit - Save to Pinboard
// @namespace    http://varunramesh.net/
// @version      0.2
// @description  Add a "save to pinboard option" to Reddit posts.
// @author       Varun Ramesh
// @match        https://www.reddit.com/*
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

    jq('div.link').each(function(i, div) {
        var a = jq(div).find('a.title');
        var link = a.attr('href');
        var title = a.html();

        window.save_to_pinboard[i] = function() {
            var url = `https://pinboard.in/add?later=yes&noui=yes&jump=close&url=${encodeURIComponent(link)}&title=${encodeURIComponent(title)}`;
            var popup = window.open(url,'Pinboard','toolbar=no,width=100,height=100');
            popup.blur();
        };


        var button_list = jq(div).find('ul.buttons');
        button_list.append(`<li><a href="javascript:window.save_to_pinboard[${i}]()">pinboard</a></li>`);
    });
})();
