import Image from "next/image"
import Link from "next/link"

// → Interfaces

interface Hero {
    text?: string
    img: any
    href: string
}

const hero = (props: Hero): JSX.Element => {

    return (
        <Link href={props.href}>
            <div className="w-full h-96 bg-gray-200 relative">
                <Image src={require(`../../../public/${props.img}`)} alt="" fill className="object-cover object-center" />
                <div className="absolute inset-0 w-full h-full flex all-center flex-col gap-4">
                    <h2 className="text-5xl font-semibold text-acent">{props.text}</h2>
                </div>
            </div></Link>
    )
}

export default hero