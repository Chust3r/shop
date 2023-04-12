"use client"

import { motion } from "framer-motion"

// → Project imports

import CardCart from '../card/cardCart';
import Checkout from '../cart/checkout';


// → Interfaces

import { ProductCart } from '@/types/types'


const productsCart = ({ products }: { products: Array<ProductCart> }) => {
    return (

        <div className='min-h-[24rem] flex flex-col'>
            <div className='flex justify-between items-center border-b-[1px] pb-3'>
                <h2 className='text-4xl font-medium text-contrast font-custom'>Tu carrito</h2>
                    <p className='text-sm font-semibold text-contrast/80'>{products.length} productos en tu carrito</p>
                </div>
            <motion.div className='divide-y-[1px]' layout>
                    {products.map(item => <CardCart {...item} key={item.id} />)}
            </motion.div>

            <Checkout />
        </div>

    )
}

export default productsCart