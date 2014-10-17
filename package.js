Package.describe({
  "summary": "Load Testing Framework for Meteor",
  "version": "1.0.0",
  "git": "https://github.com/meteorhacks/meteor-down.git",
  "name": "meteorhacks:meteor-down"
});

Package.on_use(function(api) {
  configurePackage(api);
  api.export(['MeteorDown']);
});

function configurePackage(api) {
  if(api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.1');
  }

  api.use('livedata');
  api.add_files('meteor-down.js', 'server');
}
