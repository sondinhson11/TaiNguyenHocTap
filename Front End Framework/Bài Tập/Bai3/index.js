// alert("hello world")
// console.log("Anh sơn đẹp trai")
//doom
// let a = document.getElementsByTagName('h1')
// console.log(a[1].innerHTML)
// a.item(0).innerText="Anh Sơn Đẹp Trai"

// let b = document.getElementsByClassName('test')
// console.log(b)
// b[0].style.color = "red"

// let c = document.getElementById('test')
// console.log(c.innerHTML)
// let a = document.getElementsByTagName('h1')

function click11(){
    let a = document.getElementById('dai').value
    let b = document.getElementById('rong').value
    if(a==""){
        swal("Lỗi", "Không để trống chiều dài", "error");
    }else if(b==""){
        swal("Lỗi", "Không để trống chiều rộng", "error");
    }else{
        swal("Thành Công", "Diện Tích là: "+Number(a*b), "success");
    }
    
}