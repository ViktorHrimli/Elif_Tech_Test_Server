"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const db_1 = require("./db");
const { PORT, URL_DB } = process.env;
db_1.mongoose.set("strictQuery", true);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    db_1.mongoose
        .connect(URL_DB)
        .then(() => {
        index_1.app.listen(PORT || 3001, () => {
            console.log("Server running. Use our API on port: 3000");
        });
        console.log("Database connection successful");
    })
        .catch((error) => {
        console.log(error.message);
        process.exit(1);
    });
});
main();
//# sourceMappingURL=server.js.map