const router = require("express").Router();
const bookRoutes = require ("");
const googleRoutes = require("./google");

// API Routes
// Book routes
router.use("/books", bookRoutes);

// Google routes
router.use("/google", googleRoutes);

// If no API routes are hit, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;