let AuthError = function(err) {
    let message;
    let errorDesign = $(".error");
    let errorNotification = $("#error");
    if (err) {
        message = err.reason;
        errorDesign.removeClass("hide");
        errorNotification.text(message);
    }
};

Template.Auth.events({
    'click button.login-button': function(event, template) {
        event.preventDefault();
        const email = template.find("#email").value;
        const password = template.find("#password").value;
        Meteor.loginWithPassword(email, password, AuthError);
    },
    'click button.register-button': function(event, template) {
        event.preventDefault();
        const email = template.find("#email").value;
        const password = template.find("#password").value;
        Accounts.createUser({
            email: email,
            password: password
        }, AuthError);
    },
    'click .register-prompt': function(event) {
        event.preventDefault();
        let loginHeader = $("#login-header");
        let loginButton = $(".login-button");
        let registerPrompt = $(".register-prompt");
        loginHeader.text("Please Register");
        loginButton.text("Register");
        loginButton.addClass("register-button");
        loginButton.removeClass("login-button");
        registerPrompt.text("Already a User?");
        registerPrompt.addClass("login-prompt");
        registerPrompt.removeClass("register-prompt");
    },
    'click .login-prompt': function(event) {
        event.preventDefault();
        let loginHeader = $("#login-header");
        let registerButton = $(".register-button");
        let loginPrompt = $(".login-prompt");
        loginHeader.text("Please, Log into your account");
        registerButton.text("Login");
        registerButton.addClass("login-button");
        registerButton.removeClass("register-button");
        loginPrompt.text("not a User? Register");
        loginPrompt.addClass("register-prompt");
        loginPrompt.removeClass("login-prompt");
    }
});
