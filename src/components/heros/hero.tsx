import Image from "next/image"

// → Interfaces

interface Hero {
    text?: string
    img: string
}


const hero = (props: Hero): JSX.Element => {

    return (
        <div className="w-full h-96 bg-gray-200 relative">
            <Image src={props.img} alt="" fill className="object-cover object-center" />
            <div className="absolute inset-0 w-full h-full flex all-center">
                <h2 className="text-5xl font-semibold text-acent">{props.text}</h2>
            </div>
        </div>
    )
}

export default hero