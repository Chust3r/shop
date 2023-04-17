"use client"

// → Store 

import useStoreCart from "@/store/storeCart"

const Checkout = () => {


    const products = useStoreCart(state => state.products)


    let total = 0


    for (const product of products) {
        total += product.amount * product.price
    }



    return (

        <div className="flex flex-col">
            <div className='flex flex-col divide-y-[1px] p-5 rounded text-contrast shadow'>
                {/* Subtotal */}
                <div className='flex justify-between pt-5'>
                    <p className="">Subtotal</p>
                    <p>${total.toFixed(2)}</p>
                </div>
                {/* Envío */}
                <div className='flex justify-between pt-5'>
                    <p>Envío</p>
                    <p>$0.00</p>
                </div>
                {/* Total */}
                <div className='flex justify-between pt-5'>
                    <p className='font-semibold'>Total</p>
                    <p className='font-semibold'>${total.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <button className="btn ">Pagar ahora</button>
            </div>
        </div>

    )
}

export default Checkout