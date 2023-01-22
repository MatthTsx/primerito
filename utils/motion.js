export const SlideIn = (direction,duration,delay,power,string) => (
    {
        hidden: {
            x: direction == "right"? power : direction == "left"? -power: 0,
            y: direction == "up"? -power: direction == "down"? power: 0,
            opacity: 0,
            scale: 0.75,
        },
        show: {
            x: 0,
            y: 0,
            opacity:1,
            scale: 1,
            transition: {
                duration: duration,
                delay: delay,
                type: "spring",
                stiffness: string,
                ease: "ease-out",
            }
        }
    }
)

export const SizeUp = (power,duration,delay,string) =>(
    {
        hidden: {
            opacity: 0,
            scale: power,
        },
        show: {
            // scale:[power/10 + 1,power,1],
            scale: 1,
            opacity: 1,
            transition:{
                duration: duration,
                delay: delay,
                type: "spring",
                stiffness: string,
                ease:"ease-out"
            }
        }
    }
)

export const ShowIn = (delay, duration) => ({
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            delay: delay,
            duration: duration,
        }
    }
})