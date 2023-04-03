interface Product {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
}

interface APIResponseProducts {
	error: boolean
	data: Array<Product>
}

interface IconProps {
	className: string
}



interface APIResponseProduct {
	data: Product
	error: boolean
}

interface ProductCart extends Product {
	amount: number
}

export { Product, IconProps, APIResponseProduct, APIResponseProducts,ProductCart }
