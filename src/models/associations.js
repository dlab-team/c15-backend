export default (models)=>{

    // Asociación 1-N Modelo User y Blog Post
    models.User.hasMany(models.BlogPost, { foreignKey: 'user_id' });
    models.BlogPost.belongsTo(models.User, { foreignKey: 'user_id' });

    // Asociación 1-N Modelo Role y User
    models.Role.hasMany(models.User, {
        foreignKey: {
            name: 'role_id',
            allowNull: false,
            defaultValue: 1,
            onDelete: 'SET DEFAULT'
        }
    });
    models.User.belongsTo(models.Role, { foreignKey: 'role_id' });

    // Asociación 1-N Modelo User y Company
    models.User.hasMany(models.Company, { foreignKey: 'user_id' });
    models.Company.belongsTo(models.User, { foreignKey: 'user_id' });

    // Asociación 1-N Modelo Company Type y Company
    models.CompanyType.hasMany(models.Company, { foreignKey: 'company_type_id' });
    models.Company.belongsTo(models.CompanyType, { foreignKey: 'company_type_id' });

    // Asociación 1-N Modelo Company y Diagnostic
    models.Company.hasMany(models.Diagnostic, {
        foreignKey: {
            name: 'company_id',
            allowNull: false,
            onDelete: 'CASCADE'
        }
    });
    models.Diagnostic.belongsTo(models.Company, { foreignKey:'company_id' });

    // Asociación 1-N Modelo Diagnostic y Answer
    models.Diagnostic.hasMany(models.Answer, {
        foreignKey: {
            name: 'diagnostic_id',
            allowNull: false,
            onDelete: 'CASCADE'
        }
    });
    models.Answer.belongsTo(models.Diagnostic,{ foreignKey: 'diagnostic_id' });

    // Asociación 1-N Modelo Option y Answer
    models.Option.hasMany(models.Answer, {
        foreignKey: {
            name: 'option_id',
            allowNull: false,
            onDelete: 'CASCADE'
        }
    });
    models.Answer.belongsTo(models.Option, { foreignKey: 'option_id' });

    // Asociación 1-N Modelo Question y Option
    models.Question.hasMany(models.Option, {
        foreignKey: {
            name: 'question_id',
            allowNull: false,
            onDelete: 'CASCADE'
        }
    });
    models.Option.belongsTo(models.Question, { foreignKey: 'question_id' });

    // Asociación 1-N Modelo Diagnostic y PillarDiagnostic
    models.Diagnostic.hasMany(models.PillarDiagnostic, {
        foreignKey: {
            name: 'diagnostic_id',
            allowNull: false,
            onDelete: 'CASCADE'
        }
    });
    models.PillarDiagnostic.belongsTo(models.Diagnostic, { foreignKey: 'diagnostic_id' });

    //Asociación 1-N Modelo Pillar y PillarDiagnostic
    models.Pillar.hasMany(models.PillarDiagnostic, {
        foreignKey: {
            name: 'pillar_id',
            allowNull: false,
            onDelete: 'CASCADE'
        }
    });
    models.PillarDiagnostic.belongsTo(models.Pillar, { foreignKey:'pillar_id' });

    //Asociación 1-N Modelo Pillar y PillarMessage
    models.Pillar.hasMany(models.PillarMessage, {
        foreignKey: {
            name: 'pillar_id',
            allowNull: false,
            onDelete: 'CASCADE'
        }
    });
    models.PillarMessage.belongsTo(models.Pillar, { foreignKey:'pillar_id' });

    //Asociación 1-N Modelo Pillar y Question
    models.Pillar.hasMany(models.Question, {
        foreignKey: {
            name: 'pillar_id',
            allowNull: false,
            onDelete: 'CASCADE'
        }
    });
    models.Question.belongsTo(models.Pillar, { foreignKey:'pillar_id' });
}
