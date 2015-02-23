
Meteor.publish("accounts", function()
	{
		// publish every accounts for the moment
		return Accounts.find({});
	})