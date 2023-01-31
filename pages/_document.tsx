import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en"
    className="bg-[#F3EFE8]
    dark:bg-gray-900">
      <Head />
        <title>Food Bank Network</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}