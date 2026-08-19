const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    linkedin: { type: String },
    github: { type: String },
    verification: {
        q1: String,
        verified: { type: Boolean, default: false }
    },
    scrapedData: {
        linkedinProjects: [String],
        githubRepos: [String]
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);