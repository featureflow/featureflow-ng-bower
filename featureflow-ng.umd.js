/*!
 * Featureflow NG Angular 1 Client v1.3.3
 * Web: https://www.featureflow.io/
 * Date: 2019-06-27T22:41:54.505Z
 * Licence: Apache-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FeatureflowProvider"] = factory();
	else
		root["FeatureflowProvider"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Featureflow Client v1.3.3
 * Web: https://www.featureflow.io/
 * Date: 2019-05-15T13:54:12.271Z
 * Licence: Apache-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Featureflow"] = factory();
	else
		root["Featureflow"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LOADED */
/* unused harmony export LOADED_FROM_CACHE */
/* unused harmony export ERROR */
/* unused harmony export INIT */
/* unused harmony export UPDATED_FEATURE */
var LOADED = 'LOADED';
var LOADED_FROM_CACHE = 'LOADED_FROM_CACHE';
var ERROR = 'ERROR';
var INIT = 'INIT';
var UPDATED_FEATURE = 'UPDATED_FEATURE';

/* harmony default export */ __webpack_exports__["a"] = {
  INIT: INIT,
  LOADED: LOADED,
  LOADED_FROM_CACHE: LOADED_FROM_CACHE,
  ERROR: ERROR,
  UPDATED_FEATURE: UPDATED_FEATURE
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RestClient__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Evaluate__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Events__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Conditions__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tiny_emitter__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tiny_emitter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_tiny_emitter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_cookie__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_js_cookie__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }










var DEFAULT_BASE_URL = 'https://app.featureflow.io';
var DEFAULT_EVENTS_URL = 'https://events.featureflow.io';
var DEFAULT_RTM_URL = 'https://rtm.featureflow.io';

var DEFAULT_CONFIG = {
    baseUrl: DEFAULT_BASE_URL,
    eventsUrl: DEFAULT_EVENTS_URL,
    rtmUrl: DEFAULT_RTM_URL,
    streaming: true,
    defaultFeatures: {},
    useCookies: true,
    offline: false
};

var INIT_MODULE_ERROR = new Error('init() has not been called with a valid apiKey');

function loadFeatures(apiKey, userId) {
    try {
        return JSON.parse(localStorage.getItem('ff:v130:' + userId + ':' + apiKey) || '{}');
    } catch (err) {
        return {};
    }
}

function saveFeatures(apiKey, userId, features) {
    return localStorage.setItem('ff:v130:' + userId + ':' + apiKey, JSON.stringify(features));
}

