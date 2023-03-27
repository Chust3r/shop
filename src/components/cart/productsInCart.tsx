"use client"

// → Project imports

import CardCart from "../card/cardCart"

// → Store

import useStoreCart from "@/store/storeCart"


const productsInCart = () => {

    const products = useStoreCart(state => state.products)

    return (
        <>
            <div>Hay {products.length} productos en el carrito</div>
        </>
    )
}

export default productsInCart