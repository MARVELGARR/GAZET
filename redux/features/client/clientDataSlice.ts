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
    initialState: [],
    reducers: {
        sendData: (state, action: PayloadAction<clientDataProps[]>) => {
            return state.concat(action.payload); // Replace the entire state with the payload
        },
    },
});


export const { sendData } = clientDataSlice.actions;

export default clientDataSlice.reducer