function click11() {
  let ten = document.getElementById("ten").value;
  let gioitinh = document.getElementById("gioitinh").value;
  let namsinh = document.getElementById("namsinh").value;
  if (ten == "") {
    swal("Lỗi", "Không để trống tên", "error");
  } else if (namsinh == "") {
    swal("Lỗi", "Không để trống năm Sinh", "error");
  } else {
    if (gioitinh == "Nam") {
      if (
        new Date().getFullYear() - Number(namsinh) >= 18 &&
        new Date().getFullYear() - Number(namsinh) <= 27
      ) {
        swal(
          "Thành Công",
          "Ông " + ten + " đủ điều kiện đi nghĩa vụ quân sự",
          "success"
        );
      } else {
        swal(
          "Không Thành Công",
          "Ông " + ten + " không đủ điều kiện đi nghĩa vụ quân sự",
          "error"
        );
      }
    } else {
      if (
        new Date().getFullYear() - Number(namsinh) >= 18 &&
        new Date().getFullYear() - Number(namsinh) <= 27
      ) {
        swal(
          "Thành Công",
          "Bà " + ten + " đủ điều kiện đi nghĩa vụ quân sự",
          "success"
        );
      } else {
        swal(
          "Không Thành Công",
          "Bà " + ten + " không đủ điều kiện đi nghĩa vụ quân sự",
          "error"
        );
      }
    }
  }
}
