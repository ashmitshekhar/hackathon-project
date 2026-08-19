const mongoose = require("mongoose");

const HackathonSchema = new mongoose.Schema({
    name: String,
    date: String,
    location: String,
    link: String,
});

module.exports = mongoose.model("Hackathon", HackathonSchema);
