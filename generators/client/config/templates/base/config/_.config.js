;(function(){
  'use strict';
  // <%= moduleNames.humanized %> module config
  angular
    .module('<%= moduleNames.slug %>')
    .config( Configuration );

  /* @inject */
  function Configuration(<%=providers%>) {
    // Config logic
    // ...
  }
}).call(this);