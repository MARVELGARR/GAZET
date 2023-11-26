import { useState } from "react";


const UseActive = (initialState: boolean) => {
    const [active, setActive] = useState<boolean>(initialState);

    const handleClick = () =>{
        setActive((prev)=>!prev)
    }
    return {active, handleClick};
}
 
export default UseActive;