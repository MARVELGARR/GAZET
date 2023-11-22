import { tools } from "@/data/data";
import ToolsItem from "./toolItem";


const Tools = () => {
    return (
        <div className="flex">
            {
                tools.map((items, index) => (
                    <ToolsItem
                        key={index}
                        name={items.name}
                        icon={items.icon}
                    />
                ))
            }
        </div>
    );
}
 
export default Tools;