// Byimaan

import { getCategories } from '@/actions/GET/category'
import SomethingWentWrong from '@/components/data-not-found';
import React from 'react'
import { ProductSection } from '../[categoryId]/page';


export default async function ProductsPage() {

    const categories = await getCategories();

    if (!categories) {
        return <SomethingWentWrong
                title={
                    {
                        text: 'Opps!'
                    }
                }
                subTitle={
                    {
                        text: 'No products found.'
                    }
                }
            />
    };
    
    return (
        <div className="products-page w-full my-4 px-[12%]">
            {
                categories.map(
                    category => {
                        const {name, products, id} = category ?? {};
                        return <ProductSection key={id} title={name} data={products}/>
                    }
                )
            }
        </div>
    )
};


