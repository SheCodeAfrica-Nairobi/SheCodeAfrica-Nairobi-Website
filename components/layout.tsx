import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Event }  from '../typings';

type LayoutType = {
  children: ReactNode;
  events: Event[];
};

const Layout = ({ children, events }: LayoutType) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer events={events} />
    </>
  );
};

export default Layout;
