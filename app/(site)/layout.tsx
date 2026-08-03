import Link from "next/link";
import MenuOverlay from "@/components/MenuOverlay";
import SidebarNav from "@/components/SidebarNav";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#14140F]">
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-6">
        <Link href="/" className="text-lg font-[var(--font-display)] italic">
        Logo
        </Link>
        <MenuOverlay />
      </header>

      <div className="fixed bottom-8 left-6 md:left-10 z-30">
        <SidebarNav />
      </div>

      {children}
    </div>
  );
}
