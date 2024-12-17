import { isUserAlreadyHasPage } from "@/actions/page/page";
import NewUsernameForm from "@/app/_components/form/new-username-form";
import PagesList from "@/app/_components/section/pages-list";

const Dashboard = async () => {
  const userAlreadyHasPage = await isUserAlreadyHasPage();

  return <>{userAlreadyHasPage ? <PagesList /> : <NewUsernameForm />}</>;
};

export default Dashboard;
