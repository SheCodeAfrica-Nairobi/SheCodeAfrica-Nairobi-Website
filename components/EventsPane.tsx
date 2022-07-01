export default function EventsPane() {
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
};

function EventCard({ imageUrl, large = false, className = "" }: EventCardProps): JSX.Element {
  return (
    <div
      className={`group relative shadow-md rounded-2xl overflow-hidden aspect-square 
            ${large ? "min-h-[320px] lg:max-h-[480px]" : "min-h-[150px] lg:max-h-[300px]"}
            ${className}`}>
      <a href="#">
        <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-primary/80 text-4xl text-gray font-semibold transition-opacity ease-in group-hover:opacity-100">
          RSVP
        </div>
        <img src={imageUrl} className="object-cover w-full h-full" />
      </a>
    </div>
  );
}

export default function EventsPane({className = ''}) {
  return (
    <div className={`pb-10 ${className}`}>
      {/* Mobile & Tablet */}
      <div className="lg:hidden">
        <SectionHeader />

        <div className="mt-4 md:mt-8 grid grid-cols-2 grid-rows-2 gap-y-6 gap-x-4 md:gap-x-8">
          <EventCard imageUrl="/images/event-posters/sample-sca-event-poster-1.png" className="col-span-2" large />
          <EventCard imageUrl="/images/event-posters/sample-sca-event-poster-2.png" />
          <EventCard imageUrl="/images/event-posters/sample-sca-event-poster-3.png" />
        </div>
      </div>

      {/* Larger screens */}
      <div className="hidden lg:flex justify-between">
        <div className="flex-1 pr-4">
          <SectionHeader />

          <div className="mt-5 flex space-x-8">
            <EventCard imageUrl="/images/event-posters/sample-sca-event-poster-2.png" />
            <EventCard imageUrl="/images/event-posters/sample-sca-event-poster-3.png" />
          </div>
        </div>

        <div className="w-1/2">
          <EventCard imageUrl="/images/event-posters/sample-sca-event-poster-1.png" className="xl:mx-auto" large />
        </div>
      </div>
    </div>
  );
}
