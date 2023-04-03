function login() {
  const email = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;
  console.log("email", email);
  console.log("password", password)
  if (email !== "" && password !== "") {
    console.log("Logging in");

    axios({
        method: 'POST',
        url: "https://studenttresult-mgt.onrender.com/admin/login",
        data: {
                email: email,
                password: password,
              }
    }).then((res)=>{
        console.log(res)
        window.location.href = "../ProjectOnline/adminDash/index.html"
    }).catch((error)=>{
        console.log(error)
    })
  } else {
    alert("Provide all information");
  }
}