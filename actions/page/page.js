"use server";

export async function createNewPage(username) {
  const existingUserName = await prisma.page.findUnique({
    where: {
      uri: username.toLowerCase(),
    },
  });

  if (existingUserName) return { error: "این لینک در دسترس نیست" };

  await prisma.page.create({
    data: {
      uri: username.toLowerCase(),
    },
  });
  return { success: "لینک در دسترسه!" };
}
