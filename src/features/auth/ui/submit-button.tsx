import { Button } from "@/shared/ui/button";
import React from "react";

interface Props {
  children: React.ReactNode;
  isPending?: boolean;
}

export const SubmitButton: React.FC<Props> = ({ children, isPending }) => {
  return (
    <Button type="submit" className="w-full" disabled={isPending}>
      {children}
    </Button>
  );
};
