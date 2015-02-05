Meteor.methods({
  setKey: function(key) {
    MeteorDown.key = key;
  },

  addUser: function(userId) {
    Meteor.users.insert({_id: userId});
  },

  getUserId: function() {
    return this.userId;
  }
});