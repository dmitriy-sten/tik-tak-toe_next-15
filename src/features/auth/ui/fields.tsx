import { Input } from "@/shared/ui/input";
import { Label } from "@radix-ui/react-label";
import { error } from "console";
import React, { useId } from "react";

interface Props {
  formData?: FormData;
  errors?: {
    login?: string;
    password?: string;
  };
}

export const AuthFields: React.FC<Props> = ({ formData, errors }) => {
  const loginId = useId();
  const passwordId = useId();

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor={loginId}>Login</Label>
        <Input
          id={loginId}
          type="login"
          placeholder="Enter your login"
          name="login"
          defaultValue={formData?.get("login")?.toString()}
          required
        />
      </div>
      {errors?.login && <div>{errors.login}</div>}
      <div className="space-y-2">
        <Label htmlFor={passwordId}>Password</Label>
        <Input
          id={passwordId}
          type="password"
          placeholder="Enter your password"
          name="password"
          defaultValue={formData?.get("password")?.toString()}
          required
        />
      </div>
      {errors?.password && <div>{errors.password}</div>}
    </>
  );
};
