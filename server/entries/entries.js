
Meteor.publish("entries", function()
	{
		// publish every entries for the moment
		return Entries.find({});
	})