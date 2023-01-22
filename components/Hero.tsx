import Image from "next/image"
import Link from "next/link"

import {motion} from "framer-motion"
import { SlideIn } from "../utils/motion"
import { vanishingText, btn_hero, images_src } from "../constants"
import { useTypewriter, Cursor } from "react-simple-typewriter"

import Circle from "./Circle"


export default function Hero() {
    
    const [text, setText] = useTypewriter({
        words: vanishingText,
        loop: true,
        delaySpeed: 2000,
        // typeSpeed: 500,
    })

    return (
        <div className="h-screen flex-col flex space-y-8 items-center justify-center text-center overflow-hidden pt-[12%]">
            {/* {Array.from(text).map((letra,index) => (
                <span
                className={`${index == text.length-1 && 'opacity-40 bg-white bg-opacity-[3%]'}`}>
                    {letra}</span>
            ))}  Pode dar certo, mas sla*/}
            <Circle/>
            <motion.div
                variants={SlideIn("up", 2, 1.2, 50, 50)}
                initial="hidden"
                whileInView={"show"}
            >
                <Image src={images_src.Hero.url}
                    width={images_src.Hero.w} height={images_src.Hero.h}
                    alt={images_src.Hero.alt}
                    className="relative rounded-full mx-auto w-32 h-32 object-cover"
                />
            </motion.div>
            <motion.div
                variants={SlideIn("down",1, 0.8, 100, 50)}
                initial="hidden"
                whileInView={"show"}
            >
                <h2 className="uppercase  text-zinc-500 pb-2 tracking-[10px]"
                >Maluco dos Programa</h2>
                <h1 className="text-3xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="red"></Cursor>
                </h1>
            </motion.div>

            <div className="flex pt-5">
                {btn_hero.map((btn,index) => (
                    <motion.div key={index}
                        variants={SlideIn("down",1, 1 + index/8, 20, 50)}
                        initial="hidden"
                        whileInView={"show"}
                    >
                        <Link href={btn.href}>
                            <button key={index} className="Hero_btn">
                                {btn.text}
                            </button>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}