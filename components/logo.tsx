import Image from "next/image";

const Logo = () => {
  return (
    <Image src="/logo.jpeg" alt="Logo" width={75} height={75} className="rounded-full" />
  );
};

export default Logo;
