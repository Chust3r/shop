import Image from 'next/image'
import Link from 'next/link'

// → Interfaces

import { Product } from '@/types/types'

const Card = (props: Product) => {
	return (
		<div className="rounded-md  overflow-hidden bg-white p-2 relative shadow text-contrast">
			<Link href={`shop/products/${props.id}`}>
				<div className="relative w-full h-60">
					<Image
						src={props.image}
						alt={props.title}
						className="object-scale-down object-center"
						fill
					/>
				</div>
				<div className="py-3 px-4">
					<h3 className="text-sm text-left font-semibold truncate">
						{props.title}
					</h3>
					<div className="mt-1.5 text-left text-sm">
						<p className="tracking-wide font-semibold">
							${props.price} USD
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Card
