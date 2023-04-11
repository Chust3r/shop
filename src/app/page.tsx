
import Link from "next/link"

const home = (): JSX.Element => {
	return (
		<section className="w-full h-screen all-center">
			<div className="flex flex-col place-items-center gap-3">
				<h1>Information about company and philosophy</h1>
				<div>
					<Link href="/shop"><button className="bg-gradient-to-tr from-primary to-secondary text-acent
				 font-medium  px-3 py-2 rounded-full flex gap-1"><span>Visitar la tienda</span>
					</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default home
