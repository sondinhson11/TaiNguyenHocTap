window.sanpham = function ($scope, $http, $location) {
  $scope.sp = "Sản Phẩm";
  var apiURL = "http://localhost:3000/sanpham";
  $scope.getData = function () {
    $http.get(apiURL).then(function (response) {
      $scope.DSSanPham = response.data;
    });
  };
  $scope.getData();
  $scope.KTDuLieu = {
    name: false,
    price: false,
    cateoryName: false,
  };
  $scope.setText = function () {
    $scope.inputValue = {
      name: "",
      price: "",
      cateoryName: "",
    };
    $scope.editID = 0;
  };
  $scope.onThem = function () {
    var flag = false;
    if (!$scope.inputValue || !$scope.inputValue.name) {
      $scope.KTDuLieu.name = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.price) {
      $scope.KTDuLieu.price = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.cateoryName) {
      $scope.KTDuLieu.cateoryName = true;
      flag = true;
    }

    if (flag == false) {
      $scope.KTDuLieu.name = false;
      $scope.KTDuLieu.price = false;
      $scope.KTDuLieu.cateoryName = false;
      var editID = $scope.editID;
      if (editID) {
        var updateItem = {
          name: $scope.inputValue.name,
          price: Number($scope.inputValue.price),
          cateoryName: $scope.inputValue.cateoryName,
        };
        $http.put(`${apiURL}/${editID}`, updateItem).then(function (response) {
          $location.path("sanpham");
          $scope.getData();
        });
        swal("Thông Báo!", "Sửa Thành Công", "success");
        $scope.setText();
        return;
      }
      var newItem = {
        name: $scope.inputValue.name,
        price: Number($scope.inputValue.price),
        cateoryName: $scope.inputValue.cateoryName,
      };
      $http.post(apiURL, newItem).then(function (response) {
        $location.path("sanpham");
        $scope.getData();
      });
      swal("Thông Báo!", "Thêm Thành Công", "success");
      $scope.setText();
    }
  };
  $scope.onSua = function (editID) {
    $scope.editID = editID;
    $http.get(`${apiURL}/${editID}`).then(function (response) {
      $scope.inputValue = {
        name: response.data.name,
        price: response.data.price,
        cateoryName: response.data.cateoryName,
      };
    });
  };
  $scope.onXoa = function (deleteID) {
    var confirm = window.confirm("Bạn đã muốn xoá chưa");
    if (confirm) {
      $http.delete(`${apiURL}/${deleteID}`).then(function (response) {
        $location.path("sanpham");
        $scope.getData();
      });
      swal("Thông Báo!", "Xoá Thành Công", "success");
    }
  };
};
