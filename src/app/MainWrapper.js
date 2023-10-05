"use client";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.css";
import { Suspense, useLayoutEffect, useState, useMemo } from "react";
const MainWrapper = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [miniSidebar, setMiniSidebar] = useState(false);

  const pathname = usePathname();

  const showWrapper = useMemo(
    () => !["/login", "/register", "/forget", "/reset"].includes(pathname),
    [pathname]
  );

  useLayoutEffect(() => {
    setSidebarOpen(false);
  }, [showWrapper]);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  const toggleMiniSidebar = () => {
    setMiniSidebar((prev) => !prev);
  };

  return (
    <main
      className={`main-wrapper ${
        sidebarOpen
          ? "sidebar-overlay slide-nav opened"
          : "" || miniSidebar
          ? "mini-sidebar"
          : ""
      }`}
    >
      {showWrapper ? (
        <>
          {/* <Header
            toggleSidebar={toggleSidebar}
            toggleMiniSidebar={toggleMiniSidebar}
          />
          <Sidebar /> */}
        </>
      ) : null}
      <Suspense fallback={"Loading..."}>
        <main className={`page-wrapper`}>{children}</main>
      </Suspense>
    </main>
  );
};

export default MainWrapper;
