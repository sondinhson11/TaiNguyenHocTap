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
    <link rel="stylesheet" href="/DuAnMauJava4_war_exploded/css/bootstrap.min.css">
    <title>Cửa Hàng</title>
</head>
<body>
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <center>
            <h1>Cửa Hàng</h1>
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
                    <th scope="col">Mã</th>
                    <th scope="col">Tên Cửa Hàng</th>
                    <th scope="col">Địa Chỉ</th>
                    <th scope="col">Thành Phố</th>
                    <th scope="col">Quốc Gia</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">CH1</th>
                    <td>Shop Nè</td>
                    <td>112 Đoàn Thị Điểm</td>
                    <td>Thanh Hóa</td>
                    <td>Việt Nam</td>

                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <center>
                <a href="../cuahang/create">Thêm</a> |
                <a href="../cuahang/edit">Sửa</a>
<%--                <a href="khachhang/create">Thêm</a>--%>
            </center>
        </div>
        <div class="col-md-4"></div>
    </div>
    </script>
</body>
</html>
