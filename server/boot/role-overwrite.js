module.exports = function(app) {
    var Member = app.models.Member;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;

    Member.observe('after save', function assignDefaultRole(context, next) {
        if (context.instance) {
            Role.findOne({ where: { roleId: 3 } }, function(err, role) {
                if (_.isEmpty(role)) {
                    RoleMapping.findOne({ where: { principalId: userId } }, function(err, roleMapping){
                        if (_.isEmpty(roleMapping)) {
                            role.principals.create({ principalType: RoleMapping.USER, principalId: user.id }, function(err, principal) {
                                if (err) { next(err); };
                                next();
                            });
                        }
                    });
                }
            });
        }
        
        next();
    });
}