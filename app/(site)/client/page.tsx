'use client'
import ClientForm from "@/components/MarvelComponents/clientCreation/clientCreationForm";
import Header1 from "@/components/MarvelComponents/headerComponent/header1";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTable } from "./data-table";

import { columns } from "./columns";



const Client = () => {

    const data = [
        {
            id: '1',
          firstname: 'marvellous',
          business: "business",
          status: "pending",
          clientemail: "m@example.com",
          phone: "09000000000",
          title: "Mr",
          companyname: "Gazet",
          address: "Abuja, Lagos, Nigeria",
          currency: "USD",
          type: "business",
          time: new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true, // You can set this to false if you want 24-hour format
          })
        },
        // ...
    ]


    return (
        <div className="flex gap-[5rem]  flex-col w-full h-full">
            <Header1/>


            <div className=" h-full bg-white rounded-xl">
                <div className="flex flex-col items-center py-6 px-8 gap-8">
                    <div className="flex items-center justify-between  w-full">
                        <h1 className=" text-2xl font-bold">Client</h1>
                        <div className="flex items-center gap-4">
                            <Button className=" rounded-[0.4rem] bg-violet-600 flex items-center gap-4">
                                <span className="">Add Client</span>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5 8.5H12.5V2.5C12.5 1.40667 11.5933 0.5 10.5 0.5C9.40667 0.5 8.5 1.40667 8.5 2.5V8.5H2.5C1.40667 8.5 0.5 9.40667 0.5 10.5C0.5 11.5933 1.40667 12.5 2.5 12.5H8.5V18.5C8.5 19.5933 9.40667 20.5 10.5 20.5C11.5933 20.5 12.5 19.5933 12.5 18.5V12.5H18.5C19.5933 12.5 20.5 11.5933 20.5 10.5C20.5 9.40667 19.5933 8.5 18.5 8.5Z" fill="white"/>
                                </svg>
                            </Button>
                            <Button variant={'outline'} className=" rounded-[0.4rem] flex items-center gap-4">
                                <span className="">Edit client</span>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    s<path d="M12.2916 16.3333C12.2916 17.6 11.2666 18.625 9.99992 18.625C8.73325 18.625 7.70825 17.6 7.70825 16.3333C7.70825 15.0667 8.73325 14.0417 9.99992 14.0417C11.2666 14.0417 12.2916 15.0667 12.2916 16.3333ZM8.95825 16.3333C8.95825 16.9083 9.42492 17.375 9.99992 17.375C10.5749 17.375 11.0416 16.9083 11.0416 16.3333C11.0416 15.7583 10.5749 15.2917 9.99992 15.2917C9.42492 15.2917 8.95825 15.7583 8.95825 16.3333Z" fill="#292D32"/>
                                    <path d="M12.2916 4.66671C12.2916 5.93337 11.2666 6.95837 9.99992 6.95837C8.73325 6.95837 7.70825 5.93337 7.70825 4.66671C7.70825 3.40004 8.73325 2.37504 9.99992 2.37504C11.2666 2.37504 12.2916 3.40004 12.2916 4.66671ZM8.95825 4.66671C8.95825 5.24171 9.42492 5.70837 9.99992 5.70837C10.5749 5.70837 11.0416 5.24171 11.0416 4.66671C11.0416 4.09171 10.5749 3.62504 9.99992 3.62504C9.42492 3.62504 8.95825 4.09171 8.95825 4.66671Z" fill="#292D32"/>
                                    <path d="M12.2916 10.5C12.2916 11.7666 11.2666 12.7916 9.99992 12.7916C8.73325 12.7916 7.70825 11.7666 7.70825 10.5C7.70825 9.23329 8.73325 8.20829 9.99992 8.20829C11.2666 8.20829 12.2916 9.23329 12.2916 10.5ZM8.95825 10.5C8.95825 11.075 9.42492 11.5416 9.99992 11.5416C10.5749 11.5416 11.0416 11.075 11.0416 10.5C11.0416 9.92496 10.5749 9.45829 9.99992 9.45829C9.42492 9.45829 8.95825 9.92496 8.95825 10.5Z" fill="#292D32"/>`
                                </svg>

                            </Button>
                            <div className=""></div>
                        </div>
                    </div>
                    
                </div>
                <div className="">
                    <DataTable columns={columns} data={data}/>
                </div>
            </div>


            <div className="hidden">
                <ClientForm/>
            </div>
        </div>
    );
}

export default Client;