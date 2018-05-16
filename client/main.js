import { Template } from 'meteor/templating';

import './main.html';

Template.sms.events({
    'submit #spamForm'(event, template) {
        event.preventDefault();
        event.stopPropagation();

        const phoneNumber = event.target.to.value;
        const message = event.target.message.value;
        const times = event.target.times.value;

        //Meteor.call("sendSMS", phoneNumber, message, times);
    }
});