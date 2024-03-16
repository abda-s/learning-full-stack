module.exports = (sequelize, DataTypes) => {
    const posts = sequelize.define("posts", {
        title: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
        posttext: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
    })

    return posts;
}