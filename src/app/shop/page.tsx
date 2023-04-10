// → Project imports

import MainSlider from '@/components/ui/mainSlider'
import Hero from '@/components/hero/hero'



const page = (): JSX.Element => {


	return (
		<div className='flex flex-col gap-4'>
			<MainSlider />
			<h1 className='text-4xl font-medium text-contrast'>Conoce nuestras categorias</h1>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
				<Hero img='banner5.jpg' text="Ropa de Hombre" href="shop/category/men's clothing" />
				<Hero img='jewelery.jpg' text='Joyeria' href='shop/category/jewelery' />
				<Hero img='women.jpg' text='Ropa de Mujer' href="shop/category/women's clothing" />
			</div>
		</div>
	)
}

export default page
