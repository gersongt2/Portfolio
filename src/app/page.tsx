import {Contact} from "@/components/Contact";
import {LinksP} from "@/components/LinksP";
import {Text} from "@/components/Text";

export const page = () =>{

  return(
  <div className="grid grid-cols-2 w-lvw h-lvh items-center">

    <div className="h-screen grid items-center justify-items-center bg-amber-50 ">
      <Contact/>
      <Text/>
    </div>

    <div className="h-screen grid items-center justify-items-center">
      <LinksP/>
    </div>
    
  </div>
  )
}

export default page;