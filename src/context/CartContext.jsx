import { createContext } from "react";
import {useState}from 'react'
const cartContext= createContext()

export function CartProvider({children}){
const[count,setCount]=useState(0)
const addToCart=()=>{
    setCount(count+1)
}

    return(
        <cartContext.Provider value={{count,addToCart}}>

            {children}
        </cartContext.Provider>
    )
}





export default cartContext;