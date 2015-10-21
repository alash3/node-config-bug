var _ = require('lodash');
var clientSessions = require('client-sessions');

var config = require('config');

clientSessions(config.session);

var httpsEnabled = config.get('daemons.http.enabled');
