function login() {
  const email = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;
  console.log("email", email);
  console.log("password", password)
  if (email !== "" && password !== "") {
    console.log("Logging in");

    axios({
        method: 'POST',
        url: "localhost:6000/users/login",
        data: {
                email: email,
                password: password,
              }
    }).then((res)=>{
        console.log(res)
        if (res.role=="admin"){
          window.location.href = "../ProjectOnline/adminDash/index.html"
        }
        if(res.role=="lecture"){
          window.location.href = "../ProjectOnline/LectDash/LectView/lectView.html"
        }
        if(res.role=="student"){
          window.location.href="../ProjectOnline/StudDash/studView/studView.html"
        }

    }).catch((error)=>{
        console.log(error)
    })
  } else {
    alert("Provide all information");
  }
}