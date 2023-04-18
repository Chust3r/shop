// → Project imports

import CardCart from '../cart/card';
import Checkout from '../cart/checkout';


// → Interfaces

import { ProductCart } from '@/types/types'

interface PageProps {
    products: Array<ProductCart>
}


const productsCart = ({ products }: PageProps) => {
    return (

        <div className='min-h-[384px] flex flex-col'>
            <div className='flex justify-between items-center border-b-[.0625rem] pb-3'>
                <h2 className='text-4xl font-medium text-contrast font-custom'>Tu carrito</h2>
                <p className='text-sm font-semibold text-contrast/80'>{products.length} productos en tu carrito</p>
            </div>

            <div className='divide-y-[.0625rem] col-span-1 lg:col-span-2'>
                {products.map(item => <CardCart {...item} key={item.id} />)}
            </div>
            <Checkout />

        </div>

    )
}

export default productsCart