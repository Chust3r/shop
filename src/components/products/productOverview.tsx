
import Image from 'next/image'
import Slider from '../slider/slider'
import AddCart from '../cart/addCart'

// → Interfaces

import { Product } from '@/types/types'



const ProductOverview = ({ product }: { product: Product }) => {

	console.log(product)

	const { category, description, image, price, title } = product


	return <div className="max-h-max flex flex-col md:grid md:grid-cols-2 text-contrast">

		{/* Slider */}

		<section className='all-center'> 
			<Slider controls={{
				arrows: true, 
				pagination: false
			}}
				autoplay={false}
			>
				<div className='w-full p-5'>
					<figure className='h-72 md:h-96 relative'>
						<Image src={image} alt={title} fill className='object-scale-down object-center' />
					</figure>
				</div>
			</Slider>
		</section>

		{/* Product info */}

		<section className='w-full h-full flex flex-col gap-2 px-4 lg:px-16 py-8 text-contrast'>
			<h3 className='capitalize text-sm text-contrast/70 font-semibold'>{category}</h3>
			<h1 className='text-3xl font-semibold'>{title}</h1>
			<h2 className='text-2xl font-bold text-contrast/90'>${price}</h2>
			<p className="font-medium">Features</p>
			<p>{description}</p>
			<AddCart product={product} />
		</section>
	</div>
}

export default ProductOverview
