"use client";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/layout/Header";
import { Suspense, useLayoutEffect, useState, useMemo } from "react";
const MainWrapper = ({ children }) => {
 
  //check if path is /login or /register
  const path = usePathname();
  console.log(path);

  return (
    <main
      className={`main-wrapper `}
    >
     {
      path == "/login" ? null :<Header  />
     }
      
      <Suspense fallback={"Loading..."}>
        <main className={`page-wrapper`}>{children}</main>
      </Suspense>
    </main>
  );
};

export default MainWrapper;
