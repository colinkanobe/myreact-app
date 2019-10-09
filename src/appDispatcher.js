//FLUX - Created a dispatcher
//It is a singleton so only one instance of it
// Will be used elsewhere to call FB inbuilt functions in the dispatcher
import { Dispatcher } from "flux";
const dispatcher = new Dispatcher();
export default dispatcher;
