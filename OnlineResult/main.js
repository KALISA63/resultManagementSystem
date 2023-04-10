function login() {
  const email = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;
  console.log("email", email);
  console.log("password", password)
  if (email !== "" && password !== "") {
    console.log("Logging in");

    axios({
        method: 'POST',
        url: "https://online-result-management-system.onrender.com/users/login",
        data: {
                email: email,
                password: password,
              }
    }).then((res)=>{
        console.log(res.data)
        localStorage.setItem('token',res.data.token);
        if (res.data.others.role=="admin"){
          window.location.href = "../ProjectOnline/adminDash/index.html"
        }
        if(res.data.others.role=="lecture"){
          window.location.href = "../ProjectOnline/lectMarkDash/profile/lecProfile.html"
        }
        if(res.data.others.role=="student"){
          window.location.href="../ProjectOnline/studStudDash/studProfile/studProfile.html"
        }

    }).catch((error)=>{
        console.log(error)
    })
  } else {
    alert("Provide all information");
  }
}