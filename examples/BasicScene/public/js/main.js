/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./examples/BasicScene/src/ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/BasicScene/src/ts/main.ts":
/*!********************************************!*\
  !*** ./examples/BasicScene/src/ts/main.ts ***!
  \********************************************/
/*! exports provided: APP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"APP\", function() { return APP; });\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src */ \"./src/index.ts\");\n/* harmony import */ var _shaders_cube_vs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/cube.vs */ \"./examples/BasicScene/src/ts/shaders/cube.vs\");\n/* harmony import */ var _shaders_cube_vs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shaders_cube_vs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shaders_cube_fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/cube.fs */ \"./examples/BasicScene/src/ts/shaders/cube.fs\");\n/* harmony import */ var _shaders_cube_fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_cube_fs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar APP = /** @class */ (function () {\n    function APP() {\n        this.time = 0;\n        this.renderer = new _src__WEBPACK_IMPORTED_MODULE_0__[\"Renderer\"]({\n            canvas: document.querySelector('#canvas'),\n            retina: true\n        });\n        this.renderer.setSize(window.innerWidth, window.innerHeight);\n        this.initScene();\n        this.animate();\n        window.addEventListener('resize', this.resize.bind(this));\n    }\n    APP.prototype.initScene = function () {\n        this.scene = new _src__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n        this.camera = new _src__WEBPACK_IMPORTED_MODULE_0__[\"Camera\"](50, 0.1, 1000);\n        this.camera.position.set(0, 0, 5);\n        var mat = new _src__WEBPACK_IMPORTED_MODULE_0__[\"Material\"]({\n            frag: _shaders_cube_fs__WEBPACK_IMPORTED_MODULE_2___default.a,\n            vert: _shaders_cube_vs__WEBPACK_IMPORTED_MODULE_1___default.a,\n            uniforms: {},\n            side: _src__WEBPACK_IMPORTED_MODULE_0__[\"SideFront\"]\n        });\n        this.cube = new _src__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](new _src__WEBPACK_IMPORTED_MODULE_0__[\"CubeGeometry\"](), mat);\n        this.scene.add(this.cube);\n    };\n    APP.prototype.animate = function () {\n        this.time += 1.0;\n        this.cube.rotation.x = this.time * 0.02;\n        this.cube.rotation.y = this.time * 0.02;\n        this.renderer.render(this.scene, this.camera);\n        requestAnimationFrame(this.animate.bind(this));\n    };\n    APP.prototype.resize = function () {\n        this.renderer.setSize(window.innerWidth, window.innerHeight);\n    };\n    return APP;\n}());\n\nwindow.addEventListener('load', function () {\n    var app = new APP();\n});\n\n\n//# sourceURL=webpack:///./examples/BasicScene/src/ts/main.ts?");

/***/ }),

/***/ "./examples/BasicScene/src/ts/shaders/cube.fs":
/*!****************************************************!*\
  !*** ./examples/BasicScene/src/ts/shaders/cube.fs ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision highp float;\\r\\n\\r\\nvarying vec3 vColor;\\r\\n\\r\\nvoid main( void ){\\r\\n\\t\\r\\n\\tgl_FragColor = vec4( vColor, 1.0 );\\r\\n\\t\\r\\n}\"\n\n//# sourceURL=webpack:///./examples/BasicScene/src/ts/shaders/cube.fs?");

/***/ }),

/***/ "./examples/BasicScene/src/ts/shaders/cube.vs":
/*!****************************************************!*\
  !*** ./examples/BasicScene/src/ts/shaders/cube.vs ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision highp float;\\r\\n\\r\\nattribute vec3 position;\\r\\nattribute vec3 color;\\r\\nattribute vec3 normal;\\r\\nattribute vec2 uv;\\r\\n\\r\\nuniform float time;\\r\\nuniform mat4 modelViewMatrix;\\r\\nuniform mat4 projectionMatrix;\\r\\n\\r\\nvarying vec3 vColor;\\r\\n\\r\\nvoid main( void ){\\r\\n\\t\\r\\n\\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\\r\\n    gl_Position = projectionMatrix * mvPosition;\\r\\n\\tgl_PointSize = 5.0;\\r\\n\\r\\n\\tvColor = vec3( uv, 1.0 ) + color;\\r\\n\\t// vColor = normal + 0.5;\\r\\n\\r\\n}\"\n\n//# sourceURL=webpack:///./examples/BasicScene/src/ts/shaders/cube.vs?");

/***/ }),

/***/ "./src/Constants.ts":
/*!**************************!*\
  !*** ./src/Constants.ts ***!
  \**************************/
/*! exports provided: SideFront, SideBack, SideDouble, FilterNearest, FilterLinear, WrapClamp, WrapRepeat, WrapMirror */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SideFront\", function() { return SideFront; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SideBack\", function() { return SideBack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SideDouble\", function() { return SideDouble; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FilterNearest\", function() { return FilterNearest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FilterLinear\", function() { return FilterLinear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WrapClamp\", function() { return WrapClamp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WrapRepeat\", function() { return WrapRepeat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WrapMirror\", function() { return WrapMirror; });\n//Material\nvar SideFront = 0;\nvar SideBack = 1;\nvar SideDouble = 2;\n//Texture\nvar FilterNearest = 0;\nvar FilterLinear = 1;\nvar WrapClamp = 0;\nvar WrapRepeat = 1;\nvar WrapMirror = 2;\n\n\n//# sourceURL=webpack:///./src/Constants.ts?");

/***/ }),

/***/ "./src/geometries/CubeGeometry.ts":
/*!****************************************!*\
  !*** ./src/geometries/CubeGeometry.ts ***!
  \****************************************/
