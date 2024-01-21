import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
  const navItems = ["About", "Service", "Blogs", "FAQ"];

  return (
    <header className="shadow-sm ">
      <nav className="max-w-5xl  mx-auto py-5 px-1 flex flex-wrap justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" width={50} height={50} alt="flow jobs logo" />
        </Link>

        <div className=" space-x-10">
          {navItems.map((navItem) => (
            <Link href={`${navItem.toLowerCase()}`} key={navItem}>
              {navItem}
            </Link>
          ))}
          <Button className="shadow-gradient">Add</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
