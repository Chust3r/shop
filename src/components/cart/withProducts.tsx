"use client"


// → Project imports

import CartVoid from "./withoutProducts"

// → Store

import useStoreCart from "@/store/storeCart"
import ProductsCart from "../products/inCart"




const WithProducts = () => {

    const products = useStoreCart(state => state.products)

    return (
        <section className="max-h-max p-8 relative">
            {products.length > 0 ? <ProductsCart products={products} /> : <CartVoid />}
        </section>
    )

}

export default WithProducts

