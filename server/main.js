import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

const clientId = "sdtLHvS6bTJgSNIPz09J2LUle6JGoCKU";
const clientSecret = "0MxvJdAKC8TUhxQG";

const telstraAPIEndpoint = "https://tapi.telstra.com/v2";

const authHeaders = {
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret
};


Meteor.methods({
    "authenticate": () => {
        HTTP.call("POST", telstraAPIEndpoint + "/oauth/token", { params: authHeaders }, (err, res) => {
            if(!err) {
                Session.set('token', res.data);
            } else {
                Session.set('token', false);
            }
        });

    },
    "sendSMS": (phoneNumber, message, times) => {
        const token = Session.get('token');

        if(token) {
            const details = {
                to: phoneNumber,
                body: message
            };
            HTTP.call("POST", telstraAPIEndpoint + "/messages/sms", { data: details , headers: { AccessToken: token } });
        }
    }
});