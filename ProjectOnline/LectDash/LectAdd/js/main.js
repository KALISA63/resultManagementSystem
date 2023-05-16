function addLecture() {
      // alert("Hello again");
      const email = document.getElementById("Email").value;
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const gender = document.getElementById("gender").value;
      const password = document.getElementById("password").value;
      const lectureId=document.getElementById('lectId').value;
      const bloodGroup=document.getElementById('bloodGroup').value;
      const course=document.getElementById('course').value;
      const phone=document.getElementById('telNum').value;
      // const dateOfBirth=document.getElementById('calender').value;
      // const religion=document.getElementById('relig').value;
      // const depart=document.getElementById('depart').value;
      // const image=document.getElementById('uploadImage').value;
    
    
    
    //   alert("email");
    
      console.log("email", email);
      console.log("firstName",firstName);
      console.log("lastName",lastName);
      console.log("gender",gender);
      console.log("password",password);
      console.log("lectId",lectureId);
      console.log("bloodGroup",bloodGroup);
      console.log("course",course);
      console.log("telNum",phone);
      // console.log("uploadImage",image);
      // console.log("relig",religion);
      // console.log("depart",depart);
      // console.log("calender",dateOfBirth);


// WHERE YOU WILL NEED TOKEN
axios({
  method: "POST",
  url: "https://online-result-management-system.onrender.com/users/register",
  data: {
    firstName:firstName,
    lastName:lastName,
    lectId:lectureId,
    gender:gender,
    bloodGroup:bloodGroup,
    phoneNum:phone,
    email:email,
    password:password, 
    course:course,
    // DoB:dateOfBirth,
    // religion:religion,
    // section:depart,
  },
  headers: { "token":`Bearer ${localStorage.getItem('token')}`}
})
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
  }
    
    
    
    
    