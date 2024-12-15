"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import UserButton from "../common/auth/user-button";
import ThemeSwitcher from "../common/button/ThemeSwitcher";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex w-full items-center justify-between bg-secondary p-4 shadow-sm">
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathname === "/dashboard" ? "default" : "outline"}
        >
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/dashboard/settings" ? "default" : "outline"}
        >
          <Link href="/dashboard/settings">Settings</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/dashboard/server" ? "default" : "outline"}
        >
          <Link href="/dashboard/server">Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/dashboard/client" ? "default" : "outline"}
        >
          <Link href="/dashboard/client">Client</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/dashboard/admin" ? "default" : "outline"}
        >
          <Link href="/dashboard/admin">Admin</Link>
        </Button>
      </div>
      <div className="flex items-center justify-center gap-2">
        <ThemeSwitcher />
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
