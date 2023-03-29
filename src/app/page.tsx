import CartIcon from "@/components/icons/cartIcon"
import Link from "next/link"

const home = (): JSX.Element => {
	return (
		<section className="w-full h-screen all-center ">
			<div className="flex flex-col place-items-center gap-3">
				<h1>Information about company and philosophy</h1>
				<div><Link href="/shop"><button className="bg-gradient-to-tr from-primary to-secondary text-acent capitalize font-medium  p-1 rounded flex gap-1"><span>go Shop</span><CartIcon className="w-5 h-5 stroke-white stroke-2" /></button></Link></div>
			</div>
		</section>
	)
}

export default home
