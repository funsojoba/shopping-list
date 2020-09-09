class dataInput {
    constructor(name, amount){
        this.name = name;
    }
    getDataInput(){
        return document.getElementById(this.name);
    }
}

let amountInput = new dataInput("list-name");

console.log(amountInput.getDataInput());