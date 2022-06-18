
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


function validateForm(){

    clearMessage();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Tên không được để trống";
        nameInput.classList.add("error-boder");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Email không hợp lệ";
        email.classList.add("error-boder");
        errorFlag = true;
    }

    if(message.value.length < 1){
        errorNodes[2].innerText = "Vui lòng nhập tin nhắn";
        message.classList.add("error-boder");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Cảm ơn bạn đã gửi tin nhắn cho tôi!"
    }
}

function clearMessage(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-boder");
    email.classList.remove("error-boder");
    message.classList.remove("error-boder");
}

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}