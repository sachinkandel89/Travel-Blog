import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SidebarNav() {
  return (
    <nav className="hidden md:flex flex-col gap-1 text-sm">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="w-fit text-black/60 hover:text-black transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
