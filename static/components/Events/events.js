define(['jquery',
	'can/control',
	'models/meetup',
	'hgn!components/events/init'],
function($, Control, Meetup, init) {

	var Events = can.Control({

		defaults: {
			//by default "this.options.limit" will equal 1.
			//this is just a default option and can be overridden on implementation.
			limit: 1
		}

	}, {

		init: function() {
			//make initial call to get the meetups
			Meetup.findAll({ limit: this.options.limit }, function(meetups) {
				//render the view here
			});
		}

	});

	return Events;

});