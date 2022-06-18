var a = localStorage.getItem("name")//lay tu trong may ra

var label = document.getElementById("username-login")
if (a) {
    label.innerHTML = a
}


document.getElementById("logout").onclick = function() {
    localStorage.removeItem("name")
    label.innerHTML = "Đăng nhập"
}