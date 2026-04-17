import React from "react";
import Footer from "@/pages/Footer";
import Header from "@/pages/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      {/* header section */}
      <Header />

      {/* main route */}
      <main>
        <Outlet />
      </main>

      {/* footer section */}
      <Footer />
    </>
  );
}
