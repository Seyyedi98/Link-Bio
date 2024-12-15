import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/get-user";
import Link from "next/link";
import { LoginButton } from "../common/auth/login-button";
import { RegisterButton } from "../common/auth/register-button";
import UserButton from "../common/auth/user-button";

const HeroForm = async () => {
  const user = await currentUser();

  return (
    <header className="absolute w-full">
      <header className="bg-ba border-b p-4">
        <div className="items-between mx-auto flex w-full max-w-6xl justify-between px-4">
          <div className="group flex items-center gap-8">
            <Link href="/" className="text-lg font-bold">
              لینک
            </Link>
            <nav className="text- text- flex gap-4 duration-150 group-hover:text-zinc-500">
              <Link
                href="/"
                className="duration-150 hover:text-zinc-900 dark:hover:text-zinc-50"
              >
                درباره ما
              </Link>
              <Link
                href="/"
                className="duration-150 hover:text-zinc-900 dark:hover:text-zinc-50"
              >
                تعرفه ها
              </Link>
              <Link
                href="/"
                className="duration-150 hover:text-zinc-900 dark:hover:text-zinc-50"
              >
                ارتباط با ما
              </Link>
            </nav>
          </div>
          <div className="flex gap-4 text-slate-500">
            {user ? (
              <>
                <Button asChild>
                  <Link href="/dashboard">پنل کاربری</Link>
                </Button>
                <UserButton />
              </>
            ) : (
              <>
                <LoginButton asChild>
                  <Button variant="outline">ورود</Button>
                </LoginButton>
                <RegisterButton>
                  <Button>عضویت</Button>
                </RegisterButton>
              </>
            )}
          </div>
        </div>
      </header>
    </header>
  );
};

export default HeroForm;
