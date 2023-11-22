import { Button } from "@/components/ui/button"
import Image from "next/image";
import type { ToolsItemProps } from "@/interfaces/interface";

const ToolsItem: React.FC<ToolsItemProps> = ({name, icon}) => {
    return (
        <Button className='flex items-center'>
            <Image
                src={icon}
                alt='logo'
                height={120}
                width={120}
                className=""
            />
            <span>Tools</span>
        </Button>
    );
}
 
export default ToolsItem;