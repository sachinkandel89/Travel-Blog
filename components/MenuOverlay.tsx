"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/photography", label: "Photography" },
  { href: "/youtube", label: "Youtube" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MenuOverlay() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="md:hidden flex flex-col gap-1.5 w-6 cursor-pointer"
      >
        <span className="h-[1.5px] w-full bg-[#22201c]" />
        <span className="h-[1.5px] w-full bg-[#22201c]" />
        <span className="h-[1.5px] w-full bg-[#22201c]" />
      </button>

      {mounted && open && createPortal(
        <div className="fixed inset-0 z-50 flex md:items-start md:justify-end">
          {/* Overlay (No Blur) */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/10"
          />

          {/* Glassmorphism Menu */}
          <div
            className="
              relative
              w-full h-full
              md:w-[340px]
              md:h-auto
              md:m-6
              md:rounded-3xl

              bg-[#FAF6EE]/70
              backdrop-blur-2xl
              border border-white/50
              shadow-[0_10px_40px_rgba(0,0,0,0.12)]

              overflow-hidden

              flex flex-col
              items-center
              justify-center
              gap-8

              px-8
              py-16
              md:py-14

              transition-all
              duration-300
            "
          >
            {/* Glass Highlight */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-3xl
                bg-gradient-to-br
                from-white/40
                via-white/15
                to-transparent
              "
            />

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="
                absolute
                top-6
                right-6
                z-10
                text-[#22201c]
                text-4xl
                leading-none
                cursor-pointer
                transition-transform
                duration-300
                hover:rotate-90
              "
            >
              ×
            </button>

            {/* Links */}
            <div className="relative z-10 flex flex-col items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    relative
                    text-[#22201c]
                    text-4xl
                    md:text-2xl
                    font-[var(--font-display)]
                    tracking-wide
                    transition-colors
                    duration-300

                    hover:text-[#8B6E5C]

                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[1px]
                    after:w-0
                    after:bg-[#8B6E5C]
                    after:transition-all
                    after:duration-300

                    hover:after:w-full
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}