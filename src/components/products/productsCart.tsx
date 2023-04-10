// → Project imports 
import CardCart from '../card/cardCart';


// → Interfaces

import { ProductCart } from '@/types/types'



const productsCart = ({ products }: { products: Array<ProductCart> }) => {
    return (

        <div className='min-h-[24rem]'>
            <div className='flex justify-between mb-8'>

                <p className='text-2xl font-medium text-contrast'>Tú carrito</p>
                <p className='text-sm font-medium text-contrast/90'>{products.length} productos en el carrito</p>

            </div>

            {products.map(product => <CardCart {...product} key={product.title} />)}

        </div>

    )
}

export default productsCart