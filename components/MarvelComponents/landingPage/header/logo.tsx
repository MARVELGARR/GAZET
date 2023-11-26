import Image from "next/image";





const Logo = () => {
    return (
        <Image
            src='/svg/logo.svg'
            alt='logo'
            width='120'
            height='120'
            className=''
        />
    );
}
 
export default Logo;