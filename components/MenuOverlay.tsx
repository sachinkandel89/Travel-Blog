"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
    { href: "/", label: "Home" },
    { href: "/posts", label: "Posts" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function MenuOverlay() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="flex flex-col gap-1.5 w-6 cursor-pointer"
            >
                <span className="h-[1.5px] w-full bg-black" />
                <span className="h-[1.5px] w-full bg-black" />
                <span className="h-[1.5px] w-full bg-black" />
            </button>
            {open && (
                <div className="fixed inset-0 z-50 bg-[#0E1116] flex flex-col items-center justify-center gap-6">
                    <button
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                        className="absolute top-8 right-8 text-white text-3xl leading-none"
                    >
                        ×
                    </button>
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="text-white text-4xl md:text-5xl font-[var(--font-display)] hover:text-white/70 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}
