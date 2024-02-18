import type {Metadata} from "next";
import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css"

export const metadata: Metadata = {
    title: "DShop",
    description: "An ecommerce develop by Le Hoang Dung",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
