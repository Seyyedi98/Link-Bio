import DashboardSidebar from "../_components/layout/dashboard-sidebar";

const ProtectedLayout = ({ children }) => {
  return (
    <main className="flex min-h-dvh bg-background">
      {/* <DashboardNavbar /> */}
      <div className="w-full max-w-xs grow flex-col justify-between border-l-2 bg-primary-foreground p-4 shadow-md">
        <DashboardSidebar />
      </div>
      <div className="m-6 w-full md:m-8 lg:m-12">{children}</div>
    </main>
  );
};

export default ProtectedLayout;
