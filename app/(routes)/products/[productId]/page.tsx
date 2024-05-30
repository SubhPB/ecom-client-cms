// Byimaan

import React from 'react';
import { DataPropTS, ObjectPropTS, ParamsPropTS } from '@/types/components';

import { getProduct } from '@/actions/GET/products';

import { GalleryProvider } from '@/components/providers/gallery-provider';
import Gallery from '@/components/gallery';
import SomethingWentWrong from '@/components/data-not-found';
import { ShoppingCart } from 'lucide-react';
import { getCategory } from '@/actions/GET/category';
import { ProductSection } from '../../[categoryId]/page';

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

    const {images=[], name, price, categoryId} = product;

    return (
        <div className="w-full">
            <div className="product-page w-full px-4 my-2 md:flex">
                <GalleryProvider images={images.map( i => i.url)}>
                    <Gallery
                        className='w-full flex flex-col gap-2 md:w-[55%] flex-shrink-[0]'
                    />
                </GalleryProvider>

                <div className="product-description w-full md:flex-grow-[1] text-black font-bold">
                    <div className="desc-header py-4 border-b-2 border-black mb-4">
                        <h1 className='text-3xl line-clamp-2 text-ellipsis'>{name[0].toUpperCase()+name.slice(1).toLowerCase()}</h1>
                        <h2 className='text-lg text-semibold my-1 opacity-80'>{`$ ${price}`}</h2>
                    </div>
                    <button className='text-white font-semibold rounded-2xl text-lg px-4 py-2 bg-black flex gap-2 items-center'>
                        Add to cart {<ShoppingCart className=' h-6 w-6'/>}
                    </button>
                </div>
            </div>
            <MoreItemsFromThisCategory categoryId={categoryId} productId={params.productId}/>
        </div>
    )
};

async function MoreItemsFromThisCategory({categoryId, productId}:ObjectPropTS){
    let category = await getCategory(categoryId);
    if (!category){
        return <></>
    };

    return (
        <div className="products-page w-full my-4 px-[12%]">
            <ProductSection title='More items like this' data={category.products.filter( p => p.id !== productId)} />
        </div>
    )
}
export default ProductPage