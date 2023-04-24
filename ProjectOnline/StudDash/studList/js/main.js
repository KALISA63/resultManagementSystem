window.onload(
axios({
    method: "GET",
    url: "https://online-result-management-system.onrender.com/users/getAll",
})
    .then((res) => {
    console.log("students", res);
    document.getElementById("tableBody").innerHTML = res.data.student.map((item) => {
        return (
            `<tr>
            <td>
                <div class="form-check check-tables">
                    <input class="form-check-input" type="checkbox"
                        value="something">
                </div>
                </td>
                <td>${item.studId}</td>
                <td>
                    <h2 class="table-avatar">
                        <a href="student-details.html"
                            class="avatar avatar-sm me-2"><img
                                class="avatar-img rounded-circle"
                                src=" img/profiles/avatar-17.jpg"
                                alt="User Image"></a>
                        <a href="student-details.html">${item.firstName}</a>
                    </h2>
                </td>
                <td>10 A</td>
                <td>2 Feb 2002</td>
                <td>Shogal</td>
                <td>097 3584 5870</td>
                <td>911 South Calorina,USA</td>
                <td class="text-end">
                    <div class="actions ">
                        <a href="javascript:;"
                            class="btn btn-sm bg-success-light me-2 ">
                            <i class="feather-eye"></i>
                        </a>
                        <a href="edit-student.html"  class="btn btn-sm bg-danger-light">
                            <i class="feather-edit"></i>
                        </a>
                    </div>
                </td>
            </tr>`
        )
        }
    );
    })
    .catch((error) => {
    console.log(error);
    })
);

