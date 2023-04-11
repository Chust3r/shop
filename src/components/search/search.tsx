
import Link from "next/link"
import { categories } from "@/config/consts"

const search = ({ path }: { path: string }) => {


    return (
        <>
            <div className="py-5 px-5 flex gap-5 flex-wrap  w-full">
                {categories.map(category => <Link href={`shop/category/${category.path}`} key={category.name}>
                    <span className={`w-fit px-3 py-1.5 text-sm capitalize rounded-full cursor-pointer transition-all duration-300 border  ${category.path === decodeURI(path) ? "text-primary border-primary " : ""}`}>{category.name}</span></Link>)}
            </div>
        </>
    )
}

export default search