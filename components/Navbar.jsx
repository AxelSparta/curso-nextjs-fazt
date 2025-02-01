import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center p-4 bg-black/[.05] dark:bg-white/[.06] border-b border-solid border-black/[.08] dark:border-white/[.145]">
			<Link href="/" className="text-xl font-bold">
				Next.js
			</Link>
			<Link href="/about" className="text-xl font-bold">
				About
			</Link>
		</nav>
	);
}