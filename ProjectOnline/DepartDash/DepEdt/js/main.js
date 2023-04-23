// let id = window.location.search.split("=")[1]
// console.log(id, "ID");

// function editDepart(){
//     const departId=document.getElementById("departId").value;
//     const departName=document.getElementById("departName").value;
//     const departHead=document.getElementById("HOD").value;
//     const departDate=document.getElementById("date").value;
//     const studNum=document.getElementById("numStud").value;


//     console.log("departId",departId);
//     console.log("departName",departName);
//     console.log("HOD",departHead);
//     console.log("date",departDate);
//     console.log("numStud",studNum);


//     axios({
//         method: "PATCH",
//         url: `https://online-result-management-system.onrender.com/depart/editById/${id}`,
//         data: {
            
//     departId:departId,
//     departName:departName,
//     HOD:departHead,
//     startDate:departDate,
//     nofStud:studNum
// },
// headers: { "token":`Bearer ${localStorage.getItem('token')}`}
// })
// .then((res) => {
//     console.log(res);
// })
// .catch((error) => {
//     console.log(error);
// });

// }


let id = window.location.search.split("=")[1]
console.log(id, "ID");

const url = window.location.href;
const subjectId = url.split("?")[1];
console.log("departId",departId);

const form = document.querySelector(".editForm");
form.addEventListener("submit",(e) =>{
    e.preventDefault();
// function editDepart(){
    const departId=document.getElementById("departId").value;
    const departName=document.getElementById("departName").value;
    const departHead=document.getElementById("HOD").value;
    const departDate=document.getElementById("date").value;
    const studNum=document.getElementById("numStud").value;
    const data = {
        departId:departId,
        departName:departName,
        HOD:departHead,
        startDate:departDate,
        nofStudent:studNum
    }
    axios({
        method: "PATCH",
        url: `https://online-result-management-system.onrender.com/depart/editById/${departId}`,
        data:data,
        headers: { "token":`Bearer ${localStorage.getItem('token')}`}
})
.then((res) => {
    console.log(res.data);
})
.catch((error) => {
    console.log(error);
    console.log(error.message);
});
});

window.onload = (event) =>{
if(departId){
    getdepartById(departId)
}
}


function getdepartById(departId){
    axios({
        method: "GET",
        url: `https://online-result-management-system.onrender.com/depart/findById/${departId}`,
        // headers: { "token":`Bearer ${localStorage.getItem('token')}`}
})
.then((res) => {
    console.log("depart",res.data);
    document.getElementById("departId").value = res.data.departId;
    document.getElementById("departName").value = res.data.departName;
    document.getElementById("departHead").value = res.data.HOD;
    document.getElementById("departDate").value=res.data.startDate;
    document.getElementById("studNum").value=res.data.nofStudent;
})
.catch((error) => {
    console.log(error);
});

}

