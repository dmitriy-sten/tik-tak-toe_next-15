"use client";

import React, { useActionState } from "react";
import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFields } from "../ui/fields";
import { SubmitButton } from "../ui/submit-button";
import { mapLeft, right } from "@/shared/lib/either";
import { BottomLink } from "../ui/bottom-link";
import { ErrorMessage } from "../ui/error-message";
import { signUpAction } from "../actions/sign-up";

interface Props {}

export const SignUpForm: React.FC<Props> = ({}) => {
  //@ts-ignore
  const [formState, action, isPending] = useActionState(
    signUpAction,
    right(undefined),
  );


  return (
    <AuthFormLayout
      title="Sign Up"
      action={action}
      description="Create your account to get started"
      fields={<AuthFields />}
      error={<ErrorMessage error={formState} />}
      actions={<SubmitButton isPending={isPending}>Sign Up</SubmitButton>}
      link={
        <BottomLink
          text="Already have account?"
          linkText="Sign in"
          url="/sign-in"
        />
      }
      //   onSubmit={null}
    />
  );
};
