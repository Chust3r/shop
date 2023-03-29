"use client"

// → Project imports

import CardCart from "../card/cardCart"

// → Store

import useStoreCart from "@/store/storeCart"


const productsInCart = () => {

    const products = useStoreCart(state => state.products)

    return (
        <>
            {products.length > 0
                ?
                <section className="px-2 md:px-10 py-8">
                    <div className="py-2">
                        <p className="text-2xl font-semibold text-contrast">Your cart</p>
                    </div>
                    <div className="max-h-max flex flex-col gap-3 divide-y-[1px]">

                        <div className='flex gap-16 p-2 items-center'>
                            <div className="flex-1">
                                <h2 className='font-medium text-contrast'>Product</h2>
                            </div>
                            <div>
                                <span className='font-medium text-contrast pr-2'>Quantity</span>
                            </div>
                            <div>
                                <span className='font-medium text-contrast pr-2'>Price</span>
                            </div>
                        </div>
                        {products.map(product => <CardCart key={product.title} {...product} />)}
                    </div>



                </section>
                : <div className="h-96 all-center"> <p>No hay productos en el carrito</p></div>}
        </>
    )
}

export default productsInCart