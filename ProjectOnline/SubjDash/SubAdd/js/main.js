function addSubject(){
    const subId=document.getElementById("subId").value;
    const subName=document.getElementById("subName").value;
    const subClass=document.getElementById("subClass").value;


    console.log("subId",subId);
    console.log("subName",subName);
    console.log("subClass",subClass);


    axios({
        method: "POST",
        url: "https://online-result-management-system.onrender.com/subjects/register",
        data: {
            
            subjectId:subId,
            subjectName:subName,
            class:subClass
        
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
