
// → Interfaces

import { ProductCart } from '@/types/types';
import Image from 'next/image';
import DeleteIcon from '../icons/deleteIcon';


const cardCart = ({ title, image, price, amount }: ProductCart) => {
    return (
        <div className='grid grid-cols-4 overflow-hidden my-4 px-2'>
            <div className="col-span-3 flex gap-4 items-center">
                <figure className='w-20 h-20 relative rounded bg-gray-50'>
                    <Image src={image} fill alt={title} className="object-scale-down object-center p-1.5" />
                </figure>
                <h3 className='font-medium text-contrast/80 flex-1 text-sm md:text-base truncate'>{title}</h3>
            </div>
            <div className='flex items-center justify-between gap-3'>
                <div>
                    <input type="number" value={amount} className="rounded p-2 border text-center w-20 focus:outline-complementary text-contrast" />
                </div>
                <span className='font-medium text-contrast'>${price.toFixed(2)}</span>
                <div>
                    <DeleteIcon className='w-5 h-5 text-contrast cursor-pointer hover:stroke-red-600' />
                </div>
            </div>

        </div>
    )
}

export default cardCart