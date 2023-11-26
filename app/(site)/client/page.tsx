'use client'
import ClientForm from "@/components/MarvelComponents/clientCreation/clientCreationForm";
import Header1 from "@/components/MarvelComponents/headerComponent/header1";
import { Button } from "@/components/ui/button";
import { changeState } from "@/redux/features/client/clientStateSlice";
import { DataTable } from "./data-table";

import { columns } from "./columns";
import { useAppDispatch, useAppSelector } from "@/redux/redux-hooks/hooks";
import Image from "next/image";
import { useEffect } from "react";



const Client = () => {

    const isActive = useAppSelector((state) => state.clientState.value);
    const dispatch = useAppDispatch();
    
    const data = useAppSelector((state) => state.clientData);
    
    useEffect(()=>{
        console.log(data)
    },[data])


    return (
        <div className="flex gap-[4rem]  flex-col w-full h-full">
            <Header1/>


            <div className=" h-full bg-white rounded-xl">
                <div className="flex flex-col items-center py-6 px-8 gap-8">
                    <div className="flex items-center justify-between  w-full">
                        <h1 className=" text-2xl font-bold text-violet-600">Client</h1>
                        <div className="flex items-center gap-4">
                            <Button onClick={()=>dispatch(changeState())} className=" group h-[2.3rem] rounded-[0.4rem] hover:text-violet-600 hover:border-2 hover:border-violet-600 bg-violet-600 flex items-center gap-2">
                                <span className="text-white text-sm group-hover:text-violet-600">Add Client</span>
                                <div className="">
                                    
                                    <Image
                                        src='/svg/plus.svg'
                                        alt='add new client'
                                        width='14'
                                        height='12'
                                        className='group-hover:bg-violet-600 group-hover:rounded-full group-hover:p-1'
                                    />
                                </div>
                            </Button>
                            <div className=""></div>
                        </div>
                    </div>
                    
                </div>
                <div className="">
                    <DataTable columns={columns} data={data}/>
                </div>
            </div>


            { isActive && (<div className=" absolute w-[79%] flex items-center justify-center  z-10 filter backdrop-blur-sm">
                <ClientForm/>
            </div>)}
        </div>
    );
}

export default Client;

