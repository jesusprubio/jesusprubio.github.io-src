/*
    Copyright Jesus Perez <jesusprubio gmail com>
    Copyright (c) 2015 The Polymer Project Authors. (created with "generator-polymer")

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  var IsSafari = /^((?!chrome).)*safari/i.test(navigator.userAgent);

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
  });

  app._onTileClick = function(event) {
    app.$.fullsizeCard.projectData = event.detail.data;
    app.$.pages.selected = 1;
  };

  app._onFullsizeClick = function() {
    // To allow problems caming back the next time
    app.$.fullsizeCard.scrollTop = 0;
    app.$.pages.selected = 0;
  };

  window.onorientationchange = function() {
    // Dirty trick to solve a parallax component problem in this case (Safari only)
    if (IsSafari && app.route === 'home' && app.$.paraContent.scrollTop !== 0) {
      app.$.layerBg.style.background = 'url("../images/bg.jpg")';
    }
    // Both scrollers
    app.$.paraContent.scrollTop = 0;
    app.$.fullsizeCard.scrollTop = 0;

  };
})(document);
