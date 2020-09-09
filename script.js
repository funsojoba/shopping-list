
        let add = document.getElementById("add");
        let mobileForm = document.querySelector(".list-form");
        let mobileBtn = document.getElementById("mobile-form-button");

        // FORM FIELDS
        let listInput = document.getElementById("list-name");
        let amountInput = document.getElementById("amount");
        let nameError = document.getElementById("nameerror");
        let amountError = document.getElementById("amounterror");
        let btn = document.getElementById("btn");
        let total = document.getElementById("total");

        let btnEdit = document.getElementById("btnEdit");
        let mainList = document.querySelector('.main-list');

        //mobile form toggle
        add.addEventListener("click", ()=>{
            if(mobileForm.style.display == "flex"){
                mobileForm.style.display = "none";
            }else{
                mobileForm.style.display = "flex";
            }
        })

        // SELETE ITEMS

        

        mainList.addEventListener("click", itemDelete);

        function itemDelete(e){
            let item = e.target;

            if(item.classList[1] === "btn-trash"){
                item.parentElement.classList.add("slideOut");

                item.parentElement.addEventListener("transitionend", function(){
                    item.parentElement.remove();
                })
                item.parentElement.remove();
            }
            
            if(item.classList[1] === "btn-check"){
                item.innerHTML = "<i class='fas fa-check-circle fa-2x'></i>";
                item.style.color = "#44C4A1";
                item.parentElement.classList.toggle("completed")
            }

        }

        // EDIT ITEMS

        btnEdit.addEventListener("click", editItem);

        function editItem(e){
            e.preventDefault();

            btn.style.display = "inline";
            // btnEdit.style.display = "none";

            let id = listInput.getAttribute("id");

            let idNumber = id.split("-").pop();

            let editedChild = createListItem(listInput.value, amountInput.value);

            mainList.replaceChild(editedChild, mainList.childNodes[idNumber]);
            // mainList.replaceChild(mainList.childNodes[idNumber]);
           
            
            //COPIED CODE FROM ADD LIST FUNCTION
            
            listInput.value = "";
            amountInput.value ="";

            console.log(e.target);
        }

        function createListItem(name, amount){
             let listItem = document.createElement("div");
                listItem.classList.add("list-item");
                listItem.setAttribute("id", "item-"+id);

                let listItemName = document.createElement('li');
                listItemName.innerHTML = name + " <small> &#8358; " + amount+"</small> ";
                listItemName.classList.add("list-item-name");

                listItem.appendChild(listItemName);

                //CREATE BUTTONS

                //create complete button
                let completedBtn = document.createElement("button");
                completedBtn.innerHTML = "<i class='far fa-check-circle fa-2x'>";
                completedBtn.classList.add('btn', 'btn-check');

                listItem.appendChild(completedBtn);

                //create edit button
                let editBtn = document.createElement("button");
                editBtn.innerHTML = "<i class='far fa-edit fa-2x' onclick='onEdit(this)'></i>";
                editBtn.classList.add('btn', 'btn-edit');

                listItem.appendChild(editBtn);

                //create delete button
                let deleteBtn = document.createElement("button");
                deleteBtn.innerHTML = "<i class='far fa-trash-alt fa-2x'></i>";
                deleteBtn.classList.add('btn' , 'btn-trash');

                listItem.appendChild(deleteBtn)

                mainList.appendChild(listItem);
        }


        // NEW EDIT FUNCTION

        function onEdit(id){
            console.log(id)
        }

        // ADD ITEMS

        let id = 0;

        function addItem(e){
            e.preventDefault();

            let listTotal = Number(amountInput.value);
            if(listInput.value == "" || amountInput == ""){
                errorMessage(listInput, nameError);
                errorMessage(amountInput, amountError);
                return false;
    
            }else{
                
                clearErrorMessage(nameError);
                clearErrorMessage(amountError);

                createListItem(listInput.value, amountInput.value);

                listInput.value = "";
                amountInput.value ="";
            }
        
            id++;
        }

        function errorMessage(inputName, error){
                error.innerHTML = `${inputName.name} cannot be empty`;
                error.style.display = "block";
                return false;
        }
        function clearErrorMessage(error){
            error.style.display = "none";
        }

        btn.addEventListener("click", addItem);
        // mobileBtn.addEventListener("click", addItem);

