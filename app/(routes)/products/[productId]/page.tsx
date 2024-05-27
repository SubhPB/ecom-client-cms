// Byimaan

import React from 'react';
import { ParamsPropTS } from '@/types/components';
import Gallery from '@/components/gallery';
import { getProduct } from '@/actions/GET/products';
import SomethingWentWrong from '@/components/data-not-found';

async function ProductPage({params}: ParamsPropTS) {

    if (!params || !params.productId){
        return (
            <SomethingWentWrong 
                subTitle={
                    {
                        text: 'Product not found.'
                    }
                }
            />
        )
    };

    const product = await getProduct(params.productId);

    if (!product){
        return (
            <SomethingWentWrong 
                subTitle={
                    {
                        text: 'Product not found.'
                    }
                }
            />
        )
    };

    const {images=[]} = product;

    return (
        <div className="product-page w-full px-4 my-2">
            <Gallery
                data={images.map(img => img.url)}
                className='w-full flex flex-col gap-2 md:w-[55%]'
            />
        </div>
    )
}

export default ProductPage