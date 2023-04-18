import Link from "next/link"


const WithoutProducts = () => {
    return (
        <section className="w-full h-96 all-center">
            <Link href="shop">
                <button className="btn">Comprar ahora</button></Link>
        </section>
    )
}

export default WithoutProducts