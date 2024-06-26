import {  numberInput, productNameForm, recordCreateTemplate, recordNetTotal, recordTable, recordTax, recordTotal,  } from "./selector";
import { fruits } from "./state";
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'

 export const submitBtnHandler=(event)=>{
    event.preventDefault();
    const updateQuantity=(parent,value)=>{
     let templateProductPrice=parent.querySelector(".template-product-price")
     let templateProductQuantity=parent.querySelector(".template-product-quantity")
     let templateProductCost=parent.querySelector(".template-product-cost")
     
     if(  value>=1  || templateProductQuantity.innerText>1){

       templateProductQuantity.innerText=parseInt(templateProductQuantity.innerText)+ value
         templateProductCost.innerText= parseInt(templateProductQuantity.innerText) * parseFloat(templateProductPrice.innerText)

     }


   }
  
    
    
    const formData=new FormData(productNameForm)
    const quantity=formData.get("quantity")
    

let product =fruits.find(({id})=>id==formData.get("productName"));
const products=recordTable.querySelector(`[fruit-id='${product.id}']`)






    let RecordProduct= fruits.find(({id})=>id==formData.get("productName"))
    let name=RecordProduct.name
//     console.log(formData.get('productName'));
   
//     console.log(formData.get("quantity"));
    if(products==null){
    
     recordCreateTemplateHandler(RecordProduct,quantity)
    

    }else{
     Swal.fire({
          title: "Are you sure to add?",
          text: "You won't be able to revert this!",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: `Yes, add ${quantity} ${name}s`
        }).then((result) => {
          if (result.isConfirmed) {
               console.log(products);
               let value=numberInput.value
               console.log(value);
               console.log(quantity);
              
                  updateQuantity(products, parseInt(quantity))
                      

              
               console.log('this is add quantity');
            
          }
        });
    }
    
  
    


    productNameForm.reset()



}
export  default submitBtnHandler


export const recordCreateTemplateHandler=({id,name,Price},quantity)=>{
    let cloneRecordTemplate=recordCreateTemplate.content.cloneNode(true)
    let templateProductName=cloneRecordTemplate.querySelector(".template-product-name")
    let templateProductPrice=cloneRecordTemplate.querySelector(".template-product-price")
    let templateProductQuantity=cloneRecordTemplate.querySelector(".template-product-quantity")
    let templateProductCost=cloneRecordTemplate.querySelector(".template-product-cost")
     templateProductName.innerText =name
     
     templateProductPrice.innerText=Price
     templateProductQuantity.innerText=quantity
     templateProductCost.innerText=Price *quantity
     let recordRow=cloneRecordTemplate.querySelector(".record-row")
     recordRow.setAttribute("fruit-id",id)
    
recordRow.setAttribute("rowId",uuidv4())
    
   
     recordTable.append(cloneRecordTemplate)
    
}



