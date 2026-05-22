import express from "express";
import expressLayouts from "express-ejs-layouts";
import { globalErrorHandler } from "./handlers/errorHandler.js";
import router from "./router.js";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(expressLayouts);

app.use(router);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
