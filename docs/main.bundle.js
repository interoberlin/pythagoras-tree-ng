webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

module.exports = "<app-pythagoras class=\"canvas\" [iteration]=\"iterations\" [svgHeight]=\"svgHeight\" [svgWidth]=\"svgWidth\"\n                [llCorner]=\"llCorner\" [lrCorner]=\"lrCorner\" [angleRad]=\"angleRad\"></app-pythagoras>\n<form>\n  <div class=\"form-group\">\n    <label for=\"angle\">Angle</label>\n    <input [(ngModel)]=\"angleDeg\" (ngModelChange)=\"valuechange($event)\" type=\"number\" class=\"form-control\" name=\"angle\"\n           id=\"angle\" required>\n    <label for=\"iterations\">Iterations</label>\n    <input [(ngModel)]=\"iterations\" (ngModelChange)=\"valuechange($event)\" type=\"number\" class=\"form-control\"\n           name=\"iterations\" id=\"iterations\" required>\n  </div>\n</form>\n"

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<svg [attr.height]=\"svgHeight\" [attr.width]=\"svgWidth\">\n  <!-- <rect [attr.height]=\"svgHeight\" [attr.width]=\"svgWidth\" [attr.fill]=\"svgFill\"/> -->\n  <polygon [attr.points]=\"pointsRect\" [attr.fill]=\"fill\"\n           [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n  <polygon [attr.points]=\"pointsTriangle\" [attr.fill]=\"fill\"\n           [attr.stroke]=\"stroke\" [attr.stroke-width]=\"strokeWidth\"/>\n</svg>\n\n<app-pythagoras class=\"canvas\" [iteration]=\"iteration-1\" [svgHeight]=\"svgHeight\" [svgWidth]=\"svgWidth\"\n                [llCorner]=\"ulCorner\"\n                [lrCorner]=\"topCorner\" *ngIf=\"iteration > 0\"></app-pythagoras>\n\n<app-pythagoras class=\"canvas\" [iteration]=\"iteration-1\" [svgHeight]=\"svgHeight\" [svgWidth]=\"svgWidth\"\n                [llCorner]=\"topCorner\"\n                [lrCorner]=\"urCorner\" *ngIf=\"iteration > 0\"></app-pythagoras>\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
var Point = (function () {
    function Point(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    return Point;
}());

//# sourceMappingURL=Point.js.map

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 74;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(85);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Point__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.angleDeg = 0;
        this.iterations = 0;
        this.angleRad = 0;
        this.svgHeight = 600;
        this.svgWidth = 1000;
        this.dim = 100;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.angleRad = this.angleDeg * Math.PI / 180;
        this.llCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]((this.svgWidth - this.dim) / 2, this.svgHeight);
        this.lrCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]((this.llCorner.x + Math.cos(this.angleRad) * this.dim), (this.llCorner.y - Math.sin(this.angleRad) * this.dim));
    };
    AppComponent.prototype.valuechange = function () {
        this.angleRad = this.angleDeg * Math.PI / 180;
        this.llCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]((this.svgWidth - this.dim) / 2, this.svgHeight);
        this.lrCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */]((this.llCorner.x + Math.cos(this.angleRad) * this.dim), (this.llCorner.y - Math.sin(this.angleRad) * this.dim));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(141),
        styles: [__webpack_require__(139)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pythagoras_pythagoras_component__ = __webpack_require__(84);
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
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_pythagoras_pythagoras_component__["a" /* PythagorasComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Point__ = __webpack_require__(52);
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


var PythagorasComponent = (function () {
    function PythagorasComponent() {
        this.iteration = 0;
        this.angleRad = 0;
        this.fill = 'transparent';
        this.stroke = 'black';
        this.strokeWidth = 1;
        this.pointsRect = '';
        this.pointsTriangle = '';
    }
    PythagorasComponent.prototype.ngOnChanges = function (changes) {
        // console.log(`ngOnChanges ${this.iteration}`);
        // console.log(`llCorner: ${JSON.stringify(this.llCorner)}`);
        // console.log(`lrCorner: ${JSON.stringify(this.lrCorner)}`);
        // let angle = Math.atan((this.lrCorner.y - this.llCorner.y) / (this.lrCorner.x - this.llCorner.x));
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
        this.topCorner = new __WEBPACK_IMPORTED_MODULE_1__model_Point__["a" /* Point */](this.ulCorner.x + (this.urCorner.x - this.ulCorner.x + sin * dim) / 2, this.ulCorner.y - (this.ulCorner.y - uulCorner.y - sin * dim) / 2);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "iteration", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "angleRad", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "svgHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "svgWidth", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "fill", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "stroke", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "strokeWidth", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "llCorner", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "lrCorner", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "ulCorner", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "urCorner", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PythagorasComponent.prototype, "topCorner", void 0);
PythagorasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-pythagoras',
        template: __webpack_require__(142),
        styles: [__webpack_require__(140)]
    }),
    __metadata("design:paramtypes", [])
], PythagorasComponent);

//# sourceMappingURL=pythagoras.component.js.map

/***/ }),

/***/ 85:
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

},[167]);
//# sourceMappingURL=main.bundle.js.map