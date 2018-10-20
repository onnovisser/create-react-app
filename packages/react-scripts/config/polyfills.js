import 'core-js/es6/set';
import 'core-js/es6/map';
import 'core-js/es6/symbol';
import 'core-js/fn/object/assign';
import 'core-js/fn/object/entries';
import 'core-js/fn/object/values';
import 'core-js/fn/array/from';
import 'core-js/fn/array/every';
import 'core-js/fn/array/some';

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');