/*! exports provided: CubeGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CubeGeometry\", function() { return CubeGeometry; });\n/* harmony import */ var _Geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Geometry */ \"./src/geometries/Geometry.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar CubeGeometry = /** @class */ (function (_super) {\n    __extends(CubeGeometry, _super);\n    function CubeGeometry(width, height, depth) {\n        if (width === void 0) { width = 1; }\n        if (height === void 0) { height = 1; }\n        if (depth === void 0) { depth = 1; }\n        var _this = _super.call(this) || this;\n        var hx = width / 2;\n        var hy = height / 2;\n        var hz = depth / 2;\n        var posArray = [\n            -hx, hy, hz,\n            hx, hy, hz,\n            -hx, -hy, hz,\n            hx, -hy, hz,\n            hx, hy, -hz,\n            -hx, hy, -hz,\n            hx, -hy, -hz,\n            -hx, -hy, -hz,\n            hx, hy, hz,\n            hx, hy, -hz,\n            hx, -hy, hz,\n            hx, -hy, -hz,\n            -hx, hy, -hz,\n            -hx, hy, hz,\n            -hx, -hy, -hz,\n            -hx, -hy, hz,\n            hx, hy, -hz,\n            hx, hy, hz,\n            -hx, hy, -hz,\n            -hx, hy, hz,\n            -hx, -hy, -hz,\n            -hx, -hy, hz,\n            hx, -hy, -hz,\n            hx, -hy, hz,\n        ];\n        var normalArray = [\n            0, 0, 1,\n            0, 0, 1,\n            0, 0, 1,\n            0, 0, 1,\n            0, 0, -1,\n            0, 0, -1,\n            0, 0, -1,\n            0, 0, -1,\n            1, 0, 0,\n            1, 0, 0,\n            1, 0, 0,\n            1, 0, 0,\n            -1, 0, 0,\n            -1, 0, 0,\n            -1, 0, 0,\n            -1, 0, 0,\n            0, 1, 0,\n            0, 1, 0,\n            0, 1, 0,\n            0, 1, 0,\n            0, -1, 0,\n            0, -1, 0,\n            0, -1, 0,\n            0, -1, 0,\n        ];\n        var uvArray = [];\n        var indexArray = [];\n        for (var i = 0; i < 6; i++) {\n            uvArray.push(0, 1, 1, 1, 0, 0, 1, 0);\n            var offset = 4 * i;\n            indexArray.push(0 + offset, 2 + offset, 1 + offset, 1 + offset, 2 + offset, 3 + offset);\n        }\n        _this.addAttributes('position', posArray, 3);\n        _this.addAttributes('normal', normalArray, 3);\n        _this.addAttributes('uv', uvArray, 2);\n        _this.addAttributes('index', indexArray, 1);\n        return _this;\n    }\n    return CubeGeometry;\n}(_Geometry__WEBPACK_IMPORTED_MODULE_0__[\"Geometry\"]));\n\n\n\n//# sourceURL=webpack:///./src/geometries/CubeGeometry.ts?");

/***/ }),

/***/ "./src/geometries/CylinderGeometry.ts":
/*!********************************************!*\
  !*** ./src/geometries/CylinderGeometry.ts ***!
  \********************************************/
/*! exports provided: CylinderGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CylinderGeometry\", function() { return CylinderGeometry; });\n/* harmony import */ var _Geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Geometry */ \"./src/geometries/Geometry.ts\");\n/* harmony import */ var _math_Vec3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vec3 */ \"./src/math/Vec3.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar CylinderGeometry = /** @class */ (function (_super) {\n    __extends(CylinderGeometry, _super);\n    function CylinderGeometry(radiusTop, radiusBottom, height, radSegments, heightSegments) {\n        if (radSegments === void 0) { radSegments = 5; }\n        if (heightSegments === void 0) { heightSegments = 1; }\n        var _this = _super.call(this) || this;\n        var posArray = [];\n        var normalArray = [];\n        var uvArray = [];\n        var indexArray = [];\n        //上下面分2回多くループ\n        for (var i = 0; i <= heightSegments + 2; i++) {\n            for (var j = 0; j < radSegments; j++) {\n                var theta = Math.PI * 2.0 / radSegments * j;\n                if (i <= heightSegments) {\n                    //side\n                    var w = i / heightSegments;\n                    var radius = (1.0 - w) * radiusBottom + w * radiusTop;\n                    var x = Math.cos(theta) * radius;\n                    var y = -(height / 2) + (height / heightSegments) * i;\n                    var z = Math.sin(theta) * radius;\n                    posArray.push(x, y, z);\n                    uvArray.push(j / radSegments, i / heightSegments);\n                    var normal = new _math_Vec3__WEBPACK_IMPORTED_MODULE_1__[\"Vec3\"](Math.cos(theta), 0, Math.sin(theta)).normalize();\n                    normalArray.push(normal.x, normal.y, normal.z);\n                    if (i < heightSegments) {\n                        indexArray.push(i * radSegments + j, i * radSegments + (j + 1) % radSegments, (i + 1) * radSegments + (j + 1) % radSegments, i * radSegments + j, (i + 1) * radSegments + (j + 1) % radSegments, (i + 1) * radSegments + j);\n                    }\n                }\n                else {\n                    //bottom, top\n                    var side = i - heightSegments - 1;\n                    var radius = side ? radiusTop : radiusBottom;\n                    var x = Math.cos(theta) * radius;\n                    var y = -(height / 2) + height * (side);\n                    var z = Math.sin(theta) * radius;\n                    posArray.push(x, y, z);\n                    uvArray.push((x + radius) * 0.5 / radius, (z + radius) * 0.5 / radius);\n                    normalArray.push(0, -1 + side * 2, 0);\n                    var offset = radSegments * (heightSegments + (side + 1));\n                    if (j <= radSegments - 2) {\n                        indexArray.push(offset, offset + j, offset + j + 1);\n                    }\n                }\n            }\n        }\n        // let offset = radSegments * heightSegments;\n        // for( let i = 2; i < radSegments; i++ ){\n        // \tindexArray.push(\n        // \t\t0, i, i - 1,\n        // \t\t0 + offset, i + offset, i - 1 + offset,\n        // \t);\n        // }\n        _this.addAttributes('position', posArray, 3);\n        _this.addAttributes('normal', normalArray, 3);\n        _this.addAttributes('uv', uvArray, 2);\n        _this.addAttributes('index', indexArray, 1);\n        return _this;\n    }\n    return CylinderGeometry;\n}(_Geometry__WEBPACK_IMPORTED_MODULE_0__[\"Geometry\"]));\n\n\n\n//# sourceURL=webpack:///./src/geometries/CylinderGeometry.ts?");

