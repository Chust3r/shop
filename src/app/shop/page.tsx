// → Project imports

import ProductList from '@/components/products/productList'
import MainSlider from '@/components/ui/mainSlider'


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
			<div className="min-h-fit max-h-max px-14 sm:px-16 md:px-20 lg:px-24">
				<h1 className='text-2xl pt-8 text-slate-700'>Selección de la casa</h1>
				<ProductList products={data.data} />
			</div>
		</>
	)
}

export default page
