import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

const clientId = "sdtLHvS6bTJgSNIPz09J2LUle6JGoCKU";
const clientSecret = "0MxvJdAKC8TUhxQG";


Meteor.methods({
    "sendSMS": (phoneNumber, message, times) => {
        HTTP.call()
    }
});