/***/ }),

/***/ "./src/geometries/Geometry.ts":
/*!************************************!*\
  !*** ./src/geometries/Geometry.ts ***!
  \************************************/
/*! exports provided: Geometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Geometry\", function() { return Geometry; });\nvar Geometry = /** @class */ (function () {\n    function Geometry() {\n        this.attributes = {};\n    }\n    Geometry.prototype.clone = function () {\n        var geo = new Geometry();\n        var keys = Object.keys(this.attributes);\n        for (var i = 0; i < keys.length; i++) {\n            var attr = this.attributes[keys[i]];\n            geo.addAttributes(keys[i], attr.vertices, attr.stride);\n        }\n        return geo;\n    };\n    Geometry.prototype.addAttributes = function (name, vertices, stride) {\n        this.attributes[name] = {\n            vertices: vertices,\n            stride: stride,\n        };\n    };\n    return Geometry;\n}());\n\n\n\n//# sourceURL=webpack:///./src/geometries/Geometry.ts?");

/***/ }),

/***/ "./src/geometries/SphereGeometry.ts":
/*!******************************************!*\
  !*** ./src/geometries/SphereGeometry.ts ***!
  \******************************************/
/*! exports provided: SphereGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SphereGeometry\", function() { return SphereGeometry; });\n/* harmony import */ var _Geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Geometry */ \"./src/geometries/Geometry.ts\");\n/* harmony import */ var _math_Vec3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vec3 */ \"./src/math/Vec3.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar SphereGeometry = /** @class */ (function (_super) {\n    __extends(SphereGeometry, _super);\n    function SphereGeometry(radius, widthSegments, heightSegments) {\n        if (radius === void 0) { radius = 0.5; }\n        if (widthSegments === void 0) { widthSegments = 20; }\n        if (heightSegments === void 0) { heightSegments = 10; }\n        var _this = _super.call(this) || this;\n        var posArray = [];\n        var normalArray = [];\n        var uvArray = [];\n        var indexArray = [];\n        for (var i = 0; i <= heightSegments; i++) {\n            var thetaI = i / heightSegments * Math.PI;\n            var segments = (i != 0 && i != heightSegments) ? widthSegments : widthSegments;\n            for (var j = 0; j < segments; j++) {\n                // pos\n                var thetaJ = j / segments * Math.PI * 2.0;\n                var widthRadius = Math.sin(thetaI) * radius;\n                var x = Math.cos(thetaJ) * widthRadius;\n                var y = -Math.cos(thetaI) * radius;\n                var z = Math.sin(thetaJ) * widthRadius;\n                posArray.push(x, y, z);\n                // uv\n                uvArray.push(j / segments, i / heightSegments);\n                //normal\n                var normal = new _math_Vec3__WEBPACK_IMPORTED_MODULE_1__[\"Vec3\"](x, y, z).normalize();\n                normalArray.push(normal.x, normal.y, normal.z);\n                // index\n                indexArray.push(i * widthSegments + j, i * widthSegments + (j + 1) % widthSegments, (i + 1) * widthSegments + (j + 1) % widthSegments, i * widthSegments + j, (i + 1) * widthSegments + (j + 1) % widthSegments, (i + 1) * widthSegments + j);\n            }\n        }\n        _this.addAttributes('position', posArray, 3);\n        _this.addAttributes('normal', normalArray, 3);\n        _this.addAttributes('uv', uvArray, 2);\n        _this.addAttributes('index', indexArray, 1);\n        return _this;\n    }\n    return SphereGeometry;\n}(_Geometry__WEBPACK_IMPORTED_MODULE_0__[\"Geometry\"]));\n\n\n\n//# sourceURL=webpack:///./src/geometries/SphereGeometry.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: SideFront, SideBack, SideDouble, FilterNearest, FilterLinear, WrapClamp, WrapRepeat, WrapMirror, Renderer, Material, Camera, Geometry, CubeGeometry, CylinderGeometry, SphereGeometry, Scene, Empty, RenderingObject, Mesh, Points, Vec2, Vec3, Mat4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants */ \"./src/Constants.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SideFront\", function() { return _Constants__WEBPACK_IMPORTED_MODULE_0__[\"SideFront\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SideBack\", function() { return _Constants__WEBPACK_IMPORTED_MODULE_0__[\"SideBack\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SideDouble\", function() { return _Constants__WEBPACK_IMPORTED_MODULE_0__[\"SideDouble\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FilterNearest\", function() { return _Constants__WEBPACK_IMPORTED_MODULE_0__[\"FilterNearest\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FilterLinear\", function() { return _Constants__WEBPACK_IMPORTED_MODULE_0__[\"FilterLinear\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"WrapClamp\", function() { return _Constants__WEBPACK_IMPORTED_MODULE_0__[\"WrapClamp\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"WrapRepeat\", function() { return _Constants__WEBPACK_IMPORTED_MODULE_0__[\"WrapRepeat\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"WrapMirror\", function() { return _Constants__WEBPACK_IMPORTED_MODULE_0__[\"WrapMirror\"]; });\n\n/* harmony import */ var _renderers_Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderers/Renderer */ \"./src/renderers/Renderer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Renderer\", function() { return _renderers_Renderer__WEBPACK_IMPORTED_MODULE_1__[\"Renderer\"]; });\n\n/* harmony import */ var _renderers_Material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderers/Material */ \"./src/renderers/Material.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Material\", function() { return _renderers_Material__WEBPACK_IMPORTED_MODULE_2__[\"Material\"]; });\n\n/* harmony import */ var _renderers_Camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderers/Camera */ \"./src/renderers/Camera.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Camera\", function() { return _renderers_Camera__WEBPACK_IMPORTED_MODULE_3__[\"Camera\"]; });\n\n/* harmony import */ var _geometries_Geometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geometries/Geometry */ \"./src/geometries/Geometry.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Geometry\", function() { return _geometries_Geometry__WEBPACK_IMPORTED_MODULE_4__[\"Geometry\"]; });\n\n/* harmony import */ var _geometries_CubeGeometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geometries/CubeGeometry */ \"./src/geometries/CubeGeometry.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CubeGeometry\", function() { return _geometries_CubeGeometry__WEBPACK_IMPORTED_MODULE_5__[\"CubeGeometry\"]; });\n\n/* harmony import */ var _geometries_CylinderGeometry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geometries/CylinderGeometry */ \"./src/geometries/CylinderGeometry.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CylinderGeometry\", function() { return _geometries_CylinderGeometry__WEBPACK_IMPORTED_MODULE_6__[\"CylinderGeometry\"]; });\n\n/* harmony import */ var _geometries_SphereGeometry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./geometries/SphereGeometry */ \"./src/geometries/SphereGeometry.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SphereGeometry\", function() { return _geometries_SphereGeometry__WEBPACK_IMPORTED_MODULE_7__[\"SphereGeometry\"]; });\n\n/* harmony import */ var _objects_Scene__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./objects/Scene */ \"./src/objects/Scene.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Scene\", function() { return _objects_Scene__WEBPACK_IMPORTED_MODULE_8__[\"Scene\"]; });\n\n/* harmony import */ var _objects_Empty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./objects/Empty */ \"./src/objects/Empty.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Empty\", function() { return _objects_Empty__WEBPACK_IMPORTED_MODULE_9__[\"Empty\"]; });\n\n/* harmony import */ var _objects_RenderingObject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./objects/RenderingObject */ \"./src/objects/RenderingObject.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RenderingObject\", function() { return _objects_RenderingObject__WEBPACK_IMPORTED_MODULE_10__[\"RenderingObject\"]; });\n\n/* harmony import */ var _objects_Mesh__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./objects/Mesh */ \"./src/objects/Mesh.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Mesh\", function() { return _objects_Mesh__WEBPACK_IMPORTED_MODULE_11__[\"Mesh\"]; });\n\n/* harmony import */ var _objects_Points__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./objects/Points */ \"./src/objects/Points.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Points\", function() { return _objects_Points__WEBPACK_IMPORTED_MODULE_12__[\"Points\"]; });\n\n/* harmony import */ var _math_Vec2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./math/Vec2 */ \"./src/math/Vec2.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Vec2\", function() { return _math_Vec2__WEBPACK_IMPORTED_MODULE_13__[\"Vec2\"]; });\n\n/* harmony import */ var _math_Vec3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./math/Vec3 */ \"./src/math/Vec3.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Vec3\", function() { return _math_Vec3__WEBPACK_IMPORTED_MODULE_14__[\"Vec3\"]; });\n\n/* harmony import */ var _math_Mat4__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./math/Mat4 */ \"./src/math/Mat4.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Mat4\", function() { return _math_Mat4__WEBPACK_IMPORTED_MODULE_15__[\"Mat4\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/math/Mat4.ts":
/*!**************************!*\
  !*** ./src/math/Mat4.ts ***!
  \**************************/
