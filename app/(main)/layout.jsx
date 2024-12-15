import React from "react";
import Navbar from "../_components/nav/Navbar";

const ProtectedLayout = ({ children }) => {
  return (
    <div className="flex h-dvh w-full flex-col gap-y-10">
      <Navbar />
      <div className="px-4">{children}</div>
    </div>
  );
};

export default ProtectedLayout;
