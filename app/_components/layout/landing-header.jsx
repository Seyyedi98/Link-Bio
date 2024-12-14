import Link from "next/link";
import React from "react";
import { LoginButton } from "../common/auth/login-button";
import { RegisterButton } from "../common/auth/register-button";
import { Button } from "@/components/ui/button";

const LandingHeader = () => {
  return (
    <header className="bg-white border-b flex justify-between items-center p-4">
      <div className="group flex gap-4 items-center">
        <Link href="/" className="text-lg font-bold">
          لینک بیو
        </Link>
        <nav className="flex gap-4  text-slate-500 group-hover:text-slate-400 duration-150 text-sm">
          <Link href="/" className="hover:text-slate-700 duration-150">
            درباره ما
          </Link>
          <Link href="/" className="hover:text-slate-700 duration-150">
            تعرفه ها
          </Link>
          <Link href="/" className="hover:text-slate-700 duration-150">
            ارتباط با ما
          </Link>
        </nav>
      </div>
      <div className="flex gap-2 text-slate-500">
        <LoginButton asChild>
          <Button variant="outline">ورود</Button>
        </LoginButton>
        <RegisterButton>
          <Button>عضویت</Button>
        </RegisterButton>
      </div>
    </header>
  );
};

export default LandingHeader;
