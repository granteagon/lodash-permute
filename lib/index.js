'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.permute = permute;

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function permute(array, permuter) {
  /* #permute - Moves/permutes items in a javascript array.
     Note: This is a pure function.
     Arguments:
    1. array                (String) : Array to permute.
    2. permuter  (Array or Function) : Used to permute the first argument.
  */
  if ((0, _isFunction2.default)(permuter)) {
    return array.reduce(function (r, v, i) {
      r[permuter(i, v)] = v;
      return r;
    }, []);
  } else if ((0, _isArray2.default)(permuter)) {
    return permuter.reduce(function (r, v, i) {
      r[i] = array[permuter[i]];
      return r;
    }, []);
  }
  return array;
}