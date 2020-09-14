let selectedRow = null;
let btnEdit = document.getElementById("btnEdit");
let btn = document.getElementById("btn");
let addBtn = document.getElementById("btn");

addBtn.addEventListener("click", onSubmit)


function onSubmit(e){
    e.preventDefault();
    let formInput = readFormData();
   
    if(selectedRow == null){
        insertList(formInput);
        clearInput();
    }else{
        updateTask(formData);
        console.log(updateTask(formData))
    }

}


function clearInput(){
    document.getElementById("list-name").value = "";
    document.getElementById("list-amount").value = "";
}


function readFormData(){
    let formData = {}
    formData["name"] = document.getElementById("list-name").value;
    formData["amount"] = document.getElementById("list-amount").value;

    selectedRow = null;

    return formData
}


function insertList(data){
    let mainList = document.getElementById("main-list").getElementsByTagName('tbody')[0];

    let newRow = mainList.insertRow(mainList.length)

    cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.name;

    cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.amount;


    cell1 = newRow.insertCell(2)
    cell1.innerHTML = `<button id="check" onclick="completedTask(this)"><i class='far fa-check-circle fa-lg'></i></button> 
                        <button id="edit" onclick="editTask(this)"><i class='far fa-edit fa-lg' ></i></button>
                        <button id="delete" onclick="deleteTask(this)"><i class='far fa-trash-alt fa-lg' ></i></button>
    `;


}

let toggle = true;

// COMPLETE TASK

function completedTask(e){

    e.parentElement.parentElement.classList.toggle("completed")
}

function editTask(e){
    selectedRow = e.parentElement.parentElement;
    document.getElementById("list-name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("list-amount").value = selectedRow.cells[1].innerHTML;

    let newData = {
        index : selectedRow.rowIndex
    }

    btnEdit.style.display = "inline-block";
    btn.style.display = "none";

}

// LIST EDIT BUTTON

btnEdit.addEventListener("click", function(e){
    e.preventDefault();

    selectedRow.cells[0].innerHTML = document.getElementById("list-name").value;
    selectedRow.cells[1].innerHTML  = document.getElementById("list-amount").value;

    btnEdit.style.display = "none";
    btn.style.display = "inline-block";

    clearInput()


})


function deleteTask(e){
    if(confirm("Are you sure you want to delete this row?")){
        e.parentElement.parentElement.remove();    }
}