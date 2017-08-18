// ==UserScript==
// @name         Hacker News - Save to Pinboard
// @namespace    http://varunramesh.net/
// @version      0.1
// @description  Add a "save to pinboard option"
// @author       Varun Ramesh
// @match        https://news.ycombinator.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.pinboard_links = {};
    window.pinboard_titles = {};
    $('tr.athing').each(function(i, tr) {
        var a = $(tr).find('a.storylink');
        window.pinboard_links[i] = a.attr('href');
        window.pinboard_titles[i] = a.html();
        $(tr).next().children('td.subtext').append(` | <a href="javascript:q=window.pinboard_links[${i}];p=window.pinboard_titles[${i}];void(t=open('https://pinboard.in/add?later=yes&noui=yes&jump=close&url='+encodeURIComponent(q)+'&title='+encodeURIComponent(p),'Pinboard','toolbar=no,width=100,height=100'));t.blur();">read later [pinboard]</a>`);
    });
})();
