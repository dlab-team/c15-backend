export default (models)=>{

    //Asociación 1-N Modelo User y Blog Post
    models.User.hasMany(models.BlogPost,{foreignKey:'id_user'});
    models.BlogPost.belongsTo(models.User,{foreignKey:'id_user'});

    //Asociación 1-N Modelo Role y User
    models.Role.hasMany(models.User,{foreignKey:'id_role'});
    models.User.belongsTo(models.Role,{foreignKey:'id_role'});

     //Asociación 1-N Modelo Role y User
    models.User.hasMany(models.Company,{foreignKey:'id_user'});
    models.Company.belongsTo(models.User,{foreignKey:'id_user'});

    //Asociación 1-N Modelo Company Type y Company
    models.CompanyType.hasMany(models.Company,{foreignKey:'id_company_type'});
    models.Company.belongsTo(models.CompanyType,{foreignKey:'id_company_type'});

    //Asociación 1-N Modelo Company y Diagnostic
    models.Company.hasMany(models.Diagnostic,{foreignKey:'id_company'});
    models.Diagnostic.belongsTo(models.Company,{foreignKey:'id_company'});

    //Asociación 1-N Modelo Diagnostic y Answer
    models.Diagnostic.hasMany(models.Answer,{foreignKey:'id_diagnostic'});
    models.Answer.belongsTo(models.Diagnostic,{foreignKey:'id_diagnostic'});

    //Asociación 1-N Modelo Option y Answer
    models.Option.hasMany(models.Answer,{foreignKey:'id_option'});
    models.Answer.belongsTo(models.Option,{foreignKey:'id_option'});

    //Asociación 1-N Modelo Question y Option
    models.Question.hasMany(models.Option,{foreignKey:'id_question'});
    models.Option.belongsTo(models.Question,{foreignKey:'id_question'});

    //Asociación 1-N Modelo Diagnostic y PillarDiagnostic
    models.Diagnostic.hasMany(models.PillarDiagnostic,{foreignKey:'id_diagnostic'});
    models.PillarDiagnostic.belongsTo(models.Diagnostic,{foreignKey:'id_diagnostic'});

    //Asociación 1-N Modelo Pillar y PillarDiagnostic
    models.Pillar.hasMany(models.PillarDiagnostic,{foreignKey:'id_pillar'});
    models.PillarDiagnostic.belongsTo(models.Pillar,{foreignKey:'id_pillar'});

    //Asociación 1-N Modelo Pillar y PillarMessage
    models.Pillar.hasMany(models.PillarMessage,{foreignKey:'id_pillar'});
    models.PillarMessage.belongsTo(models.Pillar, {foreignKey:'id_pillar'});

    //Asociación 1-N Modelo Pillar y Question
    models.Pillar.hasMany(models.Question,{foreignKey:'id_pillar'});
    models.Question.belongsTo(models.Pillar, {foreignKey:'id_pillar'});
}
