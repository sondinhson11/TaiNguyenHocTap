window.tintucC = function ($scope) {
  $scope.tintuc = [
    { id: 1, tieude: "Đây là tin tức id 1", mota: "Mô tả id 1" },
    { id: 2, tieude: "Đây là tin tức id 2", mota: "Mô tả id 2" },
  ];
  $scope.kiemtraDL = {
    tieude: false,
    mota: false,
  };
  $scope.onSubmit = function () {
    if (!$scope.inputValue || $scope.inputValue.tieude) {
      $scope.kiemtraDL.tieude = true;
    }
    if (!$scope.inputValue || $scope.inputValue.mota) {
      $scope.kiemtraDL.mota = true;
    }
    var ds = $scope.tintuc;
    var newID = ds.length > 0 ? ds[ds.length - 1].id + 1 : 1;
    var newItem = {
      id: newID,
      tieude: $scope.inputValue.tieude,
      mota: $scope.inputValue.mota,
    };
    $scope.tintuc.push(newItem);
  };
};
