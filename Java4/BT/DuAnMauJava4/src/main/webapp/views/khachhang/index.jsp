<%--
  Created by IntelliJ IDEA.
  User: ThisPC
  Date: 3/9/2023
  Time: 5:14 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <title>Khách Hàng</title>
</head>
<body>
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <center>
            <h1>Khách Hàng</h1>
            </center>
        </div>
        <div class="col-md-4"></div>
    </div>
    <br>
    <div class="row">
        <div class="col-md-12">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Họ Và Tên</th>
                    <th scope="col">Địa Chỉ</th>
                    <th scope="col">Số Điện Thoại</th>
                    <th scope="col">Mật Khẩu</th>
                    <th scope="col">Thành Phố</th>
                    <th scope="col">Quốc Gia</th>
                    <th scope="col">Ngày Sinh</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">KH1</th>
                    <td>Văn Đình Sơn</td>
                    <td>Sầm Sơn</td>
                    <td>0862521305</td>
                    <td>As121202</td>
                    <td>Thanh Hóa</td>
                    <td>Việt Nam</td>
                    <td>10-01-2003</td>

                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <center>
                <a href="khachhang/create">Thêm</a> |
                <a href="khachhang/edit">Sửa</a>
<%--                <a href="khachhang/create">Thêm</a>--%>
            </center>
        </div>
        <div class="col-md-4"></div>
    </div>
    </script>
</body>
</html>
