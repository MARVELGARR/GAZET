'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Header1 = () => {
    return (
        <div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-5">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-start">
                        <span>{`Name`}</span>
                        <a href="mailto:JohnDoe@yahoo.com" className="text-[#7433FF]">{'JohnDoe@yahoo.com'}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header1;