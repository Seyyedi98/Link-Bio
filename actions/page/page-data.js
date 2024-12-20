"use server";

import prisma from "@/lib/client";

export async function savePageSettings(uri, formValues) {
  console.log(uri, formValues);
  try {
    await prisma.page.update({
      where: {
        uri,
      },
      data: {
        ...formValues,
      },
    });

    return { success: "اطلاعات با موفقیت به روز رسانی شد" };
  } catch {
    return { success: "به روز رسانی ناموفق. لطفا دوباره سعی کنید" };
  }
}
