import { NextPage } from "next";
import Nav from "../components/Nav";

const MembersPage: NextPage = () => {
    return (
        <main className="w-full px-4 md:px-8 lg:px-20">
            <Nav />
            <p>MembersPage</p>
        </main>
    );
};
export default MembersPage;