Entries = new Mongo.Collection('entries')

Meteor.methods(
{
	addEntry: function(text, val, date)
		{
			Entries.insert(
				{	
					text: text,
					val: val,
					date: date,
					timestamp: new Date()
				})
		}
})