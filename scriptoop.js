// WORKING WITH CLASSES

class Data{
    constructor(element){
        this.element = element;
    }

    getData(){
        return document.getElementById(this.element);
    }


}


let amount = new Data("list-amount");
console.log(amount.getData());