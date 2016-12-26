/*[global-shim-start]*/
(function(exports, global, doEval){ // jshint ignore:line
	var origDefine = global.define;

	var get = function(name){
		var parts = name.split("."),
			cur = global,
			i;
		for(i = 0 ; i < parts.length; i++){
			if(!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var set = function(name, val){
		var parts = name.split("."),
			cur = global,
			i, part, next;
		for(i = 0; i < parts.length - 1; i++) {
			part = parts[i];
			next = cur[part];
			if(!next) {
				next = cur[part] = {};
			}
			cur = next;
		}
		part = parts[parts.length - 1];
		cur[part] = val;
	};
	var useDefault = function(mod){
		if(!mod || !mod.__esModule) return false;
		var esProps = { __esModule: true, "default": true };
		for(var p in mod) {
			if(!esProps[p]) return false;
		}
		return true;
	};
	var modules = (global.define && global.define.modules) ||
		(global._define && global._define.modules) || {};
	var ourDefine = global.define = function(moduleName, deps, callback){
		var module;
		if(typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for(i =0; i < deps.length; i++) {
			args.push( exports[deps[i]] ? get(exports[deps[i]]) : ( modules[deps[i]] || get(deps[i]) )  );
		}
		// CJS has no dependencies but 3 callback arguments
		if(!deps.length && callback.length) {
			module = { exports: {} };
			var require = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args.push(require, module.exports, module);
		}
		// Babel uses the exports and module object.
		else if(!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
			if(deps[1] === "module") {
				args[1] = module;
			}
		} else if(!args[0] && deps[0] === "module") {
			args[0] = { id: moduleName };
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		result = module && module.exports ? module.exports : result;
		modules[moduleName] = result;

		// Set global exports
		var globalExport = exports[moduleName];
		if(globalExport && !get(globalExport)) {
			if(useDefault(result)) {
				result = result["default"];
			}
			set(globalExport, result);
		}
	};
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	ourDefine("@loader", [], function(){
		// shim for @@global-helpers
		var noop = function(){};
		return {
			get: function(){
				return { prepareGlobal: noop, retrieveGlobal: noop };
			},
			global: global,
			__exec: function(__load){
				doEval(__load.source, global);
			}
		};
	});
}
)({},window,function(__$source__, __$global__) { // jshint ignore:line
	eval("(function() { " + __$source__ + " \n }).call(__$global__);");
}
)
/*can-route-react@0.0.2#route/route.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('can-route-react/route/route.jsx', [
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
/*can-route-react@0.0.2#utils*/
define('can-route-react/utils', [
    'exports',
    'can-route'
], function (exports, _canRoute) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.stripSlashes = stripSlashes;
    exports.usingHashChangeRouting = usingHashChangeRouting;
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
});
/*can-route-react@0.0.2#route/route*/
define('can-route-react/route/route', [
    'exports',
    'react-view-models',
    'can-define/map/map',
    'can-route-react/route/route.jsx',
    'can-route',
    'is-subset',
    'lodash.isempty',
    'can-route-react/utils'
], function (exports, _reactViewModels, _map, _route, _canRoute, _isSubset, _lodash, _utils) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = undefined;
    var _map2 = _interopRequireDefault(_map);
    var _route2 = _interopRequireDefault(_route);
    var _canRoute2 = _interopRequireDefault(_canRoute);
    var _isSubset2 = _interopRequireDefault(_isSubset);
    var _lodash2 = _interopRequireDefault(_lodash);
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
});
/*can-route-react@0.0.2#link/link.jsx!steal-react-jsx@0.0.3#steal-react-jsx*/
define('can-route-react/link/link.jsx', [], function () {
    'use strict';
});
/*can-route-react@0.0.2#link/link*/
define('can-route-react/link/link', [
    'exports',
    'react-view-models',
    'can-define/map/map',
    'can-route-react/link/link.jsx',
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
/*can-route-react@0.0.2#can-route-react*/
define('can-route-react', [
    'exports',
    'can-route-react/route/route',
    'can-route-react/link/link'
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
/*[global-shim-end]*/
(function(){ // jshint ignore:line
	window._define = window.define;
	window.define = window.define.orig;
}
)();