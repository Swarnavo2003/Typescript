"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./routes/todo"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = 8080;
app.use(body_parser_1.default.json());
app.use("/todos", todo_1.default);
// middleware to handle error any other request
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.get("/", (_, res) => {
    res.send("Hello World");
});
app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
});
