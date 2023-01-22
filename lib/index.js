

export function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function wordles(word,wordFunction, text) {
    word >= Array.from(text).length ? wordFunction(0) : wordFunction(word+1)
}


//Verificar se esta visivel na tela
export function IsVisible(target,root,threshold, functio, type, multi){
    //Define options

    let option ={
        root: root, //A base de qm? no caso ta null pq é a tela toda
        // rootMargin: rootMargin,
        threshold: threshold // 1 = 100%, 0.25 = 25%, etc
    }
    //Define targets

    const activeObserver = (target_) => {
        const Observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    if(type == "boolean"){
                        functio(true)}
                    else{
                        functio(parseInt(entry.target.getAttribute("index")))
                        return
                    }
                }
                else if(type=="boolean"){                
                    functio(false)
                }
            })
        }, option)
        Observer.observe(target_)
    }
    //Chame a função que acabou de criar la encima
    if(multi){
        target.forEach(activeObserver)

    }else{ activeObserver(target) }
}