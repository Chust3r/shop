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

export { categories }
