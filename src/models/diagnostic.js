export default (database) => {
    const Diagnostic = database.define('Diagnostic', { 
    }, {tableName: 'diagnostics'});
    return Diagnostic;
};
