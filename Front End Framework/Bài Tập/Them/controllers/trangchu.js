window.trangchu = function ($scope) {
  $scope.DSKhachHang = [
    {
      id: 1,
      ten: "Văn Đình Sơn",
      namsinh: "2002",
      diachi: "Sầm Sơn",
    },
  ];
  $scope.KTDuLieu = {
    ten: false,
    namsinh: false,
    namsinhCheck: false,
    diachi: false,
  };
  $scope.setText = function () {
    $scope.inputValue = {
      ten: "",
      namsinh: "",
      diachi: "",
    };
  };
  $scope.onSubmit = function () {
    if (
      !$scope.inputValue ||
      !$scope.inputValue.ten ||
      !$scope.inputValue ||
      !$scope.inputValue.namsinh ||
      !$scope.inputValue ||
      !$scope.inputValue.diachi
    ) {
      $scope.KTDuLieu.ten = true;
      $scope.KTDuLieu.namsinh = true;
      $scope.KTDuLieu.diachi = true;
    } else if ($scope.inputValue.namsinh <= 0) {
      $scope.KTDuLieu.namsinhCheck = true;
    } else {
      $scope.KTDuLieu.ten = false;
      $scope.KTDuLieu.namsinh = false;
      $scope.KTDuLieu.diachi = false;
      var ds = $scope.DSKhachHang;
      var newID = ds.length > 0 ? ds[ds.length - 1].id + 1 : 1;
      var newItem = {
        id: newID,
        ten: $scope.inputValue.ten,
        namsinh: $scope.inputValue.namsinh,
        diachi: $scope.inputValue.diachi,
      };
      $scope.DSKhachHang.push(newItem);
      $scope.setText();
    }
  };
};
