import Contact from "@/components/Contact";
import Text from "@/components/Text";

export const page = () =>{

  return(
  <div className="grid grid-cols-1 w-lvw h-lvh justify-center items-center">

    <div className="grid justify-items-center">
      <Contact/>
      <Text/>
    </div>

    <div className="grid justify-items-center">
      <h3>blabla</h3>
    </div>
    
  </div>
  )
}

export default page;