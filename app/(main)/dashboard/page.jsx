"use client";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import Link from "next/link";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [desiredName, setDesiredName] = useState("");
  const session = useCurrentUser();

  useEffect(() => {
    setDesiredName(localStorage.getItem("checkusername"));
  }, [desiredName]);

  return (
    <div>
      <form>
        <h1 className="mb-10 text-center text-4xl font-bold">
          همین حالا صفحه خودتو بساز
        </h1>
        <p className="mb-6 text-center text-gray-500">اسم پیجت رو انتخاب کن</p>
        <input
          type="text"
          placeholder="username"
          className="mx-auto block border p-2"
        />
        <Button type="submit" className="bg-primary text-primary-foreground">
          clain username
        </Button>
      </form>
    </div>
  );
};

export default Dashboard;
