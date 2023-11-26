''
import { desktopNavData } from "@/data/data";
import NavbarItem from "./navbarItem";


const DesktopNav = () => {
    return (
        <div className="flex flex-col w-full gap-4 items-center  ">
            {desktopNavData.map((item, index) => (
                <NavbarItem
                    key={index}
                    image={item.images}
                    name={item.name}
                    href={item.href}
                    index={index}
                />
            ))}
        </div>
    );
}
 
export default DesktopNav;