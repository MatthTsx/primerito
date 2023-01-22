
import Image from "next/image"
// import { SocialIcon } from "react-social-icons"

export default function Card({card, index}) {

    return (
        <div className={`w-[210px] h-[80%] md:h-[500px]
        sm:w-[50%] sm:h-[90%] lg:w-[310px] flex-shrink-0 rounded-xl snap-center
        transition-all overflow-hidden p-1 flex flex-col items-center justify-between space-y-3
        background-${index} cursor-pointer opacity-50 Card hover:opacity-75`} typeof="card" index={index}>

            <div className={`w-full h-full transition-all overflow-hidden rounded-md relative
            flex flex-col items-center justify-between opacity-95`}>
                <Image src={card.img} width={400} height={400} alt="background"
                className="w-full h-32 object-cover object-top z-[-1]"/>

                <div className="w-full h-full bottom-0 bg-[#313135] z-[-1] opacity-60">
                    <div className="
                    absolute top-[21.0%] left-3 w-[4.5rem] h-[4.5rem] z-[2]
                    md:w-24 md:h-24 md:top-[4.5rem] md:left-4 rounded-full
                    bg-[#313135]">
                    </div>
                </div>

                <Image src={card.perfil_img} width={200} height={200} alt="perfil image"
                className="absolute top-[22%] left-4 w-16 h-16
                md:w-20 md:h-20 md:top-20 md:left-6
                
                rounded-full object-cover"/>

                <div className={`w-56 h-[60%] transition-all overflow-hidden rounded-md
                flex flex-col items-center space-y-1
                bg-[#000000] bottom-4 p-1 bg-opacity-10 absolute
                sm:h-[55%] md:h-[60%] md:w-[90%]`}>
                    <h1 className={`text-left w-[90%] disc pb-2 border-[#8f8f8f]
                    text-gray-100 font-semibold text-sm border-b`}>
                        {card.title}
                        <span>#{card.tag}</span>
                    </h1>

                    <h2 className="w-[90%] h-[25%] text-sm flex flex-col gap-1">
                        <span className="font-bold tracking-wide">Sobre mim</span>{card.text1}</h2>
                    
                    <span className="w-[90%] text-sm font-bold tracking-wide pt-2 md:pt-0">Jogando</span>
                    <div className="w-[90%] h-[40%] flex flex-row space-x-3 md:h-[30%] pb-2 md:pb-0">
                        <Image src={card.Jogo.url} width={100} height={100} alt="Game" className={`
                        h-16 w-16 rounded-lg object-cover`}/>
                        <h2 className="text-sm tracking-tighter text-gray-400 flex flex-col gap-1">
                            <span className="font-semibold tracking-tight">{card.Jogo.title}</span>
                            {card.Jogo.text}
                        </h2>
                    </div>

                    <span className="w-[90%] text-sm font-bold tracking-wide hidden md:flex">Cargos</span>
                    <ul className="w-[90%] h-[20%] flex flex-row flex-wrap pb-[3%]
                    space-y-1 space-x-2 items-center overflow-hidden">
                        {(card.children || []).map((child,index) => (
                            <li className={`text-sm text-gray-400 w-fit flex-shrink-0 h-[50%] bg-neutral-800
                            rounded-lg px-2 flex flex-row flex-nowrap items-center justify-between`}
                            key={index}>
                                <div className={`w-3 h-3 rounded-full mr-1`}
                                style={{backgroundColor: child.color}}/>
                                {child.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <style>
                {`
                    .background-${index}{
                        background: linear-gradient(to bottom, ${card.color.bg1}, ${card.color.bg2})
                    }
                    
                `}
            </style>
        </div>  
    )
}