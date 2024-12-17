import { UserInfo } from "@/app/_components/common/profile/user-info";
import { currentUser } from "@/lib/get-user";

const ServerPage = async () => {
  const user = await currentUser();
  return <UserInfo user={user} label="Server component" />;
};

export default ServerPage;
