window.dangky = function ($scope, $http, $location) {
  var apiURL = "http://localhost:3000/sinhviens/";
  $scope.getData = function () {
    $http.get(apiURL).then(function (response) {
      $scope.DSSinhVien = response.data;
    });
  };
  $scope.getData();
  $scope.KTDuLieu = {
    hoten: false,
    sdt: false,
    sdtcheck: false,
    email: false,
    emailcheck: false,
    cccd: false,
    cccdcheck: false,
    idfb: false,
  };
  $scope.setText = function () {
    $scope.inputValue = {
      hoten: "",
      sdt: "",
      email: "",
      cccd: "",
      idfb: "",
    };
    $scope.editID = 0;
  };

  $scope.dk = "ĐĂNG KÝ";
  $scope.tt = "THÔNG TIN";
  $scope.onSubmit = function () {
    var flag = false;
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var sdtform = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (!$scope.inputValue || !$scope.inputValue.hoten) {
      $scope.KTDuLieu.hoten = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.sdt) {
      $scope.KTDuLieu.sdt = true;
      flag = true;
    }

    if (!$scope.inputValue || !$scope.inputValue.email) {
      $scope.KTDuLieu.email = true;
      flag = true;
    }

    if (!$scope.inputValue || !$scope.inputValue.cccd) {
      $scope.KTDuLieu.cccd = true;
      flag = true;
    }

    if (!$scope.inputValue || !$scope.inputValue.idfb) {
      $scope.KTDuLieu.idfb = true;
      flag = true;
    }
    if (
      $scope.inputValue != undefined &&
      sdtform.test($scope.inputValue.sdt) == false
    ) {
      $scope.KTDuLieu.sdt = false;
      $scope.KTDuLieu.sdtcheck = true;
      flag = true;
    }
    if (
      $scope.inputValue != undefined &&
      reg.test($scope.inputValue.email) == false
    ) {
      $scope.KTDuLieu.email = false;
      $scope.KTDuLieu.emailcheck = true;
      flag = true;
    }
    if (
      $scope.inputValue != undefined &&
      isNaN($scope.inputValue.cccd) == true
    ) {
      $scope.KTDuLieu.cccd = false;
      $scope.KTDuLieu.cccdcheck = true;
      flag = true;
    }
    if (flag == false) {
      $scope.KTDuLieu.hoten = false;
      $scope.KTDuLieu.sdt = false;
      $scope.KTDuLieu.email = false;
      $scope.KTDuLieu.cccd = false;
      $scope.KTDuLieu.idfb = false;
      $scope.KTDuLieu.emailcheck = false;
      $scope.KTDuLieu.cccdcheck = false;
      $scope.KTDuLieu.sdtcheck = false;
      var nganhvalue = document.getElementById("nganh").value;
      var cosovalue = document.getElementById("coso").value;
      var editID = $scope.editID;
      if (editID) {
        console.log(nganhvalue);
        var updateItem = {
          hoten: $scope.inputValue.hoten,
          sdt: $scope.inputValue.sdt,
          email: $scope.inputValue.email,
          cccd: $scope.inputValue.cccd,
          nganh: nganhvalue,
          coso: cosovalue,
          idfb: $scope.inputValue.idfb,
        };
        $http.put(`${apiURL}/${editID}`, updateItem).then(function (response) {
          if (response.status == 200) {
            $location.path("dangky");
            $scope.getData();
          }
        });
        swal("Thông Báo!", "Sửa Đơn Thành Công", "success");
        $scope.setText();
        return;
      }

      var newItem = {
        hoten: $scope.inputValue.hoten,
        sdt: $scope.inputValue.sdt,
        email: $scope.inputValue.email,
        cccd: $scope.inputValue.cccd,
        nganh: nganhvalue,
        coso: cosovalue,
        idfb: $scope.inputValue.idfb,
      };
      $http.post(apiURL, newItem).then(function (response) {
        if (response.status == 200) {
          $location.path("dangky");
          $scope.getData();
        }
      });
      swal("Thông Báo!", "Đăng ký thành công", "success");
      $scope.setText();
    }
  };
  $scope.onSua = function (editID) {
    $scope.editID = editID;
    var editItem = {
      hoten: "",
      sdt: "",
      email: "",
      cccd: "",
      nganh: "",
      coso: "",
      idfb: "",
    };
    $http.get(`${apiURL}/${editID}`).then(function (response) {
      if (response.status == 200) {
        $scope.inputValue = {
          id: editID,
          hoten: response.data.hoten,
          sdt: response.data.sdt,
          email: response.data.email,
          cccd: response.data.cccd,
          nganh: response.data.nganh,
          coso: response.data.coso,
          idfb: response.data.idfb,
        };
      }
    });
  };
  $scope.options = [
    { id: 0, label: "15", value: 15 },
    { id: 1, label: "30", value: 30 },
    { id: 2, label: "60", value: 60 },
  ];

  $scope.countSelector = $scope.options[0];

  $scope.changeCount = function (obj) {
    obj = JSON.parse(obj);
    console.log(obj);
    console.log(countSelector);
    $options.set("productCountPerPageValue", obj.value);
    $options.set("productCountPerPage", obj.id);
  };
  $scope.onXoa = function (deleteID) {
    var confirm = window.confirm("Bạn có muốn xóa đơn này");
    if (confirm) {
      $http.delete(`${apiURL}/${deleteID}`).then(function (response) {
        if (response.status == 200) {
          $location.path("dangky");
          $scope.getData();
        }
      });
    }
  };
};
