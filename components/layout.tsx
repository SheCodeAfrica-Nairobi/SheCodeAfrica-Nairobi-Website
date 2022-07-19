import React, {ReactNode} from "react";
import Nav from "./Nav";
import Footer from "./Footer";

type LayoutType = {
    children: ReactNode,
    events: any
}

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
