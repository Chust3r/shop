// → Project Imports

import ProductList from "@/components/products/productList"
import Search from "@/components/search/search"

// → Interfaces

import { APIResponseProducts } from "@/types/types"
import process from "process"

interface PageProps {
    params: {
        slug: string
    }
}

// → Data fetching

const getData = async (category: string): Promise<APIResponseProducts> => {

    const res = await fetch(`${process.env.API}/category/${category}`)

    const data = await res.json()

    return {
        data,
        error: false
    }

}

const page = async ({ params }: PageProps): Promise<JSX.Element> => {

    const data = await getData(params.slug)

    return (
        <>
            <ProductList products={data.data} />
        </>
    )
}

export default page