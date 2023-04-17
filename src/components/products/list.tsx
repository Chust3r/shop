import Card from './card'

// → Interfaces

import { Product } from '../../types/types'

const ProductList = ({ products }: { products: Product[] }) => {
	return (
		<div className="container mx-auto min-h-min max-h-max flex flex-col gap-10 overflow-hidden py-10">
			<div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-5 p-3">
				{products.map((el) => (
					<Card key={el.id} {...el} />
				))}
			</div>
		</div>
	)
}

export default ProductList
