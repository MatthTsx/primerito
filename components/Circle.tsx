import { SizeUp } from "../utils/motion"
import {motion} from "framer-motion"

export default function Circle(){
    return (
        <motion.div 
            variants={SizeUp(2, 1, .4, 27)}
            initial= "hidden"
            whileInView={"show"}
            className="relative flex justify-center items-center"
        >
            <div className={"circle h-[200px] w-[200px] animate-ping border-[rgb(45,45,45)]"}/>
            <div className={"circle h-[300px] w-[300px] border-[rgb(45,45,45)]"} />
            <div className={"circle h-[500px] w-[500px] border-[rgb(45,45,45)]"}/>
            <div className={"circle h-[650px] w-[650px] border-[#F7AB0A] animate-pulse opacity-20"}/>
            <div className={"circle h-[800px] w-[800px] border-[rgb(45,45,45)]"}/>
        </motion.div>
    )
}