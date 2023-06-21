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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class Filter {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        examples: ['lte20', 'Breakfast and Brunch|Comfort Food', '1'],
        description: 'Value of filter',
        type: String,
        required: true
    }),
    __metadata("design:type", Object)
], Filter.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10,
        description: 'Number of recipes applicable to this filter',
        required: true
    }),
    __metadata("design:type", Number)
], Filter.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'Indicator whether the filter is applied to the recipes list',
        required: true
    }),
    __metadata("design:type", Boolean)
], Filter.prototype, "isActive", void 0);
exports.FilterDto = Filter;
//# sourceMappingURL=filter.dto.js.map