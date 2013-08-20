require.config({
	deps: ['app.js'],
	baseUrl: '.',
	map: {
		'*': {
			'hogan': 'lib/requirejs-hogan-plugin/hogan'
		}
	},
	paths: {
		'can': 'lib/canjs/amd/can',
		'jquery': 'lib/jquery/jquery',
		'signals': 'lib/js-signals/dist/signals',
		'crossroads': 'lib/crossroads.js/dist/crossroads',
		'hasher': 'lib/hasher/dist/js/hasher'
	},
	packages: [{
		name: 'hgn',
		location: 'lib/requirejs-hogan-plugin',
		main: 'hgn'
	}, {
		name: 'text',
		location: 'lib/requirejs-text',
		main: 'text'
	}]
});
