/*can-route-react@0.1.0#can-route-react*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var _route = require('./route/route.js');
var _route2 = _interopRequireDefault(_route);
var _link = require('./link/link.js');
var _link2 = _interopRequireDefault(_link);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
exports.default = {
    Route: _route2.default,
    Link: _link2.default
};