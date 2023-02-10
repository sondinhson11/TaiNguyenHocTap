angular.module("app-route", ["ngRoute"]).config(function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "views/trangchu.html",
    controller: trangchu,
  });
});
