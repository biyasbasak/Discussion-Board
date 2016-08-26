Template.NavBar.events({
  'click .logout': function (event) {
    Meteor.logout();
  }
})
