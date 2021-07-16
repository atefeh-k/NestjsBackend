"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
const yargs_1 = require("yargs");
exports.ProductSchema = new mongoose.Schema({
    title: { type: yargs_1.string, required: true },
    description: { type: yargs_1.string, required: false },
    price: { type: yargs_1.string, required: true },
    weight: { type: yargs_1.string, require: false }
});
//# sourceMappingURL=product.model.js.map