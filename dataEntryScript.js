let username = document.getElementById("username");
let phone = document.getElementById("phone");
let education = document.getElementById("education");
let branch = document.getElementById("branch");
let college = document.getElementById("college");
let passout = document.getElementById("passout");
let address = document.getElementById("address");
let tableBody = document.getElementById("tableBody");
let srno = 1 ;


let currentRow = null;

function dataProcessing() {
    let formData = fetchFormData();
    if (currentRow==null) {
        storeData(formData);
}
else{
    updateData(formData);
}
}

// FETCHING DATA FROM USER 
function fetchFormData() {
    let formData ={};           // CREATION OF OBJECT
    formData.username = username.value;
    formData.phone = phone.value;
    formData.education = education.value;
    formData.address = address.value;
    formData.college = college.value;
    formData.passout = passout.value;
    formData.email = email.value;
    return formData;
}

//STORING DATA INTYO TABLE 
function storeData(formData) {
    let newRow = tableBody.insertRow(tableBody.length);
    let cell0 = newRow.insertCell(0);
    cell0.innerHTML = srno++;
     let cell1 = newRow.insertCell(1);
     cell1.innerHTML = formData.username;
    let cell2 = newRow.insertCell(2);
    cell2.innerHTML = formData.email;
    let cell3 = newRow.insertCell(3);
    cell3.innerHTML = formData.phone;
    let cell4 = newRow.insertCell(4);
    cell4.innerHTML = formData.education;
    let cell5 = newRow.insertCell(5);
    cell5.innerHTML = formData.passout;
    let cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<button onclick="editData(this)" class="btn btn-primary">Edit</button>
    <button onclick="deleteData(this)" class="btn btn-primary">Delete</button>`;

     clearFields();
}

// FUNCTION TO CLEAR THE FIELDS
function clearFields() {
    username.value = "";
    phone.value = "";
    education.value = "";
    address.value = "";
    college.value = "";
    passout.value = "";
    email.value = "";
    currentRow= null;
}

// FUNCTION TO EDIT DATA 
function editData(btn) {
    currentRow = btn.parentElement.parentElement;

    username.value = currentRow.cells[1].innerHTML;
    email.value = currentRow.cells[2].innerHTML;
    phone.value =  currentRow.cells[3].innerHTML;
    education.value = currentRow.cells[4].innerHTML;
    passout.value = currentRow.cells[5].innerHTML;

    // currentRow= "newdata";
}

function updateData(formData)
{
    console.log(formData);
    currentRow.cells[1].innerHTML = formData.username;
    currentRow.cells[2].innerHTML = formData.email;
    currentRow.cells[3].innerHTML = formData.phone;
    currentRow.cells[4].innerHTML = formData.education;
    currentRow.cells[5].innerHTML = formData.passout;
    clearFields();
    // currentRow.cells[1].innerHTML = formData.username.value;
}

function deleteData(btn) {
    let row = btn.parentElement.parentElement;

    if(confirm("Are You Sure"))
    {
        document.getElementById("tableBody").deleteRow(row.rowIndex-1);
    }
}