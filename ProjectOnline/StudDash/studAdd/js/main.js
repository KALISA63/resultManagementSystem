function addStudent() {
  alert("Hello again");
const email = document.getElementById("inputEmail1").value;
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const gender = document.getElementById("gender").value;
const password = document.getElementById("password").value;
const bloodGroup=document.getElementById('bloodGroup').value;
const course=document.getElementById('course').value;
const phone=document.getElementById('telNum').value;
const dateOfBirth=document.getElementById('calender').value;
const religion=document.getElementById('relig').value;
const depart=document.getElementById('depart').value;
const studentId=document.getElementById('regNum').value;
// const image=document.getElementById('uploadImage').value;



//   alert("email");

console.log("email", email);
console.log("firstName",firstName);
console.log("lastName",lastName);
console.log("gender",gender);
console.log("password",password);
console.log("bloodGroup",bloodGroup);
console.log("course",course);
console.log("telNum",phone);
// console.log("uploadImage",image);
console.log("relig",religion);
console.log("depart",depart);
console.log("calender",dateOfBirth);
console.log("regNum",studentId);


//   if (email !== "" && password !== "") {
  console.log("submit successfull");

  axios({
    method: "POST",
    url: "https://studenttresult-mgt.onrender.com/user/register",
    data: {
      firstName:firstName,
      lastName:lastName,
      gender:gender,
      bloodGroup:bloodGroup,
      phoneNum:phone,
      email:email,
      password:password, 
      course:course,
      DoB:dateOfBirth,
      religion:religion,
      section:depart,
      studId:studentId,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}




