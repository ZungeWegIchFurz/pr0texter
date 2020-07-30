'use strict';

angular.module('pr0texter.version', [
  'pr0texter.version.interpolate-filter',
  'pr0texter.version.version-directive'
])

.value('version', '0.1');
