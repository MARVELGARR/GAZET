'use client'
import { desktopNavData } from "@/data/data";
import { useAppDispatch, useAppSelector } from "@/redux/redux-hooks/hooks";
import Link from "next/link";
import { changeNavState } from "@/redux/features/nav/navSlice";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


const MobileNav = () => {
    const [state, setState] = useState<number>(0)
    const router = useRouter()
    const params = usePathname()
    useEffect(()=>{
        
        if(params == '/'){
            setState(0)
        }
        else if(params == '/client'){
            setState(1)
        }
        else if(params == '/invoice'){
            setState(2)
        }
        else if(params== '/payment'){
            setState(4)
        }

    },[params])

    const dispatch = useAppDispatch()
    const nav = useAppSelector((state)=> state.navState.value)
    return (
        <div className="">

            {!nav &&(<div className="w-[70%] absolute md:hidden right-0 top-0 bottom-0 z-50 bg-white">
                <div onClick={() => dispatch(changeNavState())} className=" absolute right-5 top-3">
                    <Image
                        src="/svg/cancel.svg"
                        alt='cancel'
                        width='40'
                        height='40'
                    />
                </div>
                <nav className=" pt-[2rem]">
                    
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

                    <ul className="flex flex-col items-center w-full gap-[1rem] pl-10">
                        {
                            desktopNavData.map((item, index) => {
                                return (
                                    <li className={cn(` w-full text-left`,
                                    index == state? 'font-bold' : ''
                                    )} key={index}>
                                        <Link className="w-full text-left" href={item.href}>
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>)}
        </div>
    );
}
 
export default MobileNav;
