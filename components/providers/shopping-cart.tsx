// Byimaan

'use client';

import { ParentPropTS } from "@/types/components";
import { createContext, useState, useContext } from "react";

type CartItemTS = {
    id: string,
    count: number
};

type CartMethod<A=string,R=boolean> = (arg: A) => R

type CartContextTS = {
    addItem: CartMethod<string, void>
    removeItem: CartMethod
    reduceCount: CartMethod
    getAllCartItems: () => CartItemTS[]
}

const cartContext = createContext<CartContextTS | null>(null);

export const CartProvider = ({children}: ParentPropTS) => {

    const cartData = localStorage.getItem('cart');
    
    const defaultCartState : CartItemTS[] = cartData ? JSON.parse(cartData) : [];

    const [cart, setCart] = useState(defaultCartState);

    // If any change happens in the state it will automatically update the local storage whenever component re-renders.
    localStorage.setItem('cart', JSON.stringify(cart))

    const isInCart = (id: string) => {
        return cart.map( item => item.id ).includes(id);
    };

    const cartMethods: CartContextTS = {
        addItem: (id) => {
            if (isInCart(id)){
                setCart(
                    prev => prev.map(
                        item => {
                            if (item.id === id){
                                return {
                                    ...item, 
                                    count: item.count + 1
                                }
                            };
                            return item;
                    })
                )
            } else {
                setCart(
                    prev => [
                        ...prev,
                        {
                            id: id,
                            count: 1
                        }
                    ]
                )
            }
        },
        removeItem: (id) => {
            if (isInCart(id)){
                setCart(
                    prev => prev.filter( item => item.id !== id)
                );
                return true
            };
            return false;
        },
        reduceCount: (id) => {
            if (isInCart(id)){
                setCart(
                    prev => prev.map(
                        item => {
                            if (item.id === id){
                                const newCount = item.count - 1;
                                if (newCount > 0){
                                    return {
                                        ...item,
                                        count: newCount
                                    }
                                }
                            }
                            return item
                        }
                    )
                );
                return true;
            };
            return false
        },
        getAllCartItems: () => cart
    }

    return (
        <cartContext.Provider value={cartMethods}>
            {children}
        </cartContext.Provider>
    )
};

export const useCart = () => useContext(cartContext);