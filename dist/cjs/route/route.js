/*can-route-react@0.1.1#route/route*/
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ViewModel = undefined;
var _reactViewModels = require('react-view-models');
var _map = require('can-define/map/map');
var _map2 = _interopRequireDefault(_map);
var _route = require('./route.jsx.js');
var _route2 = _interopRequireDefault(_route);
var _canRoute = require('can-route');
var _canRoute2 = _interopRequireDefault(_canRoute);
var _isSubset = require('is-subset');
var _isSubset2 = _interopRequireDefault(_isSubset);
var _lodash = require('lodash.isempty');
var _lodash2 = _interopRequireDefault(_lodash);
var _utils = require('../utils.js');
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var ViewModel = exports.ViewModel = _map2.default.extend({
    '*': { serialize: true },
    path: {
        type: 'string',
        get: function get(lastSetVal) {
            if (lastSetVal) {
                return (0, _utils.stripSlashes)(lastSetVal);
            }
        }
    },
    displayComponent: {
        get: function get() {
            var routeData = _canRoute2.default.data.serialize();
            var data = this.data && this.data.serialize ? this.data.serialize() : this.data;
            if (data && !(0, _lodash2.default)(data)) {
                return (0, _isSubset2.default)(routeData, data);
            } else {
                var currentPath = _canRoute2.default.url(_canRoute2.default.data.serialize());
                if (currentPath) {
                    currentPath = (0, _utils.stripSlashes)(currentPath).replace('#!', '');
                }
                return this.path === currentPath;
            }
        }
    },
    Component: {
        type: 'any',
        get: function get(lastSetVal) {
            return lastSetVal || this.component;
        }
    },
    component: 'any'
});
exports.default = (0, _reactViewModels.connect)(ViewModel, _route2.default);