var FeatureflowClient = function () {
    function FeatureflowClient(apiKey) {
        var user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _this = this;

        var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

        _classCallCheck(this, FeatureflowClient);

        //if we are offline then just return the default

        this.receivedInitialResponse = false;
        this.emitter = new __WEBPACK_IMPORTED_MODULE_4_tiny_emitter___default.a();
        this.apiKey = apiKey;

        //1. They must have an api key
        if (!this.apiKey) {
            throw INIT_MODULE_ERROR;
        }

        //2. Extend the default configuration
        this.config = _extends({}, DEFAULT_CONFIG, config);

        //3. Load initial data
        this.updateUser(user);

        //4. Set up realtime streaming
        if (!this.config.offline && this.config.streaming) {
            var es = new window.EventSource(this.config.rtmUrl + '/api/js/v1/stream/' + this.apiKey);
            es.onmessage = function (e) {
                var keys = [];
                try {
                    keys = JSON.parse(e.data);
                } catch (err) {}

                __WEBPACK_IMPORTED_MODULE_0__RestClient__["a" /* default */].getFeatures(_this.config.baseUrl, _this.apiKey, _this.user, keys, function (error, features) {
                    if (!error) {
                        _this.features = _extends({}, _this.features, features);
                        saveFeatures(_this.apiKey, _this.user.id, _this.features);
                        _this.emitter.emit(__WEBPACK_IMPORTED_MODULE_2__Events__["a" /* default */].UPDATED_FEATURE, features);
                        callback(undefined, features);
                    } else {
                        _this.emitter.emit(__WEBPACK_IMPORTED_MODULE_2__Events__["a" /* default */].ERROR, error);
                        callback(error);
                    }
                });
            };
        }
        //Bind event emitter
        this.on = this.emitter.on.bind(this.emitter);
        this.off = this.emitter.off.bind(this.emitter);
    }

    _createClass(FeatureflowClient, [{
        key: 'updateUser',
        value: function updateUser() {
            var _this2 = this;

            var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

            //these could be event or session attributes ie not persisted directly to user but added to a separate attributes map
            var featureflowAttributes = {};
            var attributes = _extends({}, user.attributes, featureflowAttributes);
            this.user = {
                id: user.id || this.getAnonymousId(),
                attributes: attributes
            };
            var now = new Date();
            var hourOfDay = now.getHours();
            var hArray = new Array(1);
            hArray[0] = hourOfDay;
            //this is local, just the date details, we don't pass this to featureflow
            //why? if we keep changing the user context with the current date we would void the CDN cache
            //its a lot more effective to almost resolve the rules and eval the date here

            this.currentContext = {
                attributes: {
                    "featureflow.date": [].concat(now),
                    "featureflow.hourofday": hArray
                }
            };

            this.features = loadFeatures(this.apiKey, this.user.id);
            // Put this in timeout so we can listen to all events before it is returned
            setTimeout(function () {
                _this2.emitter.emit(__WEBPACK_IMPORTED_MODULE_2__Events__["a" /* default */].LOADED_FROM_CACHE, _this2.features);

                if (_this2.config.offline) {
                    setTimeout(function () {
                        _this2.features = _this2.config.defaultFeatures;
                        saveFeatures(_this2.apiKey, _this2.user.id, _this2.features);
                        _this2.emitter.emit(__WEBPACK_IMPORTED_MODULE_2__Events__["a" /* default */].INIT, _this2.features);
                        _this2.emitter.emit(__WEBPACK_IMPORTED_MODULE_2__Events__["a" /* default */].LOADED, _this2.features);
                        callback(undefined, _this2.features);
                        return _this2.user;
                    });
                } else {
                    __WEBPACK_IMPORTED_MODULE_0__RestClient__["a" /* default */].getFeatures(_this2.config.baseUrl, _this2.apiKey, _this2.user, [], function (error, features) {
                        _this2.receivedInitialResponse = true;
                        if (!error) {
                            _this2.features = features || {};
                            saveFeatures(_this2.apiKey, _this2.user.id, _this2.features);
                            _this2.emitter.emit(__WEBPACK_IMPORTED_MODULE_2__Events__["a" /* default */].INIT, features);
                            _this2.emitter.emit(__WEBPACK_IMPORTED_MODULE_2__Events__["a" /* default */].LOADED, features);
                            callback(undefined, features);
                        } else {
                            _this2.emitter.emit(__WEBPACK_IMPORTED_MODULE_2__Events__["a" /* default */].ERROR, error);
                            callback(error);
                        }
                        return _this2.user;
                    });
                }
            }, 0);
        }
    }, {
        key: 'getFeatures',
        value: function getFeatures() {
            if (this.config.offline) {
                return this.evalAll(this.config.defaultFeatures);
            }
            return this.evalAll(this.features);
        }
    }, {
        key: 'getUser',
        value: function getUser() {
            return this.user;
        }
    }, {
        key: 'evaluate',
        value: function evaluate(key) {
            if (this.config.offline) {
                var _evaluate = new __WEBPACK_IMPORTED_MODULE_1__Evaluate__["a" /* default */](this.config.defaultFeatures[key] || 'off');
                return _evaluate;
            }

            var evaluatedFeature = this.features[key];
            if (typeof evaluatedFeature === 'undefined') return new __WEBPACK_IMPORTED_MODULE_1__Evaluate__["a" /* default */]('off'); //we dont know this feature
            var variant = this.evalRules(evaluatedFeature);

            var evaluate = new __WEBPACK_IMPORTED_MODULE_1__Evaluate__["a" /* default */](variant);
            __WEBPACK_IMPORTED_MODULE_0__RestClient__["a" /* default */].postEvaluateEvent(this.config.eventsUrl, this.apiKey, this.user, key, evaluate.value(), function () {});
            return evaluate;
        }
    }, {
        key: 'evalAll',
        value: function evalAll(features) {
            var evaluated = {};
            for (var k in features) {
                if (features.hasOwnProperty(k)) {
                    evaluated[k] = this.evalRules(features[k]);
                }
            }
            return evaluated;
        }
    }, {
        key: 'evalRules',
        value: function evalRules(evaluatedFeature) {
            if (typeof evaluatedFeature === 'string') return evaluatedFeature; //we may have old cache
            for (var ruleKey in evaluatedFeature.rules) {
                var rule = evaluatedFeature.rules[ruleKey];
                if (this.ruleMatches(rule)) {
                    return rule.variant;
                }
            }
        }
    }, {
        key: 'ruleMatches',
        value: function ruleMatches(rule) {
            if (!rule.audience) {
                return true;
            }
            for (var cKey in rule.audience.conditions) {
                var condition = rule.audience.conditions[cKey];
                var pass = false;
                //here we only are checking date or hour of day

                var values = this.currentContext.attributes[condition.target];
                for (var vKey in values) {
                    var value = values[vKey];
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Conditions__["a" /* test */])(condition.operator, value, condition.values)) {
                        pass = true;
                        break;
                    }
                }
                if (!pass) {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: 'goal',
        value: function goal(_goal) {
            if (this.config.offline) return;
            return __WEBPACK_IMPORTED_MODULE_0__RestClient__["a" /* default */].postGoalEvent(this.config.eventsUrl, this.apiKey, this.user, _goal, this.getFeatures(), function () {});
        }
    }, {
        key: 'getAnonymousId',
        value: function getAnonymousId() {
            return localStorage.getItem('ff-anonymous-id') || this.resetAnonymousId();
        }
    }, {
        key: 'resetAnonymousId',
        value: function resetAnonymousId() {
            var anonymousId = 'anonymous:' + Math.random().toString(36).substring(2);
            localStorage.setItem('ff-anonymous-id', anonymousId);

            if (this.config.useCookies) {
                //Set the anonymous key cookie for potential future usage with Server SDK
                __WEBPACK_IMPORTED_MODULE_5_js_cookie___default.a.set('ff-anonymous-id', anonymousId);
            }
            return anonymousId;
        }
    }, {
        key: 'hasReceivedInitialResponse',
        value: function hasReceivedInitialResponse() {
            return this.receivedInitialResponse;
        }
    }]);

    return FeatureflowClient;
}();

/* harmony default export */ __webpack_exports__["a"] = FeatureflowClient;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = test;
var operators = {
  equals: function equals(a, b) {
    return a === b;
  },
  contains: function contains(a, b) {
    return typeof a === 'string' && a.indexOf(b) > -1;
  },
  startsWith: function startsWith(a, b) {
    return typeof a === 'string' && a.startsWith(b);
  },
  endsWith: function endsWith(a, b) {
    return typeof a === 'string' && a.endsWith(b);
  },
  matches: function matches(a, b) {
    return typeof a === 'string' && typeof b === 'string' && new RegExp(b).test(a);
  },
  in: function _in(a, b) {
    return typeof a === 'string' && Array.isArray(b) && b.indexOf(a) > -1;
  },
  notIn: function notIn(a, b) {
    return typeof a === 'string' && Array.isArray(b) && b.indexOf(a) < 0;
  },
  before: function before(a, b) {
    a = dateParse(a);
    b = dateParse(b);
    if (typeof a === 'number' && typeof b === 'number') {
      return a < b;
    }
    return false;
  },
  after: function after(a, b) {
    a = dateParse(a);
    b = dateParse(b);
    if (typeof a === 'number' && typeof b === 'number') {
      return a > b;
    }
    return false;
  },
  greaterThan: function greaterThan(a, b) {
    return a > b;
  },
  greaterThanOrEqual: function greaterThanOrEqual(a, b) {
    return a >= b;
  },
  lessThan: function lessThan(a, b) {
    return a < b;
  },
  lessThanOrEqual: function lessThanOrEqual(a, b) {
    return a <= b;
  }
};

function dateParse(date) {
  if (typeof date === 'string') {
    return Date.parse(date);
  }
  if (date instanceof Date) {
    return date.getTime();
  }
  return date;
}
var notFound = function notFound() {
  return false;
};

function test(op, a, b) {
  b = ['in', 'notIn'].indexOf(op) >= 0 ? b : b[0];
  return (operators[op] || notFound)(a, b);
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Evaluate = function () {
  function Evaluate(value) {
    _classCallCheck(this, Evaluate);

    this.storedValue = value.toLowerCase();
  }

  _createClass(Evaluate, [{
    key: 'value',
    value: function value() {
      return this.storedValue;
    }
  }, {
    key: 'is',
    value: function is(value) {
      return value.toLowerCase() === this.value().toLowerCase();
    }
  }, {
    key: 'isOn',
    value: function isOn() {
      return this.is('on');
    }
  }, {
    key: 'isOff',
    value: function isOff() {
      return this.is('off');
    }
  }]);

  return Evaluate;
}();

/* harmony default export */ __webpack_exports__["a"] = Evaluate;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__package_json__);


function request(endpoint, config) {
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    var request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        if (request.status === 200 && request.getResponseHeader('Content-Type') === "application/json;charset=UTF-8") {
            callback(null, JSON.parse(request.responseText));
        } else {
            callback(request.statusText || 'non 200 response status code');
        }
    });
    request.addEventListener('error', function () {
        callback('error connecting with server');
    });
    request.open(config.method, endpoint);
    request.setRequestHeader('X-Featureflow-Client', 'JavascriptClient/' + __WEBPACK_IMPORTED_MODULE_0__package_json___default.a.version);
    if (config.body) {
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(config.body));
    } else {
        request.send();
    }
    return request;
}

