window.dangky = function ($scope) {
  $scope.dk = "Đăng Ký";
  $scope.xet2 = function () {
    if ($scope.hoten == undefined) {
      swal("Thông Báo!", "Không được để trống tên!", "error");
    } else {
      if ($scope.sdt == undefined) {
        swal("Thông Báo!", "Không được để trống sđt", "error");
      } else {
        if ($scope.email == undefined) {
          swal("Thông Báo!", "Không để trống email", "error");
        } else {
          if ($scope.idfb == undefined) {
            swal("Thông Báo!", "Không được để trống link FB", "error");
          } else {
            swal("Thông Báo!", "Đăng ký thành công", "success");
          }
        }
      }
    }
  };
};
