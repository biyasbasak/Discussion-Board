Comments = new Mongo.Collection('comments');

let Schemas = {};

Comments.allow({
  insert: function (userId, doc) {
    return !!userId;
  }
});

Comments.allow({
  update: function(userId, doc){
    return !!userId;
  }
});

Schemas.CommentSchema = new SimpleSchema({
  text: {
    type: String,
  },
  contributor: {
    type: String
  },
  createdAt: {
    type:Date
  }
});

Meteor.methods({
  newPost: function (text,email) {
    Comments.insert({
      text: text,
      contributor: email,
      createdAt: new Date()
    });
  }
});

Comments.attachSchema(Schemas.CommentSchema);
