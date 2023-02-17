window.lienhe = function ($scope) {
  $scope.lienhe = "LIÊN HỆ";

  $scope.KTDuLieu = {
    hoten: false,
    email: false,
    tieude: false,
    noidung: false,
  };
  $scope.SubmitOn = function () {
    var flag = false;
    if (!$scope.inputValue || !$scope.inputValue.hoten) {
      $scope.KTDuLieu.hoten = true;
      flag = true;
    }

    if (!$scope.inputValue || !$scope.inputValue.email) {
      $scope.KTDuLieu.email = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.tieude) {
      $scope.KTDuLieu.tieude = true;
      flag = true;
    }

    if (!$scope.inputValue || !$scope.inputValue.noidung) {
      $scope.KTDuLieu.noidung = true;
      flag = true;
    }
    if (flag == false) {
      $scope.KTDuLieu.hoten = false;
      $scope.KTDuLieu.email = false;
      $scope.KTDuLieu.tieude = false;
      $scope.KTDuLieu.noidung = false;
      swal("Thông Báo!", "Phiếu liên hệ được gửi thành công", "success");
    }
  };
};
