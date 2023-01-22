import Image from "next/image"
import {motion} from "framer-motion"

import { SlideIn, ShowIn } from "../utils/motion"
import { images_src , texts} from "../constants"
import { useEffect, useState } from "react"
import { sleep, wordles, IsVisible } from "../lib"

export default function About(){
    const [Word, setWord] = useState(0)
    const [visible, setVisible] = useState(false)

    useEffect(()=>{
        sleep(1000).then(() => {
            IsVisible(document.querySelector("#target"),null,1.0, setVisible,"boolean", false)
        })
        visible && sleep(100).then(()=>{
            wordles(Word, setWord, texts.About)
        })
    })

    return (
        <div className="h-screen relative flex flex-col max-w-7xl
        text-center md:text-left md:flex-row justify-evenly px-10 items-center">
            <h3 id="target" className="title">
                About</h3>
            
            <motion.div
                variants={SlideIn("left", 1, 0.3, 200, 50)}
                initial = "hidden"
                whileInView={"show"}
            >
                <Image src={images_src.About.url} width={images_src.About.w} height={images_src.About.h} alt={images_src.About.alt}
                className="relative object-cover rounded-full w-32 h-32 flex-shrink-0 top-16 md:top-8
                md:w-56 md:h-56 lg:w-64 lg:h-64"/>
            </motion.div>
            <motion.div className="space-y-10 px-0 md:px-10 md:w-[50%]"
                variants={SlideIn("right",2, 0.4, 50, 30)}
                initial = "hidden"
                whileInView={"show"}
            >
                <h2 className="font-semibold text-2xl text-gray-500 tracking-wide relative text-center">Uepa bebe <span
                className="text-gray-600 animate-bounce absolute px-5">ඞ</span></h2>
                <motion.p className="text-base text-center"
                variants={ShowIn(1, 1)}
                initial={"hidden"} whileInView={"show"}>
                    {Array.from(texts.About).map((word,index) => (
                        <span 
                        className={`${index == Word ? "text-red-600" :
                        index + 1 == Word ? "text-orange-500" :
                        index + 2 == Word ? "text-yellow-500" : 
                        index + 3 == Word? "text-green-500" : 
                        index + 4 == Word? "text-blue-500" :
                        index + 5 == Word? "text-blue-800" :
                        index + 6 == Word? "text-purple-500" : "text-[#6d6c6c]/80"}`}
                        key={index}>{word}</span>
                    ))}
                </motion.p>
            </motion.div>
        </div>
    )
}