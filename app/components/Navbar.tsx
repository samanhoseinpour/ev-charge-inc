import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="relative container mx-auto py-4 bg-black/30 text-white backdrop-blur-3xl rounded-full mt-4 flex items-center justify-between font-semibold">
        <Link href="/" className="px-12">
          Logo
        </Link>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center justify-center gap-10">
            <li className="hidden lg:block">
              <Link href="/">Home</Link>
            </li>
            <li className="hidden lg:block">
              <Link href="/solutions">Solutions</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li className="hidden lg:block">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/contact" className="px-12">
          Get In Touch With Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
