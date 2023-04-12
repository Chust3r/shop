"use client"

// → Store 

import useStoreCart from "@/store/storeCart"

const checkout = () => {


    const products = useStoreCart(state => state.products)


    let total = 0


    for (const product of products) {
        total += product.amount * product.price
    }



    return (
        <div className='flex justify-end mt-5'>
            <div className='flex flex-col divide-y-[1px] w-full lg:w-1/2 p-5 bg-white rounded text-contrast shadow'>
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
        </div>
    )
}

export default checkout