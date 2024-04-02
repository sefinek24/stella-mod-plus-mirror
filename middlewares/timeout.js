const timeout = require('express-timeout-handler');

module.exports = () => timeout.handler({
	timeout: 12000,
	onTimeout: (req, res) => res.status(503).json({ success: false, status: 503, message: 'Request timeout. Service unavailable.' }),
	disable: ['write', 'setHeaders', 'send', 'json', 'end'],
});