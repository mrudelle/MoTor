
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