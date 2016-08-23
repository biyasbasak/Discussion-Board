
Template.Logout.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
  }
})

Template.Logout.helpers({
  user: function () {
    return Meteor.user().emails[0].address;
  }
});
