// Byimaan

import React from 'react';
import { ShoppingBasket } from 'lucide-react';

import { ClassNamePropTS, ParamsPropTS, ParentWithClassNamePropTS } from '@/types/components';

import SomethingWentWrong from '@/components/data-not-found';

import { getCategory } from '@/actions/GET/category';
import Billboard from '@/components/billboard';
import Carousel from '@/components/carousel';
import ProductCard from '@/components/card';
import { ProductTS } from '@/types/app';

async function CategoryPage({params: {categoryId}}: ParamsPropTS) {

  let categoryData = await getCategory(categoryId);

  if (!categoryData){
    return (
      <SomethingWentWrong subTitle={
        {
          text : 'Category may not exist.'
        }
      }/>
    )
  };

  const {billboard, name, products } = categoryData ?? {};

  const topFeaturedProducts = products.filter( product => product.isFeatured );
  const moreProducts = products.filter(product => !product.isFeatured);

  const zeroProducts = products.length === 0

  return (
    <div className='w-full'>
      <Billboard billboard={billboard}/>

      <div className="inner-page-content w-full md:px-[12%]">

        <div className="category-title flex justify-center items-center gap-4 font-bold text-center text-zinc-600 my-4">
          <ShoppingBasket className='h-10 w-10'/>
          {name && <h1 className='text-4xl'>{name}</h1>}
        </div>

        {
          // need to fix this 
          zeroProducts ? <NoProductsFound className='relative w-full h-[50vh]'/>
          : 
          <>
            <ProductSection title='Top Features' data={topFeaturedProducts}/>
            <ProductSection title='More Products' data={moreProducts}/>
          </>
        }

      </div>
      
    </div>
  )
};

interface ProductSectionTS {
  title ?: string
  data : ProductTS[]
}

export function ProductSection({title, data}: ProductSectionTS){

  if (data.length === 0) return <></>;

  return (
    <div className="product-section w-full mt-2">
      {
        title && 
        <h1 className='text-3xl font-bold text-zinc-600 border-b-[1.2px] border-black pb-4 my-4'>
          {title}
        </h1>
      }

      <Carousel>
        {
          data.map(
            product => <ProductCard key={product.id} data={product}/>
          )
        }
      </Carousel>
    </div>
  )
};

function NoProductsFound({className}: ClassNamePropTS){
  return (
    <div className={`nothing-found ${className}`}>
      <SomethingWentWrong 
        title={
          {
            text: 'No Products'
          }
        }
        subTitle={ 
          {
            text: "This category don't have products."
          }
        }
      />
    </div>
  )
}


export default CategoryPage;