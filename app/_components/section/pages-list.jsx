import prisma from "@/lib/client";
import { currentUser } from "@/lib/get-user";
import React from "react";
import PageSettingsForm from "../form/page-setting-form";

const PagesList = async () => {
  const user = await currentUser();
  const data = await prisma.page.findMany({
    where: {
      owner: user.id,
    },
  });

  return <PageSettingsForm page={data[0]} />;
};

export default PagesList;
