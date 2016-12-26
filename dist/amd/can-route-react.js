/*can-route-react@0.0.2#can-route-react*/
define([
    'exports',
    './route/route',
    './link/link'
], function (exports, _route, _link) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _route2 = _interopRequireDefault(_route);
    var _link2 = _interopRequireDefault(_link);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = {
        Route: _route2.default,
        Link: _link2.default
    };
});