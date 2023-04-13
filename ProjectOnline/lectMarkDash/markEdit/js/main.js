let id = window.location.search.split("=")[1]
console.log(id, "ID");

function editSubject(){
    const studId=document.getElementById("studId").value;
    const studName=document.getElementById("studName").value;
    const studMark=document.getElementById("studMark").value;


    console.log("studId",studId);
    console.log("studName",studName);
    console.log("studMark",studMark);


    axios({
        method: "POST",
        url: "https://online-result-management-system.onrender.com/mark/editById/",
        data: {
            
            subjectId:studId,
            subjectName:studName,
            class:studMark
        
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
