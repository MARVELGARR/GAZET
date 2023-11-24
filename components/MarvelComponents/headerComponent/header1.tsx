'use client'
import Search from "./searchComponent";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Header1 = () => {
    return (
        <div className="flex w-full items-center justify-between">
            <Search/>
            <div className="flex items-center gap-4">
                <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.98 4.64094C14.8026 3.15337 13.5367 2 12.0013 2C10.466 2 9.2 3.15337 9.02257 4.64094C6.5199 5.77546 4.77908 8.29555 4.77908 11.2222V16.2399L3.10858 19.5494C2.77286 20.2145 3.25626 21 4.0013 21H9.17201C9.58385 22.1652 10.6951 23 12.0013 23C13.3075 23 14.4188 22.1652 14.8306 21H20.0013C20.7463 21 21.2297 20.2145 20.894 19.5494L19.2235 16.2399V11.2222C19.2235 8.29555 17.4827 5.77546 14.98 4.64094ZM17.3308 16.9286L18.3764 19H5.62623L6.6718 16.9286C6.74234 16.7888 6.77908 16.6345 6.77908 16.478V11.2222C6.77908 8.33807 9.11715 6 12.0013 6C14.8855 6 17.2235 8.33807 17.2235 11.2222V16.478C17.2235 16.6345 17.2603 16.7888 17.3308 16.9286Z" fill="#92929D"/>
                </svg>

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