/*! exports provided: Mat4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Mat4\", function() { return Mat4; });\nvar Mat4 = /** @class */ (function () {\n    function Mat4() {\n        this.identity();\n    }\n    Object.defineProperty(Mat4.prototype, \"isMat4\", {\n        get: function () {\n            return true;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Mat4.prototype.identity = function () {\n        this.element = [\n            1, 0, 0, 0,\n            0, 1, 0, 0,\n            0, 0, 1, 0,\n            0, 0, 0, 1,\n        ];\n        return this;\n    };\n    Mat4.prototype.clone = function () {\n        return new Mat4().copy(this);\n    };\n    Mat4.prototype.copy = function (mat) {\n        this.element = mat.element.slice();\n        return this;\n    };\n    Mat4.prototype.perspective = function (fov, aspect, near, far) {\n        var r = 1 / Math.tan(fov * Math.PI / 360);\n        var d = far - near;\n        this.element = [\n            r / aspect, 0, 0, 0,\n            0, r, 0, 0,\n            0, 0, -(far + near) / d, -1,\n            0, 0, -(far * near * 2) / d, 0\n        ];\n        return this;\n    };\n    Mat4.prototype.lookAt = function (eye, target, up) {\n        var zAxis = eye.clone().sub(target).normalize();\n        var xAxis = up.clone().cross(zAxis).normalize();\n        var yAxis = zAxis.clone().cross(xAxis).normalize();\n        this.element = [\n            xAxis.x, yAxis.x, zAxis.x, 0,\n            xAxis.y, yAxis.y, zAxis.y, 0,\n            xAxis.z, yAxis.z, zAxis.z, 0,\n            -eye.dot(xAxis),\n            -eye.dot(yAxis),\n            -eye.dot(zAxis),\n            1,\n        ];\n        return this;\n    };\n    Mat4.prototype.inverse = function () {\n        var a = this.element[0], b = this.element[1], c = this.element[2], d = this.element[3], e = this.element[4], f = this.element[5], g = this.element[6], h = this.element[7], i = this.element[8], j = this.element[9], k = this.element[10], l = this.element[11], m = this.element[12], n = this.element[13], o = this.element[14], p = this.element[15], q = a * f - b * e, r = a * g - c * e, s = a * h - d * e, t = b * g - c * f, u = b * h - d * f, v = c * h - d * g, w = i * n - j * m, x = i * o - k * m, y = i * p - l * m, z = j * o - k * n, A = j * p - l * n, B = k * p - l * o, ivd = 1 / (q * B - r * A + s * z + t * y - u * x + v * w);\n        this.element[0] = (f * B - g * A + h * z) * ivd;\n        this.element[1] = (-b * B + c * A - d * z) * ivd;\n        this.element[2] = (n * v - o * u + p * t) * ivd;\n        this.element[3] = (-j * v + k * u - l * t) * ivd;\n        this.element[4] = (-e * B + g * y - h * x) * ivd;\n        this.element[5] = (a * B - c * y + d * x) * ivd;\n        this.element[6] = (-m * v + o * s - p * r) * ivd;\n        this.element[7] = (i * v - k * s + l * r) * ivd;\n        this.element[8] = (e * A - f * y + h * w) * ivd;\n        this.element[9] = (-a * A + b * y - d * w) * ivd;\n        this.element[10] = (m * u - n * s + p * q) * ivd;\n        this.element[11] = (-i * u + j * s - l * q) * ivd;\n        this.element[12] = (-e * z + f * x - g * w) * ivd;\n        this.element[13] = (a * z - b * x + c * w) * ivd;\n        this.element[14] = (-m * t + n * r - o * q) * ivd;\n        this.element[15] = (i * t - j * r + k * q) * ivd;\n        return this;\n    };\n    Mat4.prototype.createTransformMatrix = function (pos, rot, scale) {\n        this.identity();\n        //position\n        this.matmul([\n            1, 0, 0, 0,\n            0, 1, 0, 0,\n            0, 0, 1, 0,\n            pos.x, pos.y, pos.z, 1\n        ]);\n        //rotation\n        var c = Math.cos(rot.x), s = Math.sin(rot.x);\n        this.matmul([\n            1, 0, 0, 0,\n            0, c, s, 0,\n            0, -s, c, 0,\n            0, 0, 0, 1\n        ]);\n        c = Math.cos(rot.y), s = Math.sin(rot.y);\n        this.matmul([\n            c, 0, -s, 0,\n            0, 1, 0, 0,\n            s, 0, c, 0,\n            0, 0, 0, 1\n        ]);\n        c = Math.cos(rot.z), s = Math.sin(rot.z);\n        this.matmul([\n            c, s, 0, 0,\n            -s, c, 0, 0,\n            0, 0, 1, 0,\n            0, 0, 0, 1\n        ]);\n        //scale\n        this.matmul([\n            scale.x, 0, 0, 0,\n            0, scale.y, 0, 0,\n            0, 0, scale.z, 0,\n            0, 0, 0, 1\n        ]);\n        return this;\n    };\n    Mat4.prototype.matmul = function (elm2) {\n        var dist = new Array(16);\n        for (var i = 0; i < 4; i++) {\n            for (var j = 0; j < 4; j++) {\n                var sum = 0;\n                for (var k = 0; k < 4; k++) {\n                    sum += this.element[k * 4 + j] * elm2[k + i * 4];\n                }\n                dist[j + i * 4] = sum;\n            }\n        }\n        this.element = dist;\n    };\n    Mat4.prototype.multiply = function (m) {\n        this.matmul(m.element);\n        return this;\n    };\n    Mat4.prototype.multiplyScaler = function (a) {\n        for (var i = 0; i < this.element.length; i++) {\n            this.element[i] *= a;\n        }\n        return this;\n    };\n    return Mat4;\n}());\n\n\n\n//# sourceURL=webpack:///./src/math/Mat4.ts?");

/***/ }),

