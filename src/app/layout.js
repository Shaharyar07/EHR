import "@app/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import MainWrapper from "@app/MainWrapper";
export const metadata = {
  title: "EHR System",
  description: "EHR System",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className='menu-opened'>
          <MainWrapper>
           {children}
          </MainWrapper>
  
      </body>
    </html>

    </>
  );
}
