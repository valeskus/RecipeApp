"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortOptionsDto = void 0;
const models_1 = require("../models");
const sort_option_dto_1 = require("./sort-option.dto");
class SortOptions extends Array {
    constructor({ appliedSort }) {
        super();
        Object.values(models_1.SortOptions).forEach((value, index) => {
            this[index] = new sort_option_dto_1.SortOptionDto({
                value,
                isActive: value === appliedSort
            });
        });
    }
}
exports.SortOptionsDto = SortOptions;
//# sourceMappingURL=sort-options.dto.js.map