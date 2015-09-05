Template.postItem.helpers({
	ownPost: function() {
		return this.userId === Meteor.userId();
	},
	upvotedClass: function() {
		var userId = Meteor.userId();
		if (userId && !_.include(this.upvoters, userId)) {
			return 'upvotable';
		} else {
			return 'disabled';
		}
	},
	timePosted: function() {
		return moment(this.submitted).fromNow();
	}
});

Template.postItem.events({
	'click .upvotable': function(e) {
		e.preventDefault();
		Meteor.call('upvote', this._id);
	}
});