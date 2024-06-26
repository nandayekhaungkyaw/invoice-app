import { ManageInventoryHandler, closeBtnHandler, printBtnHandler, sideBarAddBtnHandler } from "./handler"
import submitBtnHandler from "./record"
import recordRemoveHandler from "./remove"

import { ManageInventory, closeBtn, printBtn, productNameForm, recordTable, sideBarAddBtn,  } from "./selector"

 const listeners=()=>{
    closeBtn.addEventListener("click",closeBtnHandler)
    ManageInventory.addEventListener("click",ManageInventoryHandler)
    sideBarAddBtn.addEventListener("click",sideBarAddBtnHandler)
    productNameForm.addEventListener('submit',submitBtnHandler)
    recordTable.addEventListener("click",recordRemoveHandler)
    printBtn.addEventListener('click',printBtnHandler)
}

export default listeners