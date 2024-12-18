"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children, pendingLabel }) => {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full max-w-xs self-center" disabled={pending}>
      {pending ? pendingLabel : children}
    </Button>
  );
};

export default SubmitButton;
