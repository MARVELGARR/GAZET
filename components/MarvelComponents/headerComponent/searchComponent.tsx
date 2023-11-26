'use client'
import { Input } from "@/components/ui/input";
import { SearchProps } from "@/interfaces/interface";
import Image from "next/image";
import { useState } from "react";

const Search: React.FC<SearchProps> = ({searchPlaceHolder, searchData }) => {
    const [data, setData] = useState(searchData);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        const filteredData = data?.filter(item => {
            // Customize this condition based on your data structure
            return item.firstname.toLowerCase().includes(searchQuery.toLowerCase());
        });
    
    };

    return (
        <div className="lg:flex pr-5 hidden bg-white w-[25rem] h-[2rem] items-center relative border-black border-[1px] rounded-xl">
            <Image
                src='/svg/search.svg'
                alt='search icon'
                width='40'
                height='40'
                className=''
            />
            <Input 
            value={searchQuery} onChange={handleSearch} className=" border-0 ml-[rem] pl-[2.5rem] pb-[1.2rem] absolute left-0 right-0 top-0 bottom-0" placeholder={searchPlaceHolder}/>
        </div>
    );
}
 
export default Search;