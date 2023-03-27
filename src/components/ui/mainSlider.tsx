import Slider from '@/components/slider/slider'

import Image from 'next/image'

/* Demo Images */

import img1 from '@public/banner1.jpg'
import img2 from '@public/banner2.jpg'
import img3 from '@public/banner3.jpg'
import img4 from '@public/banner4.jpg'

const MainSlider = (): JSX.Element => {
    const Images = [img1, img2, img3, img4]
    return (
        <Slider controls={{ arrows: true, pagination: true }}>
            {Images.map((el, i) => (
                <div
                    className='h-96 w-full'
                    key={i}
                >
                    <Image
                        src={el}
                        alt=''
                        fill
                        className='object-cover object-center'
                        priority
                    />
                </div>
            ))}
        </Slider>
    )
}

export default MainSlider
