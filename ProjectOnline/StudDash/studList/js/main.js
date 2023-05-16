window.onload(
axios({
    method: "GET",
    url: "https://online-result-management-system.onrender.com/users/getAll",
})
    .then((res) => {
    const students = res.data.user.filter(user => user.role === 'student' )
    console.log(students)
    document.getElementById("tableBody").innerHTML = students.map((item) => {
        return (
            `<tr>
            <td>
                <div class="form-check check-tables">
                    <input class="form-check-input" type="checkbox"
                        value="something">
                </div>
                </td>
                <td>${item.studId}</td>
                <td>${item.firstName}</td>
                <td>${item.lastName}</td>
                <td>${item.email}</td>
                <td>${item.gender}</td>
                <td>${item.phoneNum}</td>                
                <td>${item.section}</td>
                <td>${item.DoB}</td>
                <td>${item.section}</td>
                <td>${item.course}</td>
                <td>${item.religion}</td>
                <td>${item.bloodGroup}</td>
            </tr>`
        )
        }
    );
    })
    .catch((error) => {
    console.log(error);
    })
);

//                <td>
{/* <h2 class="table-avatar">
<a href="student-details.html"
    class="avatar avatar-sm me-2"><img
        class="avatar-img rounded-circle"
        src=" img/profiles/avatar-17.jpg"
        alt="User Image"></a>
<a href="student-details.html">${item.firstName}</a>
</h2>
</td> */}