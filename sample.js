var selectedRow = null;

function onSubmitForm() {
    var formData = formValues();
    if (selectedRow == null)
        newRecords(formData);
    else
        onUpdate(formData)
    resetForm();
}

function formValues() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["empid"] = document.getElementById("empid").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    console.log(formData);
    return formData;
}


function newRecords(data) {
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    c1 = newRow.insertCell(0);
    c1.innerHTML = data.name;
    c2 = newRow.insertCell(1);
    c2.innerHTML = data.empid;
    c3 = newRow.insertCell(2);
    c3.innerHTML = data.salary;
    c4 = newRow.insertCell(3);
    c4.innerHTML = data.city;
    c5 = newRow.insertCell(4);
    c5.innerHTML = `<a onclick="onEdit(this)">Edit</a>
                    <a onclick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("empid").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    var selectedRow = null;


}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function onUpdate(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.empid;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm("Are you sure to delete this data")) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
    }

}