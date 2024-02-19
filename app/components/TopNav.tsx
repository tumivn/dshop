import Link from "next/link";

export default function TopNav(){
    return (
        <nav className="nav shadow p-2 justify-content-between mb-3">
            <Link href="/">🛒 DSHOP</Link>

            <div className="d-flex">
                <Link href="/products" className="nav-link">
                    Products
                </Link>
            </div>
            <div className="d-flex">
                <Link href="/login" className="nav-link">
                    Login
                </Link>
            </div>


        </nav>
    )
}