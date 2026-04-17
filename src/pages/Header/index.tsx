import React from "react";
import HeaderContent from "./_components/header";

export default function Header() {
  return (
    <div className=" container mx-auto fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <HeaderContent />
    </div>
  );
}
