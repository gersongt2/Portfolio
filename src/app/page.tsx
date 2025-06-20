import Contact from "@/components/Contact";
import LinksP from "@/components/LinksP";
import Text from "@/components/Text";

export const page = () =>{

  return(
  <div className="grid grid-cols-2 w-lvw h-lvh items-center">

    <div className="grid justify-items-center">
      <Contact/>
      <Text/>
    </div>

    <div className="grid ">
      <LinksP/>
    </div>
    
  </div>
  )
}

export default page;