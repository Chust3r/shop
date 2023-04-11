'use client'

import '@splidejs/splide/dist/css/splide.min.css'
import { Splide, SplideSlide, Options } from '@splidejs/react-splide'
import { Children } from 'react';



interface SliderProps {
	autoplay?: boolean,
	controls: {
		pagination?: boolean
		arrows?: boolean
	}
	type?: "slide" | "loop" | "fade"
	children: React.ReactNode
}

const Slider: React.FC<SliderProps> = ({ children, controls: { pagination = false, arrows = false }, type = "slide" }) => {
	const Elements = Children.toArray(children)

	// Config Slider

	const options: Options = {
			autoplay: true,
			type: type,
			rewind: Elements.length > 1,
			rewindSpeed: 300,
			arrows: Elements.length === 1 ? false : arrows,
			pagination: pagination,
			lazyLoad: true,
			perMove: 1,
			speed: 1200
	}

	return (
		<Splide options={options} className="w-full">
			{Elements.map((el, i) => (
				<SplideSlide key={i}>{el}</SplideSlide>
			))}
		</Splide>
	)
}

export default Slider
