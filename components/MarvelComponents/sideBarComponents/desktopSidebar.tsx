"use client"
import DesktopNav from "./sidebarComponents/desktopNav";
import Logo from "./sidebarComponents/logo";
import Tools from "./sidebarComponents/tools";

const DesktopSidebar: React.FC = () => {
    return ( 
        <aside className=" flex fixed flex-col    h-full items-center left-0 inset-y-0 w-64 ">
            <Logo/>
            <div className="pb-[1rem] w-[207px] flex fixed flex-col pt-[8rem] justify-between h-full">

                <DesktopNav/>
                <Tools/>
            </div>
        </aside>
     );
}
 
export default DesktopSidebar;