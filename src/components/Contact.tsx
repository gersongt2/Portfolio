export const Contact=()=>{
    return(
    <div>

        <div className="grid grid-cols-2 grid-rows-4 w-full h-20 gap-1 ">

            <div className="w-16 h-16 row-span-3" >
                <div className="w-full h-full bg-amber-500"></div>
            </div>

            <a className="bg-amber-300 h-6" href="">GitHub</a>
            <a className="bg-blue-400 h-6" href="">LinkedIn</a>
            <a className="bg-green-400 h-6" href="">Gmail</a>
            
        </div>
        
    </div>
    )
};


export default Contact;