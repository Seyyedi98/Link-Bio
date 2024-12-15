import { Button } from "@/components/ui/button";
import HeroForm from "../_components/layout/landing-header";
import EnterLinkForm from "../_components/form/hero-form";

const page = async () => {
  return (
    <main className="">
      <HeroForm />
      <section className="mx-auto max-w-6xl px-4 pt-36 md:pt-48">
        <div className="mb-12 max-w-md">
          <h1 className="text-5xl font-bold md:text-6xl">
            یه لینک <br /> واسه همه چی!
          </h1>
          <h2 className="mt-12 text-xl text-slate-500">
            تمام لینک‌ها، شبکه‌های اجتماعی، پروفایل‌ها، اطلاعات تماس و کلی چیز
            دیگه رو توی یه صفحه به اشتراک بزار!
          </h2>
        </div>
        <EnterLinkForm />
      </section>
    </main>
  );
};

export default page;
