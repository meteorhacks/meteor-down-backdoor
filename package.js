Package.describe({
  "summary": "Load Testing for Meteor",
  "version": "1.0.0",
  "git": "https://github.com/meteorhacks/meteor-shower-agent.git",
  "name": "meteorhacks:meteor-shower"
});

Package.on_use(function(api) {
  configurePackage(api);
  api.export(['MeteorShower']);
});

Package.on_test(function(api) {
  configurePackage(api);
  api.use(['accounts-base', 'tinytest', 'test-helpers']);
  api.add_files('meteor-shower-tests.js');
});

function configurePackage(api) {
  if(api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.1');
  }

  api.use('livedata');
  api.add_files('meteor-shower.js', 'server');
}
