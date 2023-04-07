import Image from 'next/image'
import Link from 'next/link'

// → Interfaces

import { Product } from '@/types/types'

const Card = (props: Product) => {
	return (
		<div className="overflow-hidden bg-acent relative shadow rounded">
			<Link href={`shop/products/${props.id}`}>
				<div className="relative w-full h-60 bg-relive/50">
					<Image
						src={props.image}
						alt={props.title}
						className="object-scale-down object-center p-5"
						fill
					/>
				</div>
				<div className="py-4 px-5 flex flex-col gap-2">
					<h2 className='capitalize font-medium text-[13px] text-contrast/70'>{props.category}</h2>
					<h3 className="text-sm text-left font-semibold truncate text-contrast">
						{props.title}
					</h3>
					<p className="tracking-wide font-semibold text-contrast">
						${props.price.toFixed(2)}
					</p>
				</div>
			</Link>
		</div>
	)
}

export default Card
