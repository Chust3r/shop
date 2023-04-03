// → Project imports 
import CardCart from '../card/cardCart';


// → Interfaces

import { ProductCart } from '@/types/types'



const productsCart = ({ products }: { products: Array<ProductCart> }) => {
    return (

        <div className='grid grid-cols-4 gap-4'>
            <div className='col-span-3'>
                <p className='text-2xl font-medium text-contrast/90'>Your cart</p>
            </div>
            <div className='col-span-1 place-self-end'>
                <p className='text-sm font-medium text-contrast/90'>{products.length} items in cart</p>
            </div>
            {products.map(product => <CardCart {...product} key={product.title} />)}
        </div>


    )
}

export default productsCart