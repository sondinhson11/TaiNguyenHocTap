window.trangchu = function ($scope, $http) {
  // $scope.DSKhachHang = [
  //   {
  //     id: 1,
  //     ten: "Văn Đình Sơn",
  //     namsinh: 2002,
  //     diachi: "Sầm Sơn",
  //   },
  // ];
  var apiURL = "http://localhost:3000/sinhviens/";
  $scope.getData = function () {
    $http.get(apiURL).then(function (response) {
      $scope.DSKhachHang = response.data;
      console.log(response.data);
    });
  };
  $scope.getData();
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
    $scope.editID = 0;
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
      $scope.KTDuLieu.ten = false;
      $scope.KTDuLieu.namsinh = false;
      $scope.KTDuLieu.diachi = false;
    } else {
      var editID = $scope.editID;
      if (editID) {
        $scope.DSKhachHang.forEach((element) => {
          if (element.id == editID) {
            element.id = editID;
            element.ten = $scope.inputValue.ten;
            element.namsinh = Number($scope.inputValue.namsinh);
            element.diachi = $scope.inputValue.diachi;
          }
        });
        $scope.setText();
        return;
      }
      $scope.KTDuLieu.ten = false;
      $scope.KTDuLieu.namsinh = false;
      $scope.KTDuLieu.namsinhCheck = false;
      $scope.KTDuLieu.diachi = false;
      var ds = $scope.DSKhachHang;
      var newID = ds.length > 0 ? ds[ds.length - 1].id + 1 : 1;
      var newItem = {
        id: newID,
        ten: $scope.inputValue.ten,
        namsinh: Number($scope.inputValue.namsinh),
        diachi: $scope.inputValue.diachi,
      };
      swal("Thành Công!", "Chúc mừng bạn đã đăng ký thành công!", "success");
      $scope.DSKhachHang.push(newItem);
      $scope.setText();
    }
  };
  $scope.onSua = function (editID) {
    $scope.editID = editID;
    var editItem = {
      id: "",
      ten: "",
      namsinh: "",
      diachi: "",
    };
    $scope.DSKhachHang.forEach((element) => {
      if (element.id == editID) {
        editItem.id = editID;
        editItem.ten = element.ten;
        editItem.namsinh = Number(element.namsinh);
        editItem.diachi = element.diachi;
      }
    });
    $scope.inputValue = {
      id: editID,
      ten: editItem.ten,
      namsinh: editItem.namsinh,
      diachi: editItem.diachi,
    };
  };
  $scope.onXoa = function (deleteID) {
    var confirm = window.confirm("bạn có muốn xoá k");
    if (confirm) {
      $scope.DSKhachHang = $scope.DSKhachHang.filter(function (item) {
        return item.id !== deleteID;
      });
    }
  };
};
