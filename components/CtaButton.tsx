import { PropsWithChildren } from "react";

function CtaButton({ children }: PropsWithChildren<unknown>) {
  return <button className="text-sans w-52 rounded-[50px] bg-primary py-3 px-3 text-white">{children}</button>;
}

export default CtaButton;
