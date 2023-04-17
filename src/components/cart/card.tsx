"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

// → Project Imports

import { icons } from '@/config/consts';


// → Interfaces

import { ProductCart } from '@/types/types';

// → Store

import useStoreCart from '@/store/storeCart';

// → Storage 

import useStorage from '@/hooks/useStorage';





const CardCart = ({ title, image, price, amount, id }: ProductCart) => {


    const { removeProduct, add, remove, products } = useStoreCart(state => state)

    const [_, updateStorage] = useStorage("products", products)


    useEffect(() => {
        updateStorage(products)
    }, [amount])


    return (
        <div className='flex flex-col lg:grid lg:grid-cols-2 overflow-hidden my-4 px-2 text-contrast pt-3 gap-3'>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
                <figure className=' w-28 h-28 md:w-20 md:h-20 relative rounded bg-complementary'>
                    <Link href={`shop/products/${id}`}>
                        <Image src={image} fill alt={title} className="object-scale-down object-center p-1.5 cursor-pointer" /></Link>
                </figure>
                <h3 className='font-medium text-contrast/90 flex-1 text-sm md:text-base truncate'>{title}</h3>
            </div>



            <div className='flex items-center justify-between gap-3'>
                {/* Controls */}
                <div className='flex gap-2'>
                    <button className='w-7' onClick={() => remove(id)}>-</button>
                    <span className='w-10 text-center bg-complementary p-1 rounded'>{amount}</span>
                    <button className='w-7' onClick={() => add(id)}>+</button>
                </div>
                <span className='font-medium'>${(price * amount).toFixed(2)}</span>
                <div>
                    <div onClick={() => removeProduct(id)}>
                        <icons.Delete className='w-5 h-5 cursor-pointer hover:stroke-red-500 transition duration-200' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardCart