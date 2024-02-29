import Reveal from "./reveal"
import AnimatedBackground from "./background"
import { Project } from "../projects"
import Link from "next/link"

const MainPage = () => {
    return (
        <section className = "min-h-screen flex flex-col items-center relative">
            <AnimatedBackground />
            <div className="container mx-auto z-10 px-4 ">
                <Reveal>
                    <div className="flex flex-col items-center mb-12 xl:mb-24 text-center mx-auto">
                        <h2 className="h2 font-bold underline">My List of Projects</h2>
                    </div>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-100">
                    {Project.map((project) => (
                        <Link href={project.route} key={project.id} className="shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                            <Reveal>
                                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                                <div className="p-4 bg-white">
                                    <h3 className="text-lg font-semibold">{project.title}</h3>
                                    <p className="text-gray-600">{project.description}</p>
                                </div>
                            </Reveal>
                        </Link>
                    ))}
                </div>

            </div>



        </section>

        )
}

export default MainPage



