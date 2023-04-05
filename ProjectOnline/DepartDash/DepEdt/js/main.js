let id = window.location.search.split("=")[1]
console.log(id, "ID");

function editDepart(){
    const departId=document.getElementById("departId").value;
    const departName=document.getElementById("departName").value;
    const departHead=document.getElementById("HOD").value;
    const departDate=document.getElementById("date").value;
    const studNum=document.getElementById("numStud").value;


    console.log("departId",departId);
    console.log("departName",departName);
    console.log("HOD",departHead);
    console.log("date",departDate);
    console.log("numStud",studNum);


    axios({
        method: "PATCH",
        url: `https://online-result-management-system.onrender.com/depart/editById/${id}`,
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
    console.log(res);
})
.catch((error) => {
    console.log(error);
});

}

