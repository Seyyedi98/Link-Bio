import DashboardSidebar from "../_components/layout/dashboard-sidebar";

const ProtectedLayout = ({ children }) => {
  return (
    <main className="flex min-h-dvh bg-background">
      {/* <DashboardNavbar /> */}
      <DashboardSidebar />
      <div className="m-6 w-full md:m-8 lg:m-12">{children}</div>
    </main>
  );
};

export default ProtectedLayout;
