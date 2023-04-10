// → Project imports

import ProductOverview from '@/components/products/productOverview';

//→ Interfaces

import { APIResponseProduct } from '@/types/types';

interface PageProps {
    params: {
        slug: number
    }
}


// → Data Fetching

const getProduct = async (id: number): Promise<APIResponseProduct> => {
    const res = await fetch(`${process.env.API}${id}`)
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