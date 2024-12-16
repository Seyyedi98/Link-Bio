"use server";

export async function createNewPage(username) {
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
