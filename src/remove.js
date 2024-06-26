import Swal from "sweetalert2";

const recordRemoveHandler=(e)=>{

    console.log('this is remove');
        const removeProduct=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
           
         
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            const deleted=document.querySelector(`[rowId='${id}']`)
            console.log(deleted);
            deleted.remove()
            }
          });    }

    const updateQuantity=(parent,value)=>{
      let templateProductPrice=parent.querySelector(".template-product-price")
      let templateProductQuantity=parent.querySelector(".template-product-quantity")
      let templateProductCost=parent.querySelector(".template-product-cost")
      
      if(  value>=1  || templateProductQuantity.innerText>1){

        templateProductQuantity.innerText=parseInt(templateProductQuantity.innerText)+ value
          templateProductCost.innerText= parseInt(templateProductQuantity.innerText) * parseFloat(templateProductPrice.innerText)

      }


    }
        

    if((e.target.classList.contains("record-remove"))){
       const deleteRecord=e.target.closest(".record-row")
       console.log(deleteRecord.getAttribute("rowId"));
       
       removeProduct(deleteRecord.getAttribute("rowId"))

    }else if(e.target.classList.contains("minus-btn")){
      const deleteRecord=e.target.closest(".record-row")
      updateQuantity(deleteRecord,-1)
     
    

    }else if(e.target.classList.contains("plus-btn")){
      const deleteRecord=e.target.closest(".record-row")
      updateQuantity(deleteRecord,1)
    
    }



    
   
    

}
export default recordRemoveHandler
