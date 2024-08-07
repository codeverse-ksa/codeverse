import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Codeverse</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 items-center gap-x-4">
                    <li><Link href="/programs">Programs</Link></li>
                    <li><button className="btn btn-primary text-white">Join List</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
