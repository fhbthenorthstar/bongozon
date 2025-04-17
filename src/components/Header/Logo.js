import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-main.jpeg";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className=" w-12 md:w-16 rounded-full overflow-hidden  mr-2 md:mr-4">
        <Image
          src={logo}
          alt="CBeauty World Association Logo"
          className="w-full h-auto rounded-full"
          sizes="20vw"
          priority
        />
      </div>
      <span className="font-bold dark:font-semibold">
        Beauty World
        <br />
        <span className="text-lg md:text-xl">Association</span>
      </span>
    </Link>
  );
};

export default Logo;
