angular.module("MyApp", ["ngRoute"]).config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/trangchu.html",
      controller: trangchu,
    })
    .when("/gioithieu", {
      templateUrl: "views/gioithieu.html",
      controller: gioithieu,
    })
    .when("/dangky", {
      templateUrl: "views/dangky.html",
      controller: dangky,
    })
    .when("/lienhe", {
      templateUrl: "views/lienhe.html",
      controller: lienhe,
    });
});
