Meteor.publish('comments', function () {
  return Comments.find({});
});
Meteor.publish('UserFavourites', function (id) {
  return Meteor.users.find({_id: id});
});
