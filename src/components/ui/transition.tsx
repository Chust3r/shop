"use client"

import { motion, AnimatePresence, delay } from 'framer-motion';
import { usePathname } from 'next/navigation';


// → Interfaces

interface PageProps {
    children: React.ReactNode
}

const transition = (props: PageProps) => {

    const pathName = usePathname()


    return (
        <AnimatePresence key={pathName} onExitComplete={() => window.scrollTo(0, 0)}>

            <motion.section

                initial={{
                    opacity: 0,
                }}

                animate={{
                    opacity: 1,
                }}

                transition={{
                    duration: .5,
                    delay: .3,
                    ease: "easeIn"
                }}

                exit={{
                    opacity: 0
                }}




            >
                {props.children}
            </motion.section>
        </AnimatePresence>
    )
}

export default transition