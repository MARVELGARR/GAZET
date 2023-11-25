import Auth from "./auth";
import Logo from "./logo";
import Nav from "./nav";



const Header = () => {
    return (
        <header className='w-full flex items-center justify-between px-[5rem] pt-[1rem]'>
            <Logo />
            <Nav/>
            <Auth/>
        </header>
    );
}
 
export default Header;