import NavbarCart from '@/components/navbar/navbarCart'
import Breadcrumbs from '../../components/ui/breadcrumbs';

const shopLayout = ({
	children,
}: {
	children: React.ReactNode
}): JSX.Element => {
	return (
		<>
			<NavbarCart />
			{/* <Breadcrumbs/> */}
			<section >
				{children}
			</section>
		</>
	)
}

export default shopLayout
