
import React, {ReactNode} from "react";
import Nav from "./Nav";
import Footer from "./Footer";


const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<main className="w-full px-4 md:px-8 lg:px-20 text-darkAccent">
			<Nav />
			{children}
			<Footer />
		</main>
	)
}

export default Layout;
