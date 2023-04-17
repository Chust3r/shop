// → Project imports
import Hero from '@/components/hero/hero'


// → Images

import man from "@public/man.jpg"
import woman from "@public/women.jpg"
import electronics from "@public/electronics.jpg"
import jewelery from "@public/jewelery.jpg"


const page = (): JSX.Element => {

	return (
		<section className='flex flex-col gap-4'>
			<h1 className='text-5xl lg:text-6xl font-medium text-contrast my-3 font-custom'>Explora nuestras categorías</h1>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
				<div className='lg:col-span-2'>
				<Hero img={man} text="Hombre" href="shop/category/men's clothing" />
				</div>
				<div>
				<Hero img={woman} text='Mujer' href="shop/category/women's clothing" />
				</div>
				<div><Hero img={jewelery} text='Joyería' href='shop/category/jewelery' /></div>
				<div className='lg:col-span-2'>
				<Hero img={electronics} text='Electronicos' href='shop/category/electronics' />
				</div>
			</div>

		</section>
	)
}

export default page
