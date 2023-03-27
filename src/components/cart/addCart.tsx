"use client"

import { useState } from 'react';

// → Project Imports 
import CartIcon from '../icons/cartIcon'

// →Interfaces 

import { Product } from '@/types/types';

// → Store 

import useStoreCart from '@/store/storeCart'


const addCart = ({ product }: { product: Product }) => {

    const addProduct = useStoreCart(state => state.addProduct)

    const onClick = () => {
        addProduct(product)
    }


    return (
        <>
            <button className='bg-gradient-to-r from-rose-400 to-rose-500 uppercase font-medium text-sm text-white py-1.5 px-3 
            rounded-lg flex all-center gap-3 self-center'
                onClick={onClick}
            >
                <span>
                    <CartIcon className='w-4 h-4 stroke-2' />
                </span>
                <span>Agregar al carrito</span>
            </button>

        </>
    )
}

export default addCart