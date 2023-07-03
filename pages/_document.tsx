import { Html, Head, Main, NextScript } from "next/document";
import { Background } from "../components";

export default function Document() {
  return (
    <Html lang="en" id="body">
      <Head />
      <body className="relative">
        <Background />

        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
