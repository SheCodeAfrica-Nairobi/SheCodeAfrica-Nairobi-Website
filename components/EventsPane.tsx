import Image from "next/image";

function SectionHeader() {
  return (
    <>
      <h2 className="font-header text-primary text-3xl sm:text-4xl">Events we have in store for you:</h2>
      <p className="hidden sm:block mt-2.5 font-light text-2xl">
        RSVP for ucpoming events to connect with our speakers. Learn from our pasts events on youtube.
      </p>
    </>
  );
}

type EventCardProps = {
  imageUrl: string;
  large?: boolean;
  className?: string;
  url?: string;
};

function EventCard({ imageUrl, large = false, className = "", url }: EventCardProps): JSX.Element {
  return (
    <div
      className={`group relative selection:shadow-md rounded-2xl overflow-hidden aspect-square
            ${large ? "min-h-[320px] lg:max-h-[480px]" : "min-h-[150px] lg:max-h-[300px]"}
            ${className}`}>
      <a href={url} target="_blank" >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-primary/80 text-4xl text-gray font-semibold transition-opacity ease-in group-hover:opacity-100">
          RSVP
        </div>
        <img src={imageUrl} className='object-cover w-full h-full' />
      </a>
    </div>
  );
}

export default function EventsPane({ className = '', events }: any) {
  let latestEvent = events[2]
  let secondLatestEvent = events[1]
  let thirdLatestEvent = events[0]
  console.log(latestEvent, secondLatestEvent, thirdLatestEvent);
  return (
    <div className={`${className}`}>
      {/* Mobile & Tablet */}
      <div className="lg:hidden">
        <SectionHeader />

        <div className="mt-4 md:mt-8 grid grid-cols-2 grid-rows-2 gap-y-4 gap-x-4 md:gap-x-8">
          <EventCard imageUrl={latestEvent?.logo.url} className="col-span-2" large url={latestEvent?.url} />
          <EventCard imageUrl={secondLatestEvent?.logo.url} url={secondLatestEvent?.url} />
          <EventCard imageUrl={thirdLatestEvent?.logo.url} url={thirdLatestEvent?.url} />
        </div>
      </div>

      <div className="hidden lg:flex justify-between">
        <div className="flex-1 pr-4">
          <SectionHeader />

          <div className="mt-5 flex space-x-8">
            <EventCard imageUrl={secondLatestEvent?.logo.url} url={secondLatestEvent?.url} />
            <EventCard imageUrl={thirdLatestEvent?.logo.url} url={thirdLatestEvent?.url} />
          </div>
        </div>

        <div className="w-1/2">
          <EventCard imageUrl={latestEvent?.logo.url} className="xl:mx-auto" large url={latestEvent?.url} />
        </div>
      </div>
    </div>
  );
}