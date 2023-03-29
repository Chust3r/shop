
// → Interfaces

import { ProductCart } from '@/types/types';
import Image from 'next/image';


const cardCart = ({ title, image, price, amount }: ProductCart) => {
    return (
        <div className='flex gap-16 p-2 items-center'>
            <figure className='relative w-20 h-20 rounded overflow-hidden bg-acent'>
                <Image src={image} alt={title} fill className='object-scale-down object-center p-2' />
            </figure>
            <div className="flex-1">
                <h2 className='font-medium text-contrast'>{title}</h2>
            </div>
            <div>
                <span className='font-medium text-contrast pr-2'>${price}</span>
            </div>
        </div>
    )
}

export default cardCart