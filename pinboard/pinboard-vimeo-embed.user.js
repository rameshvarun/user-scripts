// ==UserScript==
// @name         Pinboard - Vimeo Embed
// @namespace    http://varunramesh.net/
// @version      0.1
// @description  Show Vimeo embeds in Pinboard links.
// @author       Varun Ramesh
// @match        https://pinboard.in/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/URI.js/1.19.0/URI.min.js
// ==/UserScript==

(function() {
    'use strict';

    function video_embed(vid_id) {
       return `<iframe style="margin-top:8px; margin-bottom:3px;" src="https://player.vimeo.com/video/${vid_id}" width="560" height="315" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`;
    }

    $('div.bookmark').each(function(i, b) {
        var url = URI($(b).find('a.bookmark_title').attr('href'));
        if (url.origin() == "https://vimeo.com" || url.origin() == "http://vimeo.com") {
           var vid_id = url.path().substr(1);
           $(b).find('div.display').append(video_embed(vid_id));
        }
    });
})();
