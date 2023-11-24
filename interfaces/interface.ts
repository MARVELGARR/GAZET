
export interface NavBarItemProps {
    image: string,
    name: string,
    href: string,
    index: number
}

export interface ToolsItemProps {
    name: string;
    icon: string;
    index: number;
}
export interface SearchProps{
    searchPlaceHolder?: string;
    searchData?: {
        title: string,
        firstname: string,
        othernames: string,
        companyname: string,
        clientemail: string,
        phone:string,
        address: string,
        currency: string,
        type:string;
    }[]
}
export interface Client{
    title: string,
    firstname: string,
    othernames: string,
    companyname: string,
    clientemail: string,
    phone:string,
    address: string,
    currency: string,
    type:string;
}