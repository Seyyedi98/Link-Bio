"use client";

import { createNewPage } from "@/actions/page/page";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AlertTriangle, ArrowLeft, Loader2Icon } from "lucide-react";
import { redirect } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

const NewUsernameForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const form = useForm({
    defaultValues: {
      username: localStorage.getItem("checkusername")?.toLowerCase() || "",
    },
  });

  const onSubmit = (values) => {
    startTransition(() => {
      try {
        setError("");
        createNewPage(values.username).then((data) => {
          setError(data.error);
          redirect(`/dashboard/`);
        });
        localStorage.removeItem("checkusername");
      } catch (error) {}
    });
  };

  return (
    <div className="flex h-full items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h1 className="mb-10 text-center text-4xl font-bold">
            همین حالا صفحه خودتو بساز
          </h1>
          <p className="mb-6 text-center text-gray-500">
            اسم پیجت رو انتخاب کن
          </p>
          <div className="mx-auto max-w-xs">
            <FormField
              controll={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      name="username"
                      type="text"
                      placeholder="لینکتو اینجا بنویس"
                      disabled={isPending}
                      className={cn(
                        "mx-auto mb-2 block w-full border p-2 text-center",
                        !error && "focus:outline-primary",
                        error && "border-red-500 focus:outline-red-500",
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="group flex w-full items-center justify-center bg-primary text-zinc-50"
              disabled={isPending}
            >
              {isPending ? (
                <Loader2Icon className="animate-spin" />
              ) : (
                <span className="flex items-center justify-center gap-2">
                  شروع
                  <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                </span>
              )}
            </Button>

            {error ? (
              <>
                <p className="mt-4 flex items-center gap-2 text-sm text-red-500">
                  <AlertTriangle className="h-4 w-4" /> {error}
                </p>
              </>
            ) : (
              ""
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewUsernameForm;
