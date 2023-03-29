import Image from 'next/image'
import Link from 'next/link'

import logo from '../../../public/logo.png'
import CartBadge from '../cart/cartBadge';

function NavbarCart() {
	return (
		<header className="w-full bg-acent sticky top-0 z-10 shadow-sm">
			<nav className="container mx-auto all-center w-full h-20 flex px-4">
				<div className="flex-1">
					<Link href="shop">
						<Image
							src={logo}
							alt="Marieta Linda"
							width={70}
							height={70}
						/>
					</Link>
				</div>

				<Link className="relative m-1" href="shop/cart">
					<CartBadge />
				</Link>
			</nav>
		</header>
	)
}

export default NavbarCart
