(function() {
  'use strict';

  function headerCtrl($log) {
    $log.debug('Header loaded');
    
    var sticky = new Waypoint.Sticky({
      element: $('#sticky')[0]
    });
  }

  angular.module('common.header', [])
    .controller('HeaderCtrl', headerCtrl);
})();
