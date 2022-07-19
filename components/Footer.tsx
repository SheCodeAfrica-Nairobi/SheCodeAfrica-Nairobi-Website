import { Event } from "../typings";

interface footerProps {
    className?: string,
    events: Event[] 
}

const footerMenuItems = [
    {
        name: 'Go to Home',
        href: '/',
    },
    {
        name: 'Meet the Team',
        href: '/team',
    },
    {
        name: 'Recent Blog Posts',
        href: '/blog',
    },
]

function Footer({ className, events }: footerProps ) {
    return (
        <footer className={`py-4 md:pt-8 ${className}`}>
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <div>
                        <p className="pt-3">Our Partners</p>
                        <div className="flex flex-row gap-5 pt-3">
                            <a href="#" className="">
                                <img src="/images/21cskills_colored 2.png" className="" alt="FlowBite Logo" />
                            </a>
                            <a href="#" className="">
                                <img src="/images/she-code-africa-logo 3.png" className="" alt="FlowBite Logo" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <p className="pt-3">Our Socials</p>
                        <div className="flex flex-row gap-5 pt-3">
                            <a href="#" className="">
                                <img src="/images/logos_twitter.png" className="" alt="Twitter" />
                            </a>
                            <a href="#" className="">
                                <img src="/images/logos_youtube-icon.png" className="" alt="Youtube" />
                            </a>
                            <a href="#" className="">
                                <img src="/images/logos_linkedin-icon.png" className="" alt="Linkedin" />
                            </a>
                        </div>
                    </div>

                </div>
                <div className="mb-6 md:mb-0">
                    {footerMenuItems.map((item) => (
                        <a key={item.name}
                            href={item.href}
                            className="flex items-center pt-3 rounded-md hover:text-pink-800"
                        >
                            <span className="md:ml-3">{item.name}</span>
                        </a>
                    ))}
                </div>
                <div className="mb-6 md:mb-0">
                    <p className="pt-3 md:ml-3">Explore our Events</p>
                    {events.slice(0, 3).map((event: any) => (
                        <a key={event.id}
                            href={event.url}
                            className="flex items-center pt-3 rounded-md hover:text-pink-800"
                        >
                            <span className="font-light md:ml-3">{event.name?.text}</span>
                        </a>
                    ))}
                </div>
            </div>
            <hr className="my-6 border-2 border-[#FFF0F8] sm:mx-auto  lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm sm:text-center">All Rights Reserved <span>{(new Date()).getFullYear()}</span>.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <span>Designed by M. W. N</span>
                </div>
            </div>
        </footer>
    )
}

export { Footer as default }