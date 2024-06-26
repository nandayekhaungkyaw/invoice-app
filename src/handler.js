import { numberInput, sideBar, textInput } from "./selector";
import { createProductWork } from "./sidebar";
import { v4 as uuidv4 } from 'uuid';
import { fruits } from "./state";

export const closeBtnHandler=()=>{
    sideBar.classList.add('translate-x-full')

}

export const ManageInventoryHandler=()=>{
    sideBar.classList.remove('translate-x-full');
}

export const printBtnHandler=()=>{
    window.print()

}


export const sideBarAddBtnHandler =()=>{
    let name=  textInput.value
    const cardId=uuidv4()
   let number= numberInput.valueAsNumber

   productSelect.append(new Option(`${name} - ${number} `,cardId))
   
    createProductWork(cardId,name,number)
fruits.push({
    id: cardId,
    name:name,
    Price:number,

})
console.log(fruits);

    numberInput.valueAsNumber=null
    textInput.value=null
}