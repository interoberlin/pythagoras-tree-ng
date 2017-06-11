webpackJsonp([1,4],{

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "md-toolbar {\n  background-color: transparent !important; }\n\n.toolbar-menu-button {\n  background-color: transparent !important; }\n\n.sidenav {\n  background-color: white;\n  height: 100%;\n  padding: 10px; }\n\nmd-input-container {\n  width: 100%; }\n\n.full-width {\n  clear: both; }\n\n.sidenav-close-button {\n  background-color: transparent !important;\n  float: right; }\n\napp-pythagoras {\n  height: 90%;\n  width: 90%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes offset {\n  to {\n    stroke-dashoffset: 0; } }\n\n@keyframes offset {\n  to {\n    stroke-dashoffset: 0; } }\n\n.line {\n  stroke-dasharray: 400;\n  stroke-dashoffset: 400;\n  -webkit-animation: offset 8s linear forwards;\n          animation: offset 8s linear forwards; }\n\n.line-1 {\n  stroke-dasharray: 800;\n  stroke-dashoffset: 800;\n  -webkit-animation: offset 10s linear forwards;\n          animation: offset 10s linear forwards;\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s; }\n\n.line-2 {\n  stroke-dasharray: 800;\n  stroke-dashoffset: 800;\n  -webkit-animation: offset 10s linear forwards;\n          animation: offset 10s linear forwards;\n  -webkit-animation-delay: 2.4s;\n          animation-delay: 2.4s; }\n\n.line-3 {\n  stroke-dasharray: 800;\n  stroke-dashoffset: 800;\n  -webkit-animation: offset 10s linear forwards;\n          animation: offset 10s linear forwards;\n  -webkit-animation-delay: 3.6s;\n          animation-delay: 3.6s; }\n\n.line-4 {\n  stroke-dasharray: 800;\n  stroke-dashoffset: 800;\n  -webkit-animation: offset 10s linear forwards;\n          animation: offset 10s linear forwards;\n  -webkit-animation-delay: 4.8s;\n          animation-delay: 4.8s; }\n\n.line-5 {\n  stroke-dasharray: 800;\n  stroke-dashoffset: 800;\n  -webkit-animation: offset 10s linear forwards;\n          animation: offset 10s linear forwards;\n  -webkit-animation-delay: 6s;\n          animation-delay: 6s; }\n\n.line-6 {\n  stroke-dasharray: 800;\n  stroke-dashoffset: 800;\n  -webkit-animation: offset 10s linear forwards;\n          animation: offset 10s linear forwards;\n  -webkit-animation-delay: 7.2s;\n          animation-delay: 7.2s; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container class=\"container\" fullscreen>\n  <md-sidenav #sidenav class=\"sidenav\" disableClose=\"false\" opened=\"true\">\n    <form>\n      <div>\n        <button md-button class=\"sidenav-close-button\" (click)=\"sidenav.close()\"><img\n          src=\"assets/ic_close_black_24px.svg\"></button>\n      </div>\n      <table class=\"full-width\" cellspacing=\"0\">\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"dim\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"dim\" id=\"dim\" placeholder=\"Size\">\n            </md-input-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"angleDeg\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"angle\" id=\"angle\" placeholder=\"Angle\">\n            </md-input-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"iterations\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"iterations\" id=\"iterations\" placeholder=\"Iterations\">\n            </md-input-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"strokeWidth\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"strokeWidth\" id=\"strokeWidth\" placeholder=\"Stroke Width\">\n            </md-input-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"canvasHeight\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"canvasHeight\" id=\"canvasHeight\" placeholder=\"Canvas Height\">\n            </md-input-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"canvasWidth\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"canvasWidth\" id=\"canvasWidth\" placeholder=\"Canvas Width\">\n            </md-input-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"morphX\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"morphX\" id=\"morphX\" placeholder=\"Morph X\">\n            </md-input-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <md-input-container>\n              <input mdInput [(ngModel)]=\"morphY\" (ngModelChange)=\"valueChange($event)\" type=\"number\"\n                     class=\"form-control\" name=\"morphY\" id=\"morphY\" placeholder=\"Morph Y\">\n            </md-input-container>\n          </td>\n        </tr>\n      </table>\n      <md-slider [value]=\"offsetXSlide\"></md-slider>\n    </form>\n  </md-sidenav>\n\n  <div class=\"content\">\n    <md-toolbar>\n      <button md-button class=\"toolbar-menu-button\" (click)=\"sidenav.open()\"><img\n        src=\"assets/ic_menu_black_24px.svg\"></button>\n    </md-toolbar>\n    <app-pythagoras class=\"canvas\" [svgHeight]=\"canvasHeight\" [svgWidth]=\"canvasWidth\"\n                    [iteration]=\"iterations\" [angleRad]=\"angleRad\"\n                    [strokeWidth]=\"strokeWidth\" [llCorner]=\"llCorner\" [lrCorner]=\"lrCorner\" [morphX]=\"morphX\"\n                    [morphY]=\"morphY\"></app-pythagoras>\n  </div>\n\n</md-sidenav-container>\n"

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<!--<svg [attr.height]=\"svgHeight\" [attr.width]=\"svgWidth\">-->\n<svg [attr.height]=\"svgHeight\" [attr.width]=\"svgWidth\">\n  <!-- <rect [attr.height]=\"svgHeight\" [attr.width]=\"svgWidth\" [attr.fill]=\"svgFill\"/> -->\n\n  <line class=\"line-1\" [attr.x1]=\"llCorner.x\" [attr.y1]=\"llCorner.y\"\n        [attr.x2]=\"ulCorner.x\" [attr.y2]=\"ulCorner.y\"\n        [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n  <line class=\"line-2\" [attr.x1]=\"ulCorner.x\" [attr.y1]=\"ulCorner.y\"\n        [attr.x2]=\"urCorner.x\" [attr.y2]=\"urCorner.y\"\n        [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n  <line class=\"line-3\" [attr.x1]=\"urCorner.x\" [attr.y1]=\"urCorner.y\"\n        [attr.x2]=\"lrCorner.x\" [attr.y2]=\"lrCorner.y\"\n        [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n  <line [attr.x1]=\"lrCorner.x\" [attr.y1]=\"lrCorner.y\"\n        [attr.x2]=\"llCorner.x\" [attr.y2]=\"llCorner.y\"\n        [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n  <line class=\"line-4\" [attr.x1]=\"ulCorner.x\" [attr.y1]=\"ulCorner.y\"\n        [attr.x2]=\"topCorner.x\" [attr.y2]=\"topCorner.y\"\n        [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n  <line class=\"line-5\" [attr.x1]=\"topCorner.x\" [attr.y1]=\"topCorner.y\"\n        [attr.x2]=\"urCorner.x\" [attr.y2]=\"urCorner.y\"\n        [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n\n  <!--\n  <polygon class=\"line\" [attr.points]=\"pointsRect\" [attr.fill]=\"fill\"\n           [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n  <polygon class=\"line\" [attr.points]=\"pointsTriangle\" [attr.fill]=\"fill\"\n           [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n   -->\n  <!--\n  <line class=\"line\" x1=\"1000\" y1=\"200\" x2=\"1000\" y2=\"1000\" [attr.stroke]=\"stroke\" [attr\n.stroke-width]=\"strokeWidth\"></line>\n  -->\n</svg>\n\n<app-pythagoras class=\"canvas\" [iteration]=\"iteration-1\" [strokeWidth]=\"strokeWidth\" [svgHeight]=\"svgHeight\"\n                [svgWidth]=\"svgWidth\" [llCorner]=\"ulCorner\" [lrCorner]=\"topCorner\" [morphX]=\"morphX\"\n                [morphY]=\"morphY\" *ngIf=\"iteration > 1\"></app-pythagoras>\n\n<app-pythagoras class=\"canvas\" [iteration]=\"iteration-1\" [strokeWidth]=\"strokeWidth\" [svgHeight]=\"svgHeight\"\n                [svgWidth]=\"svgWidth\" [llCorner]=\"topCorner\" [lrCorner]=\"urCorner\" [morphX]=\"morphX\"\n                [morphY]=\"morphY\" *ngIf=\"iteration > 1\"></app-pythagoras>\n"

/***/ }),

