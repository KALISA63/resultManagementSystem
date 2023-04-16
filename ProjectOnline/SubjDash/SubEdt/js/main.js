let id = window.location.search.split("=")[1]
console.log(id, "ID");

const url = window.location.href;
const subjectId = url.split("?")[1];
console.log("subjectId",subjectId);

const form = document.querySelector(".editForm");
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    const subId =  document.getElementById("subId").value;
    const subName =  document.getElementById("subName").value;
    const subClass = document.getElementById("subClass").value;
    const data = {
        subjectId:subId,
        subjectName:subName,
        class:subClass
    }
    axios({
        method: "PUT",
        url: `https://online-result-management-system.onrender.com/subjects/editById/${subjectId}`,
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
if(subjectId){
    getSubjectById(subjectId)
}
}


function getSubjectById(subjId){
    axios({
        method: "GET",
        url: `https://online-result-management-system.onrender.com/subjects/findById/${subjId}`,
        // headers: { "token":`Bearer ${localStorage.getItem('token')}`}
})
.then((res) => {
    console.log("SUBJECT",res.data);
    document.getElementById("subId").value = res.data.subjectId;
    document.getElementById("subName").value = res.data.subjectName;
    document.getElementById("subClass").value = res.data.class;
})
.catch((error) => {
    console.log(error);
});

}

