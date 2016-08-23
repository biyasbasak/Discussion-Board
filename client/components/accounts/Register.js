Template.Register.events({
    'submit form': function(event){
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        Accounts.createUser({
            email: email,
            password: password
        }, function(err, user){
          console.log(err,user);
        });
        console.log(email, password);
    }
});
