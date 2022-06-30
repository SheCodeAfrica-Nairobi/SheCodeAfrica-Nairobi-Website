import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import ActiveLink from "./ActiveLink";
/**
 * Install Headless UI
 * Nav Disclosure
 * Showing/hiding the Nav
 * Style Active Link
 * Add Transitions
 */
export default function Nav() {
    const navigation = [
        { name: "Home", href: "/" },
        { name: "Events", href: "/events" },
        { name: "Blog", href: "/blog" },
        { name: "Team", href: "/team" },
        { name: "Be a partner", href: "/be-a-partner" },
        { name: "Be a member", href: "/be-a-member" },
    ];
    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <style jsx>{`
            .active {
              text-decoration: underline;
              color: #b70569;
            }
          `}</style>
                    <div className="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
                        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8s">
                            <div className="absolute insent-y-0 right-0 sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex p-3 my-1">
                                    <span className="sr-only">menu</span>
                                    {/* Mobile menu button*/}
                                    <Image
                                        src={open ? "/images/close.svg" : "/images/menu.svg"}
                                        width={32.5}
                                        height={19.5}
                                    />
                                </Disclosure.Button>
                            </div>
                            <div className="flex items-center justify-between py-[2.125rem]">
                                <div className="flex-shrink-0 flex items-center">
                                    <a className="mr-auto flex-none text-slate-900" href="/">
                                        <span className="sr-only">She code Nairobi</span>
                                        <img
                                            className="block lg:hidden h-10 w-auto -my-5"
                                            src="/images/logo.svg"
                                            alt="she-code-nairobi"
                                        />
                                        <img
                                            className="hidden lg:block h-21 w-auto"
                                            src="/images/logo.svg"
                                            alt="she-code-nairobi"
                                        />
                                    </a>
                                </div>
                                <div className="hidden sm:flex sm:items-center">
                                    <div className="">
                                        {navigation.slice(0, 4).map((link) => (
                                            <ActiveLink key={link.name} activeClassName="active" href={link.href}>
                                                <a
                                                    className="px-3 font-normal text-base"
                                                >
                                                    {link.name}
                                                </a>
                                            </ActiveLink>
                                        ))}
                                    </div>
                                </div>
                                <div className="hidden sm:flex sm:items-center">
                                    <ActiveLink activeClassName="" href="/be-a-partner">
                                        <a className="inline-flex justify-center font-normal rounded-full py-3 px-3 bg-primary text-white my-2.5 w-52 h-13">
                                            <span>Be a partner</span>
                                        </a>
                                    </ActiveLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden h-screen">
                        <div className="flex flex-col items-center px-2 pt-2 pb-3">
                            {navigation.map((link) => (
                                <Disclosure.Button
                                    key={link.name}
                                    as="a"
                                    href={link.href}
                                    className={classNames(
                                        link.name === "Be a partner"
                                            ? "text-center text-md text-primary border border-primary rounded-full p-3 w-44 h-15"
                                            : link.name === "Be a member"
                                                ? "text-center text-md text-white  rounded-full p-3 bg-primary w-44 h-15 my-8"
                                                : "flex text-primary py-4 text-2xl"
                                    )}
                                >
                                    {link.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}