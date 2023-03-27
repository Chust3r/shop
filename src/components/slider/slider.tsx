'use client'

import '@splidejs/splide/dist/css/splide.min.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Children } from 'react';



interface SliderProps {
	autoplay?: boolean,
	controls: {
		pagination?: boolean
		arrows?: boolean
	}
	perPage?: number
	children: React.ReactNode
}

const Slider: React.FC<SliderProps> = ({ children, controls: { pagination = false, arrows = false }, perPage = 1 }) => {
	const Elements = Children.toArray(children)

	// Config Slider

	const config = {
		options: {
			autoplay: true,
			type: Elements.length === 1 ? 'slide' : 'loop',
			rewind: Elements.length > 1,
			rewindSpeed: 300,
			arrows: Elements.length === 1 ? false : arrows,
			pagination: pagination,
			lazyLoad: true,
			perMove: 1,
			perPage,
			speed: 1200
		},
	}

	return (
		<Splide {...config} className="w-full 2xl:container 2xl:mx-auto" >
			{Elements.map((el, i) => (
				<SplideSlide key={i}>{el}</SplideSlide>
			))}
		</Splide>
	)
}

export default Slider
