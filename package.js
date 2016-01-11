Package.describe({
  name: 'felixs8696:useraccounts-ng-ionic',
  version: '0.0.2',
  summary: "AngularJS wrapper for Splendido's Meteor useraccounts:ionic package",
  git: 'https://github.com/felixs8696/useraccounts-ng-ionic',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('angular:angular@1.4.7', 'client');
  api.use('blaze-html-templates', 'client');

  api.imply('useraccounts:ionic@1.13.1');

  api.addFiles([
    'useraccounts-ng-ionic.js',
    'login-form.directive.js'
  ], 'client');
});
