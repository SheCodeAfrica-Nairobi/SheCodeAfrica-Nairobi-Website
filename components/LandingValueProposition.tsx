import React,{useRef,useEffect} from 'react'
import Typed, { TypedOptions } from 'typed.js';

type Props = {
    elems:string[],
    typeSpeed:number,
    backSpeed:number
}

const LandingValueProposition = (props: Props) => {
    //reference to store the DOM element containing the animation
    const elem=useRef<HTMLSpanElement|null>(null)
    //reference to the Typed instance itself
    const typed=useRef<Typed|undefined>(undefined)
    useEffect(()=>{
        const options:TypedOptions={
            strings:[...props.elems],
            typeSpeed:props.typeSpeed || 100,
            backSpeed:props.backSpeed || 100,
        }
        typed.current=new Typed(elem.current!,options)
        let animationTimeout=setInterval(()=>typed.current?.reset(),10000)
        return()=>{
            typed.current!.destroy()
            clearInterval(animationTimeout)
        }

    },[])
  return (
    <div className='text-8xl font-bold font-sans text-primary'>
        <span ref={elem} />

    </div>
  )
}

export default LandingValueProposition