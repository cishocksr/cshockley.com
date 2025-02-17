import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import siteMetadata from "@/config/metadata";



export const metadata: Metadata = {
  title: {
    default: siteMetadata.headerTitle,
    template: `%s | ${siteMetadata.headerTitle}`,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteMetadata.siteUrl),
  description: siteMetadata.description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col items-center max-w-[750px] min-h-screen mx-auto"> {/* Added mx-auto */}
            <Nav />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}