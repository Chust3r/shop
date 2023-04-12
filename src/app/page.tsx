
import Image from "next/image"
import Link from "next/link"

import img from "@public/logo.png"

const home = (): JSX.Element => {
	return (
		<section className="w-full h-screen all-center">
			<div className="flex flex-col place-items-center gap-3">
				<div>
					<Link href="/shop">
						<div className="relative">
							<Image src={img} alt="" className="h-20 w-auto" />
						</div>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default home
