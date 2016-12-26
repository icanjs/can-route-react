/*can-route-react@0.1.1#link/link*/
define([
    'exports',
    'react-view-models',
    'can-define/map',
    './link.jsx',
    'can-route'
], function (exports, _reactViewModels, _map, _link, _canRoute) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = undefined;
    var _map2 = _interopRequireDefault(_map);
    var _link2 = _interopRequireDefault(_link);
    var _canRoute2 = _interopRequireDefault(_canRoute);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var ViewModel = exports.ViewModel = _map2.default.extend({
        activeTab: {
            type: 'string',
            set: function set(val) {
                if (this.routeAttr) {
                    _canRoute2.default.data[this.routeAttr] = val;
                }
                return val;
            }
        },
        routeAttr: 'string',
        setTab: function setTab(tab) {
            return function () {
                this.activeTab = tab;
            }.bind(this);
        }
    });
    exports.default = (0, _reactViewModels.connect)(ViewModel, _link2.default);
});