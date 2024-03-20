module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("users", {
        username: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
    })
    // users.associate = (models) => {
    //     users.hasMany(models.posts, { // add an association between the users table and the comments table 
    //         onDelete : "cascade" // when a users is deleted it will delete every post associated with it  
    //     })
    // }

    return users;
}