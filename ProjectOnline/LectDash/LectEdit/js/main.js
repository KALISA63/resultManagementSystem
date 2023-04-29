// let id = window.location.search.split("=")[1]
// console.log(id, "ID");


// function updateLecture() {

//     alert("Hello again");
//       const email = document.getElementById("inputEmail1").value;
//       const firstName = document.getElementById("firstName").value;
//       const lastName = document.getElementById("lastName").value;
//       const gender = document.getElementById("gender").value;
//       const password = document.getElementById("password").value;
//       const lectureId=document.getElementById('lectId').value;
//       const bloodGroup=document.getElementById('bloodGroup').value;
//       const course=document.getElementById('course').value;
//       const phone=document.getElementById('telNum').value;
//       const image=document.getElementById('uploadImage').value;
    
    
    
//     //   alert("email");
    
//       console.log("email", email);
//       console.log("firstName",firstName);
//       console.log("lastName",lastName);
//       console.log("gender",gender);
//       console.log("password",password);
//       console.log("lectId",lectureId);
//       console.log("bloodGroup",bloodGroup);
//       console.log("course",course);
//       console.log("telNum",phone);
//       console.log("uploadImage",image);

//     axios({
//         method: "PATCH",
//         url: `https://online-result-management-system.onrender.com/users/updateById/${id}`,
//         data: {
//             firstName:firstName,
//             lastName:lastName,
//             lectId:lectureId,
//             gender:gender,
//             bloodGroup:bloodGroup,
//             phoneNum:phone,
//             email:email,
//             password:password 
//         },
//     })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
// }

let id = window.location.search.split("=")[1]
console.log(id, "ID");

const url = window.location.href;
const subjectId = url.split("?")[1];
console.log("lectId",lectId);

const form = document.querySelector(".editForm");
form.addEventListener("submit",(e) =>{
e.preventDefault();
      const email = document.getElementById("inputEmail1").value;
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const gender = document.getElementById("gender").value;
      const password = document.getElementById("password").value;
      const lectureId=document.getElementById('lectId').value;
      const bloodGroup=document.getElementById('bloodGroup').value;
      const course=document.getElementById('course').value;
      const phone=document.getElementById('telNum').value;
      // const image=document.getElementById('uploadImage').value;

      const data ={
            firstName:firstName,
            lastName:lastName,
            lectId:lectureId,
            gender:gender,
            bloodGroup:bloodGroup,
            phoneNum:phone,
            email:email,
            password:password,
            course:course,
      }
        axios({
        method: "PATCH",
        url: `https://online-result-management-system.onrender.com/users/updateById/${lectId}`,
        data:data,
      })
      .then((res) => {
          console.log(res.data);
      })
      .catch((error) => {
          console.log(error);
          console.log(error.message);
      });
      });

//Getting lecture by Id

window.onload = (event) =>{
  if(lectId){
    getByLectId(lectId)
  }
  }
  
  
  function getByLectId(lectId){
      axios({
          method: "GET",
          url: `https://online-result-management-system.onrender.com/users/findById/${lectId}`,
  })
  .then((res)=>{
    console.log("LECTURE", res.data);
    document.getElementById("inputEmail1").value=res.data.email,
    document.getElementById("firstName").value=res.data.firstName,
    document.getElementById("lastName").value=res.data.lastName,
    document.getElementById("gender").value=res.data.gender,
    document.getElementById("password").value=res.data.password,
    document.getElementById('lectId').value=res.data.lectId,
    document.getElementById('bloodGroup').value=res.data.bloodGroup,
    document.getElementById('course').value=res.data.course,
    document.getElementById('telNum').value=res.data.phoneNum
  })
  .catch((error) => {
    console.log(error);
});

}

