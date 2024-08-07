import Link from "next/link";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 text-sm">
      <aside className="grid-flow-col items-center">
        <Logo />
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link href="https://www.linkedin.com/company/codeverse-org/">LinkedIn</Link>
      </nav>
    </footer>
  );
};

export default Footer;
