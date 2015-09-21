Package.describe({
  "summary": "Load Testing Framework for Meteor",
  "version": "1.1.2",
  "git": "https://github.com/meteorhacks/meteor-down-backdoor.git",
  "name": "meteorhacks:meteor-down"
});

Package.on_use(function(api) {
  configurePackage(api);
  api.export(['MeteorDown']);
});

Package.on_test(function(api) {
  configurePackage(api);
  api.use('tinytest', 'client');
  api.use('accounts-password', ['server', 'client']);

  api.add_files('test/init.js', 'server');
  api.add_files('test/meteor-down.js', 'client');
});

function configurePackage(api) {
  if(api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.1');
  }

  api.use('livedata');
  api.add_files('lib/meteor-down.js', 'server');
  api.add_files('lib/boot.js', 'server');
}
