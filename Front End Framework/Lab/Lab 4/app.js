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
     if($scope.ten2 ==undefined ){
      swal("Thông Báo!", "Không được để trống tên!", "error");
     }else{
        if($scope.nam==undefined ){
          swal("Thông Báo!", "Không được để trống ngày tháng năm sinh!", "error");
        }else{
          a = $scope.nam.getFullYear();
          b = new Date().getFullYear();
          console.log(b-a);
          if (b - a >= 18 && b - a <= 27) {
            if($scope.gt == "Nam"){
              swal("Thông Báo!", "Ông "+$scope.ten2+" đủ điền kiện đi nghĩa vụ quân sự!", "success");
            }else if($scope.gt == "Nữ"){
              swal("Thông Báo!", "Bà "+$scope.ten2+" đủ điền kiện đi nghĩa vụ quân sự!", "success");
            }else{
              swal("Thông Báo!", "Bê Đê "+$scope.ten2+" đủ điền kiện đi nghĩa vụ quân sự!", "success");
            }
          } else {
            if($scope.gt == "Nam"){
              swal("Thông Báo!", "Ông "+$scope.ten2+" không đủ điền kiện đi nghĩa vụ quân sự!", "error");
            }else if($scope.gt == "Nữ"){
              swal("Thông Báo!", "Bà "+$scope.ten2+"không đủ điền kiện đi nghĩa vụ quân sự!", "error");
            }else{
              swal("Thông Báo!", "Bê Đê "+$scope.ten2+"không đủ điền kiện đi nghĩa vụ quân sự!", "error");
            }
          }
        }
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
