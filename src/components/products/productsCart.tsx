// → Project imports

import CardCart from '../card/cardCart';
import Checkout from '../cart/checkout';


// → Interfaces

import { ProductCart } from '@/types/types'


const productsCart = ({ products }: { products: Array<ProductCart> }) => {
    return (

        <div className='min-h-[24rem] flex flex-col'>
            <div className=' divide-y-[1px]'>
                <div className='flex justify-between'>
                    <h2 className='text-2xl font-medium text-contrast'>Tu carrito</h2>
                    <p className='text-sm font-semibold text-contrast/80'>{products.length} productos en tu carrito</p>
                </div>
                <>
                    {products.map(item => <CardCart {...item} key={item.id} />)}
                </>
            </div>
            <Checkout />
        </div>

    )
}

export default productsCart