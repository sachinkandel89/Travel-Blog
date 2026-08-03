import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-[#F3EFE7] font-[var(--font-geist-sans)]">
      <div className="relative mx-auto min-h-screen w-full max-w-[1200px] pl-28 pr-6 py-28 md:pl-36 lg:px-10 lg:pl-40">
        {/* Masthead */}
        <div className="mb-4 text-center">
          <h1 className="font-[var(--font-display)] text-[3.4rem] italic leading-none text-[#22201c] lg:text-[4.4rem]">
            Get in touch
          </h1>
        </div>
        <p className="mb-20 text-center text-[14px] text-[#8a8578]">
          Questions, collaborations, or just want to say hello.
        </p>

        {/* Split: form left, details right */}
        <div className="mb-24 grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-[#22201c]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="border-b border-[#22201c]/20 bg-transparent py-2 text-[15px] text-[#22201c] placeholder:text-[#a3947c] focus:border-[#22201c] focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-[#22201c]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="border-b border-[#22201c]/20 bg-transparent py-2 text-[15px] text-[#22201c] placeholder:text-[#a3947c] focus:border-[#22201c] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-[#22201c]">
                Subject
              </label>
              <input
                type="text"
                placeholder="What's this about?"
                className="border-b border-[#22201c]/20 bg-transparent py-2 text-[15px] text-[#22201c] placeholder:text-[#a3947c] focus:border-[#22201c] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-[#22201c]">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me a bit more..."
                className="resize-none border-b border-[#22201c]/20 bg-transparent py-2 text-[15px] text-[#22201c] placeholder:text-[#a3947c] focus:border-[#22201c] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="group mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#22201c] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3a3730]"
            >
              Send message
              <svg
                className="transition-transform duration-200 group-hover:translate-x-1"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14m0 0-6-6m6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>

          {/* Contact details */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#a3947c]">
                Email
              </p>
              <p className="font-[var(--font-display)] text-[20px] text-[#22201c]">
                hello@sachinkandel.com
              </p>
            </div>

            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#a3947c]">
                Based in
              </p>
              <p className="font-[var(--font-display)] text-[20px] text-[#22201c]">
                Kathmandu, Nepal
              </p>
            </div>

            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#a3947c]">
                Response time
              </p>
              <p className="text-[15px] leading-relaxed text-[#4a4740]">
                I usually reply within two to three days. For urgent matters,
                mention it in the subject line.
              </p>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#a3947c]">
                Elsewhere
              </p>
              <div className="flex flex-col gap-2 text-[15px] text-[#22201c]">
                <a
                  href="https://www.instagram.com/sachin_kandel45/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit border-b border-transparent pb-0.5 transition-colors hover:border-[#22201c]"
                >
                  Instagram
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit border-b border-transparent pb-0.5 transition-colors hover:border-[#22201c]"
                >
                  Twitter / X
                </a>
                <a
                  href="#"
                  className="w-fit border-b border-transparent pb-0.5 transition-colors hover:border-[#22201c]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
