Template.Comments.onCreated(function() {
    let _this = this;
    _this.autorun(function() {
        _this.subscribe('comments');
    });
});

Template.Comments.helpers({
    comments: () => {
        return Comments.find({}, {
            sort: {
                'createdAt': -1
            }
        });
    }
});
