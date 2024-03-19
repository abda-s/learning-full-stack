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


module.exports = router