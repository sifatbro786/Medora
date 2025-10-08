import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata = {
    title: "Medora",
    description: "Connect with doctors anytime, anywhere.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {/* //* header */}
                    <Header />
                    <main className="min-h-screen">{children}</main>
                    {/* //* footer */}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
