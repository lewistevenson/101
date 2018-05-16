import { Template } from 'meteor/templating';

import './main.html';

Template.sms.events({
    'submit #spamForm'(event, template) {
      const phoneNumber = event.target.to.value;
      const message = event.target.message.value;
      const times = event.target.times.value;

      alert(phoneNumber + " - " + message + " x " + times);

      Meteor.call("sendSMS", phoneNumber, message, times);
    }
});