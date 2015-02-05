MeteorDown
============

Meteor side package for MeteorDown load testing framework. To perform a load test, install the smart package and run meteor with `METEOR_DOWN_KEY` environment variable.

    meteor add meteorhacks:meteor-down
    export METEOR_DOWN_KEY='YOUR_SUPER_SECRET_KEY'
    meteor

This smart package acts as a backdoor to allow user logins without passwords. This can be useful to imitate real users when testing. Value of `METEOR_DOWN_KEY` is required to do this but it's best to have this package installed only whlile running a load test.

To run tests, checkout [meteor-down](https://github.com/meteorhacks/meteor-down)
