// --- layout.js (replace file) ---
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Ahmad Ali",
  description: "EE @ McMaster | control/robotics, embedded, ML/vision, optics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="container-narrow flex items-center justify-end py-6">
          <nav className="header-links flex items-center gap-4">
            <Link href="mailto:ahmad.ali@email.com">email</Link>
            <Link href="https://github.com/chaffybird56" target="_blank">github</Link>
            <Link href="https://www.linkedin.com/in/ahmad-ali-/" target="_blank">linkedin</Link>
            <Link href="https://github.com/chaffybird56?tab=repositories" target="_blank">repo</Link>
          </nav>
        </header>

        <main className="container-narrow pb-16">{children}</main>

        <footer className="container-narrow py-10 text-sm text-stone-500">
          2025 © Ahmad Ali
        </footer>
      </body>
    </html>
  );
}
