"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = ({ variant }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState();

  if (!variant) variant = "full";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (variant === "full") {
    return (
      <Tabs defaultValue={theme}>
        <TabsList>
          <TabsTrigger value="light" onClick={() => setTheme("light")}>
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-90 duration-500 dark:rotate-0" />
          </TabsTrigger>
          <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
            <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all duration-500 dark:rotate-0" />
          </TabsTrigger>
          <TabsTrigger value="system" onClick={() => setTheme("system")}>
            <DesktopIcon className="h-[1.2rem] w-[1.2rem]" />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    );
  }

  if (variant === "rounded") {
    return (
      <Button
        className="h-[43px] w-[43px] rounded-full"
        variant="outline"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-90 duration-500 dark:rotate-0" />
        ) : (
          <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all duration-500 dark:rotate-0" />
        )}
      </Button>
    );
  }
};

export default ThemeSwitcher;
