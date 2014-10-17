MeteorDown
============

MeteorDown is a load testing framework for Meteor.

**Setup the Agent**

  - Install the smart package `meteorhacks:meteor-down`
  - Initialize with `MeteorDown.init('SECRET_KEY')`

**Writing Tests**

  - Install mdown npm module globally `npm -g i mdown`
  - Run your scripts with `mdown my-load-test.js`

**Example Script**

    var mdown = new MeteorDown(function (error, client) {
      client.call('add', x, y, function (err, res) {
        console.log(x+' + '+y+' is '+res);
        client.kill();
      });
    })

    mdown.run({
      concurrency: 10,
      url: 'http://localhost:3000',
      key: 'SECRET_ID',
      auth: {userId: ['JydhwL4cCRWvt3TiY', 'bg9MZZwFSf8EsFJM4']}
    });
