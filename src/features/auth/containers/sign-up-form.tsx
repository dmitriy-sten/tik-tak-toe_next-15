"use client";

import React, { useActionState } from "react";
import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFields } from "../ui/fields";
import { SubmitButton } from "../ui/submit-button";
import { BottomLink } from "../ui/bottom-link";
import { ErrorMessage } from "../ui/error-message";
import { signUpAction, SignUpFormState } from "../actions/sign-up";

interface Props {}

export const SignUpForm: React.FC<Props> = ({}) => {
  //@ts-ignore
  const [formState, action, isPending] = useActionState(
    signUpAction,
    {} as SignUpFormState,
  );

  return (
    <AuthFormLayout
      title="Sign Up"
      action={action}
      description="Create your account to get started"
      fields={<AuthFields {...formState} />}
      error={<ErrorMessage error={formState.errors?._errors} />}
      actions={<SubmitButton isPending={isPending}>Sign Up</SubmitButton>}
      link={
        <BottomLink
          text="Already have account?"
          linkText="Sign in"
          url="/sign-in"
        />
      }
    />
  );
};
