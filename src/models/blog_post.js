import {DataTypes} from 'sequelize';

export default (database)=>{
    const BlogPost = database.define('Blog_post',{
        title:{
            type:DataTypes.STRING,
            allowNull: false
        },
        content:{
            type:DataTypes.TEXT,
            allowNull: false
        },
    }, {tableName:'blog_post',timestamps: false});

return BlogPost;
}