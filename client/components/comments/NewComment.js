Template.NewComment.events({
  'submit #text-area': function (event) {
    event.preventDefault();
    const email = Meteor.user().emails[0].address;
    const text = event.target.text.value;
    event.target.text.value = '';
    Meteor.call('newPost',text,email);
  }
});
