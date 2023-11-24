'use client'
import { Input } from "@/components/ui/input";
import { SearchProps } from "@/interfaces/interface";
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
        <div className="flex bg-white w-[25rem] h-[2rem] items-center relative border-black border-[1px] rounded-xl">
            <svg className="absolute" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5 22H22.71L22.43 21.73C23.41 20.59 24 19.11 24 17.5C24 13.91 21.09 11 17.5 11C13.91 11 11 13.91 11 17.5C11 21.09 13.91 24 17.5 24C19.11 24 20.59 23.41 21.73 22.43L22 22.71V23.5L27 28.49L28.49 27L23.5 22ZM17.5 22C15.01 22 13 19.99 13 17.5C13 15.01 15.01 13 17.5 13C19.99 13 22 15.01 22 17.5C22 19.99 19.99 22 17.5 22Z" fill="#3A3541" fill-opacity="0.87"/>
            </svg>
            <Input value={searchQuery} onChange={handleSearch} className=" border-0 ml-[rem] pl-[2.5rem] pb-[1.2rem] absolute left-0 right-0 top-0 bottom-0" placeholder={searchPlaceHolder}/>
        </div>
    );
}
 
export default Search;