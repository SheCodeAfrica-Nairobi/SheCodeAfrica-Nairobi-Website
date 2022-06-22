import {PropsWithChildren} from "react";

function CtaButton({ children }: PropsWithChildren<{}>) {
  return (
    <button className="text-sans bg-primary text-white py-3 px-3 w-52 rounded-[50px]">
      {children}
    </button>
  )
}

export default CtaButton