Meteor.methods({
  'MeteorDown:login': function (key, params) {
    check(key, String);
    check(params, Object);

    if(!MeteorDown.key) {
      var message = 'Please set METEOR_DOWN_KEY environment variable';
      throw new Meteor.Error(401, message);
    }

    if(MeteorDown.key !== key) {
      throw new Meteor.Error(402, 'Incorrect METEOR_DOWN_KEY');
    }

    var user = Meteor.users.findOne(params.userId);
    if(!user) {
      throw new Meteor.Error(403, 'Incorrect userId', params);
    }

    // this is same as .setUserId(), but this does not add overhead
    // this does not resume subscriptions and so on, and we don't really need it
    // we do this at the start, so this is fine
    var sessionId = this.connection.id;
    var session = Meteor.server.sessions[sessionId];
    session.userId = user._id;

    return user;
  }
});

MeteorDown = {};

MeteorDown.init = function (key) {
  this.key = key;
}

MeteorDown.login = function (params) {
  if(params.userId) {
    return Meteor.users.findOne(params.userId);
  }
}