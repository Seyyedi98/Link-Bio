"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { cn } from "@/lib/utils";
import {
  ChartLine,
  CircleUser,
  FilePenLine,
  LogOutIcon,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from "../common/auth/logout-button";
import ThemeSwitcher from "../common/button/ThemeSwitcher";
import Image from "next/image";

const DashboardSidebar = () => {
  const pathname = usePathname();
  const session = useCurrentUser();

  return (
    <aside className="fixed flex h-dvh w-full max-w-xs flex-col items-center justify-center p-4">
      <div className="h-1/7"></div>

      <div className="flex flex-col items-center">
        {session?.image ? (
          <Image
            src={session.image}
            className="h-24 w-24 rounded-full object-cover"
            width={128}
            height={128}
            alt="profile-image"
          />
        ) : (
          <CircleUser className="h-32 w-32 text-slate-600" />
        )}

        <div className="mt-8 flex flex-col items-start gap-4 text-lg transition-all duration-200">
          <Link
            href={"/dashboard"}
            className={cn(
              "group flex items-center gap-2 hover:text-foreground",
              pathname != "/dashboard/settings" &&
                pathname != "/dashboard/analytics"
                ? "font-semibold text-primary"
                : "text-foreground/70",
            )}
          >
            <FilePenLine className="w-8 transition-all duration-200 group-hover:translate-x-1" />
            صفحه من
          </Link>
          <Link
            href={"/dashboard/analytics"}
            className={cn(
              "group flex items-center gap-2 hover:text-foreground",
              pathname === "/dashboard/analytics"
                ? "font-semibold text-primary"
                : "text-foreground/70",
            )}
          >
            <ChartLine className="w-8 transition-all duration-200 group-hover:translate-x-1" />
            آمار
          </Link>
          <Link
            href={"/dashboard/settings"}
            className={cn(
              "group flex items-center gap-2 hover:text-foreground",
              pathname === "/dashboard/settings"
                ? "font-semibold text-primary"
                : "text-foreground/70",
            )}
          >
            <Settings className="w-8 transition-all duration-200 group-hover:translate-x-1" />
            تنظیمات
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <ThemeSwitcher variant="square" />
        <LogoutButton>
          <Button variant="outline" className="group w-full">
            خروج
            <LogOutIcon className="duration-200 group-hover:-translate-x-2" />
          </Button>
        </LogoutButton>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
