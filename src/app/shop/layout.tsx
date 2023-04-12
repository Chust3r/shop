import NavbarCart from '@/components/navbar/navbarCart'
import Footer from '@/components/footer/footer'
import Transition from '../../components/ui/transition';

// → Interfaces

interface PageProps {
	children: React.ReactNode
}

const shopLayout = ({ children }: PageProps): JSX.Element => {
	return (
		<>
			<NavbarCart />
			<main className='container mx-auto pb-2'>
				<Transition>
					{children}
				</Transition>
			</main>
			<Footer />
		</>
	)
}

export default shopLayout
