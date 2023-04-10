// → Project Imports

import ProductList from "@/components/products/productList"
import Search from "@/components/search/search"

// → Interfaces

import { APIResponseProducts } from "@/types/types"

interface PageProps {
    searchParams: {
        category: string | undefined
    }
}


// → Data fetching


const getData = async (category: string | undefined): Promise<APIResponseProducts> => {

    const res = category !== undefined ? await fetch(`https://fakestoreapi.com/products/category/${category}`) : await fetch(`https://fakestoreapi.com/products`)

    const data = await res.json()

    return {
        data,
        error: false
    }

}

const page = async ({ searchParams }: PageProps): Promise<JSX.Element> => {


    const data = await getData(searchParams.category)

    return (
        <>
            <Search />
            <ProductList products={data.data} /></>
    )
}

export default page