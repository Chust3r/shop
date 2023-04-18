"use client"

import { useState, useEffect } from 'react';
import { icons } from "@/config/consts"

// →Interfaces 

import { Product } from '@/types/types';

// → Store 

import useStoreCart from '@/store/storeCart'
import Link from 'next/link';



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
            <button className='btn font-medium text-sm flex all-center gap-3 self-center my-2'
                onClick={onClick}
            >
                {!isInCart
                    ?
                    <> 
                        <span>
                            <icons.ShoppingCart className='w-4 h-4 stroke-2' />
                        </span>
                        <span>Agregar al carrito</span>
                    </>
                    :
                    <>
                        <Link href="shop/cart"><span>Pagar ahora</span></Link>
                    </>

                }
            </button>



        </>
    )
}

export default addCart