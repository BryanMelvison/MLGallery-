import Reveal from "./reveal"
import AnimatedBackground from "./background"
import { Button } from "./ui/button"
import Link from "next/link"
import {HomeIcon} from "@radix-ui/react-icons"

const ModelTitle = ({Title, Description, ModelForm, modelFormProps}) => {
    return (
        <div class ="min-h-screen flex flex-col relative">
            {/* <AnimatedBackground/> */}
            {/* Title */}
            <Reveal>
                <h1 className="z-20 text-center relative mt-20 items-center h1 ">
                    {Title}
                </h1>
            </Reveal>
    
            {/* Description */}
            <Reveal>
                <h2 className="text-center relative  py-10 px-20 mx-auto items-center h4">
                    {Description}
                </h2>
            </Reveal>
            {/* Form */} 
            <Reveal>
                <ModelForm {...modelFormProps} />

            </Reveal>
            {/* Button */}
            <Reveal>
                <div className="flex justify-center items-center mt-4">
                    <Button className=" text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <Link href="/" className ="inline-flex items-center">
                            <HomeIcon className="w-5 h-5 mr-2" />
                            Return to Home
                        </Link>
                    </Button>
                </div>
            </Reveal>
        </div>

    )
}   

export default ModelTitle;