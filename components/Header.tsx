import { SocialIcon } from "react-social-icons"
import {Icons} from '../constants/index'

import {motion} from 'framer-motion'
import {SlideIn} from '../utils/motion'

export default function Header(){
    return (
        <header className="flex justify-between max-w-6xl z-20 mx-auto sticky top-0 p-6 overflow-hidden">
            <motion.div className="flex w-[50%] h-full"
                variants={SlideIn("left",1, 0.3,500, 35)}
                initial="hidden"
                animate="show"
                viewport={{once:true, amount: .25}}
            >
                {Icons.First.map((icon,index) => (
                    <SocialIcon className="fill-orange-500" key={index}
                    url={`https://www.${icon.url}`}
                    fgColor={!icon.hover? Icons.color.primary: Icons.color.bg}
                    // onMouseOver={() => {if(!icon.hover){icon.hover = true;console.log("a")}}} site n atualiza na hora :<
                    bgColor={Icons.color.bg}
                    />
                ))}
            </motion.div>
            
            <motion.div className="flex gap-1 items-center cursor-pointer"
                variants={SlideIn("right",1,0.3,500, 35)}
                initial="hidden"
                animate="show"
                viewport={{once:true, amount:.25}}
            >
                {Icons.secondary.map((icon,index) => (
                    <SocialIcon
                        url={`https://${icon.url}`}
                        fgColor={Icons.color.primary}
                        bgColor={Icons.color.bg}
                        key={index}
                    />
                ))}

                <p className="hidden md:inline-flex text-1xl text-zinc-600">
                    Contact Me
                </p>
            </motion.div>

        </header>
    )
}