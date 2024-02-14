export default (database) => {
    const Diagnostic = database.define('Diagnostic', { 


    }, {tableName: 'diagnostic'});
    return Diagnostic;
};