const express = require("express");
const { calculateSavings } = require("../controllers/calculator");
const router = express.Router();

router.post("/calculate", calculateSavings);

module.exports = router;
