// → Project imports

import ProductOverview from '@/components/products/overview';

//→ Interfaces

import { APIResponseProduct } from '@/types/types';

interface PageProps {
    params: {
        slug: number
    }
}


// → Data Fetching

const getProduct = async (id: number): Promise<APIResponseProduct> => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await res.json()
    return {
        data: data,
        error: false
    }
}


const productPage = async ({ params: { slug } }: PageProps): Promise<JSX.Element> => {

    const { data } = await getProduct(slug)


    return (
        <ProductOverview product={data} />
    )
}

export default productPage