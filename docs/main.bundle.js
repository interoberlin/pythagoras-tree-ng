webpackJsonp([1,4],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "md-toolbar {\n  background-color: transparent !important; }\n\n.toolbar-menu-button {\n  background-color: transparent !important; }\n\n.sidenav {\n  background-color: white;\n  height: 100%;\n  padding: 10px; }\n\nmd-input-container {\n  width: 100%; }\n\n.full-width {\n  clear: both; }\n\n.sidenav-close-button {\n  background-color: transparent !important;\n  float: right; }\n\napp-pythagoras {\n  height: 90%;\n  width: 90%; }\n\n.container {\n  position: relative; }\n\n.powered-by {\n  color: #9E9E9E;\n  bottom: 0;\n  right: 0;\n  margin: 20px;\n  position: absolute; }\n  .powered-by a {\n    color: #424242;\n    text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes offset {\n  to {\n    stroke-dashoffset: 0; } }\n\n@keyframes offset {\n  to {\n    stroke-dashoffset: 0; } }\n\n.line {\n  stroke-dasharray: 400;\n  stroke-dashoffset: 400;\n  -webkit-animation: offset 8s linear forwards;\n          animation: offset 8s linear forwards; }\n\n.line-1 {\n  stroke-dasharray: 800;\n  stroke-dashoffset: 800;\n  -webkit-animation: offset 10s linear forwards;\n          animation: offset 10s linear forwards;\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s; }\n\n.line-2 {\n  stroke-dasharray: 800;\n  stroke-dashoffset: 800;\n  -webkit-animation: offset 10s linear forwards;\n          animation: offset 10s linear forwards;\n  -webkit-animation-delay: 2.4s;\n          animation-delay: 2.4s; }\n\n.line-3 {\n  stroke-dasharray: 800;\n  stroke-dashoffset: 800;\n  -webkit-animation: offset 10s linear forwards;\n          animation: offset 10s linear forwards;\n  -webkit-animation-delay: 3.6s;\n          animation-delay: 3.6s; }\n\n.line-4 {\n  stroke-dasharray: 800;\n  stroke-dashoffset: 800;\n  -webkit-animation: offset 10s linear forwards;\n          animation: offset 10s linear forwards;\n  -webkit-animation-delay: 4.8s;\n          animation-delay: 4.8s; }\n\n.line-5 {\n  stroke-dasharray: 800;\n  stroke-dashoffset: 800;\n  -webkit-animation: offset 10s linear forwards;\n          animation: offset 10s linear forwards;\n  -webkit-animation-delay: 6s;\n          animation-delay: 6s; }\n\n.line-6 {\n  stroke-dasharray: 800;\n  stroke-dashoffset: 800;\n  -webkit-animation: offset 10s linear forwards;\n          animation: offset 10s linear forwards;\n  -webkit-animation-delay: 7.2s;\n          animation-delay: 7.2s; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container class=\"container\" fullscreen>\n  <md-sidenav #sidenav class=\"sidenav\" disableClose=\"false\" opened=\"false\">\n    <form>\n      <div>\n        <button md-button class=\"sidenav-close-button\" (click)=\"sidenav.close()\"><img\n          src=\"assets/ic_close_black_24px.svg\"></button>\n      </div>\n      <table class=\"full-width\" cellspacing=\"0\">\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"dim\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"dim\" id=\"dim\" placeholder=\"Size\">\n            </md-input-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"angleDeg\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"angleDeg\" id=\"angleDeg\" placeholder=\"Angle\">\n            </md-input-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"rotationDeg\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"rotationDeg\" id=\"rotationDeg\" placeholder=\"Rotation\">\n            </md-input-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"iterations\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"iterations\" id=\"iterations\" placeholder=\"Iterations\">\n            </md-input-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"strokeWidth\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"strokeWidth\" id=\"strokeWidth\" placeholder=\"Stroke Width\">\n            </md-input-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"svgHeight\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"canvasHeight\" id=\"canvasHeight\" placeholder=\"Canvas Height\">\n            </md-input-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"svgWidth\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"canvasWidth\" id=\"canvasWidth\" placeholder=\"Canvas Width\">\n            </md-input-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"morphX\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"morphX\" id=\"morphX\" placeholder=\"Morph X\">\n            </md-input-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"morphY\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"morphY\" id=\"morphY\" placeholder=\"Morph Y\">\n            </md-input-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"timer\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"timer\" id=\"timer\" placeholder=\"Timer\">\n            </md-input-container>\n          </td>\n        </tr>\n      </table>\n      <md-slider [value]=\"offsetXSlide\"></md-slider>\n    </form>\n  </md-sidenav>\n\n  <div class=\"content\" appMouseWheel (mouseWheelUp)=\"mouseWheelUp(event)\"\n       (mouseWheelDown)=\"mouseWheelDown(event)\">\n    <md-toolbar>\n      <button md-button class=\"toolbar-menu-button\" (click)=\"sidenav.open()\"><img\n        src=\"assets/ic_menu_black_24px.svg\"></button>\n    </md-toolbar>\n\n    <app-pythagoras class=\"canvas\"\n                    [angleDeg]=\"angleDeg\"\n                    [iteration]=\"iterations\"\n                    [stroke]=\"stroke\"\n                    [strokeWidth]=\"strokeWidth\"\n                    [fill]=\"fill\"\n                    [svgHeight]=\"svgHeight\"\n                    [svgWidth]=\"svgWidth\"\n                    [llCorner]=\"llCorner\"\n                    [lrCorner]=\"lrCorner\"\n                    [morphX]=\"morphX\"\n                    [morphY]=\"morphY\"></app-pythagoras>\n  </div>\n\n  <div class=\"powered-by\">\n    powered by <a href=\"https://interoberlin.de\" target=\"_blank\">Interoberlin</a> | source code on <a\n    href=\"https://github.com/interoberlin/pythagoras-tree-ng\" target=\"_blank\">Github</a>\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<svg [attr.height]=\"svgHeight\" [attr.width]=\"svgWidth\">\n  <line class=\"line-1\" stroke-linecap=\"round\" [attr.x1]=\"llCorner.x\" [attr.y1]=\"llCorner.y\"\n        [attr.x2]=\"ulCorner.x\" [attr.y2]=\"ulCorner.y\"\n        [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n  <line class=\"line-2\" stroke-linecap=\"round\" [attr.x1]=\"ulCorner.x\" [attr.y1]=\"ulCorner.y\"\n        [attr.x2]=\"urCorner.x\" [attr.y2]=\"urCorner.y\"\n        [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n  <line class=\"line-3\" stroke-linecap=\"round\" [attr.x1]=\"urCorner.x\" [attr.y1]=\"urCorner.y\"\n        [attr.x2]=\"lrCorner.x\" [attr.y2]=\"lrCorner.y\"\n        [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n  <line class=\"line-4\" stroke-linecap=\"round\" [attr.x1]=\"lrCorner.x\" [attr.y1]=\"lrCorner.y\"\n        [attr.x2]=\"llCorner.x\" [attr.y2]=\"llCorner.y\"\n        [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n  <line class=\"line-5\" stroke-linecap=\"round\" [attr.x1]=\"ulCorner.x\" [attr.y1]=\"ulCorner.y\"\n        [attr.x2]=\"topCorner.x\" [attr.y2]=\"topCorner.y\"\n        [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n  <line class=\"line-6\" stroke-linecap=\"round\" [attr.x1]=\"topCorner.x\" [attr.y1]=\"topCorner.y\"\n        [attr.x2]=\"urCorner.x\" [attr.y2]=\"urCorner.y\"\n        [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n\n  <!-- Construction helpers -->\n  <!--\n  <circle [attr.cx]=\"fooCorner.x\" [attr.cy]=\"fooCorner.y\" r=\"5\" fill=\"red\" ></circle>\n  <circle [attr.cx]=\"barCorner.x\" [attr.cy]=\"barCorner.y\" r=\"5\" fill=\"blue\" ></circle>\n  <circle [attr.cx]=\"topCorner.x\" [attr.cy]=\"topCorner.y\" r=\"5\" fill=\"pink\" ></circle>\n  <line [attr.x1]=\"ulCorner.x\" [attr.y1]=\"ulCorner.y\"\n        [attr.x2]=\"fooCorner.x\" [attr.y2]=\"fooCorner.y\"\n        [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n  <line [attr.x1]=\"urCorner.x\" [attr.y1]=\"urCorner.y\"\n        [attr.x2]=\"barCorner.x\" [attr.y2]=\"barCorner.y\"\n        [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n  -->\n</svg>\n\n<app-pythagoras class=\"canvas\"\n                [angleDeg]=\"angleDeg\"\n                [iteration]=\"iteration-1\"\n                [stroke]=\"stroke\"\n                [strokeWidth]=\"strokeWidth\"\n                [fill]=\"fill\"\n                [svgHeight]=\"svgHeight\"\n                [svgWidth]=\"svgWidth\"\n                [llCorner]=\"ulCorner\"\n                [lrCorner]=\"topCorner\"\n                [morphX]=\"morphX\"\n                [morphY]=\"morphY\" *ngIf=\"iteration > 1\"></app-pythagoras>\n\n<app-pythagoras class=\"canvas\"\n                [angleDeg]=\"angleDeg\"\n                [iteration]=\"iteration-1\"\n                [stroke]=\"stroke\"\n                [strokeWidth]=\"strokeWidth\"\n                [fill]=\"fill\"\n                [svgHeight]=\"svgHeight\"\n                [svgWidth]=\"svgWidth\"\n                [llCorner]=\"topCorner\"\n                [lrCorner]=\"urCorner\"\n                [morphX]=\"morphX\"\n                [morphY]=\"morphY\" *ngIf=\"iteration > 1\"></app-pythagoras>\n"

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
var Point = (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    return Point;
}());

