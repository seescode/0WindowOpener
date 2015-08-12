'use strict';

module.exports = /*@ngInject*/
  function assignmentController($scope, $window) {
    $scope.welcome = 'assignment page';

    //This probably needs to be on the other page.
    var openerWindow = $window.opener;

    $window.onunload = function (e) {
      if (openerWindow !== null && openerWindow.onTestBeforeUnload) {
        openerWindow.onTestBeforeUnload();
      }
    };


  };
