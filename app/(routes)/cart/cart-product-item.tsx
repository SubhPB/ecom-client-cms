// Byimaan

import BgFallback from '@/components/bg-fallback';
import { CancelItem } from './cart-features';
import { ItemCounter } from './cart-features';
import { MultiImageHolder } from '@/components/gallery';
import { DataPropTS } from '@/types/components';
import { CartItemTS } from '@/components/providers/cart-provider';

export type CartProductTS = {
    id: string,
    count: number
};

function CartProductItem({data}: DataPropTS<CartItemTS>) {


    if (!data) {
        return <CartItemSkeleton />
    };

    const {id, images, name, price, count } = data;
    return (
        <div className="cart-item w-full flex gap-2 p-4 bg-gray-100 rounded-lg">
            <div className="img h-[140px] w-[130px] md:h-[190px] md:w-[180px] flex-shrink-0">
                <MultiImageHolder images={images.map( i => i.url )}/>
            </div>
            <div className="text-area flex-grow text-black text-bold text-sm relative">
                <CancelItem id={id}/>
                <p className='line-clamp-2 text-ellipsis text-xl pr-6'>{name}</p>
                <p className='text-gray-400'>Price : <span className='text-black'>{`$ ${price}`}</span></p>
                <p className='text-gray-400'>Selected : <span className='text-black'>{`${count} items`}</span></p>
                <p className='text-gray-400'>Total Price : <span className='text-black'>{`$ ${Number(price)*count}`}</span></p>
                <ItemCounter id={id}/>
            </div>
        </div>
    )
};

const CartItemSkeleton = () => {

    const TextSkeleton = ({w='w-[60%]', h='h-5'}) => <p className={` rounded-lg bg-gray-200 ${w} ${h}`}></p>
    return (
        <div className="cart-item w-full flex gap-2 p-4">
            <div className="img h-[140px] w-[130px] md:h-[190px] md:w-[180px] flex-shrink-0">
                <BgFallback />
            </div>
            <div className="text-area flex-grow space-y-2">
                <TextSkeleton />
                <TextSkeleton w='w-[50%]' />
                <TextSkeleton w='w-[40%]'/>

            </div>
    </div>
    )
};



export default CartProductItem