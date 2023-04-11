// → Project imports

import MainSlider from '@/components/ui/mainSlider'
import Hero from '@/components/hero/hero'


// → Images

import man from "@public/man.jpg"
import woman from "@public/women.jpg"
import electronics from "@public/electronics.jpg"
import jewelery from "@public/jewelery.jpg"


const page = (): JSX.Element => {

	return (
		<section className='flex flex-col gap-4'>
			<MainSlider />
			<h1 className='text-4xl font-medium text-contrast my-3'>Explora nuestras categorías</h1>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
				<Hero img={man} text="Hombre" href="shop/category/men's clothing" />
				<Hero img={woman} text='Mujer' href="shop/category/women's clothing" />
				<Hero img={electronics} text='Electronicos' href='shop/category/electronics' />
				<Hero img={jewelery} text='Joyería' href='shop/category/jewelery' />
			</div>

		</section>
	)
}

export default page
