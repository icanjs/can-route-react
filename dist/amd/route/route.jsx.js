/*can-route-react@0.1.0#route/route.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define([
    'exports',
    'react'
], function (exports, _react) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var _react2 = _interopRequireDefault(_react);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function (_ref) {
        var displayComponent = _ref.displayComponent, Component = _ref.Component, children = _ref.children;
        return displayComponent ? _react2.default.createElement(Component, null, children) : null;
    };
});