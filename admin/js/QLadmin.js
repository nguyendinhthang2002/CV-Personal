function resetInput(){
  document.getElementById("accout").value = ""
  document.getElementById("password").value = ""
}

function validateInput(){
  let formElement = document.querySelector(".form")
  let inputElement = formElement.querySelectorAll(".form-input")
  for(let i = 0; i < inputElement.length; i++){
      if(inputElement[i].value===""){
          inputElement[i].parentElement.querySelector(".error-message").innerText = `please enter ${inputElement[i].id}!`
      }else{
          inputElement[i].parentElement.querySelector(".error-message").innerText = ''
      }
  }
}

function addNew(){
  validateInput()
  let formElement = document.querySelector(".form")
  let errorElement = formElement.querySelectorAll(".error-message")
  let arrErrorElement = []
  for (let i = 0; i < errorElement.length; i++) {
      arrErrorElement.push(errorElement[i].innerText)
  }
  let checkErrorElement = arrErrorElement.every(value=>value === "")
  if(checkErrorElement){
      //save data
      let accout = document.getElementById("accout").value
      let password = document.getElementById("password").value
      let listMember = localStorage.getItem("list-member") ? JSON.parse(localStorage.getItem("list-member")) : []
      listMember.push({
          accout: accout,
          password: password
      })
      localStorage.setItem("list-member", JSON.stringify(listMember))
      renderMember()
      resetInput()
  }
}

function renderMember(){
  let listMember = localStorage.getItem("list-member") ? JSON.parse(localStorage.getItem("list-member")) : []
  let member = `<tr>
                      <th>ID</th>
                      <th>Accout</th>
                      <th>Password</th>
                      <th>Action</th>
                  </tr>`
  listMember.map((value, index)=>{
      member += `<tr>
                      <td>${index + 1}</td>
                      <td>${value.accout}</td>
                      <td>${value.password}</td>
                      <td>
                          <button onclick="editMember(${index})">Edit</button>
                          <button onclick="deleteMember(${index})">Delete</button>
                      </td>
                  </tr>`
  })

  document.getElementById("tableContent").innerHTML = member
}


function editMember(index) {
  //console.log(index)
  let listMember = localStorage.getItem("list-member") ? JSON.parse(localStorage.getItem("list-member")) : []
  document.getElementById("accout").value = listMember[index].accout
  document.getElementById("password").value = listMember[index].password
  document.getElementById("index").value = index

  document.getElementById("save").style.display = "none"
  document.getElementById("update").style.display = "inline-block"
}

function changeMember() {
  let listMember = localStorage.getItem("list-member") ? JSON.parse(localStorage.getItem("list-member")) : []
  let index = document.getElementById("index").value
  listMember[index]={
      accout: document.getElementById("accout").value,
      password: document.getElementById("password").value
  }
  localStorage.setItem("list-member", JSON.stringify(listMember))
  document.getElementById("save").style.display = "inline-block"
  document.getElementById("update").style.display = "none"
  renderMember()
  resetInput()
}

function deleteMember(index){
  let listMember = localStorage.getItem("list-member") ? JSON.parse(localStorage.getItem("list-member")) : []
  if(confirm("Bạn có chắc chắn muốn xóa?")){
      listMember.splice(index, 1)
  }
  localStorage.setItem("list-member", JSON.stringify(listMember))
  renderMember()
}