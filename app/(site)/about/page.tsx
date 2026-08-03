import Link from "next/link";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/sachin_kandel45/" },
  { label: "TikTok", href: "https://www.tiktok.com/" },
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "YouTube", href: "#" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[#F3EFE7] px-4 py-16 text-[#22201c] sm:px-6 sm:py-20 md:pl-32 lg:px-8 lg:pl-36 lg:py-24">
      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col overflow-hidden rounded-[24px] border border-black/5 bg-[#f7efe3] shadow-[0_25px_80px_rgba(34,32,28,0.12)] sm:rounded-[32px] lg:min-h-[calc(100vh-8rem)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.7),_transparent_45%)]" />

        <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-8 lg:p-10">
          {/* Top bar */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/"
              className="cursor-pointer text-[24px] leading-none text-[#22201c] sm:text-[28px] lg:text-[32px] font-[var(--font-display)] italic"
            >
              Sachin Kandel
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-[#22201c]/20 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#22201c] transition-colors hover:bg-[#22201c] hover:text-white sm:text-[12px]"
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
                <h1 className="mt-3 max-w-2xl font-[var(--font-display)] text-[2rem] leading-[1.1] text-[#22201c] sm:text-[2.7rem] sm:leading-[1.05] lg:text-[4.2rem]">
                  I write, I wander, and I keep learning.
                </h1>
                <p className="mt-6 max-w-xl text-[14px] leading-7 text-[#4f493f] sm:text-[15px] sm:leading-8 lg:text-[16px]">
                  Hello, I&apos;m Sachin Kandel ,a curious learner, explorer,
                  and storyteller. I enjoy researching new ideas, discovering
                  beautiful places, and sharing useful stories that feel
                  meaningful and real.
                </p>
                <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#4f493f] sm:text-[15px] sm:leading-8 lg:text-[16px]">
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
            <div className="overflow-hidden rounded-[24px] border border-black/10 bg-[#efe9dd] p-4 shadow-inner shadow-black/5 sm:rounded-[28px] sm:p-7">
              <img
                src="/SachinProf.jpg"
                alt="Traveler exploring nature"
                className="h-48 w-full rounded-[16px] object-cover sm:h-56 sm:rounded-[20px] lg:h-72"
              />

              <div className="mt-5 sm:mt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#a3947c]">
                  Current Focus
                </p>
                <h2 className="mt-2 text-[1.1rem] font-semibold leading-snug text-[#22201c] sm:text-[1.25rem]">
                  Travel, culture, and meaningful stories.
                </h2>
                <p className="mt-3 text-[13px] leading-6 text-[#6b665d] sm:text-[14px] sm:leading-7">
                  I&apos;m passionate about sharing ideas that feel fresh,
                  practical, and personal. Whether it&apos;s a new place, a
                  daily habit, or a simple life lesson, I love making every
                  story feel welcoming.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#22201c]/15 px-3 py-2 text-[11px] font-medium text-[#22201c] transition-colors hover:bg-[#22201c] hover:text-white sm:text-[12px]"
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