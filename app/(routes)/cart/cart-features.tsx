// Byimaan
'use client';

import toast from "react-hot-toast";

import { useCart } from "@/components/providers/shopping-cart";
import { CartProductTS } from "./cart-product-item";

import React from "react";
import { X, Plus, Minus } from "lucide-react";


export function ItemCounter({id, count: C}: CartProductTS){
    
    const cart = useCart();
    const count = cart?.getCartItem(id)?.count ?? C;

    if (!cart) {
        return <></>;
    };

    const {addItem, reduceCount} = cart;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        
        if (e.key === 'Enter') {
            const val = Number(e.currentTarget.value);
            if (isNaN(val)){
                toast.error("Given item count is not valid. Provide number instead");
                return
            } else if (val < 0) {
                toast.error("Item count should be atleast more than 0.");
                return 
            };
            addItem(id, val); 
            toast.success(`Item count is now ${val}`)
        }
    };

    const handleDec = () => {
        count > 0 ? toast.success('Item count has been decremented') && reduceCount(id) : toast.error("Item count should be atleast 0.") 
    }

    const handleInc = () => {
        toast.success('Item count has been incremented') && addItem(id) 
    };

    return (
        <div className="item-counter text-bold flex space-x-2 items-center">
            <Minus className="h-4 w-4 cursor-pointer text-black" onClick={handleDec}/>
            <input
                value={count} 
                disabled={true}
                onKeyDown={handleKeyDown}
                className="outline-none mt-2 pb-1 border-b-[1px] max-w-[40px] border-black font-semibold text-center"
            />
            <Plus className="h-4 w-4 cursor-pointer text-green-400" onClick={handleInc}/>
        </div>
    )
}

export function CancelItem({id}: {id: string}){

    const cart = useCart();

    if (!cart) return <></>;

    return (
        <div className="cancel-item absolute z-20 bg-zinc-200 grid place-content-center p-1 rounded-full top-0 right-0 cursor-pointer">
            <X  className='h-4 w-4 font-bold text-white' onClick={() => cart.removeItem(id)}/>
        </div>
    )
}