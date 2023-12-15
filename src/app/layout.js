import "@app/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Provider from "./components/layout/Provider";

import MainWrapper from "@app/MainWrapper";
export const metadata = {
  title: "EHR System",
  description: "Electronic Health Record System",
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
          <Provider>
            <MainWrapper>{children}</MainWrapper>
          </Provider>
        </body>
      </html>
    </>
  );
}
