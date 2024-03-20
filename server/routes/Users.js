const express = require("express");
const router = express.Router();
const { users } = require("../models")

const bcrypt = require("bcrypt")

router.post("/", async (req, res) => {
    try {
        const { username, password } = req.body
        bcrypt.hash(password,10).then((hash)=>{
            users.create({
                username: username,
                password: hash
            })
        })
        res.json("success")


    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    }
});




module.exports = router