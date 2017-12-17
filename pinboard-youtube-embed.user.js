// ==UserScript==
// @name         Pinboard - Youtube Embed
// @namespace    http://varunramesh.net/
// @version      0.1
// @description  Show YouTube embeds in Pinboard links.
// @author       Varun Ramesh
// @match        https://pinboard.in/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/URI.js/1.19.0/URI.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/lazyyt/0.3.4/lazyYT.min.js
// @resource     LAZY_YT_CSS    https://cdnjs.cloudflare.com/ajax/libs/lazyyt/0.3.4/lazyYT.min.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle (GM_getResourceText ("LAZY_YT_CSS"));

    $('div.bookmark').each(function(i, b) {
        var url = URI($(b).find('a.bookmark_title').attr('href'));
        if (url.origin() == "https://www.youtube.com") {
            if(url.path() == "/watch") {
                var query = URI.parseQuery(url.query());
                var yt_id = query.v;
                $(b).find('div.display').append(`<div style="margin-top:8px; margin-bottom:3px;" class="lazyYT" data-width="560" data-height="315" data-youtube-id="${yt_id}" data-ratio="16:9"></div>`);
            }
        }
    });

    $('.lazyYT').lazyYT();
})();
