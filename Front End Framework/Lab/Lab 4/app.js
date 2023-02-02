new Date().getFullYear();
var app = angular.module("ThongTinAnh", []);
app.controller("ThongTin", function ($scope) {
  $scope.ten = "Nguyễn Văn Tèo";
  $scope.ngaysinh = "20-01-1995";
  $scope.gt = "Nam";
  $scope.diem = 8.5;
  $scope.photo = "teo.jpg";
  $scope.kQ = function () {
    $scope.cv = $scope.dai * $scope.rong;
    $scope.dt = ($scope.dai + $scope.rong) * 2;
  };
  $scope.xet = function () {
    if ($scope.diem < 5) {
      $scope.hl = "Rớt";
    } else {
      $scope.hl = "Đậu";
    }
  };
  $scope.xet2 = function () {
    a = Year($scope.nam);
    b = new Date().getFullYear();
    if (b - a < 18 || b - a >= 27) {
      $scope.hl = "Đậu";
    } else {
      $scope.hl = "Đậu";
    }
  };
  $scope.thongTins = [
    {
      ten: "Nguyễn Văn Tèo",
      ngaysinh: "20-01-1995",
      gt: "Nam",
      diem: 8.5,
      photo: "teo.jpg",
    },
    {
      ten: "Nguyễn Văn Tèo",
      ngaysinh: "20-01-1995",
      gt: "Nam",
      diem: 8.5,
      photo: "teo.jpg",
    },
    {
      ten: "Nguyễn Văn Tèo",
      ngaysinh: "20-01-1995",
      gt: "Nam",
      diem: 8.5,
      photo: "teo.jpg",
    },
  ];
});
