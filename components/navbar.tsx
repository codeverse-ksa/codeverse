import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 items-center gap-x-4">
                    <li><Link href="/programs">Programs</Link></li>
                    <li><Link href="/#maillist"><button className="btn btn-primary text-white">Join List</button></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
