"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/photography", label: "Photography" },
  { href: "/youtube", label: "Youtube" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex flex-col gap-2.5 text-[13px] font-[var(--font-roboto)]">
      {links.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className="relative w-fit pb-0.5 text-[#22201c] transition-colors duration-200 hover:text-[#22201c] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#22201c] after:transition-all after:duration-300 hover:after:w-full"
          >
            {isActive ? (
              <>
                <span className="font-bold">|</span> {link.label}
              </>
            ) : (
              link.label
            )}
          </Link>
        );
      })}
    </nav>
  );
}
