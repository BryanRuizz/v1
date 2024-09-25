import { createSlice, PayloadAction } from "@reduxjs/toolkit";



type inistateType = {
    tempinfo: any[],
};



const initialState:inistateType = {
    tempinfo: [],

}

export const PortafolioSlice = createSlice({

    name: "portafolioS",
    initialState,
    reducers: {
        setInf: (state, action: PayloadAction<any[]>) => {
            state.tempinfo = action.payload; // Actualiza el tempinfo en el estado con el valor seleccionado
        },


    }

})
export const { setInf } = PortafolioSlice.actions; // this is for use funct to save in store 
export default PortafolioSlice.reducer;