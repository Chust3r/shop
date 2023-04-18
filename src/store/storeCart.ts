import { create } from 'zustand'

// → Interfaces

import { Product, ProductCart } from '@/types/types'

interface ProductState {
	products: Array<ProductCart>
	addProduct: (product: Product) => void
	refreshProducts: (products: Array<ProductCart>) => void
	removeProduct: (id: number) => void
	add: (id: number) => void
	remove: (id: number) => void
	reset: () => void
}

const useStoreCart = create<ProductState>((set) => ({
	// → Initial state
	products: [],

	// Add a new product to my cart

	addProduct: (product) =>
		set((state) => {
			let newStore: Array<ProductCart> = []
			// Agregar el nuevo producto al Store

			const exist = state.products.some((item) => item.id === product.id)

			// Si existe aumentamos en 1 la cantidad

			if (!exist) {
				newStore = [...state.products, { ...product, amount: 1 }]
			} else {
				newStore = state.products
			}

			return { products: newStore }
		}),

	// → Refresh all products

	refreshProducts: (products) =>
		set((state) => ({
			products: products,
		})),

	// → Remove product

	removeProduct: (id) => {
		set((state) => ({
			products: state.products.filter((product) => {
				if (product.id === id) return
				return product
			}),
		}))
	},

	// → Add more quantities

	add: (id) => {
		set((state) => ({
			products: state.products.map((product) => {
				if (product.id === id)
					return { ...product, amount: product.amount + 1 }
				return product
			}),
		}))
	},

	// → Remove

	remove: (id) => {
		set((state) => ({
			products: state.products.map((product) => {
				if (product.id === id)
					return {
						...product,
						amount: product.amount - 1 === 0 ? 1 : product.amount - 1,
					}
				return product
			}),
		}))
	},

	// → Reset

	reset: () => {
		set(() => ({
			products: [],
		}))
	},
}))

export default useStoreCart
