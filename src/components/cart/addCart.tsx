"use client"

import { useState, useEffect } from 'react';

// → Project Imports 
import CartIcon from '../icons/cartIcon'

// →Interfaces 

import { Product } from '@/types/types';

// → Store 

import useStoreCart from '@/store/storeCart'


const addCart = ({ product }: { product: Product }) => {

    const { addProduct, products } = useStoreCart(state => state)

    const [isInCart, setIsInCart] = useState(false)

    const onClick = () => {
        addProduct(product)
        setIsInCart(true)
    }

    useEffect(() => {
        setIsInCart(products.some(item => item.id === product.id))
    }, [])


    return (
        <>
            <button className='bg-gradient-to-r from-primary to-secondary font-medium text-sm text-acent py-1.5 px-3 rounded-lg flex all-center gap-3 self-center my-2'
                onClick={onClick}
            >
                {!isInCart
                    ?
                    <> 
                        <span>
                    <CartIcon className='w-4 h-4 stroke-2' />
                        </span>
                        <span>Buy now</span>
                    </>
                    :
                    <>
                        <span>Pay now</span>
                    </>

                }
            </button>



        </>
    )
}

export default addCart