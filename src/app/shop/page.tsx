// → Project imports

import ProductList from '@/components/products/productList'
import MainSlider from '@/components/ui/mainSlider'
import Hero from '@/components/heros/hero'


// → Interfaces

import { APIResponseProducts } from '@/types/types'


const getProducts = async (): Promise<APIResponseProducts> => {
	const res = await fetch('https://fakestoreapi.com/products?limit=5', {
		next: { revalidate: 60 * 60 * 24 },
	})

	const data = await res.json()

	return { error: false, data }
}

const page = async (): Promise<JSX.Element> => {
	const data = await getProducts()

	return (
		<div className='flex flex-col gap-4'>
			<MainSlider />
			<Hero img='banner5.jpg' text="Clothe's men" />
			<Hero img='jewerly.jpg' text='Jewerly' />
		</div>
	)
}

export default page
