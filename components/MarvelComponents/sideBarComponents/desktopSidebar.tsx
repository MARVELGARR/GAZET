import DesktopNav from "./sidebarComponents/desktopNav";
import Logo from "./sidebarComponents/logo";

const DesktopSidebar: React.FC = () => {
    return ( 
        <aside>
            <Logo/>
            <DesktopNav/>
            <Tools/>
        </aside>
     );
}
 
export default DesktopSidebar ;