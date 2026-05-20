import express from "express";
import { getHealth, getTime } from "./handlers/apiHandlers.js";
import { getContact, getHome, postContact } from "./handlers/viewHandlers.js";
import { globalErrorHandler } from "./handlers/errorHandler.js";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
// API
app.get("/api/health", getHealth);
app.get("/api/time", getTime);

// HTML
app.get("/", getHome);
app.get("/contact", getContact);
app.post("/contact", postContact);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
