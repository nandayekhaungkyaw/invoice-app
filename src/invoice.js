import appInitialRender from "./intialrander";
import listeners from "./listener"


class invoice {

    
    init (){
        appInitialRender()
        console.log("this is init");
        console.log('hello');
        listeners()
    }

}
 
 export default invoice