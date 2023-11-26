import { Button } from "@/components/ui/button";



const Auth = () => {
    return (
        <div className="flex items-center gap-3">
            <Button className=' rounded-2xl h-[2rem] hover:text-white hover:bg-black' variant='outline'>Log in</Button>
            <Button className='rounded-2xl h-[2rem] hover:border-black hover:border-[2px] hover:text-black  text-white bg-black' variant="secondary">Get started</Button>
        </div>
    );
}
 
export default Auth;