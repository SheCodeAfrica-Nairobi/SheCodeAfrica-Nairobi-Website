import CtaButton from "./CtaButton";

type PropsWithClassName<T = {}> = { className?: string } & T

function BannerImage(
  { className, ...props }: PropsWithClassName<{ src: string; alt: string }>
) {
  return (
    <img
      className={`rounded-[50px] border-[10px] border-zinc-50 ${className}`}
      {...props}
    />
  )
}

function Banner({ className }: PropsWithClassName) {
  return (
    <div className={`flex w-full ${className} pt-28`}>
      <div className="basis-0 grow">
        <div className="mb-2.5 md:-mr-48">
          <span className="font-header text-primary text-3xl md:text-6xl md:leading-[5rem] lg:text-7xl lg:leading-[6rem] xl:text-8xl xl:leading-[8rem]">
            Learn. Grow. Connect
          </span>
        </div>
        <div className="lg:text-2xl lg:leading-10 max-w-prose font-light md:w-11/12 mb-6 md:mb-8">
          She Codes Africa Nairobi: A community that empowers
          and celebrates women in tech across the Nairobi region
        </div>

        <CtaButton>Be a Member</CtaButton>
      </div>

      <div className="hidden md:grid w-3/5 grid grid-cols-[repeat(15,1fr)] grid-rows-[repeat(5,60px)] lg:grid-rows-5">
        <BannerImage
          className="col-start-5 col-span-6 row-start-1 row-span-3 z-10"
          src="https://picsum.photos/600?random=1"
          alt=""
        />
        <BannerImage
          className="col-start-1 col-span-6 row-start-3 row-span-3"
          src="https://picsum.photos/600?random=2"
          alt=""
        />
        <BannerImage
          className="col-start-10 col-span-6 row-start-3 row-span-3 z-20"
          src="https://picsum.photos/600?random=3"
          alt=""
        />
      </div>
    </div>
  )
}

export {Banner as default}