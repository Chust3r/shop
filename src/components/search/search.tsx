
import Link from "next/link"
import { categories } from "@/config/consts"

// → Interfaces

interface Params {
    category: string
}


const search = ({ searchParams }: { searchParams: Params }) => {


    return (
        <>
            <div className="py-5 px-5 flex gap-5 flex-wrap">
                {categories.map(category => <Link href={`shop/products?category=${category.path}`} key={category.name}>
                    <span className={`w-fit px-3 py-1.5 text-sm capitalize rounded-full cursor-pointer transition-all duration-300 ${category.path === searchParams.category ? "bg-gradient-to-l from-primary to-secondary text-acent" : "bg-complementary"}`}>{category.name}</span></Link>)}
            </div>
        </>
    )
}

export default search