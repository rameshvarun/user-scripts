// ==UserScript==
// @name         Pinboard - Open in Instapaper Text
// @namespace    http://varunramesh.net/
// @version      0.1
// @description  Open Pinboard links in Instapaper Text.
// @author       Varun Ramesh
// @match        https://pinboard.in/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.pinboard_links = {};
    $('div.bookmark').each(function(i, b) {
        window.pinboard_links[i] = $(b).find('a.bookmark_title').attr('href');
        $(b).find('div.edit_links').prepend(`&nbsp;&nbsp;<div style="display: inline;">
            <a style="color: #aaa;" href="javascript:function iptxt(){var d=document;try{if(!d.body)throw(0);window.location='http://www.instapaper.com/text?u='+encodeURIComponent(window.pinboard_links[${i}]);}catch(e){alert('Please wait until the page has loaded.');}}iptxt();void(0)">instapaper</a>
        </div>`);
    });
})();
