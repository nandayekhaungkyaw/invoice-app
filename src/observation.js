import { recordNetTotal, recordTable, recordTax, recordTotal } from "./selector"

const observer=()=>{
    observation()
}


export default observer
 const totalCalculation=()=>{
    let total=0

   recordTable.querySelectorAll(".template-product-cost").forEach((e)=>{ total +=parseFloat(e.innerText)}); 
return total



}
 const taxCalculation=(total,percent=5)=>{
    return (total/100) *percent
    
    

}


 const observation=()=>{
    let config = { attributes: true, childList: true, subtree: true };
    const  observerDo=()=>{
        const total =totalCalculation()
        recordTotal.innerText=total
       const tax =taxCalculation(total)
       recordTax.innerText=tax
        recordNetTotal.innerText= total +tax


    }
    const observer = new MutationObserver(observerDo);
    observer.observe(recordTable,config)
}
