const express = require("express");
const router = express.Router();
const { comments } = require("../models")

router.get("/:postId", async (req, res) => {
    try {
        const postId = req.params.postId // get the post id from the params in the url
        const Comments = await comments.findAll({where:{PostId:postId}}) // go to the comments table and where the id is postId return all the elments
        res.json(Comments) 

    } catch (err) {
        console.error("Error with res:", error);
        res.status(500).json({ error: "Failed to respond" });
    }
})

router.post("/", async (req, res) => {
    try {
        const comment = req.body;
        await comments.create(comment);
        res.json(comment);
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: "Failed to create post" });
    }
});

module.exports = router