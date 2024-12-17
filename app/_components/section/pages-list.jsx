import prisma from "@/lib/client";
import { currentUser } from "@/lib/get-user";
import React from "react";

const PagesList = async () => {
  const user = await currentUser();
  const data = await prisma.page.findMany({
    where: {
      owner: user.id,
    },
  });

  return (
    <div className="flex gap-2">
      <p>آدرس صفحه شما:</p>
      {data.map((page) => (
        <p key={page.id}>{page.uri}</p>
      ))}
    </div>
  );
};

export default PagesList;
