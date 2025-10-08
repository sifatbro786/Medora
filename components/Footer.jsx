export default function Footer() {
    return (
        <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
                <p>© {new Date().getFullYear()} Medora. All rights reserved.</p>
            </div>
        </footer>
    );
}
