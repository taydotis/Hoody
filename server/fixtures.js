if (Posts.find().count() === 0) {
	var now = new Date().getTime();

	// create two users
	var taylorId = Meteor.users.insert({
		profile: { name: 'Taylor Raboin' }
	});
	var taylor = Meteor.users.findOne(taylorId);
	
	var daveId = Meteor.users.insert({
		profile: { name: 'Dave Pittman' }
	});
	var dave = Meteor.users.findOne(daveId);

	var telescopeId = Posts.insert({
		title: "Lost my dog. She's a black and white Australian sheperd named Bessy. Has anyone seen her?",
		userId: taylor._id,
		author: taylor.profile.name,
		submitted: new Date(now - 1 * 3600 * 1000),
		commentsCount: 2,
		upvoters: [],
		votes: 0
	});

	Comments.insert({
		postId: telescopeId,
		userId: dave._id,
		author: dave.profile.name,
		submitted: new Date(now - 5 * 3600 * 1000),
		body: "My neighbor on Eastland saw this dog and is holding her in the backyard, I'll message you his info!"
	});

	Comments.insert({
		postId: telescopeId,
		userId: taylor._id,
		author: taylor.profile.name,
		submitted: new Date(now - 3 * 3600 * 1000),
		body: 'Thank you so much, Dave!'
	});

	Posts.insert({
		title: "Seriously, I just want somebody to watch reruns of Friends with me tonight. I do appreciate the irony in that. Message me!",
		userId: taylor._id,
		author: taylor.profile.name,
		submitted: new Date(now - 2 * 3600 * 1000),
		commentsCount: 0,
		upvoters: [],
		votes: 0
	});

	Posts.insert({
		title: "I just remembered I actually don't like going out, anybody interested in buying my beer festival ticket? I'll sell it for half off.",
		userId: dave._id,
		author: dave.profile.name,
		submitted: new Date(now - 3 * 3600 * 1000),
		commentsCount: 0,
		upvoters: [],
		votes: 0
	});

}