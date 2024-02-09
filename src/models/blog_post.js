import {DataTypes} from 'sequelize';

export default (database)=>{
    const BlogPost = database.define('blog_post',{
        title:{
            type:DataTypes.STRING,
            allowNull: false
        },
        content:{
            type:DataTypes.TEXT,
            allowNull: false
        },
    }, {timestamps: false});

return BlogPost;
}