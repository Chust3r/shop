import { create } from 'zustand'

// → Interfaces

import { Product, ProductCart } from '@/types/types'

interface ProductState {
	products: Array<ProductCart>
	addProduct: (product: Product) => void
	refreshProducts: (products: Array<ProductCart>) => void
}

const useStoreCart = create<ProductState>((set) => ({
	// → Initial state
	products: [],

	// Add a new product to my cart

	addProduct: (product) =>
		set((state) => {
			let newStore = []
			// Agregar el nuevo producto al Store

			const exist = state.products.some((item) => item.id === product.id)

			// Si existe aumentamos en 1 la cantidad

			if (exist) {
				newStore = state.products.map((item) => {
					if (item.id === product.id) {
						return {
							...item,
							amount: item.amount + 1,
						}
					}
					return item
				})
			} else {
				newStore = [...state.products, { ...product, amount: 1 }]
			}

			return { products: newStore }
		}),

	// → Refresh all products

	refreshProducts: (products) =>
		set((state) => ({
			products: products,
		})),
}))

export default useStoreCart