function base64URLEncode(user) {
    return btoa(JSON.stringify(user));
}

/* harmony default export */ __webpack_exports__["a"] = {
    getFeatures: function getFeatures(eventsUrl, apiKey, user) {
        var keys = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
        var callback = arguments[4];

        var query = keys.length > 0 ? '?keys=' + keys.join(',') : '';
        request(eventsUrl + '/api/js/v1/evaluate/' + apiKey + '/user/' + encodeURI(base64URLEncode(user)) + query, { method: 'GET' }, callback);
    },
    postGoalEvent: function postGoalEvent(eventsUrl, apiKey, user, goalKey, evaluatedFeaturesMap, callback) {
        request(eventsUrl + '/api/js/v1/event/' + apiKey, {
            method: 'POST',
            body: [{
                type: 'goal',
                goalKey: goalKey,
                impressions: 1,
                evaluatedFeatures: evaluatedFeaturesMap,
                timestamp: new Date(),
                user: user
            }]
        }, callback);
    },
    postEvaluateEvent: function postEvaluateEvent(eventsUrl, apiKey, user, featureKey, variant, callback) {
        request(eventsUrl + '/api/js/v1/event/' + apiKey, {
            method: 'POST',
            body: [{
                type: 'evaluate',
                featureKey: featureKey,
                evaluatedVariant: variant,
                impressions: 1,
                user: user,
                timestamp: new Date()
            }]
        }, callback);
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 7 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {"name":"featureflow-client","version":"1.3.3","description":"Featureflow Javascript Client","author":"Featureflow <contact@featureflow.io>","license":"Apache-2.0","keywords":["featureflow","feature","analytics","client","feature flag","feature toggle","release"],"files":["dist"],"repository":{"type":"git","url":"git+https://github.com/featureflow/featureflow-javascript-sdk.git"},"main":"dist/featureflow.umd","scripts":{"build-bower":"rollup -c","build-lib":"webpack src/index.js dist/featureflow.umd.js","build-min":"webpack -p src/index.js dist/featureflow.umd.min.js","build":"node ./scripts/build.js","watch":"webpack --watch src/index.js dist/featureflow.umd.js","test":"karma start --single-run","test:watch":"karma start --auto-watch --reporters=dots","prepublish":"node ./scripts/build.js","publish:bower":"node ./scripts/bower.js","flow":"flow","example":"webpack-dev-server --config ./example/webpack.config.js --content-base example/ --inline --port 8182"},"devDependencies":{"babel":"^6.23.0","babel-core":"^6.25.0","babel-loader":"^6.4.1","babel-plugin-transform-flow-strip-types":"^6.22.0","babel-plugin-transform-object-rest-spread":"^6.23.0","babel-preset-es2015":"^6.24.1","chai":"3.5.0","css-loader":"^0.26.1","file-loader":"^0.10.0","flow-bin":"^0.39.0","gzip-size":"3.0.0","html-webpack-plugin":"^2.28.0","in-publish":"2.0.0","karma":"0.13.22","karma-chai":"0.1.0","karma-chrome-launcher":"1.0.1","karma-mocha":"1.0.1","karma-mocha-reporter":"2.0.4","karma-phantomjs-launcher":"0.2.1","karma-phantomjs-shim":"1.1.2","karma-sinon":"1.0.5","karma-sourcemap-loader":"0.3.7","karma-webpack":"2.0.2","mocha":"2.5.3","phantomjs":"^1.9.20","pretty-bytes":"3.0.1","readline-sync":"1.4.4","rollup":"^0.43.0","rollup-plugin-babel":"^2.7.1","rollup-plugin-commonjs":"^8.0.2","rollup-plugin-json":"^2.3.0","rollup-plugin-node-resolve":"^3.0.0","rollup-plugin-uglify":"^2.0.1","semver-compare":"^1.0.0","sinon":"1.17.4","style-loader":"^0.13.1","webpack":"2.2.1","webpack-dev-server":"^2.3.0"},"dependencies":{"js-cookie":"^2.1.4","tiny-emitter":"^1.2.0"}}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FeatureflowClient__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Events__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["init"] = init;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });



function init(apiKey) {
  var user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return new __WEBPACK_IMPORTED_MODULE_0__FeatureflowClient__["a" /* default */](apiKey, user, config);
}

var events = __WEBPACK_IMPORTED_MODULE_1__Events__["a" /* default */];

/* harmony default export */ __webpack_exports__["default"] = {
  init: init,
  events: events
};

if (window.VERSION !== undefined) {
  module.exports.version = window.VERSION;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)(module)))

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_featureflow_client__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_featureflow_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_featureflow_client__);


angular.module('ng-featureflow', []).provider('featureflow', featureflowProvider);

/**
 * Very simple angular 1 provider wrapper for the featureflow javascript SDK
 * See https://github.com/featureflow/featureflow-ng
 * and https://github.com/featureflow/featureflow-javascript-sdk
 *
 * @param $q
 * @constructor
 */
function featureflowProvider() {

    this.apiKey = "";
    this.user = {};
    this.init = function (apiKey, user) {
        this.apiKey = apiKey;
        this.user = user;
    };
    this.$get = function () {
        var featureflow = __WEBPACK_IMPORTED_MODULE_0_featureflow_client___default.a.init(this.apiKey, this.user);
        return featureflow;
    };
}

/***/ })
/******/ ]);
});