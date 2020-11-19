const { Router } = require("express");
const express = require("express");

const app = express();

router.get("/",(req,res) =>res.send("Exercise Four"));

module.exports = router;