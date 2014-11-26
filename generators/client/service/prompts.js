
;(function(){

  'use strict';

    module.exports = prompts;


    function prompts () {

      var pendingPrompts = {
        module : {
          type: 'list',
          name: 'module',
          default: 'core',
          message: 'Which module does this service belongs to?'
        },
        providers: {
          name: 'providers',
          message: 'inject any providers? (please camma separate each)',
        },
        functions: {
          name: 'functions',
          message: 'add fucntions to the service? (please camma separate each)',
        }
      }

      return pendingPrompts;

    }


}).call(this);