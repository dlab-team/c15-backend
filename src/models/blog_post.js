import { DataTypes } from 'sequelize';

export default (database) => {
    const BlogPost = database.define('Blog_Post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { tableName: 'blog_posts', timestamps: true });
    return BlogPost;
}
