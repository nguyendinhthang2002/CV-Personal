// check validation Account
function CheckOnblurAccount(){
    var Node=document.getElementById('myForm');
    var account=document.getElementById('account').value;
    var errorAcount=document.getElementById('errorAccount');
    // biểu thức chính quy ktra tài khoản   (a-z), số (0-9), dấu gạch dưới hoặc dấu gạch nối. 
    var regex = /^[a-z0-9_-]{3,16}$/;

    if(account==''){
        errorAcount.innerHTML='bạn chưa nhập tài khoản!';
        errorAcount.style.color='red';
        Node.classList.add('invalidAccount');
        Node.classList.remove('validAccount');
    }else if(!regex.test(account)){
        errorAcount.innerHTML='Tên Tk phải bắt đầu bằng (a-z) hoặc số (0-9)!';
        errorAcount.style.color='red';
        Node.classList.add('invalidAccount');
        Node.classList.remove('validAccount');
    }else{
        errorAcount.innerHTML='';
        Node.classList.remove('invalidAccount');
        Node.classList.add('validAccount');

    }
}

// check validation PassWord
function CheckOnblurPass(){
    var Node=document.getElementById('myForm');
    var password=document.getElementById('password').value;
    var errorPassword=document.getElementById('errorPassword');

    // biểu thức chính quy cho pass yc tối thiếu tám ký tự.it nhất chữ cái  hoặc số 
    var regex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(password==''){
        errorPassword.innerHTML='Bạn chưa nhập mật khẩu!';
        errorPassword.style.color='red';
        Node.classList.add('invalidPass');
        Node.classList.remove('validPass');
    }else if(!regex.test(password)){
        errorPassword.innerHTML='Mật khẩu tối thiểu phải có 8 ký tự, ít nhất 1 chữ cái,1 số!';
        errorPassword.style.color='red';
        Node.classList.add('invalidPass');
        Node.classList.remove('validPass');
    }else{
        errorPassword.innerHTML='';
        Node.classList.remove('invalidPass');
        Node.classList.add('validPass');
    }
}


function CheckOnblurConfirmPass(){
    var Node=document.getElementById('myForm');
    var errorPassword=document.getElementById('errorPassword1');
    var password=document.getElementById('password').value;
    var confirmpassword=document.getElementById('confirmpassword').value;
    // console.log(Node)
    // console.log(errorPassword)
    console.log(password)
    console.log(confirmpassword)

    if(confirmpassword==''||confirmpassword==null){
        errorPassword.style.color='red';
        Node.classList.add('invalidConfirmPass');
        Node.classList.remove('validConfirmPass');
    }else if(confirmpassword!=password){
        errorPassword.innerHTML='Mật khẩu không khớp!';
        errorPassword.classList.add("invalidConfirmPass");
        Node.classList.remove('validConfirmPass');
        errorPassword.style.color='red';
    }else{
        errorPassword.innerHTML='';
        errorPassword.classList.remove("invalidConfirmPass");
        Node.classList.add('validConfirmPass');
    }
}

function CheckAP(){
    var input=document.getElementsByTagName('input');
    console.log(input)

    var input0=input[0].value;
    var input1=input[1].value;
    var input2=input[2].value;

    if(input0==''||input1==''||input2==''){
        alert('Hãy nhập đầy đủ thông tin');
    }
    else if(input1==input2){
        alert('Tài khoản của bạn đã đăng ký thành công!')
    }
    else if(input1!=input2){
        alert('Mật khẩu không khớp!')
    }
}

