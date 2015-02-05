Tinytest.addAsync("no key set", function(test, done) {
  var key = 'k';
  var params = {};

  Meteor.call('setKey', null, function() {
    Meteor.call('MeteorDown:login', key, params, withResult);
  });

  function withResult(err) {
    test.equal(err.error, 401);
    done();
  }
});

Tinytest.addAsync("incorrect key", function(test, done) {
  var key = 'k';
  var params = {};

  Meteor.call('setKey', "some-other-key", function() {
    Meteor.call('MeteorDown:login', key, params, withResult);
  });

  function withResult(err) {
    test.equal(err.error, 402);
    done();
  }
});

Tinytest.addAsync("no such user", function(test, done) {
  var key = 'k';
  var params = {userId: "something-false"};

  Meteor.call('setKey', key, function() {
    Meteor.call('MeteorDown:login', key, params, withResult);
  });

  function withResult(err) {
    test.equal(err.error, 403);
    done();
  }
});

Tinytest.addAsync("correct user", function(test, done) {
  var key = 'k';
  var params = {userId: Random.id()};

  Meteor.call('setKey', key, function() {
    Meteor.call('addUser', params.userId, function() {
      Meteor.call('MeteorDown:login', key, params, withResult);
    });
  });

  function withResult(err, user) {
    test.equal(err, undefined);
    test.equal(user._id, params.userId);
    Meteor.call('getUserId', function(err, userId) {
      test.equal(userId, params.userId);
      done();
    });
  }
});