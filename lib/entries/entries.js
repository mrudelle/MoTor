Entries = new Mongo.Collection('entries')

Meteor.methods(
{
	addEntry: function(text, val, date)
		{

			if (text != "" && val != "" && date != "" && val != 0)
			{
				Entries.insert(
					{	
						text: text,
						val: parseInt(val),
						date: date,
						timestamp: new Date()
					})
			}	
			else
			{
				throw new Meteor.Error("invalid-input");
			}
		}
})