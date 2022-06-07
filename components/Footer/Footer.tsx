import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-green-50 text-gray-500 flex px-24 py-4 justify-between items-center h-20">
      <h2 className="hidden sm:inline w-1/2">
        Made with <span className="font-semibold">Next.JS</span> and{" "}
        <span className="font-semibold">Tailwind.css</span> by{" "}
        <span className="font-semibold">Baltazar Andersson </span>
      </h2>
      <ul className="flex gap-4 w-full sm:w-1/2 sm:justify-end">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/cart">My Cart</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
