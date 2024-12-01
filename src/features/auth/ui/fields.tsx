import { Input } from "@/shared/ui/input";
import { Label } from "@radix-ui/react-label";
import React, { useId } from "react";

interface Props {

}

export const AuthFields: React.FC<Props> = ({

}) => {
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
        //   value={login}
        //   onChange={(e) => onChangeLogin(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor={passwordId}>Password</Label>
        <Input
          id={passwordId}
          type="password"
          placeholder="Enter your password"
          name="password"

        //   value={password}
        //   onChange={(e) => onChangePassword(e.target.value)}
          required
        />
      </div>
    </>
  );
};
