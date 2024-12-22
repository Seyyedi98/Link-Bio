import { getUserPage } from "@/actions/page/page";
import NewUsernameForm from "@/app/_components/form/new-username-form";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const userPage = await getUserPage();
  if (userPage) redirect(`/dashboard/${userPage.uri}`);
  {
  }
  return <>{userPage ? <p>Loading</p> : <NewUsernameForm />}</>;
};

export default Dashboard;
