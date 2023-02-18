window.trangchu = function ($scope, $http, $location) {
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
        // $scope.DSKhachHang.forEach((element) => {
        //   if (element.id == editID) {
        //     element.id = editID;
        //     element.ten = $scope.inputValue.ten;
        //     element.namsinh = Number($scope.inputValue.namsinh);
        //     element.diachi = $scope.inputValue.diachi;
        //   }
        // });
        var updateItem = {
          ten: $scope.inputValue.ten,
          namsinh: Number($scope.inputValue.namsinh),
          diachi: $scope.inputValue.diachi,
        };
        $http.put(`${apiURL}/${editID}`, updateItem).then(function (response) {
          if (response.status == 200) {
            console.log(123);
            $location.path("#!/");
            $scope.getData();
          }
        });
        $scope.setText();
        return;
      }
      $scope.KTDuLieu.ten = false;
      $scope.KTDuLieu.namsinh = false;
      $scope.KTDuLieu.namsinhCheck = false;
      $scope.KTDuLieu.diachi = false;
      // var ds = $scope.DSKhachHang;
      // var newID = ds.length > 0 ? ds[ds.length - 1].id + 1 : 1;
      var newItem = {
        // id: newID,
        ten: $scope.inputValue.ten,
        namsinh: Number($scope.inputValue.namsinh),
        diachi: $scope.inputValue.diachi,
      };
      // $scope.DSKhachHang.push(newItem);
      $http.post(apiURL, newItem).then(function (response) {
        swal("Thành Công!", "Chúc mừng bạn đã đăng ký thành công!", "success");
        $location.path("#!/");
        $scope.getData();
      });
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
    // $scope.DSKhachHang.forEach((element) => {
    //   if (element.id == editID) {
    //     editItem.id = editID;
    //     editItem.ten = element.ten;
    //     editItem.namsinh = Number(element.namsinh);
    //     editItem.diachi = element.diachi;
    //   }
    // });
    $http.get(`${apiURL}/${editID}`).then(function (response) {
      if (response.status == 200) {
        $scope.inputValue = {
          id: editID,
          ten: response.data.ten,
          namsinh: Number(response.data.namsinh),
          diachi: response.data.diachi,
        };
      }
    });
  };
  $scope.onXoa = function (deleteID) {
    var confirm = window.confirm("bạn có muốn xoá k");
    if (confirm) {
      $http.delete(`${apiURL}/${deleteID}`).then(function (response) {
        // console.log(response.data);
        $location.path("#!/");
        $scope.getData();
      });
      // $scope.DSKhachHang = $scope.DSKhachHang.filter(function (item) {
      //   return item.id !== deleteID;
      // });
    }
  };
};
