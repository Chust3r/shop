import NavbarCart from '@/components/navbar/navbarCart'

const shopLayout = ({
	children,
}: {
	children: React.ReactNode
}): JSX.Element => {
	return (
		<>
			<NavbarCart />
			<section >
				{children}
			</section>
		</>
	)
}

export default shopLayout
