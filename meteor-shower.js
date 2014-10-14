
Meteor.methods({
  'MeteorShower:login': function (key, params) {
    check(key, String);
    check(params, Object);

    if(!MeteorShower.key) {
      throw new Meteor.Error('Please initialize MeteorShower on the server with MeteorShower.init(secret_key) before using it');
    }

    if(MeteorShower.key !== key) {
      throw new Meteor.Error('Incorrect Key');
    }

    var user = MeteorShower.login(params);
    if(!user) {
      throw new Meteor.Error('Incorrect User Info');
    }

    this.setUserId(user._id);
    return user;
  }
});

MeteorShower = {};

MeteorShower.init = function (key) {
  this.key = key;
}

MeteorShower.login = function (params) {
  if(params.userId) {
    return Meteor.users.findOne(params.userId);
  }
}
