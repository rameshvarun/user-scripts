// ==UserScript==
// @name         Pinboard - Preview
// @namespace    http://varunramesh.net/
// @version      0.1
// @description  Open Pinboard links in iframe.
// @author       Varun Ramesh
// @match        https://pinboard.in/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.show_preview = {};

    $('div.bookmark').each(function(i, b) {
        var link = $(b).find('a.bookmark_title').attr('href');

        var preview = null;
        window.show_preview[i] = function() {
            if (preview) {
                preview.remove();
                preview = null;
            } else {
                preview = $(`<iframe style="margin-top:8px; margin-bottom:3px; width:596px;" height="400" src="https://via.hypothes.is/${link}"></iframe>`);
                $(b).find('div.display').append(preview);
            }
        };

        $(b).find('div.edit_links').prepend(`&nbsp;&nbsp;<div style="display: inline;">
            <a style="color: #aaa;" href="javascript:window.show_preview[${i}]()">preview</a>
        </div>`);
    });
})();
