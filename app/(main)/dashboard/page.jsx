"use client";
import NewUsernameForm from "@/app/_components/form/new-username-form";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [desiredName, setDesiredName] = useState("");
  const session = useCurrentUser();

  useEffect(() => {
    setDesiredName(localStorage.getItem("checkusername"));
  }, [desiredName]);

  return <NewUsernameForm defaultValue={desiredName} />;
};

export default Dashboard;
