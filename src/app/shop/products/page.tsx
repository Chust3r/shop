import ProductList from "@/components/products/productList"

// → Interfaces

import { APIResponseProducts } from "@/types/types"

interface PageProps {
    searchParams: {
        category?: string 
    }
}


// → Data fetching


const getData = async (category?: string): Promise<APIResponseProducts> => {

    const res = category !== undefined ? await fetch(`https://fakestoreapi.com/products/category/${category}`) : await fetch(`https://fakestoreapi.com/products/`)

    const data = await res.json()

    return {
        data,
        error: false
    }

}

const page = async ({ searchParams }: PageProps): Promise<JSX.Element> => {


    const data = await getData(searchParams.category)

    return (
        <ProductList products={data.data} />
    )
}

export default page