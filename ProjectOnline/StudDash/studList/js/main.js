window.onload(
    axios({
        method: "GET",
        url: "https://studenttresult-mgt.onrender.com/student/getAll"
    }).then((res)=>{
        console.log(res);
        document.getElementById("tableBody").innerHTML = res.data.student.map((item)=>{
            return (
                `<tr>
                <td>
                    <div class="form-check check-tables">
                        <input class="form-check-input" type="checkbox"
                            value="something">
                    </div>
                </td>
                <td>${item.regNum}</td>
                <td>
                    <h2 class="table-avatar">
                        <a href="student-details.html"
                            class="avatar avatar-sm me-2"><img
                                class="avatar-img rounded-circle"
                                src=" img/profiles/avatar-17.jpg"
                                alt="User Image"></a>
                        <a href="student-details.html">${item.firstName}</a>
                    </h2>
                </td>
                <td>10 A</td>
                <td>2 Feb 2002</td>
                <td>Shogal</td>
                <td>097 3584 5870</td>
                <td>911 South Calorina,USA</td>
                <td class="text-end">
                    <div class="actions ">
                        <a href="javascript:;"
                            class="btn btn-sm bg-success-light me-2 ">
                            <i class="feather-eye"></i>
                        </a>
                        <a href="edit-student.html" class="btn btn-sm bg-danger-light">
                            <i class="feather-edit"></i>
                        </a>
                    </div>
                </td>
            </tr>`
            )
        })
    })
    .catch((error)=>{
        console.log(error);
}))




// function addStudent() {
//     //   alert("Hello again");
//       const email = document.getElementById("inputEmail1").value;
//       const firstName = document.getElementById("firstName").value;
//       const lastName = document.getElementById("lastName").value;
//       const gender = document.getElementById("gender").value;
//       const dateBirth = document.getElementById("DoB").value;
//       const regNum=document.getElementById('rollNum').value;
//       const bloodGroup=document.getElementById('bloodGroup').value;
//       const religion=document.getElementById('Religion').value;
//       const classRoom=document.getElementById('classRoom').value;
//       const section=document.getElementById('Section').value;
//       const admission=document.getElementById('admission').value;
//       const phoneNum=document.getElementById('phoneNum').value;
//       const image=document.getElementById('uploadImage').value;
    
    
    
//     //   alert("email");
    
//       console.log("email", email);
//       console.log("firstName",firstName);
//       console.log("lastName",lastName);
//       console.log("gender",gender);
//       console.log("BoD1",dateBirth);
//       console.log("rollNum",regNum);
//       console.log("bloodGroup",bloodGroup);
//       console.log("Religion",religion);
//       console.log("classRoom",classRoom);
//       console.log("Section",section);
//       console.log("admission",admission);
//       console.log("phoneNum",phoneNum);
//       console.log("uploadImage",image);
    
    
//     //   if (email !== "" && password !== "") {
//         console.log("submit successfull");
    
//         axios({
//           method: "GET",
//           url: "https://studenttresult-mgt.onrender.com/admin/regStud",
//           data: {
//             email: email,
//             firstName:firstName,
//             lastName:lastName,
//             gender:gender,
//             DoB:dateBirth,
//             bloodGroup:bloodGroup,
//             religion:religion,
//             phoneNum:phoneNum,
//             Section:section,
//             password:regNum,      
//           },
//         })
//           .then((res) => {
//             console.log(res);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//     }
    