/***/ "./src/math/Vec2.ts":
/*!**************************!*\
  !*** ./src/math/Vec2.ts ***!
  \**************************/
/*! exports provided: Vec2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Vec2\", function() { return Vec2; });\nvar Vec2 = /** @class */ (function () {\n    function Vec2(x, y, z) {\n        this.x = x || 0;\n        this.y = y || 0;\n    }\n    Object.defineProperty(Vec2.prototype, \"isVec2\", {\n        get: function () {\n            return true;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Vec2.prototype.add = function (a) {\n        if (a.isVec2) {\n            this.x += a.x;\n            this.y += a.y;\n        }\n        else if (typeof (a) == 'number') {\n            this.x += a;\n            this.y += a;\n        }\n        return this;\n    };\n    Vec2.prototype.sub = function (a) {\n        if (a.isVec2) {\n            this.x -= a.x;\n            this.y -= a.y;\n        }\n        else if (typeof (a) == 'number') {\n            this.x -= a;\n            this.y -= a;\n        }\n        return this;\n    };\n    Vec2.prototype.multiply = function (a) {\n        if (a.isVec2) {\n            this.x *= a.x;\n            this.y *= a.y;\n        }\n        else if (typeof (a) == 'number') {\n            this.x *= a;\n            this.y *= a;\n        }\n        return this;\n    };\n    return Vec2;\n}());\n\n\n\n//# sourceURL=webpack:///./src/math/Vec2.ts?");

/***/ }),

/***/ "./src/math/Vec3.ts":
/*!**************************!*\
  !*** ./src/math/Vec3.ts ***!
  \**************************/
