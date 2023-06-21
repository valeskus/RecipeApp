"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalTime = exports.Calories = exports.Difficulty = exports.SortOptions = void 0;
var SortOptions;
(function (SortOptions) {
    SortOptions["RELEVANCE"] = "relevance";
    SortOptions["TIME_ASC"] = "time";
    SortOptions["ALPHABETICALLY_ASC"] = "alphabetically";
    SortOptions["ALPHABETICALLY_DESC"] = "-alphabetically";
    SortOptions["CALORIES_ASC"] = "calories";
    SortOptions["CALORIES_DESC"] = "-calories";
})(SortOptions = exports.SortOptions || (exports.SortOptions = {}));
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["hard"] = 2] = "hard";
    Difficulty[Difficulty["normal"] = 1] = "normal";
    Difficulty[Difficulty["easy"] = 0] = "easy";
})(Difficulty = exports.Difficulty || (exports.Difficulty = {}));
var Calories;
(function (Calories) {
    Calories["lte100"] = "lte100";
    Calories["lte250"] = "lte250";
    Calories["lte500"] = "lte500";
    Calories["lte750"] = "lte750";
    Calories["lte1000"] = "lte1000";
    Calories["gt1000"] = "gt1000";
})(Calories = exports.Calories || (exports.Calories = {}));
var TotalTime;
(function (TotalTime) {
    TotalTime["lte20"] = "lte20";
    TotalTime["lte30"] = "lte30";
    TotalTime["lte45"] = "lte45";
    TotalTime["lte60"] = "lte60";
    TotalTime["gt60"] = "gt60";
})(TotalTime = exports.TotalTime || (exports.TotalTime = {}));
//# sourceMappingURL=models.js.map