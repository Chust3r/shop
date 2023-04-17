"use client"

import { useEffect } from 'react'

import { icons } from "@/config/consts"


// → Interfaces

import { ProductCart } from '@/types/types'

// → Store

import useStoreCart from '@/store/storeCart'

// → Storage 

import useStorage from '@/hooks/useStorage'





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
            <icons.ShoppingCart className='w-6 h-6 stroke-contrast' />
            {itemsInBag.length > 0 && <span className='absolute -bottom-2 -right-2 w-5 h-5 bg-gradient-to-tr from-primary to-secondary flex justify-center items-center rounded-full text-[10px] font-medium text-acent'>
                {itemsInBag.length}
            </span>}
        </div>
    )
}

export default cartBadge