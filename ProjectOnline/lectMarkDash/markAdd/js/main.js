function addMark(){
    const studId=document.getElementById("studId").value;
    const studName=document.getElementById("studName").value;
    const studSubj=document.getElementById("studSubject").value;
    const studMark=document.getElementById("studMark").value;


    console.log("studId",studId);
    console.log("studName",studName);
    console.log("studSub",studSubj);
    console.log("studMark",studMark);


    axios({
        method: "POST",
        url: "https://online-result-management-system.onrender.com/mark/register",
        data: {
            
            studtId:studId,
            studName:studName,
            subject:studSubj,
            mark:studMark
        
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
