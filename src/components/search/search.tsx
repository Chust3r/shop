import Link from "next/link"
import SearchIcon from "../icons/searchIcon"

const search = () => {


    const categories = ["electronics", "jewelery", "women's clothing", "men's clothing"]


    return (
        <>
            <div className="relative w-full text-contrast/80 py-2 px-5">
                <input
                    className="w-full rounded-full bg-complementary py-4 pl-7 pr-32 text-sm font-medium transition focus:outline-primary"
                    placeholder="Buscar"
                />

                <button className="absolute rounded-full -translate-x-6 translate-y-1 right-0 px-5 py-3 text-sm font-medium text-acent bg-gradient-to-r from-primary to-secondary">
                    <SearchIcon className="w-5 h-5 stroke-2" />
                </button>
            </div>

            <div className="py-5 px-5 flex gap-5 flex-wrap">
                {categories.map(category => <Link href={`shop/products?category=${category}`} key={category}>
                    <span className="w-fit px-3 py-1.5 text-sm capitalize bg-complementary rounded-full cursor-pointer">{category}</span></Link>)}
            </div>
        </>
    )
}

export default search