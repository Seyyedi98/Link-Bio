import Link from "next/link";
import React from "react";
import LandingHeader from "../_components/layout/landing-header";

const layout = ({ children }) => {
  return (
    <div className="h-dvh">
      <LandingHeader />
      <div className="p-4 text-lg h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default layout;
