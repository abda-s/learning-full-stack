const express = require("express");
const app = express();
const db = require("./models")
const cors = require("cors")
const PORT = 3001;

app.use(express.json());
app.use(cors())
//Routers
const postRouter = require("./routes/Posts")
app.use("/posts", postRouter)

const CommentsRouter = require("./routes/Comments")
app.use("/comments", CommentsRouter)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}`)
    })
})

