// let id = window.location.search.split("=")[1]
// console.log(id, "ID");

// function editstudMark(){
//     const studId=document.getElementById("studId").value;
//     const studName=document.getElementById("studName").value;
//     const studSubj=document.getElementById("studSubject").value;
//     const studMark=document.getElementById("studMark").value;


//     console.log("studId",studId);
//     console.log("studName",studName);
//     console.log("studSub",studSubj);
//     console.log("studMark",studMark);


//     axios({
//         method: "PATCH",
//         url: "https://online-result-management-system.onrender.com/mark/editById/",
//         data: {
            
//             studtId:studId,
//             studName:studName,
//             subject:studSubj,
//             mark:studMark
        
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


//Mark get and mark edit

let id = window.location.search.split("=")[1]
console.log(id, "ID");

const url = window.location.href;
const studId = url.split("?")[1];
console.log("studId",studId);

const form = document.querySelector(".editForm");
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    const studId=document.getElementById("studId").value;
    const studName=document.getElementById("studName").value;
    const studSubj=document.getElementById("studSubject").value;
    const studMark=document.getElementById("studMark").value;
    const data = {
        studtId:studId,
        studName:studName,
        subject:studSubj,
        mark:studMark
}
        axios({
            method: "PATCH",
            url: `https://online-result-management-system.onrender.com/mark/editById/${studId}`,
            data:data,headers: 
            { "token":`Bearer ${localStorage.getItem('token')}`}
        })
.then((res) => {
    console.log(res.data);
})
.catch((error) => {
    console.log(error);
    console.log(error.message);
});
});

//get mark

window.onload = (event) =>{
if(studId){
    getStudById(studId)
}
}


function getStudById(studId){
    axios({
        method: "GET",
        url: `https://online-result-management-system.onrender.com/mark/findById/${studId}`,
        headers: { "token":`Bearer ${localStorage.getItem('token')}`}
})
.then((res) => {
    console.log("STUDENT",res.data);
    document.getElementById("studId").value = res.data.studId;
    document.getElementById("studName").value = res.data.studName;
    document.getElementById("studSubject").value = res.data.studSubj;
    document.getElementById("studMark").value = res.data.studMark;

})
.catch((error) => {
    console.log(error);
});

}
