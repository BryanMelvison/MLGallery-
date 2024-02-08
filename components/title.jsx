import Reveal from "@/components/reveal"
import AnimatedBackground from "./background"

const Title = () => {
    return (
        <section className = "min-h-screen flex flex-col justify-center  items-center relative">
            <AnimatedBackground />

            <div className="container mx-auto z-10 px-4 relative">
                {/* Starting Page */}
                <div className="text-center">
                    <div className="mb-8">
                        <Reveal>
                            <h1 className="h1">
                                <span className="inline-block hover-effect mr-4">Welcome</span>
                                <span className="inline-block hover-effect mr-4">to</span>
                                <span className="inline-block hover-effect">MLG!</span>
                            </h1>                        
                        </Reveal> 
                    </div>
                    <div className="mb-8">
                        <Reveal>
                            <h1 className="h2">Embark on a journey through the machine learning models I've crafted. Each project reflects my passion and dedication to exploring the endless possibilities of artificial intelligence.</h1>
                        </Reveal>
                    </div>
                    <div className="mb-8">
                        <Reveal>
                            <h1 className="h4">By <a class="hover:underline hover:text hover:text-blue-500" href="https://bryan-melvison.vercel.app/">Bryan Melvison</a></h1>
                        </Reveal>
                    </div>
                </div>
            </div>

        </section>

        )
}

export default Title



