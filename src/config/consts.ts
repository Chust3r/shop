import { HiOutlineShoppingBag, HiOutlineTrash } from 'react-icons/hi2'

// → Interfaces

interface Categories {
	name: string
	path: string
}

const categories: Array<Categories> = [
	{
		name: 'Hombre',
		path: "men's clothing",
	},
	{
		name: 'Mujer',
		path: "women's clothing",
	},
	{
		name: 'Joyería',
		path: 'jewelery',
	},
	{
		name: 'Electrónicos',
		path: 'electronics',
	},
]

const icons = {
	ShoppingCart: HiOutlineShoppingBag,
	Delete:HiOutlineTrash
}

export { categories,icons }