/*! exports provided: Vec3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Vec3\", function() { return Vec3; });\nvar Vec3 = /** @class */ (function () {\n    function Vec3(x, y, z) {\n        this.x = x || 0;\n        this.y = y || 0;\n        this.z = z || 0;\n    }\n    Object.defineProperty(Vec3.prototype, \"isVec3\", {\n        get: function () {\n            return true;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Vec3.prototype.clone = function () {\n        return new Vec3(this.x, this.y, this.z);\n    };\n    Vec3.prototype.set = function (x, y, z) {\n        this.x = x;\n        this.y = y;\n        this.z = z;\n        return this;\n    };\n    Vec3.prototype.add = function (a) {\n        if (a.isVec3) {\n            this.x += a.x;\n            this.y += a.y;\n            this.z += a.z;\n        }\n        else if (typeof (a) == 'number') {\n            this.x += a;\n            this.y += a;\n            this.z += a;\n        }\n        return this;\n    };\n    Vec3.prototype.sub = function (a) {\n        if (a.isVec3) {\n            this.x -= a.x;\n            this.y -= a.y;\n            this.z -= a.z;\n        }\n        else if (typeof (a) == 'number') {\n            this.x -= a;\n            this.y -= a;\n            this.z -= a;\n        }\n        return this;\n    };\n    Vec3.prototype.multiply = function (a) {\n        if (a.isVec3) {\n            this.x *= a.x;\n            this.y *= a.y;\n            this.z *= a.z;\n        }\n        else if (typeof (a) == 'number') {\n            this.x *= a;\n            this.y *= a;\n            this.z *= a;\n        }\n        return this;\n    };\n    Vec3.prototype.divide = function (a) {\n        if (a.isVec3) {\n            this.x /= a.x;\n            this.y /= a.y;\n            this.z /= a.z;\n        }\n        else if (typeof (a) == 'number') {\n            this.x /= a;\n            this.y /= a;\n            this.z /= a;\n        }\n        return this;\n    };\n    Vec3.prototype.length = function () {\n        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);\n    };\n    Vec3.prototype.normalize = function () {\n        return this.divide(this.length() || 1);\n    };\n    Vec3.prototype.cross = function (v) {\n        var ax = this.x, ay = this.y, az = this.z;\n        var bx = v.x, by = v.y, bz = v.z;\n        this.x = ay * bz - az * by;\n        this.y = az * bx - ax * bz;\n        this.z = ax * by - ay * bx;\n        return this;\n    };\n    Vec3.prototype.dot = function (v) {\n        return this.x * v.x + this.y * v.y + this.z * v.z;\n    };\n    return Vec3;\n}());\n\n\n\n//# sourceURL=webpack:///./src/math/Vec3.ts?");

/***/ }),

/***/ "./src/objects/Empty.ts":
/*!******************************!*\
  !*** ./src/objects/Empty.ts ***!
  \******************************/
/*! exports provided: Empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Empty\", function() { return Empty; });\n/* harmony import */ var _math_Vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Vec3 */ \"./src/math/Vec3.ts\");\n/* harmony import */ var _math_Mat4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Mat4 */ \"./src/math/Mat4.ts\");\n\n\nvar Empty = /** @class */ (function () {\n    function Empty() {\n        this.children = [];\n        this.modelMatrix = new _math_Mat4__WEBPACK_IMPORTED_MODULE_1__[\"Mat4\"]();\n        this.modelViewMatrix = new _math_Mat4__WEBPACK_IMPORTED_MODULE_1__[\"Mat4\"]();\n        this.position = new _math_Vec3__WEBPACK_IMPORTED_MODULE_0__[\"Vec3\"]();\n        this.rotation = new _math_Vec3__WEBPACK_IMPORTED_MODULE_0__[\"Vec3\"]();\n        this.scale = new _math_Vec3__WEBPACK_IMPORTED_MODULE_0__[\"Vec3\"](1, 1, 1);\n    }\n    Empty.prototype.add = function (obj) {\n        if (obj) {\n            this.children.push(obj);\n        }\n    };\n    Empty.prototype.updateMatrix = function () {\n        this.modelMatrix.createTransformMatrix(this.position, this.rotation, this.scale);\n    };\n    return Empty;\n}());\n\n\n\n//# sourceURL=webpack:///./src/objects/Empty.ts?");

/***/ }),

/***/ "./src/objects/Mesh.ts":
/*!*****************************!*\
  !*** ./src/objects/Mesh.ts ***!
  \*****************************/
/*! exports provided: Mesh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Mesh\", function() { return Mesh; });\n/* harmony import */ var _RenderingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderingObject */ \"./src/objects/RenderingObject.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Mesh = /** @class */ (function (_super) {\n    __extends(Mesh, _super);\n    function Mesh(geometry, material) {\n        var _this = _super.call(this, geometry, material) || this;\n        _this.geometry = geometry;\n        _this.material = material;\n        return _this;\n    }\n    Object.defineProperty(Mesh.prototype, \"isMesh\", {\n        get: function () {\n            return true;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Mesh;\n}(_RenderingObject__WEBPACK_IMPORTED_MODULE_0__[\"RenderingObject\"]));\n\n\n\n//# sourceURL=webpack:///./src/objects/Mesh.ts?");

/***/ }),

/***/ "./src/objects/Points.ts":
/*!*******************************!*\
  !*** ./src/objects/Points.ts ***!
  \*******************************/
/*! exports provided: Points */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Points\", function() { return Points; });\n/* harmony import */ var _RenderingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderingObject */ \"./src/objects/RenderingObject.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Points = /** @class */ (function (_super) {\n    __extends(Points, _super);\n    function Points(geometry, material) {\n        return _super.call(this, geometry, material) || this;\n    }\n    Object.defineProperty(Points.prototype, \"isPoints\", {\n        get: function () {\n            return true;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Points;\n}(_RenderingObject__WEBPACK_IMPORTED_MODULE_0__[\"RenderingObject\"]));\n\n\n\n//# sourceURL=webpack:///./src/objects/Points.ts?");

/***/ }),

/***/ "./src/objects/RenderingObject.ts":
/*!****************************************!*\
  !*** ./src/objects/RenderingObject.ts ***!
  \****************************************/
/*! exports provided: RenderingObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RenderingObject\", function() { return RenderingObject; });\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Empty */ \"./src/objects/Empty.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar RenderingObject = /** @class */ (function (_super) {\n    __extends(RenderingObject, _super);\n    function RenderingObject(geometry, material) {\n        var _this = _super.call(this) || this;\n        _this.geometry = geometry;\n        _this.material = material;\n        _this.IndividualUniforms = {\n            modelViewMatrix: {\n                value: _this.modelViewMatrix\n            },\n            projectionMatrix: {\n                value: null\n            }\n        };\n        return _this;\n    }\n    Object.defineProperty(RenderingObject.prototype, \"isRenderingObject\", {\n        get: function () {\n            return true;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return RenderingObject;\n}(_Empty__WEBPACK_IMPORTED_MODULE_0__[\"Empty\"]));\n\n\n\n//# sourceURL=webpack:///./src/objects/RenderingObject.ts?");

/***/ }),

