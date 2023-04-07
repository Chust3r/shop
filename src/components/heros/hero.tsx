import Image from "next/image"

// → Interfaces

interface Hero {
    text?: string
    img: string
}


const hero = (props: Hero): JSX.Element => {

    return (
        <div className="w-full h-96 bg-gray-200 relative">
            <Image src={require(`../../../public/${props.img}`)} alt="" fill className="object-cover object-center" />
            <div className="absolute inset-0 w-full h-full flex all-center flex-col gap-4">
                <h2 className="text-5xl font-semibold text-acent">{props.text}</h2>
                <button className="bg-acent text-contrast px-3 py-2 font-medium">More info</button>
            </div>
        </div>
    )
}

export default hero