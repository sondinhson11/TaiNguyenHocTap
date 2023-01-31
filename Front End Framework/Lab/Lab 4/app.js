var app = angular.module("ThongTinAnh", []);
app.controller("ThongTin", function ($scope) {
  $scope.ten = "Nguyễn Văn Tèo";
  $scope.ngaysinh = "20-01-1995";
  $scope.gt = "Nam";
  $scope.diem = 8.5;
  $scope.photo = "teo.jpg";
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
