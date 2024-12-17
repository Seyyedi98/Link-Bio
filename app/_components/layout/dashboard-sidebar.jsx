"use client";

import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/get-user";
import {
  ChartLine,
  CircleUser,
  FilePenLine,
  LogOut,
  LogOutIcon,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { LogoutButton } from "../common/auth/logout-button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex w-full max-w-xs grow flex-col justify-between border-l-2 bg-primary-foreground p-4 shadow-md">
      <div className="h-1/7"></div>

      <div className="flex flex-col items-center">
        <CircleUser className="h-32 w-32 text-slate-600" />

        <div className="mt-8 flex flex-col items-start gap-4 text-lg transition-all duration-200">
          <Link
            href={"/dashboard"}
            className={cn(
              "group flex items-center gap-2 hover:text-slate-900",
              pathname === "/dashboard"
                ? "font-semibold text-primary"
                : "text-slate-700",
            )}
          >
            <FilePenLine className="w-8 transition-all duration-200 group-hover:translate-x-1" />
            صفحه من
          </Link>
          <Link
            href={"/dashboard/analytics"}
            className={cn(
              "group flex items-center gap-2 hover:text-slate-900",
              pathname === "/dashboard/analytics"
                ? "font-semibold text-primary"
                : "text-slate-700",
            )}
          >
            <ChartLine className="w-8 transition-all duration-200 group-hover:translate-x-1" />
            آمار
          </Link>
          <Link
            href={"/dashboard/settings"}
            className={cn(
              "group flex items-center gap-2 hover:text-slate-900",
              pathname === "/dashboard/settings"
                ? "font-semibold text-primary"
                : "text-slate-700",
            )}
          >
            <Settings className="w-8 transition-all duration-200 group-hover:translate-x-1" />
            تنظیمات
          </Link>
        </div>
      </div>

      <LogoutButton className="">
        <Button variant="outline" className="group w-full">
          خروج
          <LogOutIcon className="duration-200 group-hover:-translate-x-2" />
        </Button>
      </LogoutButton>
    </aside>
  );
};

export default DashboardSidebar;
