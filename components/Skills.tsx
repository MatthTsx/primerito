
import Card from "./Card"
import { cards } from "../constants"
import { useEffect } from "react"
import { sleep, IsVisible } from "../lib"
import { useState } from "react"

export default function Skills(){

    const [visibleId, setVisibleId] = useState(0)
    const [executar,setExectuar] = useState(true)
    const [InPage, SetInPage] = useState(false)

    useEffect(() => {
        IsVisible(document.getElementById("Skills"),null,1.0,SetInPage,"boolean",false)
    })

    return (
        <div className="h-screen overflow-hidden text-left flex justify-evenly Skills
        flex-col relative items-center px-5 sm:px-10 md:flex-row max-w-full mx-auto space-y-32">
            <h2 className="title" id="Skills">Skills</h2>
            <div id="target-card" className={`snap-x snap-mandatory flex space-x-7 overflow-x-scroll w-full md:w-[60%]
            scroll-smooth pb-5 h-[80%] md:space-x-6 scrollbar-thin scrollbar-thumb-black scrollbar-track-slate-300/5`}
            onScroll={() => {
                if(executar){
                    setExectuar(false)
                    sleep(200).then(() => {
                        IsVisible(document.querySelectorAll("#target-card [typeof='card']"),null,1.0,setVisibleId,"",true)
                        setExectuar(true)                     
                    })
                }
            }}>
                <div className={`w-[210px] h-[80%] md:h-[500px]
        sm:w-[50%] sm:h-[90%] lg:w-[310px] flex-shrink-0
        overflow-hidden p-1`}/>
                {cards.map((card, index) => (
                    <Card key={index} card={card} index={index}/>
                ))}
                <div className={`w-[210px] h-[80%] md:h-[500px]
        sm:w-[50%] sm:h-[90%] lg:w-[310px] flex-shrink-0
        overflow-hidden p-1`}/>
            </div>
            <style>
                {`
                    body{                  
                        ${InPage ?
                            `background: linear-gradient(to top, ${cards[visibleId].color.bg1}, ${cards[visibleId].color.bg2})`
                        : `@apply bg-neutral-500`};
                    }
                    #Skills{
                        ${InPage && `color: ${cards[visibleId].color.bg1};`}
                    }
                    #target-card div:nth-child(${visibleId + 2}){
                        opacity: 100 !important;
                    }
                `}
            </style>
        </div>
    )
}