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
    posts.associate = (models) => {
        posts.hasMany(models.Comments, { // add an association between the posts table and the comments table 
            onDelete : "cascade" // when a post is deleted it will delete every comment associated with it  
        })
    }

    return posts;
}