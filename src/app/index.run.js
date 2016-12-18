(function() {
  'use strict';

  angular
    .module('projTest3')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
