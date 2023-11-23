import { tools } from "@/data/data";
import ToolsItem from "./toolItem";


const Tools = () => {
    return (
        <div className="flex flex-col w-full  items-center  ">
            {
                tools.map((items, index) => (
                    <ToolsItem
                        key={index}
                        name={items.name}
                        icon={items.icon}
                        index={index}
                    />
                ))
            }
        </div>
    );
}
 
export default Tools;