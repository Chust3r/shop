import React from 'react'

const productInfoLoader = () => {
    return (
        <div className="max-h-max flex flex-col md:grid md:grid-cols-2">

            <div className="p-5">
                <div className="h-72 md:h-96 w-full bg-gray-200 animate-pulse"></div>
            </div>

            <section className='w-full h-full flex flex-col gap-3 px-4 lg:px-16 py-8'>
                <span className='h-6 w-full bg-gray-200 animate-pulse rounded'></span>
                <span className='h-6 bg-gray-200 animate-pulse rounded'></span>
                <span className="h-5 w-12 bg-gray-200 animate-pulse rounded"></span>
                <span className="h-4 bg-gray-200 animate-pulse rounded w-16"></span>

                <span className='h-4 w-full bg-gray-200 animate-pulse rounded'></span>
                <span className='h-4 w-2/3 bg-gray-200 animate-pulse rounded'></span>
                <span className='h-4 w-2/3 bg-gray-200 animate-pulse rounded'></span>
                <span className='h-4 w-1/2 bg-gray-200 animate-pulse rounded'></span>
                <span className='h-4 w-full bg-gray-200 animate-pulse rounded'></span>
                <span className='h-4 w-full bg-gray-200 animate-pulse rounded'></span>
                <span className='h-4 w-1/3 bg-gray-200 animate-pulse rounded'></span>
                <span className='h-4 w-full bg-gray-200 animate-pulse rounded'></span>
                <div className='flex gap-2 py-2'>
                    <div className='w-7 h-7 bg-gray-200 animate-pulse rounded'></div>
                    <div className='w-7 h-7 bg-gray-200 animate-pulse rounded'></div>
                    <div className='w-7 h-7 bg-gray-200 animate-pulse rounded'></div>
                    <div className='w-7 h-7 bg-gray-200 animate-pulse rounded'></div>
                </div>
            </section>
        </div>
    )
}

export default productInfoLoader