/***/ "./src/objects/Scene.ts":
/*!******************************!*\
  !*** ./src/objects/Scene.ts ***!
  \******************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Scene\", function() { return Scene; });\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Empty */ \"./src/objects/Empty.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Scene = /** @class */ (function (_super) {\n    __extends(Scene, _super);\n    function Scene() {\n        return _super.call(this) || this;\n    }\n    return Scene;\n}(_Empty__WEBPACK_IMPORTED_MODULE_0__[\"Empty\"]));\n\n\n\n//# sourceURL=webpack:///./src/objects/Scene.ts?");

/***/ }),

/***/ "./src/renderers/Camera.ts":
/*!*********************************!*\
  !*** ./src/renderers/Camera.ts ***!
  \*********************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Camera\", function() { return Camera; });\n/* harmony import */ var _objects_Empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/Empty */ \"./src/objects/Empty.ts\");\n/* harmony import */ var _math_Mat4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Mat4 */ \"./src/math/Mat4.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar Camera = /** @class */ (function (_super) {\n    __extends(Camera, _super);\n    function Camera(fov, near, far) {\n        var _this = _super.call(this) || this;\n        _this.fov = fov;\n        _this.near = near;\n        _this.far = far;\n        _this.projectionMatrix = new _math_Mat4__WEBPACK_IMPORTED_MODULE_1__[\"Mat4\"]();\n        _this.modelMatrixInverse = new _math_Mat4__WEBPACK_IMPORTED_MODULE_1__[\"Mat4\"]();\n        return _this;\n    }\n    Camera.prototype.updateMatrix = function () {\n        _super.prototype.updateMatrix.call(this);\n        this.modelMatrixInverse.copy(this.modelMatrix.clone().inverse());\n        this.projectionMatrix.perspective(this.fov, window.innerWidth / window.innerHeight, this.near, this.far);\n    };\n    return Camera;\n}(_objects_Empty__WEBPACK_IMPORTED_MODULE_0__[\"Empty\"]));\n\n\n\n//# sourceURL=webpack:///./src/renderers/Camera.ts?");

/***/ }),

