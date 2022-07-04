import React, {ReactNode} from "react";
import Nav from "./Nav";
import Footer from "./Footer";

type LayoutType = {
    children: ReactNode
}

const Layout = ({ children }: LayoutType) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
