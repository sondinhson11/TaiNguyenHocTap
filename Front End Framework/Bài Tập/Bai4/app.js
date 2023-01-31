// function myDemo($scope) {
//   $scope.welcome = "Nguyện Tuyên Quang";
// }
// //Sử dụng agular JS
// //Định nghĩa agularjs
// var app = angular.module("myapp", []);
// app.controller("demoController", myDemo);

function myInfor($scope) {
  $scope.ten = "Văn Đình Sơn";
  $scope.tuoi = "19";
  $scope.email = "sondinhson11@gmail.com";
  $scope.sdt = "0862521305";
  $scope.nganh = "Ứng Dụng Phần Mếm";
}

// function SonDauVang2($scope) {
//   $scope.huhu = "Chúc Mừng Năm Mới";
// }
//Sử dụng agular JS
//Định nghĩa agularjs
var app = angular.module("myapp", []);
app.controller("demoController", myInfor);
//1 Đối Tượng
app.controller("sonDauVang", function ($scope) {
  $scope.huhu = "Sơn Đẹp Trai ";
  $scope.infor = {
    ten: "Sơn Đẹp Zai",
    tuoi: "19",
    email: "sondinhson11@gmail.com",
    sdt: "0862521305",
    nganh: "Ứng Dụng Phần Mếm",
  };
  //1 mảng đối tượng
  $scope.infors = [
    {
      ten: "Sơn",
      tuoi: "19",
    },
    {
      ten: "Nguyện",
      tuoi: "19",
    },
    {
      ten: "Phước",
      tuoi: "19",
    },
    {
      ten: "Thế Anh",
      tuoi: "19",
    },
  ];
});
