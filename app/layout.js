import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata = {
    title: "Medora",
    description: "Connect with doctors anytime, anywhere.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                {/* //* header */}
                {children}
            </body>
        </html>
    );
}
