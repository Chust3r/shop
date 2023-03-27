"use client"

import CartIcon from '../icons/cartIcon'
import { useEffect } from 'react'

// → Store

import useStoreCart from '@/store/storeCart'

// → Storage 

import useStorage from '@/hooks/useStorage'
import { ProductCart } from '@/types/types'


const cartBadge = () => {

    const itemsInBag = useStoreCart(state => state.products)

    const updateItems = useStoreCart(state => state.refreshProducts)

    const [storage, setStorage] = useStorage<Array<ProductCart>>("products", [])


    // Actualizar items si existen datos en el localStorage

    useEffect(() => {
        updateItems(storage)
    }, [])

    // Guardar en el localStorage cada que se agregue un producto diferente

    useEffect(() => {
        setStorage(itemsInBag)
    }, [itemsInBag.length])


    return (
        <div className='relative'>
            <CartIcon className='w-6 h-6 ' />
            {itemsInBag.length > 0 && <span className='absolute -bottom-2 -right-2 w-5 h-5 bg-gradient-to-tr from-rose-400 to-rose-500 flex justify-center items-center rounded-full text-[10px] font-medium text-white'>
                {itemsInBag.length}
            </span>}
        </div>
    )
}

export default cartBadge