function editItem(e) {
    e.preventDefault();

    btn.style.display = "inline";
    // btnEdit.style.display = "none";
    let id = listInput.getAttribute("id");

    let idNumber = id.split("-").pop();

    let editedChild = createListItem(listInput.value, amountInput.value);

    // mainList.replaceChild(editedChild, mainList.childNodes[idNumber]);
    mainList.removeChild(mainList.childNodes[idNumber]);

    //COPIED CODE FROM ADD LIST FUNCTION
    listInput.value = "";
    amountInput.value = "";

    console.log(e.target);
}
