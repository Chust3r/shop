"use client"

import { useRouter, usePathname } from "next/navigation"

// → Project imports

import RightArrowIcon from '../icons/rightArrowIcon';

const breadcrumbs = () => {

    const [router, pathname] = [useRouter(), usePathname()]

    const breads = pathname.slice(1).split("/")



    return (
        <div className="container mx-auto flex gap-3 font-medium text-sm text-contrast/90 my-2 px-3 items-center capitalize" aria-label='Breadcrumb'>
            {breads.map((item, i) => {

                return <>
                    <p>{item}</p>
                    {i !== breads.length - 1 && <RightArrowIcon className='w-4 h-4 stroke-contrast/90' />}
                </>
            })}
        </div>
    )
}

export default breadcrumbs