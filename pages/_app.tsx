import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import { GlobalStyle } from "lib/ui/GlobalStyle";
import { ThemeProvider } from "ui/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
