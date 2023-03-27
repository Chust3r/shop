import FacebookIcon from '../icons/facebookIcon'
import HearthIcon from '../icons/hearthIcon'
import InstagramIcon from '../icons/instagramIcon'
import TwitterIcon from '../icons/twitterIcon'
import YoutubeIcon from '../icons/youtubeIcon'

const Footer = () => {
	return (
		<footer aria-label="Site Footer" className="w-full bg-white ">
			<div className="container mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 text-slate-700">
				<div className="mx-auto max-w-md">
					<strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
						¿Quieres recibir información sobre lo más nuevo?
					</strong>

					<form className="mt-6" autoComplete="off">
						<div className="relative max-w-lg">
							<input
								className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium transition focus:outline-rose-400"
								placeholder="micorreo@example.com"
							/>

							<button className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full  px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-rose-400 to-rose-500">
								Notifícame
							</button>
						</div>
					</form>
				</div>

				<div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
					<div className="mx-auto max-w-sm lg:max-w-none">
						<p className="mt-4 text-gray-500 lg:text-left lg:text-lg text-justify">
							Todos nuestros productos son bordados a mano y acabados en
							piel con la iconografía representativa de la comunidad
							mazahua del Municipio de Villa Victoria, Estado México y
							cada uno de los íconos plasmados, representa un poco de su
							legado cultural.
						</p>

						<div className="mt-6 flex justify-center gap-4 lg:justify-start">
							<FacebookIcon className="w-6 h-6 text-gray-700 transition hover:text-rose-500 cursor-pointer" />
							<InstagramIcon className="w-6 h-6 text-gray-700 transition hover:text-rose-500 cursor-pointer" />
							<TwitterIcon className="w-6 h-6 text-gray-700 transition hover:text-rose-500 cursor-pointer" />
							<YoutubeIcon className="w-6 h-6 text-gray-700 transition hover:text-rose-500 cursor-pointer" />
						</div>
					</div>

					<div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
						<div>
							<strong className="font-medium text-gray-900">
								Services
							</strong>

							<nav
								aria-label="Footer Services Nav"
								className="mt-6 flex flex-col space-y-1"
							>
								<a
									className="text-gray-700 transition hover:text-rose-500"
									href="/"
								>
									Marketing
								</a>
								<a
									className="text-gray-700 transition hover:text-rose-500"
									href="/"
								>
									Graphic Design
								</a>
								<a
									className="text-gray-700 transition hover:text-rose-500"
									href="/"
								>
									App Development
								</a>
								<a
									className="text-gray-700 transition hover:text-rose-500"
									href="/"
								>
									Web Development
								</a>
							</nav>
						</div>

						<div>
							<strong className="font-medium text-gray-900">
								About
							</strong>

							<nav
								aria-label="Footer About Nav"
								className="mt-6 flex flex-col space-y-1"
							>
								<a
									className="text-gray-700 transition hover:text-rose-500"
									href="/"
								>
									About
								</a>
								<a
									className="text-gray-700 transition hover:text-rose-500"
									href="/"
								>
									Careers
								</a>
								<a
									className="text-gray-700 transition hover:text-rose-500"
									href="/"
								>
									History
								</a>
								<a
									className="text-gray-700 transition hover:text-rose-500"
									href="/"
								>
									Our Team
								</a>
							</nav>
						</div>

						<div>
							<strong className="font-medium text-gray-900">
								Support
							</strong>

							<nav
								aria-label="Footer Support Nav"
								className="mt-6 flex flex-col space-y-1"
							>
								<a
									className="text-gray-700 transition hover:text-rose-500"
									href="/"
								>
									FAQs
								</a>

								<a
									className="text-gray-700 transition hover:text-rose-500"
									href="/"
								>
									Contact
								</a>

								<a
									className="text-gray-700 transition hover:text-rose-500"
									href="/"
								>
									Live Chat
								</a>
							</nav>
						</div>
					</div>
				</div>

				<div className="mt-16 border-t border-gray-100 pt-8">
					<div className="text-center text-xs leading-relaxed text-gray-500">
						<span>© Company 2023. All rights reserved.</span>
						<br />
						<p className="flex items-center justify-center gap-2">
							<span>Made with</span>
							<HearthIcon className="w-3 h-3 fill-rose-400 stroke-rose-400" />
							<span>by Chust3r</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
