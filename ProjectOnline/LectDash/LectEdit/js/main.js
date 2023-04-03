let id = window.location.search.split("=")[1]
console.log(id, "ID");


function updateLecture() {

    alert("Hello again");
      const email = document.getElementById("inputEmail1").value;
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const gender = document.getElementById("gender").value;
      const password = document.getElementById("password").value;
      const lectureId=document.getElementById('lectId').value;
      const bloodGroup=document.getElementById('bloodGroup').value;
      const course=document.getElementById('course').value;
      const phone=document.getElementById('telNum').value;
      const image=document.getElementById('uploadImage').value;
    
    
    
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
      console.log("uploadImage",image);

    axios({
        method: "PATCH",
        url: `https://studenttresult-mgt.onrender.com/lecture/updateById/${id}`,
        data: {
            firstName:firstName,
            lastName:lastName,
            lectId:lectureId,
            gender:gender,
            bloodGroup:bloodGroup,
            phoneNum:phone,
            email:email,
            password:password 
        },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
}
