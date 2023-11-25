
import { cn } from "@/lib/utils";
import Link from "next/link";



const navItem = [
    {name: 'why gazet', href:'', },
    {name: 'products', href:'', },
    {name: 'solutions', href:'', },
    {name: 'features', href:'', },
]

const Nav = () => {
    
    return (
        <nav className=''>
            <ul className='flex items-center gap-4'>

                {
                    navItem.map((item, index)=>{
                        return (
                            <li key={index} className={cn(`text-violet-600`,)}>
                                <Link className='hover:font-bold' href={item.href}>{item.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}
 
export default Nav;