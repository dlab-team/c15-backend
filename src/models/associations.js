export default (models) => {
    const { User, Role } = models;

    // One Role can have many users
    Role.hasMany(User);
    User.belongsTo(Role);
};
