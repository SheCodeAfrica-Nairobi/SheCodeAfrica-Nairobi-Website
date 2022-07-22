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
  function classNames(...classes: string[]) {
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
            <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="insent-y-0 absolute right-0 sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="my-1 inline-flex p-3">
                  <span className="sr-only">menu</span>
                  {/* Mobile menu button*/}
                  <Image src={open ? "/images/close.svg" : "/images/menu.svg"} width={32.5} height={19.5} />
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-between py-[2.125rem]">
                <div className="flex flex-shrink-0 items-center">
                  <a className="mr-auto flex-none text-slate-900" href="/">
                    <span className="sr-only">She code Nairobi</span>
                    <img className="-my-5 block h-10 w-auto lg:hidden" src="/images/logo.svg" alt="she-code-nairobi" />
                    <img className="h-21 hidden w-auto lg:block" src="/images/logo.svg" alt="she-code-nairobi" />
                  </a>
                </div>
                <div className="hidden sm:flex sm:items-center">
                  <div className="">
                    {navigation.slice(0, 4).map((link) => (
                      <ActiveLink key={link.name} activeClassName="active" href={link.href}>
                        <a className="px-3 text-base font-normal">{link.name}</a>
                      </ActiveLink>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:flex sm:items-center">
                  <ActiveLink activeClassName="" href="/be-a-partner">
                    <a className="h-13 my-2.5 inline-flex w-52 justify-center rounded-full bg-primary py-3 px-3 font-normal text-white">
                      <span>Be a partner</span>
                    </a>
                  </ActiveLink>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="h-screen sm:hidden">
            <div className="flex flex-col items-center px-2 pt-2 pb-3">
              {navigation.map((link) => (
                <Disclosure.Button
                  key={link.name}
                  as="a"
                  href={link.href}
                  className={classNames(
                    link.name === "Be a partner"
                      ? "text-md h-15 w-44 rounded-full border border-primary p-3 text-center text-primary"
                      : link.name === "Be a member"
                      ? "text-md h-15 my-8  w-44 rounded-full bg-primary p-3 text-center text-white"
                      : "flex py-4 text-2xl text-primary"
                  )}>
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
