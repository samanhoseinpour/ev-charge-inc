import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="container mx-auto py-4 bg-black/30 text-white backdrop-blur-3xl rounded-full mt-4 flex justify-around items-center font-semibold">
        <Link href="/">Logo</Link>
        <p>Navbar Links</p>
        <Link href="/contact">Get In Touch With Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
