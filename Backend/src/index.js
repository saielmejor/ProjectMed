"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 7000;
app.listen(PORT, () => {
    console.log("Server started on localhost:8000 ");
    console.log('You are connected to the  world ');
});
