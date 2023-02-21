import "./globals.css";
import Nav from "./Nav";

import QueryWrapper from "./QueryWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-screen'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-white h-full'>
        <QueryWrapper>
          <Nav />
          <div className='mx-32'>{children}</div>
        </QueryWrapper>
      </body>
    </html>
  );
}
