"use client"

import DesktopNav from "./sidebarComponents/desktopNav";
import Logo from "./sidebarComponents/logo";
import Tools from "./sidebarComponents/tools";

const DesktopSidebar: React.FC = () => {

    return ( 
        <aside className=" hidden  md:flex sticky flex-col  min-w-[2rem]  h-full items-center left-0 inset-y-0 lg:w-64 ">
            <Logo/>
            <div className="pb-[1rem] w-[207px] flex fixed flex-col items-center pt-[6rem] justify-between h-full">

                <DesktopNav/>
                <Tools/>
            </div>
        </aside>
     );
}
 
export default DesktopSidebar ;