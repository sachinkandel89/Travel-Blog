export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 md:px-10 pt-32 pb-24 max-w-2xl">
      <h1 className="font-[var(--font-display)] text-4xl mb-6">Contact</h1>
      <p className="text-black/70 leading-relaxed">
        Have a story to share, or a question? Reach us at{" "}
        <a href="mailto:hello@example.com" className="underline">
          hello@example.com
        </a>
        .
      </p>
    </main>
  );
}
