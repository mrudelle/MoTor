
Template.body.events(
{
	"submit .new-entry": function(event)
		{
			var text = event.target.text.value;
			var value = event.target.val.value;
			var date = event.target.date.value;

			// send add request to the server
			Meteor.call("addEntry", text, value, date);

			// empty form
			event.target.reset();

			return false;
		}
})

Template.body.helpers(
{
	balance: function()
		{
			return _.reduce(
				Entries.find({}).fetch(), 
				function(memo, entry)
					{ 
						if (entry.val) 
							return memo + parseInt(entry.val)
						else
							return memo 
					}, 
				0)
		}
})

Meteor.startup( function()
{
	// instantiate the date picking elements
	$('.datepicker').pickadate();
})
        