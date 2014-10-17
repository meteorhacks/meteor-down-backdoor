
Meteor.methods({
  'MeteorDown:login': function (key, params) {
    check(key, String);
    check(params, Object);

    if(!MeteorDown.key) {
      throw new Meteor.Error('Please initialize MeteorDown on the server with MeteorDown.init(secret_key) before using it');
    }

    if(MeteorDown.key !== key) {
      throw new Meteor.Error('Incorrect Key');
    }

    var user = MeteorDown.login(params);
    if(!user) {
      throw new Meteor.Error('Incorrect User Info');
    }

    this.setUserId(user._id);
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
