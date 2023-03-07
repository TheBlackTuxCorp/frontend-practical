import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header className="bg-red-200">
        <h1 className="text-4xl font-bold p-4">Fake Store</h1>
      </header>

      <main className="p-8">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
