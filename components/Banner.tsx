import CtaButton from "./CtaButton";
import LandingValueProposition from "./LandingValueProposition";

type PropsWithClassName<T = {}> = { className?: string } & T;

function BannerImage({ className, ...props }: PropsWithClassName<{ src: string; alt: string }>) {
  return <img className={`rounded-[50px] border-[10px] border-zinc-50 ${className}`} {...props} />;
}

function Banner({ className }: PropsWithClassName) {
  return (
    <div className={`flex py-10 ${className}`}>
      <div className="grow basis-0">
        <div className="mb-2.5 md:-mr-48">
          {/* <span className="font-header text-primary text-3xl md:text-6xl md:leading-[5rem] lg:text-7xl lg:leading-[6rem] xl:text-8xl xl:leading-[8rem]">
            Learn. Grow. Connect
          </span> */}
          <LandingValueProposition elems={["Learn ", "Grow ", "Connect "]} typeSpeed={100} backSpeed={100} delay={10} />
        </div>
        <div className="mb-6 max-w-prose font-light md:mb-8 md:w-11/12 lg:text-2xl lg:leading-10">
          She Codes Africa Nairobi: A community that empowers and celebrates women in tech across the Nairobi region
        </div>

        <CtaButton>Be a Member</CtaButton>
      </div>

      <div className="hidden w-3/5 grid-cols-[repeat(15,1fr)] grid-rows-[repeat(5,60px)] md:grid lg:grid-rows-5">
        <BannerImage className="z-10 col-span-6 col-start-5 row-span-3 row-start-1" src="/images/image1.png" alt="" />
        <BannerImage className="col-span-6 col-start-1 row-span-3 row-start-3" src="/images/image2.png" alt="" />
        <BannerImage className="z-20 col-span-6 col-start-10 row-span-3 row-start-3" src="/images/image3.png" alt="" />
      </div>
    </div>
  );
}

export { Banner as default };
