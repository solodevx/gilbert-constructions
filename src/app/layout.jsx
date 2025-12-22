/* Import Google fonts using Next.js built-in font optimization */
import { DM_Sans, Barlow } from "next/font/google";

/* Import global Tailwind + custom CSS */
import "./globals.css";

/* Page metadata (SEO + browser tab info) */
export const metadata = {
  title: "Gilbert Constructions",
  description: "Professional construction and building services",
};


/* DM Sans font configuration
   - Full weight range enabled */
const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  fallback: ["system-ui", "Arial", "sans-serif"],
});


/* Barlow font configuration
   - Used as secondary font (e.g. headings, accents)
   - Also exposed via CSS variable
   - (system UI / Arial / sans-serif) for fallbacks */
const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  fallback: ["system-ui", "Arial", "sans-serif"],
});


/* Root layout component
   - Wraps the entire application
   - Fonts are applied globally via CSS variables */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${dmSans.variable}
          ${barlow.variable}
          antialiased
          text-secondary
        `}
      >
        {children}
      </body>
    </html>
  );
}
