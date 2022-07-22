import React, { useRef, useEffect, useState } from "react";
import Typed, { TypedOptions } from "typed.js";

type Props = {
  elems: string[]; //array of strings to be animated
  typeSpeed: number; //forward typing speed in milliseconds
  backSpeed: number; //back typing speed in milliseconds
  delay: number; // no of seconds to wait before restarting
};

const LandingValueProposition = (props: Props) => {
  //reference to store the DOM element containing the animation
  const elem = useRef<HTMLSpanElement | null>(null);
  //reference to the current element index for controlling text color
  const [index, setIndex] = useState<number>(0);
  //reference to the Typed instance itself
  const typed = useRef<Typed | undefined>(undefined);
  useEffect(() => {
    const options: TypedOptions = {
      strings: [...props.elems],
      preStringTyped: (i, _) => setIndex(i),
      typeSpeed: props.typeSpeed || 100,
      backSpeed: props.backSpeed || 100,
    };
    typed.current = new Typed(elem.current!, options);
    let animationTimeout = setInterval(() => typed.current?.reset(), props.delay * 1000);
    return () => {
      typed.current!.destroy();
      clearInterval(animationTimeout);
    };
  }, []);
  return (
    <div
      className={`${index == 0 && "text-primary"} ${index == 1 && "text-greenAccent"} ${
        index == 2 && "text-blueAccent"
      } font-header  text-6xl font-bold text-primary lg:text-8xl`}>
      <span ref={elem} />
    </div>
  );
};

export default LandingValueProposition;
