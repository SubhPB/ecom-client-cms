// Byimaan

import React, { useEffect } from 'react';
import axios from 'axios';
import { ShoppingBag } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import { useCart } from '@/components/providers/cart-provider';
import toast from 'react-hot-toast';


function OrderView() {

  const cart = useCart();
  const cartItems = cart?.getItems();
  const searchParams = useSearchParams();

  if (!cart || !cartItems){
    return <></>;
  }

  const noOrder = cartItems.length === 0;

  const totalPrice = cartItems.reduce( 
    (acc, item) => acc + (Number(item.price)*item.count), 0
  );

  const onCheckout = async() => {
    if (noOrder){
      toast.error("There is no item in the cart");
      return;
    }
    const body = cart.getRawItemsData();
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, body);
    window.location = response.data.url;
  };


  useEffect(
    () => {
      if (searchParams.get('success')){
        toast.success("Payment successfully completed.");
        cart.removeAll();
      };
      if (searchParams.get('cancelled')){
        toast.error('Something went wrong!.')
      }
    }, [searchParams, cart.removeAll]
  )

  return (
    <div className="order-view w-full min-h-[30vh] rounded-lg flex flex-col justify-center px-4 py-6 bg-gray-100 text-black font-semibold space-y-3">
        <h1 className='text-2xl font-bold py-2 border-b-[1px] border-black '>Order Summary</h1>
        {
          cartItems.map(
            item => (
              <div key={item.id} className="product-order-detail w-full font font-semibold space-y-1">
                <p className='text-xl font-bold'>Item name : {item.name}</p>
                <p>Price: $ {item.price}</p>
                <p>Selected: {item.count}</p>
                <p>Total: {Number(item.price)*item.count}<span></span></p>
              </div>
            )
          )
        }
        <h1 className='font-bold '>Order Total : <span className='text-green-500 '>${totalPrice}</span></h1>
        <div className="w-full grid place-content-center">
          <button onClick={onCheckout} className='bg-black text-white px-4 py-2 rounded-2xl flex gap-2 items-center justify-center' disabled={noOrder}><ShoppingBag className='h-6 w-6'/> Checkout</button>
        </div>

    </div>
  )
}

export default OrderView