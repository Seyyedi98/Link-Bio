"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FormSuccess } from "../ui/alerts/form-success";
import { FormError } from "../ui/alerts/form-error";
import { checkUsernameIsAvailable } from "@/actions/page/page";

const EnterLinkForm = () => {
  const [userName, setUserName] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const isUserNameAvailable = await checkUsernameIsAvailable(userName);

    setSuccess("");
    setError("");
    event.preventDefault();
    if (!userName) return;

    if (isUserNameAvailable.success) {
      setSuccess(isUserNameAvailable.success);
      window.localStorage.setItem("checkusername", userName);
      setTimeout(() => redirect("/auth/register"), 1000);
    } else {
      setError(
        "متاسفانه این آدرس قبلا انتخاب شده، لطفا آدرس دیگری امتحان کنید",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="inline-flex shadow-lg">
      <Button
        type="submit"
        className="rounded-none bg-primary px-6 py-7 text-white"
      >
        بررسی
      </Button>
      <input
        type="text"
        placeholder="نام کاربری"
        dir="ltr"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="focus:shadow-outline border-none bg-primary-foreground text-left focus:outline-none"
      />
      <span className="self-center bg-primary-foreground py-4 pl-4 pr-1">
        /biol.ink
      </span>
      <FormSuccess message={success} />
      <FormError message={error} />
    </form>
  );
};

export default EnterLinkForm;
