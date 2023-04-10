// → Project Imports

import ProductList from "@/components/products/productList"
import Search from "@/components/search/search"

// → Interfaces

import { APIResponseProducts } from "@/types/types"
import process from "process"

interface PageProps {
    searchParams: {
        category: string
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

const page = async ({ searchParams }: PageProps): Promise<JSX.Element> => {


    const data = await getData(searchParams.category)

    return (
        <>
            <Search searchParams={searchParams} />
            <ProductList products={data.data} /></>
    )
}

export default page