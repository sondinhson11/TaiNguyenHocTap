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
});
