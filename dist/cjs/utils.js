/*can-route-react@0.0.2#utils*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.stripSlashes = stripSlashes;
exports.usingHashChangeRouting = usingHashChangeRouting;
var _canRoute = require('can-route');
var _canRoute2 = _interopRequireDefault(_canRoute);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
function stripSlashes(location) {
    return location.replace(/^(\/*)|(\/*)$/g, '');
}
function usingHashChangeRouting() {
    return _canRoute2.default.url({}).indexOf('#!') >= 0;
}