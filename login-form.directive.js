angular.module('useraccounts.ngIonic').directive('loginForm', function() {
  return {
    restrict: 'EA',
    scope: true,
    template: '<div></div>',
    link: function(scope, element) {
      Blaze.render(Template.atForm, element[0]);
    }
  }
});
