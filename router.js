import { Router } from "express";
import { getHealth, getTime } from "./handlers/apiHandlers.js";
import { getContact, getHome, postContact } from "./handlers/viewHandlers.js";
const router = Router();
// API
router.get("/api/health", getHealth);
router.get("/api/time", getTime);

// HTML
router.get("/profile", (req, res) => {
  res.render("profile");
});
router.get("/", getHome);
router.get("/contact", getContact);
router.post("/contact", postContact);

export default router;
