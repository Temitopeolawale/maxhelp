"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./routes/user"));
const unit_1 = __importDefault(require("./routes/unit"));
const product_1 = __importDefault(require("./routes/product"));
const inventory_1 = __importDefault(require("./routes/inventory"));
const sales_1 = __importDefault(require("./routes/sales"));
const feedback_1 = __importDefault(require("./routes/feedback"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
}));
const DB_URL = process.env.DB_URL;
console.log(DB_URL);
mongoose_1.default.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
});
const conn = mongoose_1.default.connection;
conn.on("open", () => {
    console.log("Connected to MongoDB");
});
conn.on("error", (err) => {
    console.error(err);
});
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/user", user_1.default);
app.use("/unit", unit_1.default);
app.use("/product", product_1.default);
app.use("/inventory", inventory_1.default);
app.use("/sales", sales_1.default);
app.use("/feedback", feedback_1.default);
app.listen(port, () => {
    console.log("Server is running on port 3000");
});
