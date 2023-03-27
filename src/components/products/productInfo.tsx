
import Image from 'next/image'
import Slider from '../slider/slider'
import AddCart from '../cart/addCart'

// → Interfaces

import { Product } from '@/types/types'


const ProductInfo = ({ product }: { product: Product }) => {


	return <div className="max-h-max container mx-auto flex flex-col md:grid md:grid-cols-2">


		<Slider controls={{
			arrows: true,
			pagination: false
		}}
			autoplay={false}
		>
			<div className='w-full p-5'>
				<figure className='h-72 md:h-96 relative'>
					<Image src={product.image} alt={product.title} fill className='object-scale-down object-center' />
				</figure>
			</div>
		</Slider>


		<section className='w-full h-full flex flex-col gap-2 px-4 lg:px-16 py-8'>
			<h1 className='text-3xl text-slate-700'>{product.title}</h1>
			<h2 className='text-lg font-medium text-slate-700 '>${product.price}</h2>



			<p className="font-medium">Description</p>
			<p>{product.description}</p>
			<span className='capitalize italic font-medium'>{product.category}</span>

			<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odit doloremque totam numquam reprehenderit vel. Voluptate nobis voluptatem, aliquam reprehenderit dolorum ut fugit magni labore earum quod quia quis! Perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nobis non facere deleniti necessitatibus debitis cum sint soluta eius! Optio autem vitae ipsa magni, eos a impedit. Reiciendis, facere quidem</div>

			<AddCart product={product} />


		</section>
	</div>
}

export default ProductInfo
