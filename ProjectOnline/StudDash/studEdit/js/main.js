let id = window.location.search.split("=")[1]
console.log(id, "ID");


const url=window.location.href;
const regNum=url.split("?")[1];
console.log("studId",studId);

const form = document.querySelector(".editStudent");
form.addEventListener("submit",(e)=>{
    e.preventDefault();

      // alert("Hello again");
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

const data={
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
}
axios({
    method:"PATCH",
    url:`https://online-result-management-system.onrender.com/users/updateById/${studentId}`,
    data:data
})
.then((res)=>{
    console.log(res.data);
})
.catch((error)=>{
    console.log(error);
    console.log(error.message);
});
});

//getStudentById

function getStudentById(studId){
    axios({
        url:`https://online-result-management-system.onrender.com/users/findById/${studId}`
    })
    .then((res)=>{
        console.log("STUDENT", res.data);
        document.getElementById("regNum").value=res.data.studId;
        document.getElementById("inputEmail1").value=res.data.email;
        document.getElementById("firstName").value=res.data.firstName;
        document.getElementById("lastName").value=res.data.lastName;
        document.getElementById("gender").value=res.data.gender;
        document.getElementById("password").value=res.data.password;
        document.getElementById('bloodGroup').value=res.data.bloodGroup;
        document.getElementById('course').value=res.data.course;
        document.getElementById('telNum').value=res.data.phoneNum;
        document.getElementById('calender').value=res.data.DoB;
        document.getElementById('relig').value=res.data.religion;
        document.getElementById('depart').value=res.data.section;
    })
    .catch((error)=>{
        console.log(error);
        console.log(error.message);
    });
}