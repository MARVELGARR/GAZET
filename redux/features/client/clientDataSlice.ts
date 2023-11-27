import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface clientDataProps {
    id: string;
    title: string;
    firstname: string;
    othernames: string;
    status: string;
    companyname: string;
    clientemail: string;
    phone: string;
    address: string;
    currency: string;
    type: string;
    time: string;
}

const initialState: clientDataProps[] = [];

export const clientDataSlice = createSlice({
    name: 'clientData',
    initialState: [] as clientDataProps[], // Explicitly set the initial state type
    reducers: {
        sendData: (state, action: PayloadAction<clientDataProps[]>) => {
            return [...state, ...action.payload]; // Use spread operator to merge arrays
        },
    },
});



export const { sendData } = clientDataSlice.actions;

export default clientDataSlice.reducer