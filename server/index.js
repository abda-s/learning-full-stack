const express = require("express");
const app = express();
const db = require("./models")
const PORT = 3001;

app.use(express.json());

//Routers
const postRouter = require("./routes/Posts")
app.use("/posts", postRouter)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}`)
    })
})

