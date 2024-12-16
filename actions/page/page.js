"use server";

import { currentUser } from "@/lib/get-user";

export async function createNewPage(username) {
  const user = await currentUser();
  const existingUserName = await prisma.page.findUnique({
    where: {
      uri: username.toLowerCase(),
    },
  });

  if (existingUserName)
    return { error: "این نام کاربری قبلا استفاده شده است." };

  await prisma.page.create({
    data: {
      uri: username.toLowerCase(),
      owner: user.id,
    },
  });
  return { success: "لینک در دسترسه!" };
}

export async function checkUsernameIsAvailable(username) {
  const existingUserName = await prisma.page.findUnique({
    where: {
      uri: username.toLowerCase(),
    },
  });

  if (existingUserName)
    return { error: "این نام کاربری قبلا استفاده شده است." };
  return { success: "همین حالا شروع کنید!" };
}

export async function isUserAlreadyHasPage() {
  const user = await currentUser();
  console.log();
}