//# sourceMappingURL=Point.js.map

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 86;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(99);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Point__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rx__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AppComponent = (function () {
    function AppComponent(document) {
        this.document = document;
        this.angleDeg = this.getRandomInt(10, 80);
        this.angleRad = 0;
        this.rotationDeg = 0;
        this.rotationRad = 0;
        this.iterations = this.getRandomInt(3, 10);
        this.stroke = '#212121';
        this.strokeWidth = this.getRandomInt(1, 3);
        this.fill = 'transparent';
        this.svgHeight = 0;
        this.svgWidth = 0;
        this.dim = 100;
        this.morphX = 0;
        this.morphY = 0;
        this.timer = 25;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.svgHeight = this.document.body.clientHeight * 0.75;
        this.svgWidth = this.document.body.clientWidth * 0.95;
        this.llCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]((this.svgWidth - this.dim) / 2, this.svgHeight);
        this.lrCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]((this.llCorner.x + Math.cos(this.rotationRad) * this.dim), (this.llCorner.y - Math.sin(this.rotationRad) * this.dim));
        __WEBPACK_IMPORTED_MODULE_3_rx__["Observable"].timer(this.timer * 1000, this.timer * 1000)
            .subscribe(function () {
            _this.reset();
        });
        __WEBPACK_IMPORTED_MODULE_3_rx__["Observable"].timer((this.timer + 0.5) * 1000, this.timer * 1000)
            .subscribe(function () {
            _this.setRandomValues();
        });
    };
    AppComponent.prototype.reset = function () {
        this.angleDeg = 0;
        this.iterations = 0;
        this.strokeWidth = 0;
        this.valueChange();
    };
    AppComponent.prototype.setRandomValues = function () {
        this.angleDeg = this.getRandomInt(10, 80);
        this.iterations = this.getRandomInt(3, 10);
        this.strokeWidth = this.getRandomInt(1, 3);
        this.valueChange();
    };
    AppComponent.prototype.valueChange = function () {
        this.angleRad = this.angleDeg * Math.PI / 180;
        this.rotationRad = this.rotationDeg * Math.PI / 180;
        this.llCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]((this.svgWidth - this.dim) / 2, this.svgHeight);
        this.lrCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]((this.llCorner.x + Math.cos(this.rotationRad) * this.dim), (this.llCorner.y - Math.sin(this.rotationRad) * this.dim));
    };
    AppComponent.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    AppComponent.prototype.mouseWheelUp = function (event) {
        if (this.angleDeg < 80) {
            this.angleDeg = this.angleDeg + 4;
            this.valueChange();
        }
    };
    AppComponent.prototype.mouseWheelDown = function (event) {
        if (this.angleDeg > 10) {
            this.angleDeg = this.angleDeg - 4;
            this.valueChange();
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(156),
        styles: [__webpack_require__(153)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_pythagoras_pythagoras_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_mouse_wheel_directive__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_pythagoras_pythagoras_component__["a" /* PythagorasComponent */],
            __WEBPACK_IMPORTED_MODULE_8__directives_mouse_wheel_directive__["a" /* MouseWheelDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Point__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PythagorasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PythagorasComponent = PythagorasComponent_1 = (function () {
    function PythagorasComponent(document, ref) {
        this.document = document;
        this.ref = ref;
        // Parameters passed to next iteration
        this.iteration = 0;
        this.angleDeg = 45;
        this.stroke = 'black';
        this.strokeWidth = 1;
        this.fill = 'transparent';
        this.svgHeight = 600;
        this.svgWidth = 800;
        this.morphX = 0;
        this.morphY = 0;
        // Calculated values
        this.rotation = 0;
        this.angleRad = 0;
        this.angleRadOpposite = 180;
        this.dim = 0;
        this.ulCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]();
        this.urCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]();
        this.topCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]();
        this.fooCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]();
        this.barCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]();
    }
    PythagorasComponent.prototype.ngOnChanges = function (changes) {
        this.angleRad = this.angleDeg * Math.PI / 180;
        this.angleRadOpposite = (90 - this.angleDeg) * Math.PI / 180;
        this.dim = Math.sqrt(Math.pow(this.llCorner.x - this.lrCorner.x, 2) + Math.pow(this.llCorner.y - this.lrCorner.y, 2));
        var rotation = Math.atan2((this.lrCorner.y - this.llCorner.y), (this.lrCorner.x - this.llCorner.x));
        if (rotation < 0) {
            rotation += 2 * Math.PI;
        }
        var rotationSin = Math.sin(rotation);
        var rotationCos = Math.cos(rotation);
        var dim = Math.sqrt(Math.pow(this.lrCorner.x - this.llCorner.x, 2) + Math.pow(this.lrCorner.y - this.llCorner.y, 2));
        this.ulCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */](this.llCorner.x + (rotationSin * dim), this.llCorner.y - (rotationCos * dim));
        this.urCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */](this.lrCorner.x + (rotationSin * dim), this.lrCorner.y - (rotationCos * dim));
        this.fooCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */](this.ulCorner.x + (Math.sin(Math.PI / 2 - this.angleRad + rotation) * dim), this.ulCorner.y - (Math.cos(Math.PI / 2 - this.angleRad + rotation) * dim));
        this.barCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */](this.urCorner.x - (Math.sin(Math.PI / 2 - this.angleRadOpposite - rotation) * dim), this.urCorner.y - (Math.cos(Math.PI / 2 - this.angleRadOpposite - rotation) * dim));
        this.topCorner = PythagorasComponent_1.getIntersection(this.ulCorner, this.fooCorner, this.urCorner, this.barCorner);
        this.topCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */](this.topCorner.x + this.morphX, this.topCorner.y + this.morphY);
    };
    PythagorasComponent.getIntersection = function (a, b, c, d) {
        var det = (a.x - b.x) * (c.y - d.y) - (a.y - b.y) * (c.x - d.x);
        var l = a.x * b.y - a.y * b.x;
        var m = c.x * d.y - c.y * d.x;
        var ix = (l * (c.x - d.x) - m * (a.x - b.x)) / det;
        var iy = (l * (c.y - d.y) - m * (a.y - b.y)) / det;
        return new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */](ix, iy);
    };
    return PythagorasComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "iteration", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "angleDeg", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "stroke", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "strokeWidth", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "fill", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "svgHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "svgWidth", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "llCorner", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "lrCorner", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "morphX", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "morphY", void 0);
