import Image from "next/image";

const Logo = () => {
    return ( 
        <Image 
            src='/svg/logo.svg'
            alt='logo'
            height={120}
            width={120}
            className=" hidden md:flex"
        />
    );
}
 
export default Logo;