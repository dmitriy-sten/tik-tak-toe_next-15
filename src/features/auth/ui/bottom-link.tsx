import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  linkText: string;
  url: string;
}

export const BottomLink: React.FC<Props> = ({ text, linkText, url }) => {
  return (
    <p className="text-sm text-primary/60">
      {text}{" "}
      <Link className="font-medium text-primary hover:underline" href={url}>
        {linkText}
      </Link>
    </p>
  );
};
