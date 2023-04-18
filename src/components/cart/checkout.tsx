"use client"

import Confetti from "react-confetti"

// → Store 

import useStoreCart from "@/store/storeCart"
import { useWindowSize } from "usehooks-ts"
import { useState } from "react"

const Checkout = () => {


    const { products, reset } = useStoreCart(state => state)

    const { height, width } = useWindowSize()


    const [isPaid, setIsPaid] = useState<boolean>(false)


    let total = 0


    for (const product of products) {
        total += product.amount * product.price
    }


    const handleClick = () => {
        setIsPaid(true)
        setTimeout(() => {
            reset()
        }, 5000)
    }



    return (

        <>
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
                    <button className="btn" onClick={handleClick}>Pagar ahora</button>
            </div>
        </div>


            {isPaid && <Confetti width={width - 150} height={height} />}

        </>

    )
}

export default Checkout