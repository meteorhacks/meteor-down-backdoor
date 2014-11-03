
Meteor.methods({
  'MeteorDown:login': function (key, params) {
    check(key, String);
    check(params, Object);

    if(!MeteorDown.key) {
      throw new Error('Please set METEOR_DOWN_KEY environment variable');
    }

    if(MeteorDown.key !== key) {
      throw new Error('Incorrect METEOR_DOWN_KEY');
    }

    var user = MeteorDown.login(params);
    if(!user) {
      throw new Error('Incorrect User Info', params);
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

/* ------------------------------------------------------------------------- */

if(process.env.METEOR_DOWN_KEY) {
  MeteorDown.init(process.env.METEOR_DOWN_KEY)
}
