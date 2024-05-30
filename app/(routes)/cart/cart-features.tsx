// Byimaan
'use client';

import React, {useEffect, useState}  from "react";
import toast from "react-hot-toast";

import { useCart } from "@/components/providers/cart-provider";

import { X, Plus, Minus } from "lucide-react";
import { IdPropTS } from "@/types/components";


export function ItemCounter({id}: IdPropTS){
    
    const cart = useCart();
    const cartItem = cart?.getItem(id);

    if (!cart || !cartItem) {
        return <></>;
    };

    const {incrementCount, decrementCount} = cart;

    const handleDec = () => {
        cartItem.count > 1 ? toast.success('Item count has been decremented') && decrementCount(id) : toast.error("Item count should be atleast 1.") 
    }

    const handleInc = () => {
        toast.success('Item count has been incremented') && incrementCount(id) 
    };

    return (
        <div className="item-counter text-bold flex space-x-2 items-center">
            <Minus className="h-4 w-4 cursor-pointer text-black" onClick={handleDec}/>
            <input
                value={cartItem.count} 
                disabled={true}
                className="outline-none mt-2 pb-1 border-b-[1px] max-w-[40px] border-black font-semibold text-center"
            />
            <Plus className="h-4 w-4 cursor-pointer text-green-400" onClick={handleInc}/>
        </div>
    )
}

export function CancelItem({id}: IdPropTS){

    const cart = useCart();

    if (!cart) return <></>;

    return (
        <div className="cancel-item absolute z-20 bg-zinc-200 grid place-content-center p-1 rounded-full top-0 right-0 cursor-pointer">
            <X  className='h-4 w-4 font-bold text-white' onClick={() => cart.removeItem(id)}/>
        </div>
    )
};
