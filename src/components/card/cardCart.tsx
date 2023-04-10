"use client"

import Image from 'next/image';
import Link from 'next/link';

// → Project Imports

import DeleteIcon from '../icons/deleteIcon';


// → Interfaces

import { ProductCart } from '@/types/types';



// → Store

import useStoreCart from '@/store/storeCart';



const cardCart = ({ title, image, price, amount, id }: ProductCart) => {


    const { removeProduct } = useStoreCart(state => state)




    const handleDelete = () => {
        removeProduct(id)
    }



    return (
        <div className='grid grid-cols-4 overflow-hidden my-4 px-2 text-contrast'>
            <div className="col-span-3 flex gap-4 items-center">
                <figure className='w-20 h-20 relative rounded bg-gray-50'>
                    <Link href={`shop/products/${id}`}>
                        <Image src={image} fill alt={title} className="object-scale-down object-center p-1.5 cursor-pointer" /></Link>
                </figure>
                <h3 className='font-medium text-contrast/90 flex-1 text-sm md:text-base truncate'>{title}</h3>
            </div>
            <div className='flex items-center justify-between gap-3'>
                <div>
                    <input type="number" value={amount} className="rounded p-2 border text-center w-20 focus:outline-primary/80" />
                </div>
                <span className='font-medium'>${price.toFixed(2)}</span>
                <div>
                    <div onClick={handleDelete}>
                        <DeleteIcon className='w-5 h-5 cursor-pointer hover:stroke-primary transition duration-200' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default cardCart