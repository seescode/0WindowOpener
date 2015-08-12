'use strict';

module.exports =
  angular.module('WindowOpener.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
