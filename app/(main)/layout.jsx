import React from "react";
import DashboardNavbar from "../_components/layout/dashboard-navbar";
import DashboardSidebar from "../_components/layout/dashboard-sidebar";

const ProtectedLayout = ({ children }) => {
  return (
    <main className="flex min-h-dvh">
      {/* <DashboardNavbar /> */}
      <DashboardSidebar />
      <div className="mx-auto w-full bg-background p-6">{children}</div>
    </main>
  );
};

export default ProtectedLayout;
