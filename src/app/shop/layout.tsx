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
			<Transition />
			<NavbarCart />
			<main className='container mx-auto pb-3'>
				{children}
			</main>
			<Footer />
		</>
	)
}

export default shopLayout
