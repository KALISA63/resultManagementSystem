function addDepart(){
    const departId=document.getElementById("departId").value;
    const departName=document.getElementById("departName").value;
    const departHead=document.getElementById("departHead").value;
    const departDate=document.getElementById("date").value;
    const studNum=document.getElementById("numStud").value;


    console.log("departId",departId);
    console.log("departName",departName);
    console.log("departHead",departHead);
    console.log("date",departDate);
    console.log("numStud",studNum);

    console.log("token" , localStorage.getItem('token'))

    axios({
        method: "POST",
        url: "https://online-result-management-system.onrender.com/depart/register",
        data: {
            
    departId:departId,
    departName:departName,
    HOD:departHead,
    startDate:departDate,
    nofStud:studNum
},
headers: { "token":`Bearer ${localStorage.getItem('token')}`}
})
.then((res) => {
    console.log(res.data);
})
.catch((error) => {
    console.log(error);
});

}
