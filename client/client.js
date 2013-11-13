Template.messages.messages = function(){
    return Messages.find({}, {sort:{time: 1}});
}

Template.input.events = {
    'keydown input#message': function(event){
        if (event.which == 13){
            if (Meteor.user())
                var name = Meteor.user().username;
            else
                var name = 'Anonymous';
            var message = $('#message');
            if (message.val() != ''){
                Messages.insert({
                    name: name,
                    message: message.val(),
                    time: Date.now()
                });
            }
        }
    }
}

Accounts.ui.config({passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'});
