'use strict';

module.exports = /*@ngInject*/
  function fooController($scope, $window) {
    $scope.welcome = 'Congratulations!';


    //Open a new tab
    var assignmentWindow = $window.open('/assignment.html', '_blank');

    //
    if (assignmentWindow !== null) {
      $window.onTestBeforeUnload = function () {
        //do some stuff
        console.log('inside');
      };
    }

  };
