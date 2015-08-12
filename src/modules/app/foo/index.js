'use strict';

module.exports =
  angular.module('WindowOpener.foo', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .controller('fooController', require('./fooController'))
  .controller('assignmentController', require('./assignmentController'));
