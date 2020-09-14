const listAmount = document.getElementById("list-amount");
const listName = document.getElementById("list-name");
const btn = document.getElementById("btn");
const mainList = document.getElementById("main-list").getElementsByTagName('tbody')[0];

class VerifyInput{
    constructor(input){
        this.input = input
    }

    checkInput(){
        if(this.input.value ==""){
            alert(this.input.name + " cannot be empty");
            return false;
        }else{
            return true;
        }
    }
}

class ClearInput{
    constructor(input){
        this.input = input
    }
    clearInputMethod(){
        this.input.value = ""
    }
}
class AddList{
    constructor(listNameInsert, ListAmountInsert){
        this.list = listNameInsert;
        this.listAmount = ListAmountInsert;
        this.ListBtnInsert = `<button id="check" onclick="check(this)"><i class='far fa-check-circle fa-lg'></i></button> 
        <button id="edit" onclick="editTask(this)" ><i class='far fa-edit fa-lg'></i></button>
        <button id="delete" onclick="deleteTask(this)" ><i class='far fa-trash-alt fa-lg' ></i></button>
        `;
    }

    appendList(){
        let insertedRow = mainList.insertRow(mainList.length);

        let cell1 = insertedRow.insertCell(0)
        cell1.innerHTML = this.list;
       
        let cell2 = insertedRow.insertCell(1)
        cell2.innerHTML = this.listAmount;

        let cell3 = insertedRow.insertCell(2)
        cell3.innerHTML = this.ListBtnInsert;
    }
}
let clearName = new ClearInput(listName);
let clearAmount = new ClearInput(listAmount);

btn.addEventListener("click", (e)=>{
    e.preventDefault();

    //verify inputs
    let checkName = new VerifyInput(listName);
    let checkAmount = new VerifyInput(listAmount);
    
    checkAmount.checkInput();
    checkName.checkInput();

    //insert data into table
    let appendNew = new AddList(listName.value, listAmount.value);
    appendNew.appendList()
    
    //clear input
   

    clearName.clearInputMethod();
    clearAmount.clearInputMethod();

})

//DELETE ITEM
function deleteTask(e){
    if(confirm("Are you sure to delete this row?")){
        e.parentElement.parentElement.remove();
    }
}

//CHECK ITEM    
function check(e){
    e.parentElement.parentElement.classList.toggle("completed") 
}

function editTask(e){
    console.log(e)
 
    selectedRow = e.parentElement.parentElement;
    listName.value = selectedRow.cells[0].innerHTML;
    listAmount.value = selectedRow.cells[1].innerHTML;

    let newData = {
        index : selectedRow.rowIndex
    }

    btnEdit.style.display = "inline-block";
    btn.style.display = "none";
}

btnEdit.addEventListener("click", function(e){
    e.preventDefault();
    selectedRow.cells[0].innerHTML = listName.value;
    selectedRow.cells[1].innerHTML  = listAmount.value;

    btnEdit.style.display = "none";
    btn.style.display = "inline-block";

    clearName.clearInputMethod();
    clearAmount.clearInputMethod();

})