/***/ "./src/renderers/Material.ts":
/*!***********************************!*\
  !*** ./src/renderers/Material.ts ***!
  \***********************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Material\", function() { return Material; });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./src/Constants.ts\");\n\nvar Material = /** @class */ (function () {\n    function Material(param) {\n        this.uniforms = param.uniforms;\n        this.frag = param.frag;\n        this.vert = param.vert;\n        this.side = param.side || _Constants__WEBPACK_IMPORTED_MODULE_0__[\"SideFront\"];\n    }\n    Material.prototype.clone = function () {\n        var uni = {};\n        var uniKeys = Object.keys(this.uniforms);\n        for (var i = 0; i < uniKeys.length; i++) {\n            var key = uniKeys[i];\n            uni[key] = {\n                value: this.uniforms[key].value\n            };\n        }\n        return new Material({\n            vert: this.vert,\n            frag: this.frag,\n            side: this.side,\n            uniforms: uni\n        });\n    };\n    return Material;\n}());\n\n\n\n//# sourceURL=webpack:///./src/renderers/Material.ts?");

/***/ }),

/***/ "./src/renderers/Renderer.ts":
/*!***********************************!*\
  !*** ./src/renderers/Renderer.ts ***!
  \***********************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Renderer\", function() { return Renderer; });\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ \"./src/Constants.ts\");\n\nvar Renderer = /** @class */ (function () {\n    function Renderer(param) {\n        this.attributeCnt = 0;\n        this.textureCnt = 0;\n        this.initContext(param.canvas);\n        this.isRetina = param.retina || false;\n    }\n    Renderer.prototype.initContext = function (canvas) {\n        this._canvas = canvas;\n        this._gl = this._canvas.getContext('webgl');\n        this._gl.enable(this._gl.DEPTH_TEST);\n    };\n    Renderer.prototype.setSize = function (width, height) {\n        this._canvas.width = width * (this.isRetina ? window.devicePixelRatio : 1);\n        this._canvas.height = height * (this.isRetina ? window.devicePixelRatio : 1);\n        this._gl.viewport(0, 0, this._gl.canvas.width, this._gl.canvas.height);\n    };\n    Renderer.prototype.createProgram = function (obj) {\n        var mat = obj.material;\n        var prg = this._gl.createProgram();\n        var vs = this.createShader(mat.vert, this._gl.VERTEX_SHADER);\n        var fs = this.createShader(mat.frag, this._gl.FRAGMENT_SHADER);\n        this._gl.attachShader(prg, vs);\n        this._gl.attachShader(prg, fs);\n        this._gl.linkProgram(prg);\n        obj.program = prg;\n    };\n    Renderer.prototype.createShader = function (src, type) {\n        var shader = this._gl.createShader(type);\n        this._gl.shaderSource(shader, src);\n        this._gl.compileShader(shader);\n        if (this._gl.getShaderParameter(shader, this._gl.COMPILE_STATUS)) {\n            return shader;\n        }\n        else {\n            return null;\n        }\n    };\n    Renderer.prototype.createAttributes = function (obj) {\n        var mat = obj.material;\n        var geo = obj.geometry;\n        var prg = obj.program;\n        var keys = Object.keys(geo.attributes);\n        for (var i = 0; i < keys.length; i++) {\n            var key = keys[i];\n            var attr = geo.attributes[key];\n            if (key == 'index') {\n                attr.vbo = this.createBufferObject(attr.vertices, true);\n            }\n            else {\n                attr.location = this._gl.getAttribLocation(prg, key.toString());\n                attr.vbo = this.createBufferObject(attr.vertices, false);\n            }\n        }\n    };\n    Renderer.prototype.createBufferObject = function (vertices, isIndex) {\n        if (isIndex === void 0) { isIndex = false; }\n        var vbo = this._gl.createBuffer();\n        var target = isIndex ? this._gl.ELEMENT_ARRAY_BUFFER : this._gl.ARRAY_BUFFER;\n        var array = isIndex ? new Int16Array(vertices) : new Float32Array(vertices);\n        this._gl.bindBuffer(target, vbo);\n        this._gl.bufferData(target, array, this._gl.STATIC_DRAW);\n        this._gl.bindBuffer(target, null);\n        return vbo;\n    };\n    Renderer.prototype.setAttributes = function (geo) {\n        this.clearAttributes();\n        var keys = Object.keys(geo.attributes);\n        this.attributeCnt = keys.length;\n        for (var i = 0; i < keys.length; i++) {\n            var key = keys[i];\n            var attr = geo.attributes[key];\n            if (key == 'index') {\n                this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, attr.vbo);\n            }\n            else {\n                if (attr.location !== -1) {\n                    this._gl.bindBuffer(this._gl.ARRAY_BUFFER, attr.vbo);\n                    this._gl.enableVertexAttribArray(attr.location);\n                    this._gl.vertexAttribPointer(attr.location, attr.stride, this._gl.FLOAT, false, 0, 0);\n                }\n            }\n        }\n    };\n    Renderer.prototype.clearAttributes = function () {\n        for (var i = 0; i < this.attributeCnt; i++) {\n            this._gl.disableVertexAttribArray(i);\n        }\n    };\n    Renderer.prototype.createUniforms = function (program, uniforms) {\n        if (!uniforms)\n            return;\n        var matUniKeys = Object.keys(uniforms);\n        for (var i = 0; i < matUniKeys.length; i++) {\n            var key = matUniKeys[i];\n            var uni = uniforms[key];\n            uni.location = this._gl.getUniformLocation(program, key.toString());\n        }\n    };\n    Renderer.prototype.applyUniforms = function (uniforms) {\n        if (!uniforms)\n            return;\n        var keys = Object.keys(uniforms);\n        for (var i = 0; i < keys.length; i++) {\n            var key = keys[i];\n            var uni = uniforms[key];\n            this.setUniform(uni.location, uni.value);\n        }\n    };\n    Renderer.prototype.setUniform = function (location, value) {\n        if (value == null)\n            return;\n        var type;\n        var isMat = false;\n        var input;\n        input = value;\n        if (typeof (value) == 'number') {\n            type = 'uniform1f';\n        }\n        else if ('isVec2' in value) {\n            type = 'uniform2fv';\n        }\n        else if ('isVec3' in value) {\n            type = 'uniform3fv';\n        }\n        else if ('isMat4' in value) {\n            type = 'uniformMatrix4fv';\n            input = value.element;\n            isMat = true;\n        }\n        else if ('isTexture' in value) {\n            if (value.webglTex == null) {\n                var texInfo = this.createTexture(value);\n                value.webglTex = texInfo.texture;\n                value.unitID = texInfo.unitID;\n            }\n            this._gl.activeTexture(this._gl.TEXTURE0 + value.unitID);\n            this._gl.bindTexture(this._gl.TEXTURE_2D, value.webglTex);\n            input = value.unitID;\n            type = 'uniform1i';\n        }\n        if (type) {\n            if (isMat) {\n                this._gl[type](location, false, input);\n            }\n            else {\n                this._gl[type](location, input);\n            }\n        }\n    };\n    Renderer.prototype.createTexture = function (texture) {\n        var tex = this._gl.createTexture();\n        this._gl.bindTexture(this._gl.TEXTURE_2D, tex);\n        this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._gl.RGBA, this._gl.UNSIGNED_BYTE, texture.image);\n        this._gl.generateMipmap(this._gl.TEXTURE_2D);\n        this._gl.bindTexture(this._gl.TEXTURE_2D, null);\n        return { texture: tex, unitID: this.textureCnt++ };\n    };\n    Renderer.prototype.renderObject = function (obj, camera) {\n        var mat = obj.material;\n        var geo = obj.geometry;\n        obj.updateMatrix();\n        obj.modelViewMatrix.copy(camera.modelMatrixInverse.clone().multiply(obj.modelMatrix));\n        obj.IndividualUniforms.projectionMatrix.value = camera.projectionMatrix;\n        if (!obj.program) {\n            this.createProgram(obj);\n            this.createUniforms(obj.program, mat.uniforms);\n            this.createUniforms(obj.program, obj.IndividualUniforms);\n            this.createAttributes(obj);\n        }\n        if (mat.side == _Constants__WEBPACK_IMPORTED_MODULE_0__[\"SideDouble\"]) {\n            this._gl.disable(this._gl.CULL_FACE);\n        }\n        else if (mat.side == _Constants__WEBPACK_IMPORTED_MODULE_0__[\"SideFront\"]) {\n            this._gl.frontFace(this._gl.CCW);\n            this._gl.enable(this._gl.CULL_FACE);\n        }\n        else if (mat.side == _Constants__WEBPACK_IMPORTED_MODULE_0__[\"SideBack\"]) {\n            this._gl.frontFace(this._gl.CW);\n            this._gl.enable(this._gl.CULL_FACE);\n        }\n        else {\n        }\n        this._gl.useProgram(obj.program);\n        this.applyUniforms(mat.uniforms);\n        this.applyUniforms(obj.IndividualUniforms);\n        this.setAttributes(geo);\n        if (obj.isMesh) {\n            this._gl.drawElements(this._gl.TRIANGLES, geo.attributes.index.vertices.length, this._gl.UNSIGNED_SHORT, 0);\n        }\n        else if (obj.isPoints) {\n            this._gl.drawArrays(this._gl.POINTS, 0, geo.attributes.position.vertices.length / 3);\n        }\n    };\n    Renderer.prototype.render = function (scene, camera) {\n        camera.updateMatrix();\n        this._gl.clear(this._gl.COLOR_BUFFER_BIT);\n        for (var i = 0; i < scene.children.length; i++) {\n            var obj = scene.children[i];\n            if (obj.isRenderingObject) {\n                this.renderObject(obj, camera);\n            }\n        }\n        this._gl.flush();\n    };\n    return Renderer;\n}());\n\n\n\n//# sourceURL=webpack:///./src/renderers/Renderer.ts?");

/***/ })

/******/ });