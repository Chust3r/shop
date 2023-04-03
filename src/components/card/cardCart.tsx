
// → Interfaces

import { ProductCart } from '@/types/types';
import Image from 'next/image';


const cardCart = ({ title, image, price, amount }: ProductCart) => {
    return (
        <>
            <div className="col-span-3 flex gap-4 items-center">
                <figure className='w-20 h-20 relative rounded bg-gray-50'>
                    <Image src={image} fill alt={title} className="object-scale-down object-center p-1.5" />
                </figure>
                <h3 className='font-medium text-contrast flex-1 text-sm md:text-base'>{title}</h3>
            </div>
            <div className='col-span-1 flex items-center justify-end'>
                <span className='font-medium text-contrast'>${price.toFixed(2)}</span>
            </div>

        </>
    )
}

export default cardCart