import { desktopNavData } from "@/data/data";
import NavbarItem from "./navbarItem";



const DesktopNav = () => {
    return (
        <div className="">
            {desktopNavData.map((item, index) => (
                <NavbarItem
                    key={index}
                    image={item.images}
                    name={item.name}
                    href={item.href}
                />
            ))}
        </div>
    );
}
 
export default DesktopNav;