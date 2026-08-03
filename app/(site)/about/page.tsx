import Link from "next/link";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/sachin_kandel45/" },
  { label: "TikTok", href: "https://www.tiktok.com/" },
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "YouTube", href: "#" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[#F3EFE7] pl-24 pr-4 py-24 text-[#22201c] sm:px-6 sm:pl-32 lg:px-8 lg:pl-36">
      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col overflow-hidden rounded-[32px] border border-black/5 bg-[#f7efe3] shadow-[0_25px_80px_rgba(34,32,28,0.12)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.7),_transparent_45%)]" />

        <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-8 lg:p-10">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="cursor-pointer text-[28px] leading-none text-[#22201c] sm:text-[32px] font-[var(--font-display)] italic"
            >
              Sachin Kandel
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-[#22201c]/20 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.2em] text-[#22201c] transition-colors hover:bg-[#22201c] hover:text-white"
            >
              Contact
            </Link>
          </div>

          {/* Main content */}
          <div className="mt-8 grid flex-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            {/* Left column */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#a3947c]">
                  About Me
                </p>
                <h1 className="mt-3 max-w-2xl font-[var(--font-display)] text-[2.7rem] leading-[1.05] text-[#22201c] sm:text-[3.4rem] lg:text-[4.2rem]">
                  I write, I wander, and I keep learning.
                </h1>
                <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#4f493f] sm:text-[16px]">
                  Hello, I&apos;m Sachin Kandel ,a curious learner, explorer,
                  and storyteller. I enjoy researching new ideas, discovering
                  beautiful places, and sharing useful stories that feel
                  meaningful and real.
                </p>
                <p className="mt-4 max-w-xl text-[15px] leading-8 text-[#4f493f] sm:text-[16px]">
                  This space is where travel, lifestyle, and thoughtful
                  experiences come together. My goal is to inspire people to
                  slow down, stay curious, and create their own journey.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/posts"
                    className="rounded-full bg-[#22201c] px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Explore Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-[#22201c]/20 px-5 py-3 text-sm font-medium text-[#22201c] transition-colors hover:bg-[#efe9dd]"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="overflow-hidden rounded-[28px] border border-black/10 bg-[#efe9dd] p-5 shadow-inner shadow-black/5 sm:p-7">
              <img
                src="/SachinProf.jpg"
                alt="Traveler exploring nature"
                className="h-56 w-full rounded-[20px] object-cover sm:h-72"
              />

              <div className="mt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#a3947c]">
                  Current Focus
                </p>
                <h2 className="mt-2 text-[1.25rem] font-semibold leading-snug text-[#22201c]">
                  Travel, culture, and meaningful stories.
                </h2>
                <p className="mt-3 text-[14px] leading-7 text-[#6b665d]">
                  I&apos;m passionate about sharing ideas that feel fresh,
                  practical, and personal. Whether it&apos;s a new place, a
                  daily habit, or a simple life lesson, I love making every
                  story feel welcoming.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#22201c]/15 px-3 py-2 text-[12px] font-medium text-[#22201c] transition-colors hover:bg-[#22201c] hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
