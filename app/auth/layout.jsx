import Link from "next/link";
import React from "react";
import HeroForm from "../_components/layout/landing-header";

const layout = ({ children }) => {
  return (
    <div className="h-dvh">
      <HeroForm />
      <div className="flex h-full items-center justify-center p-4 text-lg">
        {children}
      </div>
    </div>
  );
};

export default layout;
