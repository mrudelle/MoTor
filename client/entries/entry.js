
Template.entry.helpers(
{
	negative: function() 
		{
			return this.val < 0
		},

	positive: function() 
		{
			return this.val > 0
		},

	expanded: function()
		{
			return Session.get("expanded-entry-" + this._id) || false;
		},

	dateFromNow: function()
		{
			return moment(this.date).fromNow();
		}
})

Template.entry.events(
{
	"click .entry-header": function()
		{
			var expanded = Session.get("expanded-entry-" + this._id) || false

			Session.set("expanded-entry-" + this._id, !expanded)
		},

	"click #delete-entry": function()
		{
			Meteor.call("deleteEntry", this._id)
		},

	"click #edit-entry": function()
		{
			//nothing yet
		}

})