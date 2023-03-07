angular.module("MyApp", ["ngRoute"]).config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/tacgia.html",
      controller: tacgia,
    })
    .when("/pages", {
      templateUrl: "views/pages.html",
      controller: pages,
    });
});
