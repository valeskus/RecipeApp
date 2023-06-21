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
exports.Instruction = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Instruction = class Instruction {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Gather all your ingredients',
        description: 'Instruction text',
        required: true
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Instruction.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://picsum.photos/500/500',
        description: 'Image for instruction',
        required: false
    }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Number)
], Instruction.prototype, "image", void 0);
Instruction = __decorate([
    (0, mongoose_1.Schema)()
], Instruction);
exports.Instruction = Instruction;
//# sourceMappingURL=instruction.schema.js.map