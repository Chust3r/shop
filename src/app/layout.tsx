import Head from 'next/head'
import './globals.css'



// → Interfaces

interface PageProps {
	children: React.ReactNode
}


// → Custom font

import localFont from "next/font/local"

const myFont = localFont({ src: "../../public/Naula.otf", variable: "--custom-font" })




export default function RootLayout({ children }: PageProps): JSX.Element {

	return (
		<html lang="en">
			<body className={`bg-acent ${myFont.variable}`}>
				{children}
			</body>

		</html>
	)
}


// → Metadata

export const metadata = {
	title: "Marieta Linda",
	icons: {
		icon: "./icon.png"
	}
}
