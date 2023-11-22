import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { NavBarItemProps } from "@/interfaces/interface";

const NavBarItem: React.FC<NavBarItemProps>  = ({image, name, href}) => {

    const handleClick = ( link: string) => {
        window.location.href = `${link}`
    }

    return ( 
        <Button onClick={()=>handleClick(href)} className="" variant={'link'}>
            <Image
                src={image}
                alt={name}
                height={40}
                width={40}
                className=""
            />
            <span>{name}</span>
        </Button>
    );
}
 
export default NavBarItem ;