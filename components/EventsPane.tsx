import { Event } from "../typings";

function SectionHeader() {
  return (
    <>
      <h2 className="font-header text-3xl text-primary sm:text-4xl">Events we have in store for you:</h2>
      <p className="mt-2.5 hidden text-2xl font-light sm:block">
        RSVP for ucpoming events to connect with our speakers. Learn from our pasts events on youtube.
      </p>
    </>
  );
}

interface EventCardProps {
  imageUrl: string;
  large?: boolean;
  className?: string;
  url?: string;
}

interface EventsPaneProps {
  className?: string;
  events: Event[];
}

function EventCard({ imageUrl, large = false, className = "", url }: EventCardProps): JSX.Element {
  return (
    <div
      className={`group relative aspect-square overflow-hidden rounded-2xl selection:shadow-md
            ${large ? "min-h-[320px] lg:max-h-[480px]" : "min-h-[150px] lg:max-h-[300px]"}
            ${className}`}>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="absolute inset-0 flex items-center justify-center bg-primary/80 text-4xl font-semibold text-gray opacity-0 transition-opacity ease-in group-hover:opacity-100">
          RSVP
        </div>
        <img src={imageUrl} className="h-full w-full object-cover" />
      </a>
    </div>
  );
}

export default function EventsPane({ className = "", events }: EventsPaneProps) {
  const latestEvent = events[2];
  const secondLatestEvent = events[1];
  const thirdLatestEvent = events[0];
  console.log(latestEvent, secondLatestEvent, thirdLatestEvent);
  return (
    <div className={`${className}`}>
      {/* Mobile & Tablet */}
      <div className="lg:hidden">
        <SectionHeader />

        <div className="mt-4 grid grid-cols-2 grid-rows-[1fr_auto] gap-y-4 gap-x-4 md:mt-8 md:gap-x-8">
          <EventCard imageUrl={latestEvent?.logo.url} className="col-span-2" large url={latestEvent?.url} />
          <EventCard imageUrl={secondLatestEvent?.logo.url} url={secondLatestEvent?.url} />
          <EventCard imageUrl={thirdLatestEvent?.logo.url} url={thirdLatestEvent?.url} />
        </div>
      </div>

      <div className="hidden justify-between lg:flex">
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
