// → Interfaces

interface Categories {
	name: string
	path: string
}

const categories: Array<Categories> = [
	{
		name: 'Ropa de hombre',
		path: "men's clothing",
	},
	{
		name: 'Ropa de mujer',
		path: "women's clothing",
	},
	{
		name: 'Joyería',
		path: 'jewelery',
	},
	{
		name: 'Electronicos',
		path: 'electronics',
	},
]

export { categories }
