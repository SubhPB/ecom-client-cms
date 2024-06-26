// Byimaan

'use client';
import React from 'react'

import { ClassNamePropTS, DataPropTS, ParentPropTS } from "@/types/components";
import toast from 'react-hot-toast';
import { useCart } from '@/components/providers/cart-provider';


function AddToCardComp({className, children, data: id}: ParentPropTS & ClassNamePropTS & DataPropTS<string>) {

  const cart = useCart();

  if (!cart) return <></>;

  const {addItem, getItems} = cart;

  const alreadyInCart = getItems().map(i => i.id).includes(id);

  const addToCart = () => {
    if (!alreadyInCart) {
      toast.success('Item has been added to the cart.')
      addItem(id);
    } else {
      toast.error("You already have this item in your cart.");
      
    }
  };

  return (
   <button onClick={addToCart} className={className}>
      {children}
   </button> 
  )
}

export default AddToCardComp