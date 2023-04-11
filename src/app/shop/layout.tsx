import NavbarCart from '@/components/navbar/navbarCart'
import Transition from '../../components/ui/transition';


const shopLayout = ({
	children,
}: {
	children: React.ReactNode
}): JSX.Element => {
	return (
		<>
			<NavbarCart />

			<Transition>
				<section >
				{children}
			</section>
			</Transition>
		</>
	)
}

export default shopLayout
