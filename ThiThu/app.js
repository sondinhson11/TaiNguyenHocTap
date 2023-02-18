angular.module("MyApp", ["ngRoute"]).config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/trangchu.html",
      controller: trangchu,
    })
    .when("/sanpham", {
      templateUrl: "views/sanpham.html",
      controller: sanpham,
    });
});
