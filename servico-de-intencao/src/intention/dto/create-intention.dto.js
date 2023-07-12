"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIntentionDto = exports.Products = exports.Intention = exports.Address = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var Address = exports.Address = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _uf_decorators;
    var _uf_initializers = [];
    var _country_decorators;
    var _country_initializers = [];
    return _a = /** @class */ (function () {
            function Address() {
                this.city = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _city_initializers, void 0));
                this.uf = __runInitializers(this, _uf_initializers, void 0);
                this.country = __runInitializers(this, _country_initializers, void 0);
            }
            return Address;
        }()),
        (function () {
            _city_decorators = [(0, swagger_1.ApiProperty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.Length)(1, 100)];
            _uf_decorators = [(0, swagger_1.ApiProperty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.Length)(100)];
            _country_decorators = [(0, swagger_1.ApiProperty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.Length)(9)];
            __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } } }, _city_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _uf_decorators, { kind: "field", name: "uf", static: false, private: false, access: { has: function (obj) { return "uf" in obj; }, get: function (obj) { return obj.uf; }, set: function (obj, value) { obj.uf = value; } } }, _uf_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _country_decorators, { kind: "field", name: "country", static: false, private: false, access: { has: function (obj) { return "country" in obj; }, get: function (obj) { return obj.country; }, set: function (obj, value) { obj.country = value; } } }, _country_initializers, _instanceExtraInitializers);
        })(),
        _a;
}();
var Intention = exports.Intention = function () {
    var _a;
    var _instanceExtraInitializers_1 = [];
    var _name_decorators;
    var _name_initializers = [];
    return _a = /** @class */ (function () {
            function Intention() {
                this.name = (__runInitializers(this, _instanceExtraInitializers_1), __runInitializers(this, _name_initializers, void 0));
            }
            return Intention;
        }()),
        (function () {
            _name_decorators = [(0, swagger_1.ApiProperty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.Length)(1, 100)];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } } }, _name_initializers, _instanceExtraInitializers_1);
        })(),
        _a;
}();
var Products = exports.Products = function () {
    var _a;
    var _instanceExtraInitializers_2 = [];
    var _id_decorators;
    var _id_initializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _category_decorators;
    var _category_initializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _image_decorators;
    var _image_initializers = [];
    return _a = /** @class */ (function () {
            function Products() {
                this.id = (__runInitializers(this, _instanceExtraInitializers_2), __runInitializers(this, _id_initializers, void 0));
                this.title = __runInitializers(this, _title_initializers, void 0);
                this.price = __runInitializers(this, _price_initializers, void 0);
                this.category = __runInitializers(this, _category_initializers, void 0);
                this.description = __runInitializers(this, _description_initializers, void 0);
                this.image = __runInitializers(this, _image_initializers, void 0);
            }
            return Products;
        }()),
        (function () {
            _id_decorators = [(0, swagger_1.ApiProperty)(), (0, class_validator_1.IsNumber)(), (0, class_validator_1.IsNotEmpty)({
                    each: true,
                })];
            _title_decorators = [(0, swagger_1.ApiProperty)(), (0, class_validator_1.IsString)({
                    each: true,
                }), (0, class_validator_1.IsNotEmpty)({
                    each: true,
                }), (0, class_validator_1.Length)(1, 50, {
                    each: true,
                })];
            _price_decorators = [(0, class_validator_1.IsNotEmpty)({
                    each: true,
                }), (0, swagger_1.ApiProperty)(), (0, class_validator_1.IsNumber)()];
            _category_decorators = [(0, swagger_1.ApiProperty)(), (0, class_validator_1.IsString)({
                    each: true,
                }), (0, class_validator_1.Length)(1, 50, {
                    each: true,
                }), (0, class_validator_1.IsNotEmpty)({
                    each: true,
                })];
            _description_decorators = [(0, swagger_1.ApiProperty)(), (0, class_validator_1.IsString)({
                    each: true,
                }), (0, class_validator_1.Length)(1, 255, {
                    each: true,
                })];
            _image_decorators = [(0, class_validator_1.IsNotEmpty)({
                    each: true,
                }), (0, swagger_1.ApiProperty)(), (0, class_validator_1.IsString)({
                    each: true,
                })];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers_2);
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } } }, _title_initializers, _instanceExtraInitializers_2);
            __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } } }, _price_initializers, _instanceExtraInitializers_2);
            __esDecorate(null, null, _category_decorators, { kind: "field", name: "category", static: false, private: false, access: { has: function (obj) { return "category" in obj; }, get: function (obj) { return obj.category; }, set: function (obj, value) { obj.category = value; } } }, _category_initializers, _instanceExtraInitializers_2);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } } }, _description_initializers, _instanceExtraInitializers_2);
            __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: function (obj) { return "image" in obj; }, get: function (obj) { return obj.image; }, set: function (obj, value) { obj.image = value; } } }, _image_initializers, _instanceExtraInitializers_2);
        })(),
        _a;
}();
var CreateIntentionDto = exports.CreateIntentionDto = function () {
    var _a;
    var _instanceExtraInitializers_3 = [];
    var _name_decorators;
    var _name_initializers = [];
    var _address_decorators;
    var _address_initializers = [];
    var _intention_decorators;
    var _intention_initializers = [];
    var _products_decorators;
    var _products_initializers = [];
    return _a = /** @class */ (function () {
            function CreateIntentionDto() {
                this.name = (__runInitializers(this, _instanceExtraInitializers_3), __runInitializers(this, _name_initializers, void 0));
                this.address = __runInitializers(this, _address_initializers, void 0);
                this.intention = __runInitializers(this, _intention_initializers, void 0);
                this.products = __runInitializers(this, _products_initializers, void 0);
            }
            return CreateIntentionDto;
        }()),
        (function () {
            _name_decorators = [(0, swagger_1.ApiProperty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.Length)(3, 100)];
            _address_decorators = [(0, swagger_1.ApiProperty)({ type: Address }), (0, class_validator_1.ValidateNested)({ each: true })];
            _intention_decorators = [(0, swagger_1.ApiProperty)({ type: Intention }), (0, class_validator_1.ValidateNested)({ each: true })];
            _products_decorators = [(0, swagger_1.ApiProperty)({ type: [Products] }), (0, class_validator_1.IsArray)(), (0, class_validator_1.ValidateNested)({ each: true })];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } } }, _name_initializers, _instanceExtraInitializers_3);
            __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: function (obj) { return "address" in obj; }, get: function (obj) { return obj.address; }, set: function (obj, value) { obj.address = value; } } }, _address_initializers, _instanceExtraInitializers_3);
            __esDecorate(null, null, _intention_decorators, { kind: "field", name: "intention", static: false, private: false, access: { has: function (obj) { return "intention" in obj; }, get: function (obj) { return obj.intention; }, set: function (obj, value) { obj.intention = value; } } }, _intention_initializers, _instanceExtraInitializers_3);
            __esDecorate(null, null, _products_decorators, { kind: "field", name: "products", static: false, private: false, access: { has: function (obj) { return "products" in obj; }, get: function (obj) { return obj.products; }, set: function (obj, value) { obj.products = value; } } }, _products_initializers, _instanceExtraInitializers_3);
        })(),
        _a;
}();