PythagorasComponent = PythagorasComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-pythagoras',
        template: __webpack_require__(157),
        styles: [__webpack_require__(154)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ChangeDetectorRef */]) === "function" && _a || Object])
], PythagorasComponent);

var PythagorasComponent_1, _a;
//# sourceMappingURL=pythagoras.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MouseWheelDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MouseWheelDirective = (function () {
    function MouseWheelDirective() {
        this.mouseWheelUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.mouseWheelDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    MouseWheelDirective.prototype.onMouseWheelChrome = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.onMouseWheelFirefox = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.onMouseWheelIE = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.mouseWheelFunc = function (event) {
        var event = window.event || event; // old IE support
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        if (delta > 0) {
            this.mouseWheelUp.emit(event);
        }
        else if (delta < 0) {
            this.mouseWheelDown.emit(event);
        }
        // for IE
        event.returnValue = false;
        // for Chrome and Firefox
        if (event.preventDefault) {
            event.preventDefault();
        }
    };
    return MouseWheelDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", Object)
], MouseWheelDirective.prototype, "mouseWheelUp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", Object)
], MouseWheelDirective.prototype, "mouseWheelDown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])('mousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MouseWheelDirective.prototype, "onMouseWheelChrome", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])('DOMMouseScroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MouseWheelDirective.prototype, "onMouseWheelFirefox", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])('onmousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MouseWheelDirective.prototype, "onMouseWheelIE", null);
MouseWheelDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Directive */])({
        selector: '[appMouseWheel]'
    })
], MouseWheelDirective);

//# sourceMappingURL=mouse-wheel.directive.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.bundle.js.map