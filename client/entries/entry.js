
Template.entry.helpers(
{
	negative: function() 
		{
			return this.val < 0
		},

	positive: function() 
		{
			return this.val > 0
		}
})