/***/ 209:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(98);




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
        this.angleDeg = 0;
        this.iterations = 1;
        this.strokeWidth = 1;
        this.angleRad = 0;
        this.canvasHeight = 0;
        this.canvasWidth = 0;
        this.dim = 100;
        this.morphX = 0;
        this.morphY = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.canvasHeight = this.document.body.clientHeight * 0.9;
        this.canvasWidth = this.document.body.clientWidth * 0.9;
        // console.log(this.canvasHeight);
        // console.log(this.canvasWidth);
    };
    AppComponent.prototype.valueChange = function () {
        this.angleRad = this.angleDeg * Math.PI / 180;
        this.llCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]((this.canvasWidth - this.dim) / 2, this.canvasHeight);
        this.lrCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]((this.llCorner.x + Math.cos(this.angleRad) * this.dim), (this.llCorner.y - Math.sin(this.angleRad) * this.dim));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(154),
        styles: [__webpack_require__(152)]
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
            __WEBPACK_IMPORTED_MODULE_6__components_pythagoras_pythagoras_component__["a" /* PythagorasComponent */]
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



var PythagorasComponent = (function () {
    function PythagorasComponent(document) {
        this.document = document;
        this.iteration = 0;
        this.angleRad = 0;
        this.dim = 100;
        this.fill = 'transparent';
        this.stroke = 'black';
        this.strokeWidth = 1;
        this.morphX = 0;
        this.morphY = 0;
        this.pointsRect = '';
        this.pointsTriangle = '';
        // console.log(`iteration: ${this.iteration}`);
        // console.log(`angle: ${this.angleRad}`);
    }
    PythagorasComponent.prototype.ngOnChanges = function (changes) {
        console.log('PythagorasComponent onChanges');
        // console.log(`ngOnChanges ${this.iteration}`);
        // console.log(`llCorner: ${JSON.stringify(this.llCorner)}`);
        // console.log(`lrCorner: ${JSON.stringify(this.lrCorner)}`);
        if (this.llCorner == null || this.lrCorner == null) {
            console.log('foo');
            var canvasHeight = this.document.body.clientHeight * 0.9;
            var canvasWidth = this.document.body.clientWidth * 0.9;
            this.llCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]((canvasWidth - this.dim) / 2, canvasHeight);
            this.lrCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]((this.llCorner.x + Math.cos(this.angleRad) * this.dim), (this.llCorner.y - Math.sin(this.angleRad) * this.dim));
        }
        var angle = Math.atan2((this.lrCorner.y - this.llCorner.y), (this.lrCorner.x - this.llCorner.x));
        if (angle < 0) {
            angle += 2 * Math.PI;
        }
        var sin = Math.sin(angle);
        var cos = Math.cos(angle);
        var dim = Math.sqrt(Math.pow(this.lrCorner.x - this.llCorner.x, 2) + Math.pow(this.lrCorner.y - this.llCorner.y, 2));
        // console.log(`angle: ${angle}`);
        // console.log(`sin(angle): ${Math.sin(angle)}`);
        // console.log(`cos(angle): ${Math.cos(angle)}`);
        // console.log(`dim: ${dim}`);
        this.ulCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */](this.llCorner.x + (sin * dim), this.llCorner.y - (cos * dim));
        this.urCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */](this.lrCorner.x + (sin * dim), this.lrCorner.y - (cos * dim));
        var uulCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */](this.ulCorner.x + (sin * dim), this.ulCorner.y - (cos * dim));
        // const uurCorner = new Point(this.urCorner.x + (sin * dim), this.urCorner.y - (cos * dim));
        this.topCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */](this.ulCorner.x + (this.urCorner.x - this.ulCorner.x + sin * (dim + this.morphX)) / 2, this.ulCorner.y - (this.ulCorner.y - uulCorner.y - sin * (dim + this.morphY)) / 2);
        // console.log(`ulCorner: ${JSON.stringify(this.ulCorner)}`);
        // console.log(`urCorner: ${JSON.stringify(this.urCorner)}`);
        // console.log(`uulCorner: ${JSON.stringify(uulCorner)}`);
        // console.log(`uurCorner: ${JSON.stringify(uurCorner)}`);
        // console.log(`topCorner: ${JSON.stringify(this.topCorner)}`);
        this.pointsRect = this.llCorner.x + "," + this.llCorner.y + " " + this.ulCorner.x + "," + this.ulCorner.y + " " + this.urCorner.x + "," + this.urCorner.y + " " + this.lrCorner.x + "," + this.lrCorner.y;
        this.pointsTriangle = this.ulCorner.x + "," + this.ulCorner.y + " " + this.urCorner.x + "," + this.urCorner.y + " " + this.topCorner.x + "," + this.topCorner.y;
        // console.log(`pointsRect: ${this.pointsRect}`);
        // console.log(`pointsTriangle: ${this.pointsTriangle}`);
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
], PythagorasComponent.prototype, "angleRad", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "dim", void 0);
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
], PythagorasComponent.prototype, "fill", void 0);
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
], PythagorasComponent.prototype, "llCorner", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "lrCorner", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "ulCorner", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "urCorner", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "topCorner", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "morphX", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "morphY", void 0);
PythagorasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-pythagoras',
        template: __webpack_require__(155),
        styles: [__webpack_require__(153)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object])
], PythagorasComponent);

//# sourceMappingURL=pythagoras.component.js.map

/***/ }),

/***/ 98:
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

},[209]);
//# sourceMappingURL=main.bundle.js.map