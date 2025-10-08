import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-2xl">
                    Medora
                </Link>
            </nav>
        </header>
    );
}
