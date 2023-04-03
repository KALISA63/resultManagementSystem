function addStudent() {
//   alert("Hello again");
  const email = document.getElementById("inputEmail1").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const gender = document.getElementById("gender").value;
  const dateBirth = document.getElementById("DoB").value;
  const regNum=document.getElementById('rollNum').value;
  const bloodGroup=document.getElementById('bloodGroup').value;
  const religion=document.getElementById('Religion').value;
  const classRoom=document.getElementById('classRoom').value;
  const section=document.getElementById('Section').value;
  const admission=document.getElementById('admission').value;
  const phoneNum=document.getElementById('phoneNum').value;
  const image=document.getElementById('uploadImage').value;



//   alert("email");

  console.log("email", email);
  console.log("firstName",firstName);
  console.log("lastName",lastName);
  console.log("gender",gender);
  console.log("BoD1",dateBirth);
  console.log("rollNum",regNum);
  console.log("bloodGroup",bloodGroup);
  console.log("Religion",religion);
  console.log("classRoom",classRoom);
  console.log("Section",section);
  console.log("admission",admission);
  console.log("phoneNum",phoneNum);
  console.log("uploadImage",image);


//   if (email !== "" && password !== "") {
    console.log("submit successfull");

    axios({
      method: "POST",
      url: "https://studenttresult-mgt.onrender.com/admin/regStud",
      data: {
        email: email,
        firstName:firstName,
        lastName:lastName,
        gender:gender,
        DoB:dateBirth,
        bloodGroup:bloodGroup,
        religion:religion,
        phoneNum:phoneNum,
        Section:section,
        password:regNum,      
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
}




