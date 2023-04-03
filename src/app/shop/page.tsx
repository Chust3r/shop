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
		<>
			<MainSlider />
			<h1 className='px-4 text-3xl font-semibold pt-8 text-contrast'>Selección de la casa</h1>
			<ProductList products={data.data} />
			<Hero img='/../public/banner5.jpg' text='Colección 2023' />
		</>
	)
}

export default page
