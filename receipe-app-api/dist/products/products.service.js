"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const class_validator_1 = require("class-validator");
const schemas_1 = require("./schemas");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    findAll() {
        return this.productModel.find().exec();
    }
    findOneById(id) {
        if (!(0, class_validator_1.isMongoId)(id)) {
            return Promise.resolve(null);
        }
        return this.productModel.findOne({ _id: id }).exec();
    }
    findOneByTitle(title) {
        return this.productModel.findOne({ title }).exec();
    }
    createGetterNutritionByAmount(amount) {
        return (nutritionPer100) => {
            return Number(((nutritionPer100 / 100) * amount).toFixed(2));
        };
    }
    async create(createProductDto) {
        const found = await this.findOneByTitle(createProductDto.title);
        if (found) {
            throw new Error(`Product ${createProductDto.title} already exists`);
        }
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schemas_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map