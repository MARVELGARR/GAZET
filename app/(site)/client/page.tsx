import ClientForm from "@/components/MarvelComponents/clientCreation/clientCreationForm";
import Header1 from "@/components/MarvelComponents/headerComponent/header1";



const Client = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <Header1/>
            <div className="hidden">

                <ClientForm/>
            </div>
        </div>
    );
}
 
export default Client;