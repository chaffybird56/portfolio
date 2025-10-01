import "./globals.css";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";

function Icon({ name }) {
  const c = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" };
  if (name === "mail") return <svg {...c}><path d="M3 6h18v12H3z" opacity=".25"/><path d="M21 6H3l9 6 9-6z"/></svg>;
  if (name === "github") return <svg {...c}><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.57v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.74.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.82 1.32 3.5 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.28-1.56 3.29-1.24 3.29-1.24.67 1.64.25 2.86.12 3.16.77.85 1.23 1.93 1.23 3.25 0 4.64-2.81 5.67-5.49 5.97.43.37.81 1.1.81 2.23v3.3c0 .31.22.69.83.57A12 12 0 0 0 12 .5z"/></svg>;
  if (name === "repo") return (<svg {...c}><path d="M6 12l4-4M10 16l-4-4M14 8l4 4M18 12l-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>);
  if (name === "linkedin") return <svg {...c}><path d="M4.98 3.5A2.5 2.5 0 1 0 2.5 6a2.5 2.5 0 0 0 2.48-2.5zM3 8h4v13H3zM9 8h3.8v1.86h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21H18v-5.77c0-1.38-.03-3.17-1.93-3.17-1.93 0-2.22 1.51-2.22 3.07V21H9z"/></svg>;
  return null;
}

export const metadata = { title: "Ahmad Ali", description: "Portfolio" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <header className="container-narrow flex items-center justify-between py-6">
          {/* Copper + underlined even at rest */}
          <Link href="/" className="site-name">ahmad ali</Link>

          {/* Header links: underlined at rest + animate on hover */}
          <nav className="header-links flex items-center gap-5">
            <Link href="mailto:ahmad.ali@email.com" className="flex items-center gap-2">
              <Icon name="mail" /><span className="u-anim-static">email</span>
            </Link>
            <Link href="https://github.com/chaffybird56" target="_blank" className="flex items-center gap-2">
              <Icon name="github" /><span className="u-anim-static">github</span>
            </Link>
            <Link href="https://www.linkedin.com/in/ahmad-ali-/" target="_blank" className="flex items-center gap-2">
              <Icon name="linkedin" /><span className="u-anim-static">linkedin</span>
            </Link>
            <Link href="https://github.com/chaffybird56?tab=repositories" target="_blank" className="flex items-center gap-2">
              <Icon name="repo" /><span className="u-anim-static">repo</span>
            </Link>
            <ThemeToggle />
          </nav>
        </header>

        <main className="container-narrow pb-16">{children}</main>
        <footer className="container-narrow py-10 text-sm" style={{color:"var(--muted)"}}>2025 © Ahmad Ali</footer>
      </body>
    </html>
  );
}
