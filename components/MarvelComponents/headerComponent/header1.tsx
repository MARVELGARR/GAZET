'use client'
import Image from "next/image";
import Search from "./searchComponent";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Header1 = () => {


    return (
        <div className="flex w-full items-center justify-between">
            <Search/>
            <div className=" hidden lg:flex items-center gap-4">
                <Image
                    src='/svg/bell.svg'
                    alt='bell'
                    width={26}
                    height={26}
                    className=""
                />

                <div className="flex items-center ">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span>{`name`}</span>
                </div>
            </div>
        </div>
    );
}
 
export default Header1;