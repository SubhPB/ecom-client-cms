// Byimaan
'use client';
import { getProduct } from "@/actions/GET/products";
import { ProductTS } from "@/types/app";
import { ParentPropTS } from "@/types/components";
import React, {useContext, createContext, useState, useEffect} from "react";

export type LocalDataTS = {
    id: string,
    count: number,
}

export type CartItemTS = ProductTS & {count: number};

export type CartContextTS = {
    addItem: (id: string) => Promise<void>;
    updateCount: (id: string, value: number) => void;
    incrementCount: (id: string) => void;
    decrementCount: (id: string) => void;
    getItem: (id: string) => CartItemTS | null;
    getItems: () => CartItemTS[];
    getRawItemsData: () => LocalDataTS[]
    removeItem: (id: string) => void;
    removeAll: () => void;
};

const CartContext = createContext<CartContextTS | null>(null);

export const CartProvider = ({children}: ParentPropTS) => {
    
    console.log('Cart provider Context rendering...!');
    const [items, setItems] = useState<CartItemTS[]>([]);

    const useCart: CartContextTS = {
        addItem: async (id) => {
            // first checking that if the item already exists in the items
            if (!items.map(i => i.id).includes(id)){
                const item = await getProduct(id);
                if (item){
                    setItems(
                        items => [
                            ...items,
                            {
                                ...item,
                                count: 1
                            }
                        ]
                    )
                }
            }
        },
        updateCount: (id, value) => {
            // item needs to in the items to make increment in it's count.
            if (items.map(i => i.id).includes(id)){
                setItems(
                    items => items.map(item => {
                        if (item.id === id) {
                            return {
                                ...item,
                                count: item.count + value
                            }
                        }
                        return item;
                    })
                )
            }
        },
        incrementCount: (id) => useCart.updateCount(id, 1),
        decrementCount: (id) => useCart.updateCount(id, -1),
        getItem: (id) => items.find(item => item.id === id) || null,
        getItems: () => items,
        getRawItemsData: () => {
            return items.map(
                item => ({
                    id: item.id, count: item.count
                })
            )
        },
        removeItem: (id) => {
            // check does any item exists with this id.
            if (items.map(item => item.id === id)){
                setItems(
                    items => items.filter(item => item.id !== id)
                );
            }
        },
        removeAll: () => {
            setItems([]);
        }
    }

    useEffect(
        () => {
            const localData = localStorage.getItem('cart');

            if (localData){
                const data:LocalDataTS[] =  JSON.parse(localData);
                const ids = data.map(d => d.id);

                const fetchItems = async() => {
                    const responses = await Promise.allSettled(
                        ids.map(id => getProduct(id))
                    );

                    const fetchedItems = responses.filter(
                        res => res.status === 'fulfilled'
                    ).map(
                        (res: any) => res.value as ProductTS
                    );

                    const itemsWithCount = fetchedItems.map(
                        (item) => {
                            const count = data.find(i => i.id === item?.id)?.count;
                            if (count){
                                const refinedData = {...item, count: count}
                                return refinedData as CartItemTS;
                            };
                            return null                         
                        }
                    );

                    setItems(itemsWithCount.filter(d => d !== null) as CartItemTS[])
                };

                // executing the whole logic.
                fetchItems()

            }
        }, []
    );

    useEffect(
        () => {
            localStorage.setItem('cart', JSON.stringify(items))
        }, [items]
    )

    return (
        <CartContext.Provider value={useCart}>
            {children}
        </CartContext.Provider>
    )

};

export const useCart = () => useContext(CartContext);
