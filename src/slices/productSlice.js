import { createSlice } from '@reduxjs/toolkit'

//Variables en donde se almacenaran los datos de las busquedas
const initialState = { 
    listProducts: [],
    unidades: [],
    listCartProducts: [],
    productDetail: {},
    productDescription:"",
    listCategory: []

}
 
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        //Metodo para cargar los datos de la busqueda
        setListProduct: (state, action) => {
            state.listProducts = action.payload
        },

        setUnidades : (state, action) => {
            state.unidades = action.payload
        },

        setListCategory: (state, action) => {
            state.listCategory = action.payload
        },

        setCartProduct: (state, action) => {
            state.listCartProducts = action.payload
        },

        //Metodo para cargar los datos de la busqueda
        setProductDetail: (state, action) => {
            state.productDetail = action.payload;
        }, 

        setProductDescription: (state, action) => {
            state.productDescription = action.payload;
        }
    },
})

//Se exportan los metodos para poder ser usados globalmente
export const { setListProduct, setProductDetail, setProductDescription , setCartProduct , setListCategory, setUnidades} = productSlice.actions

export default productSlice.reducer