'use strict';

module.exports = {
	'100': "Endpoint not specified",
	'103': "Could not find specified endpoint",
	'110': "'X-Bolt-App-Token' header missing",
	'113': "Could not retrieve the specified 'X-Bolt-App-Token' value from the database",
	'120': "Bulk delete criterion missing",
	'130': "Bulk update criterion missing",

	'200': "Username and/or password missing",
	'201': "A user with the same username already exists",
	'202': "Could not save user to the database",
	'203': "Could not retrieve user from the database",

	'212': "Could not log user in",
	'213': "Could not get logged-in user",


	'300': "Role name missing",
	'301': "A role with the same name already exists",
	'302': "Could not save role to the database",
	'303': "Could not retrieve role from the database",

	'310': "Username and/or role name missing",
	'311': "A user-role with the same user and role already exists",
	'312': "Could not save user-role to the database",
	'313': "Could not retrieve user-role from the database",

	'320': "App name and/or role name missing",
	'321': "An app-role with the same app and role already exists",
	'322': "Could not save app-role to the database",
	'323': "Could not retrieve app-role from the database",

	'334': "User has no right to start this app",
	'335': "User has no right to access this app feature",
	'336': "User has no right to access this app file",
	'337': "User has no admin right",

	'340': "App name and/or user name missing",
	'341': "An app-user with the same app and user already exists",
	'342': "Could not save app-user to the database",
	'343': "Could not retrieve app-user from the database",

	'350': 'Permission name missing',


	'400': "App name missing",
	'401': "An app with the same name already exists",
	'402': "Could not save app to the database",
	'403': "Could not retrieve app from the database",
	'404': "Could not start app due to security concerns",
	'405': "Invalid characters in app name",
	'406': "Invalid characters in collection name",

	'410': "App path missing",
	'414': "Could not install app due to unsupported target version",
	'415': "Could not download app from online repository",
	'416': "Could not retrieve package.json from online repository",
	'417': "Could not retrieve readme from online repository",
	'418': "Could not retrieve package.json from local repository",
	'419': "Could not retrieve readme from local repository",

	'420': "App port missing",

	'432': "Could not save extension to the database",
	'433': "Could not retrieve extension from the database",


	'504': "This app is not a system app",

	'510': "Object to tokenize missing",

	'520': 'Notification message missing',
	'524': 'This app is suspended from raising notifications',


	'600': "File name missing",
	'601': "A file with the same name already exists",
	'602': "Could not save file",
	'603': "Could not retrieve file",
	'604': "The requesting app or user has no right to access this file",

	'612': "Could not write to file",
	'613': "Could not read from file",


	'700': "Collection name and/or app name missing",
	'701': "A collection with the same collection name and app name already exists",
	'702': "Could not save collection to the database",
	'703': "Could not retrieve collection from the database",
	'704': "This app has no right to access this collection",

	'710': "Document or query object missing"
};