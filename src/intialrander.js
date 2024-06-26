import observer from "./observation"
import { productSelect } from "./selector"
import { createProductWork } from "./sidebar"
import { fruits } from "./state"

const appInitialRender=()=>{
    fruits.forEach(({id,name,Price})=>{
        createProductWork(id,name,Price)
        observer()
        productSelect.append(new Option(`${name} - ${Price}`,id))
        
    } )

}
export default appInitialRender