

Template.entryList.helpers(
{
	entries: Entries.find({}, {sort: {createdAt: -1}})
});
