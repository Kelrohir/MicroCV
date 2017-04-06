var app = require('../server');
var dataSource = app.dataSources.postgresql;

var lbTables = [
    'AccessToken',
    'ACL',
    'Role',
    'RoleMapping',
    'User',

    'Education',
    'Experience',
    'Member',
    'OtherInfo',
    'Resume',
    'Skill',
    'Team'
];

function automigrate(connection, tables) {
	connection.automigrate(tables, function(err) {
		if (err) throw err;

		console.log('Loopback tables created in ', connection.adapter.name);
		connection.disconnect();
	});
}

if(dataSource.connected) {
	automigrate(dataSource, lbTables);
}
else {
	dataSource.once('connected', function() {
		automigrate(dataSource, lbTables)
	});
}