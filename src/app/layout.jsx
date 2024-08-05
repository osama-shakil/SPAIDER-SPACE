import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Providers from "@/store/Providers";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Chatbot",
  description: "Generated by create next app",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("bg-github-primary", montserrat.className)}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster position="top-center" reverseOrder={false} />
            <NextTopLoader
              color="#2fbb4f"
              initialPosition={0.08}
              crawlSpeed={400}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            />
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
