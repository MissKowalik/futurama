import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkPops = {
    href: string;
    children: ReactNode;
}

export default function ButtonLink({href, children}: ButtonLinkPops) {
    return (
        <Link
            href={href}
            className="inline-block px-4 py-2 text-3xl bg-zinc-300 text-stone-800 border-3 border-stone-800 rounded-full hover:bg-stone-800 hover:text-zinc-300 transition-colors font-semibold"
        >
            {children}
        </Link>
    );
} 