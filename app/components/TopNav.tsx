import Link from "next/link";

export default function TopNav(){
    return (
        <nav className="nav shadow p-2 justify-content-between mb-3">
            <Link href="/">DShop</Link>
        </nav>
    )
}