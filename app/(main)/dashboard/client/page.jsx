"use client";

import { UserInfo } from "@/app/_components/common/profile/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import { redirect } from "next/navigation";

const ClientPage = () => {
  const user = useCurrentUser();

  return <UserInfo label="Client component" user={user} />;
};

export default ClientPage;
