// ==UserScript==
// @name         Pinboard - Youtube Embed
// @namespace    http://varunramesh.net/
// @version      0.2
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

    function video_embed(yt_id) {
       return `<div style="margin-top:8px; margin-bottom:3px;" class="lazyYT" data-width="560" data-height="315" data-youtube-id="${yt_id}" data-ratio="16:9"></div>`;
    }

    $('div.bookmark').each(function(i, b) {
        var url = URI($(b).find('a.bookmark_title').attr('href'));
        if (url.origin() == "https://www.youtube.com" || url.origin() == "http://www.youtube.com") {
            if(url.path() == "/watch") {
                let query = URI.parseQuery(url.query());
                var yt_id = query.v;
                $(b).find('div.display').append(video_embed(yt_id));
            }
            if(url.path() == "/playlist") {
                let query = URI.parseQuery(url.query());
                var playlist_id = query.list;
                $(b).find('div.display').append(`<iframe style="margin-top:8px; margin-bottom:3px;" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=${playlist_id}" frameborder="0" allowfullscreen></iframe>`);
            }
        }
        if (url.origin() == "https://youtu.be" || url.origin() == "http://youtu.be") {
            let yt_id = url.path().substring(1);
            $(b).find('div.display').append(video_embed(yt_id));
        }
    });

    $('.lazyYT').lazyYT();
})();
