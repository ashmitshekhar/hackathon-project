const express = require("express");
const axios = require("axios");
const Hackathon = require("./Hackathon");
const router = express.Router();

// Fetch hackathons (mock example)
router.get("/", async (req, res) => {
    try {
        const hackathons = await Hackathon.find();
        res.json(hackathons);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
