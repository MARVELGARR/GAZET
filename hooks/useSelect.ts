import { useState } from "react";



const useSelect = (initialValue: number) => {
    const [indexs, setIndexs] = useState<number>(initialValue)
    const handleSelect = (indexs: number) => {
        setIndexs(indexs)
    }

    return {indexs, handleSelect};
}
 
export default useSelect;