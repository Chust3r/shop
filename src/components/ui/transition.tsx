"use client"

import { motion, AnimatePresence, delay } from 'framer-motion';
import { usePathname } from 'next/navigation';



const transition = () => {

    const pathName = usePathname()

    return (
        <AnimatePresence key={pathName} onExitComplete={() => window.scrollTo(0, 0)}>

            <motion.div className='fixed top-0 bottom-0 w-screen h-screen right-full z-30 bg-acent'
                initial={{
                    x: "100%",
                    width: "100%"
                }}
                animate={{
                    x: "0%",
                    width: "0"
                }}

                transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                }}

            />
        </AnimatePresence>
    )
}

export default transition

