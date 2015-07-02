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
  var app = document.querySelector('#app'),
      fullPageObj;
  
  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    fullPageObj = document.querySelector('fullsize-page-with-card');

    // TODO: We need them in other places, pass them as a property
    app.parallaxObj = document.querySelector('parallax-container');
  });

  app._onTileClick = function(event) {
    this.$['fullsize-card'].projectData = event.detail.data;
    this.$.pages.selected = 1;
  };

  app._onFullsizeClick = function() {
    // To allow problems caming back the next time
    fullPageObj.scrollTop = 0;
    this.$.pages.selected = 0;
  };
})(document);
