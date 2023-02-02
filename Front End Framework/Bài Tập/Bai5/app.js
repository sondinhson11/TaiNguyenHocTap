var app = angular.module("SanPham", []);
app.controller("SanPhamController", function ($scope) {
  $scope.sanPham = [
    {
      ten: "Đồng Hồ",
      gia: "2.000.000",
      mau: "Đen",
      km: "10%",
    },
    {
      ten: "TIVI LG",
      gia: "21.000.000",
      mau: "Đen",
      km: "20%",
    },
    {
      ten: "BANANA PHONE",
      gia: "12.000.000",
      mau: "Vàng",
      km: "5%",
    },
  ];
  $scope.count = 0;
  $scope.myFunc = function () {
    $scope.count++;
  };
  $scope.sayHello = function () {
    $scope.kq = $scope.test;
  };
  $scope.cong = function () {
    $scope.kq = $scope.so1 + $scope.so2;
  };
  $scope.tru = function () {
    $scope.kq = $scope.so1 - $scope.so2;
  };
  $scope.nhan = function () {
    $scope.kq = $scope.so1 * $scope.so2;
  };
  $scope.chia = function () {
    $scope.kq = $scope.so1 / $scope.so2;
  };
  $scope.kQ = function () {
    $scope.cv = $scope.dai * $scope.rong;
    $scope.dt = ($scope.dai + $scope.rong) * 2;
  };
});
